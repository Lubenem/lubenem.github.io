import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/LanguageContext";

const DAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_UA = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const MONTHS_UA = [
  "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
  "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
];

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const RESERVED_SLOTS = [
  { date: "2025-01-06", time: "10:00 AM" },
  { date: "2025-01-08", time: "2:00 PM" },
  { date: "2025-01-10", time: "11:00 AM" },
  { date: "2025-01-15", time: "9:00 AM" },
  { date: "2025-01-22", time: "3:00 PM" },
];

export default function BookingCalendar() {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const DAYS = language === "ua" ? DAYS_UA : DAYS_EN;
  const MONTHS = language === "ua" ? MONTHS_UA : MONTHS_EN;

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

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

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatDateString = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const isTimeReserved = (date: Date, time: string) => {
    const dateStr = formatDateString(date);
    return RESERVED_SLOTS.some(slot => slot.date === dateStr && slot.time === time);
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day);
    if (!isPastDate(newDate) && isWeekday(newDate)) {
      setSelectedDate(newDate);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time: string) => {
    if (selectedDate && !isTimeReserved(selectedDate, time)) {
      setSelectedTime(time);
    }
  };

  const formatSelectedDate = (date: Date) => {
    if (language === "ua") {
      return `${date.getDate()} ${MONTHS[date.getMonth()].toLowerCase()}`;
    }
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      toast({
        title: t.contact.calendar.success,
        description: t.contact.calendar.successMessage,
      });
      
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate?.getDate() === day && 
                         selectedDate?.getMonth() === month && 
                         selectedDate?.getFullYear() === year;
      const isAvailable = !isPastDate(date) && isWeekday(date);
      const isToday = new Date().toDateString() === date.toDateString();
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={!isAvailable}
          className={`h-10 w-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors
            ${isSelected 
              ? 'bg-primary text-primary-foreground' 
              : isAvailable 
                ? 'hover:bg-primary/20 text-foreground' 
                : 'text-muted-foreground/40 cursor-not-allowed'
            }
            ${isToday && !isSelected ? 'ring-1 ring-primary' : ''}
          `}
          data-testid={`button-day-${day}`}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <Card className="w-full" data-testid="booking-calendar">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          {t.contact.calendar.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevMonth}
            data-testid="button-prev-month"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h3 className="text-lg font-semibold">
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
            <div 
              key={day} 
              className="h-10 flex items-center justify-center text-xs font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {renderCalendarDays()}
        </div>

        {selectedDate && (
          <div className="pt-4 border-t border-border">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {t.contact.calendar.selectTime} {formatSelectedDate(selectedDate)}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TIME_SLOTS.map(time => {
                const isReserved = isTimeReserved(selectedDate, time);
                const isSelectedTime = selectedTime === time;
                
                return (
                  <Button
                    key={time}
                    variant={isSelectedTime ? "default" : "outline"}
                    size="sm"
                    disabled={isReserved}
                    onClick={() => handleTimeClick(time)}
                    className={`${isReserved ? 'opacity-40 line-through' : ''}`}
                    data-testid={`button-time-${time.replace(/\s/g, '-')}`}
                  >
                    {time}
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {selectedDate && selectedTime && (
          <div className="pt-4">
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleBooking}
              data-testid="button-confirm-booking"
            >
              {t.contact.calendar.confirmButton} {selectedTime}
            </Button>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center pt-2">
          {t.contact.calendar.availability}
        </p>
      </CardContent>
    </Card>
  );
}
