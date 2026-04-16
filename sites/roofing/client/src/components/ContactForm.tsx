import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call since we have no backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: t('contact.success'),
      className: "bg-green-600 text-white border-none",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            placeholder={t('contact.name')}
            {...form.register("name")}
            className={`bg-white rounded-sm h-12 ${form.formState.errors.name ? 'border-destructive' : 'border-border'}`}
          />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive font-medium">{t('contact.name')} is too short</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Input
            placeholder={t('contact.phone')}
            {...form.register("phone")}
            className={`bg-white rounded-sm h-12 ${form.formState.errors.phone ? 'border-destructive' : 'border-border'}`}
          />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive font-medium">{t('contact.phone')} is invalid</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          placeholder={t('contact.email')}
          {...form.register("email")}
          className={`bg-white rounded-sm h-12 ${form.formState.errors.email ? 'border-destructive' : 'border-border'}`}
        />
        {form.formState.errors.email && (
          <p className="text-xs text-destructive font-medium">{t('contact.email')} is invalid</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea
          placeholder={t('contact.message')}
          {...form.register("message")}
          className={`bg-white rounded-sm min-h-[120px] resize-none ${form.formState.errors.message ? 'border-destructive' : 'border-border'}`}
        />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive font-medium">Message is too short</p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-12 text-lg font-bold tracking-wide bg-primary hover:bg-primary/90 text-white rounded-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {t('contact.sending')}
          </>
        ) : (
          t('contact.submit')
        )}
      </Button>
    </form>
  );
}
