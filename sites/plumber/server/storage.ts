import { appointments, type Appointment, type InsertAppointment } from "@shared/schema";

export interface IStorage {
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
}

export class MemStorage implements IStorage {
  private appointments: Map<number, Appointment>;
  private currentId: number;

  constructor() {
    this.appointments = new Map();
    this.currentId = 1;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentId++;
    const appointment: Appointment = { ...insertAppointment, id, createdAt: new Date() };
    this.appointments.set(id, appointment);
    return appointment;
  }
}

export const storage = new MemStorage();
