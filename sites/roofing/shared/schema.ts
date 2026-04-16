import { z } from "zod";

// No database tables needed as per requirements ("NO DATABASE")
// Defining schemas for potential frontend validation

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  message: z.string().min(10, "Message is too short"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
