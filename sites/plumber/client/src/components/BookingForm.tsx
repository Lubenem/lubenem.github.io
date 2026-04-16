import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useLanguage } from "@/lib/i18n";
import { useCreateAppointment } from "@/hooks/use-appointments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, Calendar as CalendarIcon, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BookingForm() {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("cleaning");
  
  const { mutate, isPending, isSuccess } = useCreateAppointment();

  // Time slots: 8 AM to 5 PM
  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;

    mutate({
      name,
      email,
      date: format(date, "yyyy-MM-dd"),
      time,
      serviceType
    });
  };

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto border-none shadow-xl bg-white/90 backdrop-blur">
        <CardContent className="pt-6 flex flex-col items-center text-center p-12">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Request Sent!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you {name}. We have received your request for {format(date!, "MMMM do")} at {time}. We will contact you at {email} shortly to confirm.
          </p>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
          >
            Book Another
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Calendar Section */}
      <div className="bg-white rounded-3xl p-6 shadow-lg shadow-primary/5 border border-primary/10">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-primary">
          <CalendarIcon className="w-5 h-5" />
          {t.booking.step1}
        </h3>
        <div className="flex justify-center">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={[{ dayOfWeek: [0] }, { before: new Date() }]} // Disable Sundays and past dates
            className="p-3"
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* Time Selection */}
        <div className="bg-white rounded-3xl p-6 shadow-lg shadow-primary/5 border border-primary/10">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-primary">
            <Clock className="w-5 h-5" />
            {t.booking.step2}
          </h3>
          {!date ? (
            <p className="text-muted-foreground text-sm italic">{t.booking.selectDate}</p>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  className={`px-3 py-2 text-sm rounded-xl transition-all border ${
                    time === slot
                      ? "bg-primary text-white border-primary shadow-md transform scale-105"
                      : "bg-secondary text-foreground border-transparent hover:bg-primary/10"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User Details Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 shadow-lg shadow-primary/5 border border-primary/10">
          <h3 className="text-lg font-bold mb-4 text-primary">{t.booking.step3}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block text-muted-foreground">{t.booking.nameLabel}</label>
              <Input 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" 
                className="bg-secondary/50 border-transparent focus:bg-white"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1.5 block text-muted-foreground">{t.booking.emailLabel}</label>
              <Input 
                required 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com" 
                className="bg-secondary/50 border-transparent focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block text-muted-foreground">{t.booking.serviceLabel}</label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="bg-secondary/50 border-transparent focus:bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">Regular Cleaning</SelectItem>
                  <SelectItem value="maintenance">Maintenance Check</SelectItem>
                  <SelectItem value="repair">Repair Service</SelectItem>
                  <SelectItem value="opening">Pool Opening/Closing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full mt-4 h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              disabled={!date || !time || isPending}
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t.booking.submitting}
                </span>
              ) : (
                t.booking.submit
              )}
            </Button>
            
            {(!date || !time) && (
              <p className="text-xs text-center text-amber-500 mt-2">
                {!date ? t.booking.selectDate : t.booking.selectTime}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
