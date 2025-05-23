
export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  is_available: boolean;
}

export interface AppointmentRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  date: string;
  time: string;
}
