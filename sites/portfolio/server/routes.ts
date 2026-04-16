import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Log the submission (in production, this would send an email)
      console.log("New contact form submission:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        projectType: submission.projectType,
        message: submission.message,
        createdAt: submission.createdAt,
      });
      
      // In a real application, you would send an email here using Nodemailer
      // For now, we're just storing the submission and logging it
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        submissionId: submission.id,
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid form data",
          details: error,
        });
      }
      
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit contact form" 
      });
    }
  });

  // Optional: Get all contact submissions (for admin purposes)
  app.get("/api/contact/submissions", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
