import BookingCalendar from "react-booking-calendly";
import { useLanguage } from "@/lib/LanguageContext";

export function AppointmentForm() {
  const { t } = useLanguage();
  
  const availabilities = [
    { day: "Monday", time: [{ startingTime: "9:00AM", endingTime: "5:00PM" }] },
    { day: "Tuesday", time: [{ startingTime: "9:00AM", endingTime: "5:00PM" }] },
    { day: "Wednesday", time: [{ startingTime: "9:00AM", endingTime: "5:00PM" }] },
    { day: "Thursday", time: [{ startingTime: "9:00AM", endingTime: "5:00PM" }] },
    { day: "Friday", time: [{ startingTime: "9:00AM", endingTime: "5:00PM" }] },
  ];

  const reservedSlots = [
    { date: "2025-01-06", startingTime: "10:00AM", endingTime: "11:00AM" },
    { date: "2025-01-08", startingTime: "2:00PM", endingTime: "3:00PM" },
    { date: "2025-01-10", startingTime: "11:00AM", endingTime: "12:00PM" },
  ];

  const handleBookingSubmit = (data: { date: string; time: string }) => {
    alert(`Appointment requested for ${data.date} at ${data.time}! We will contact you shortly to confirm.`);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-border/50">
      <div className="mb-8">
        <h3 className="font-display text-3xl font-bold text-primary mb-2">{t.contact.bookAppointment}</h3>
        <p className="text-muted-foreground">{t.contact.selectDate}</p>
      </div>

      <div className="booking-calendar-wrapper">
        <BookingCalendar
          availabilities={availabilities}
          reservedSlots={reservedSlots}
          interval={60}
          onBookingSubmit={handleBookingSubmit}
          primaryColor="#2563eb"
        />
      </div>
    </div>
  );
}
