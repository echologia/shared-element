export {};

declare global {
  interface Room {
    id: number;
    name: string;
    description: string;
    images: string[];
    tags: string[];
    price: number;
    minGuestCount: number;
    maxGuestCount: number;
    roomSize: number;
  }
}
