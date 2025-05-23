
export interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
  is_booked: boolean;
}

export interface AppointmentRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  time_slot_id: string;
}
