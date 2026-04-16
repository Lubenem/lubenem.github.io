
import { bookings, type Booking, type InsertBooking } from "@shared/schema";

export interface IStorage {
  // Minimal interface
}

export class MemStorage implements IStorage {
  private bookings: Map<number, Booking>;
  currentId: number;

  constructor() {
    this.bookings = new Map();
    this.currentId = 1;
  }
}

export const storage = new MemStorage();
