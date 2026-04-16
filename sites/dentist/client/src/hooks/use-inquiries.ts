import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry, type InquiryResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Manual fetch implementation because we need specific error handling and path usage
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          // Using the validation error schema structure
          throw new Error(error.message || "Invalid form data");
        }
        throw new Error("Failed to submit inquiry");
      }

      return await res.json() as InquiryResponse;
    },
    onSuccess: () => {
      toast({
        title: "Request Sent!",
        description: "We'll be in touch shortly to confirm your appointment.",
        variant: "default", 
        className: "bg-primary text-primary-foreground border-none"
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
