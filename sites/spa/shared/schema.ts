
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Minimal schema for a "No Backend" app. 
// We define a table structure just to satisfy project scaffolding,
// but data will be handled locally in React as requested.
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  email: text("email").notNull(),
});

export const insertBookingSchema = createInsertSchema(bookings);
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
