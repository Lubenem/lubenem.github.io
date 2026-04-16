declare module 'react-booking-calendly' {
  interface TimeSlot {
    startingTime: string;
    endingTime: string;
  }

  interface Availability {
    day: string;
    time: TimeSlot[];
  }

  interface ReservedSlot {
    date: string;
    startingTime: string;
    endingTime: string;
  }

  interface BookingData {
    date: string;
    time: string;
  }

  interface BookingCalendarProps {
    availabilities: Availability[];
    reservedSlots?: ReservedSlot[];
    interval?: number;
    onBookingSubmit: (data: BookingData) => void;
    primaryColor?: string;
  }

  const BookingCalendar: React.FC<BookingCalendarProps>;
  export default BookingCalendar;
}
