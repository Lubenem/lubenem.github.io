import { users, type User, type InsertUser } from "@shared/schema";
import { appointments, type Appointment, type InsertAppointment } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Appointments (In-memory for demo)
  createAppointment(appt: InsertAppointment): Promise<Appointment>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private currentId: number;
  private currentApptId: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.currentId = 1;
    this.currentApptId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAppointment(appt: InsertAppointment): Promise<Appointment> {
    const id = this.currentApptId++;
    const appointment: Appointment = { ...appt, id, confirmed: true };
    this.appointments.set(id, appointment);
    return appointment;
  }
}

export const storage = new MemStorage();
