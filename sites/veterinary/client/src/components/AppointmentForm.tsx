import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema, type InsertAppointment } from "@shared/schema";
import { useCreateAppointment } from "@/hooks/use-appointments";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Calendar as CalendarIcon, Clock, CheckCircle2, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/use-language";

export function AppointmentForm() {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const createAppointment = useCreateAppointment();

  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "checkup",
      date: "",
      time: "",
    },
  });

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"
  ];

  const onSubmit = (data: InsertAppointment) => {
    createAppointment.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        // Reset after 3 seconds to allow another booking
        setTimeout(() => {
          setIsSuccess(false);
          form.reset();
          setDate(undefined);
          setTime(null);
        }, 5000);
      }
    });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-xl border-2 border-primary/20"
      >
        <motion.div 
          animate={{ rotate: [0, -20, 20, -20, 0] }}
          transition={{ duration: 1, repeat: 1, repeatDelay: 0.5 }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6"
        >
          <PawPrint className="w-12 h-12 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{t.booking.success}</h3>
        <p className="text-muted-foreground">We'll verify your details and send a confirmation email shortly.</p>
        <CheckCircle2 className="w-16 h-16 text-green-500 mt-8 opacity-20" />
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
      <div className="p-4 md:p-6 bg-secondary/30 border-b border-border">
        <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-primary shrink-0" />
          <span>{t.booking.title}</span>
        </h3>
      </div>
      
      <div className="p-4 md:p-6">
        <div className="space-y-6">
          {/* Calendar Section */}
          <div className="space-y-3">
            <h4 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.booking.selectDate}</h4>
            <div className="bg-white rounded-xl border border-border p-2 md:p-4 shadow-sm overflow-x-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  if (d) form.setValue("date", format(d, "yyyy-MM-dd"));
                }}
                className="mx-auto"
                disabled={(date) => date < new Date() || date.getDay() === 0}
              />
            </div>
          </div>

          {/* Time Section */}
          <div className="space-y-3">
            <h4 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.booking.selectTime}</h4>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setTime(slot);
                    form.setValue("time", slot);
                  }}
                  disabled={!date}
                  className={cn(
                    "py-2 text-xs md:text-sm rounded-lg border transition-all text-center",
                    time === slot
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-background border-border hover:border-primary/50 text-foreground",
                    !date && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4 border-t border-border">
              <h4 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.booking.yourDetails}</h4>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={t.booking.name} className="bg-background rounded-xl h-11" {...field} />
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
                    <FormControl>
                      <Input placeholder={t.booking.email} className="bg-background rounded-xl h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl h-11">
                          <SelectValue placeholder={t.booking.type} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="checkup">Wellness Checkup</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                        <SelectItem value="dental">Dental Cleaning</SelectItem>
                        <SelectItem value="sick">Sick Visit</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full rounded-xl h-12 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 mt-2"
                disabled={!date || !time || createAppointment.isPending}
              >
                {createAppointment.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                  <PawPrint className="w-5 h-5 mr-2" />
                )}
                {t.booking.confirm}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
