import { useMutation } from "@tanstack/react-query";
import { api, type AppointmentInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateAppointment() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: AppointmentInput) => {
      const res = await fetch(api.appointments.create.path, {
        method: api.appointments.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to create appointment");
      }
      
      return api.appointments.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Appointment Requested!",
        description: "We'll be in touch shortly to confirm your pool service.",
        variant: "default", 
        className: "bg-primary text-primary-foreground border-none"
      });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
