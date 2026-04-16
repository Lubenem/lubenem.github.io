import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  email: text("email").notNull(),
  type: text("type").notNull(),
});

export const insertAppointmentSchema = createInsertSchema(appointments).pick({
  name: true,
  date: true,
  time: true,
  email: true,
  type: true,
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;
