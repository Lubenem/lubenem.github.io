import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-contact";
import { useLanguage } from "@/hooks/use-language";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Loader2, Send, CalendarCheck, Clock, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const submitInquiry = useSubmitInquiry();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [isScheduled, setIsScheduled] = useState(false);

  // Time slots for Mon-Fri, 8am-6pm
  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const handleSchedule = () => {
    if (!date || !timeSlot) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsScheduled(true);
      toast({
        title: "Appointment Requested!",
        description: `Requested for ${format(date, "MMMM do")} at ${timeSlot}. We will confirm shortly.`,
      });
    }, 1000);
  };
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      serviceType: "repair",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry.mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Message Sent",
          description: "We'll get back to you as soon as possible.",
        });
      },
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <Tabs defaultValue="appointment" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="appointment" className="text-lg py-3">Schedule Service</TabsTrigger>
          <TabsTrigger value="contact" className="text-lg py-3">Send Message</TabsTrigger>
        </TabsList>

        <TabsContent value="appointment">
          {!isScheduled ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-primary mb-2">Book an Appointment</h3>
                <p className="text-muted-foreground">Select a date and time for your service.</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-center">
                <div className="border rounded-lg p-2 sm:p-4 bg-gray-50 w-full max-w-[320px]">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => {
                      const day = date.getDay();
                      return day === 0 || day === 6 || date < new Date();
                    }}
                    className="rounded-md border bg-white w-full [&_.rdp-months]:w-full [&_.rdp-month]:w-full [&_.rdp-table]:w-full [&_.rdp-head_cell]:w-[14%] [&_.rdp-cell]:w-[14%]"
                  />
                </div>

                {date && (
                  <div className="w-full max-w-[320px] lg:w-64 space-y-3 animate-in fade-in zoom-in duration-300">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Available Slots
                    </h4>
                    <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot}
                          variant={timeSlot === slot ? "default" : "outline"}
                          size="sm"
                          className={`text-xs sm:text-sm ${timeSlot === slot ? "bg-accent hover:bg-accent/90" : "hover:border-accent hover:text-accent"}`}
                          onClick={() => setTimeSlot(slot)}
                          data-testid={`time-slot-${slot.replace(/\s/g, '-')}`}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t">
                <Button 
                  onClick={handleSchedule}
                  disabled={!date || !timeSlot}
                  className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-1"
                >
                  <CalendarCheck className="mr-2 h-6 w-6" />
                  {date && timeSlot 
                    ? `Confirm: ${format(date, "MMM do")} @ ${timeSlot}`
                    : "Select Date & Time"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  * No payment required now. We will contact you to confirm details.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
              <p className="text-lg text-gray-600 mb-8">
                We have received your request for <br/>
                <span className="font-bold text-primary">{format(date!, "MMMM do")} at {timeSlot}</span>.
              </p>
              <Button 
                variant="outline" 
                onClick={() => { setIsScheduled(false); setDate(undefined); setTimeSlot(null); }}
                className="mx-auto"
              >
                Book Another
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="contact">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-primary mb-6">{t("contact.title")}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.name")}</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="h-12 bg-gray-50 border-gray-200 focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.email")}</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="h-12 bg-gray-50 border-gray-200 focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.service")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-accent">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="repair">AC Repair</SelectItem>
                          <SelectItem value="install">New Installation</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="heating">Heating</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.message")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[120px] bg-gray-50 border-gray-200 resize-none focus:border-accent" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={submitInquiry.isPending}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg shadow-primary/20 transition-all"
                >
                  {submitInquiry.isPending ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {t("contact.submit")}
                </Button>
              </form>
            </Form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
