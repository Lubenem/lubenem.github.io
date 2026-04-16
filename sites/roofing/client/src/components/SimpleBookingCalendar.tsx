import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Clock, CheckCircle } from "lucide-react";

interface SimpleBookingCalendarProps {
  onBookingComplete: (date: string, time: string) => void;
}

export function SimpleBookingCalendar({ onBookingComplete }: SimpleBookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const reservedSlots = [
    { day: 2, time: "10:00 AM" },
    { day: 4, time: "2:00 PM" },
    { day: 6, time: "11:00 AM" },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);

  const isWeekday = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  const isPastDate = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isTimeReserved = (day: number, time: string) => {
    return reservedSlots.some(slot => slot.day === day && slot.time === time);
  };

  const handleDateClick = (day: number) => {
    if (isWeekday(day) && !isPastDate(day)) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time: string) => {
    if (selectedDate && !isTimeReserved(selectedDate.getDate(), time)) {
      setSelectedTime(time);
    }
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      const dateStr = selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      onBookingComplete(dateStr, selectedTime);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={prevMonth} data-testid="button-prev-month">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h4 className="font-bold text-lg text-secondary">{monthName}</h4>
        <Button variant="ghost" size="icon" onClick={nextMonth} data-testid="button-next-month">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map(day => (
          <div key={day} className="text-xs font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
        
        {Array.from({ length: startingDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isAvailable = isWeekday(day) && !isPastDate(day);
          const isSelected = selectedDate?.getDate() === day && 
            selectedDate?.getMonth() === currentMonth.getMonth();
          
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={!isAvailable}
              data-testid={`button-day-${day}`}
              className={`
                p-2 text-sm rounded-sm transition-all
                ${isAvailable 
                  ? 'cursor-pointer hover:bg-primary/10' 
                  : 'text-muted-foreground/40 cursor-not-allowed'}
                ${isSelected 
                  ? 'bg-primary text-white font-bold' 
                  : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="pt-4 border-t border-border" data-testid="time-slots-container">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Select a time for {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map(time => {
              const isReserved = isTimeReserved(selectedDate.getDate(), time);
              const isTimeSelected = selectedTime === time;
              
              return (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  disabled={isReserved}
                  data-testid={`button-time-${time.replace(/\s/g, '-')}`}
                  className={`
                    py-2 px-3 text-sm rounded-sm border transition-all
                    ${isReserved 
                      ? 'bg-muted text-muted-foreground/50 cursor-not-allowed line-through border-transparent' 
                      : isTimeSelected
                        ? 'bg-primary text-white border-primary font-medium'
                        : 'border-border hover:border-primary hover:bg-primary/5'}
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <Button 
          onClick={handleSubmit} 
          className="w-full mt-4"
          data-testid="button-confirm-booking"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Confirm Appointment
        </Button>
      )}
    </div>
  );
}
