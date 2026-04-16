
export interface IStorage {
  // Add methods if needed, currently none required
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
