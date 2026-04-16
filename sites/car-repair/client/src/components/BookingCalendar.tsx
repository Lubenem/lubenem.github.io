import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingCalendarProps {
  onBookingSubmit: (data: { date: string; time: string }) => void;
  primaryColor?: string;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const RESERVED_SLOTS = [
  { date: "2025-01-20", time: "10:00 AM" },
  { date: "2025-01-21", time: "2:00 PM" },
  { date: "2025-01-22", time: "11:00 AM" },
];

export function BookingCalendar({ onBookingSubmit }: BookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isWeekday = (day: number) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const date = new Date(year, month, day);
    return date < today;
  };

  const formatDateString = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const isTimeReserved = (time: string) => {
    if (!selectedDate) return false;
    const dateStr = formatDateString(selectedDate);
    return RESERVED_SLOTS.some(slot => slot.date === dateStr && slot.time === time);
  };

  const handleDayClick = (day: number) => {
    if (!isWeekday(day) || isPastDate(day)) return;
    setSelectedDate(new Date(year, month, day));
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    if (isTimeReserved(time)) return;
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      onBookingSubmit({ date: formattedDate, time: selectedTime });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-4 border-none shadow-sm bg-secondary/30">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevMonth}
            data-testid="button-prev-month"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h3 className="font-bold text-lg text-primary">
            {MONTHS[month]} {year}
          </h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={nextMonth}
            data-testid="button-next-month"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            if (day === null) {
              return <div key={`empty-${i}`} className="aspect-square" />;
            }
            
            const isAvailable = isWeekday(day) && !isPastDate(day);
            const isSelected = selectedDate?.getDate() === day && 
                              selectedDate?.getMonth() === month && 
                              selectedDate?.getFullYear() === year;
            
            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                disabled={!isAvailable}
                data-testid={`button-day-${day}`}
                className={`
                  aspect-square rounded-md text-sm font-medium transition-all
                  ${isAvailable 
                    ? 'hover:bg-primary hover:text-white cursor-pointer' 
                    : 'text-muted-foreground/40 cursor-not-allowed'
                  }
                  ${isSelected 
                    ? 'bg-primary text-white shadow-md' 
                    : isAvailable ? 'bg-white dark:bg-card' : ''
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </Card>

      <AnimatePresence mode="wait">
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-4 border-none shadow-sm bg-secondary/30">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map(time => {
                  const reserved = isTimeReserved(time);
                  const isSelected = selectedTime === time;
                  
                  return (
                    <button
                      key={time}
                      onClick={() => handleTimeClick(time)}
                      disabled={reserved}
                      data-testid={`button-time-${time.replace(/\s/g, '-')}`}
                      className={`
                        py-2 px-3 rounded-md text-sm font-medium transition-all
                        ${reserved 
                          ? 'bg-muted text-muted-foreground/50 cursor-not-allowed line-through' 
                          : isSelected
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-white dark:bg-card hover:bg-primary/10 cursor-pointer'
                        }
                      `}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Button 
              onClick={handleSubmit}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider"
              data-testid="button-confirm-booking"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Confirm Appointment
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
