import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, addDays, isSameDay } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, User, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import "react-day-picker/dist/style.css";

// Booking Form Schema
const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone number required"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00"
];

export function BookingWizard() {
  const { t } = useI18n();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Booking Data:", { date, time, ...data });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-3xl mx-auto p-12 text-center bg-white/80 backdrop-blur border-primary/10 shadow-xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <Check className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-display font-bold text-primary">{t("booking.success")}</h2>
          <p className="text-muted-foreground text-lg">{t("booking.success.msg")}</p>
          <div className="bg-muted/50 p-6 rounded-xl w-full max-w-md mt-6 text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{date ? format(date, "MMMM do, yyyy") : ""}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium">{time}</span>
            </div>
          </div>
          <Button onClick={() => { setIsSuccess(false); setStep(1); setDate(undefined); setTime(undefined); }} className="mt-8">
            Book Another
          </Button>
        </motion.div>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10 space-x-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div 
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300",
                step === s ? "bg-primary text-white scale-110 shadow-lg" : 
                step > s ? "bg-green-600 text-white" : "bg-muted text-muted-foreground"
              )}
            >
              {step > s ? <Check className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div className={cn("w-12 h-1 mx-2 rounded", step > s ? "bg-green-600" : "bg-muted")} />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Summary Panel */}
        <div className="lg:col-span-4 hidden lg:block">
          <Card className="h-full bg-primary/5 border-none p-6 space-y-6 sticky top-24">
            <h3 className="text-xl font-display font-bold text-primary">Your Session</h3>
            
            <div className="space-y-4">
              <div className={cn("flex items-start gap-3 p-3 rounded-lg transition-colors", date ? "bg-white shadow-sm" : "opacity-50")}>
                <CalendarIcon className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">{date ? format(date, "PPP") : "Select a date"}</p>
                </div>
              </div>

              <div className={cn("flex items-start gap-3 p-3 rounded-lg transition-colors", time ? "bg-white shadow-sm" : "opacity-50")}>
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">{time || "Select a time"}</p>
                </div>
              </div>

              <div className={cn("flex items-start gap-3 p-3 rounded-lg transition-colors", step === 3 ? "bg-white shadow-sm" : "opacity-50")}>
                <User className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Details</p>
                  <p className="font-semibold text-foreground">{step === 3 ? "Enter details" : "Pending..."}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side: Wizard Content */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Calendar */}
            {step === 1 && (
              <motion.div 
                key="step1" 
                variants={containerVariants}
                initial="hidden" animate="visible" exit="exit"
                className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 md:p-8"
              >
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <span className="text-primary">01.</span> {t("booking.step1")}
                </h2>
                <div className="flex justify-center">
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={{ before: new Date(), dayOfWeek: [0] }} // Closed Sundays
                    className="p-4 border rounded-xl bg-background/50"
                    modifiersClassNames={{
                      selected: "bg-primary text-primary-foreground hover:bg-primary/90",
                      today: "text-primary font-bold"
                    }}
                  />
                </div>
                <div className="mt-8 flex justify-end">
                  <Button 
                    onClick={nextStep} 
                    disabled={!date}
                    className="w-full md:w-auto px-8"
                  >
                    Next Step <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Time Slots */}
            {step === 2 && (
              <motion.div 
                key="step2"
                variants={containerVariants}
                initial="hidden" animate="visible" exit="exit"
                className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 md:p-8"
              >
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <span className="text-primary">02.</span> {t("booking.step2")}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "py-4 px-2 rounded-xl border font-medium transition-all duration-200",
                        time === slot
                          ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                          : "bg-background hover:border-primary/50 hover:bg-primary/5"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!time}>
                    Next Step <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Details Form */}
            {step === 3 && (
              <motion.div 
                key="step3"
                variants={containerVariants}
                initial="hidden" animate="visible" exit="exit"
                className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 md:p-8"
              >
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <span className="text-primary">03.</span> {t("booking.step3")}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register("name")} placeholder="John Doe" className="bg-background/50" />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="john@example.com" className="bg-background/50" />
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" {...register("phone")} placeholder="+1 (555) 000-0000" className="bg-background/50" />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
                      <ChevronLeft className="mr-2 w-4 h-4" /> Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Confirming
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
