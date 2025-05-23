
import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarDays, Plus, Trash, Save, RefreshCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type TimeSlotForm = {
  date: Date;
  time: string;
};

const AdminCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<Array<{id: string, date: string, time: string, is_available: boolean}>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<Array<any>>([]);
  const [loadingAppointments, setLoadingAppointments] = useState<boolean>(false);
  
  const form = useForm<TimeSlotForm>({
    defaultValues: {
      date: new Date(),
      time: "10:00"
    }
  });
  
  // Fetch available time slots for the selected date
  const fetchTimeSlots = async (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    
    setIsLoading(true);
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    
    try {
      const { data, error } = await supabase
        .from('available_time_slots')
        .select('*')
        .eq('date', formattedDate);
        
      if (error) throw error;
      setTimeSlots(data || []);
    } catch (error) {
      console.error('Error fetching time slots:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los horarios disponibles.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fetch appointments
  const fetchAppointments = async () => {
    setLoadingAppointments(true);
    
    try {
      const { data, error } = await supabase
        .from('appointment_requests')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setAppointments(data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar las solicitudes de citas.",
        variant: "destructive"
      });
    } finally {
      setLoadingAppointments(false);
    }
  };
  
  // Effect to load time slots when date changes
  useEffect(() => {
    if (date) {
      fetchTimeSlots(date);
    }
  }, [date]);
  
  // Effect to load appointments
  useEffect(() => {
    fetchAppointments();
  }, []);
  
  // Handle date selection
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    form.setValue('date', selectedDate || new Date());
  };
  
  // Add a time slot
  const onAddTimeSlot = async (data: TimeSlotForm) => {
    if (!data.date || !data.time) return;
    
    const formattedDate = format(data.date, 'yyyy-MM-dd');
    
    try {
      const { error } = await supabase
        .from('available_time_slots')
        .insert({
          date: formattedDate,
          time: data.time,
          is_available: true
        });
        
      if (error) throw error;
      
      toast({
        title: "Horario añadido",
        description: `Se ha añadido el horario ${data.time} para el día ${format(data.date, 'dd/MM/yyyy')}.`
      });
      
      // Refresh time slots
      fetchTimeSlots(data.date);
    } catch (error: any) {
      console.error('Error adding time slot:', error);
      
      // Check if the error is due to a unique constraint violation
      if (error.code === '23505') {
        toast({
          title: "Error",
          description: "Este horario ya existe para la fecha seleccionada.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo añadir el horario.",
          variant: "destructive"
        });
      }
    }
  };
  
  // Remove a time slot
  const removeTimeSlot = async (id: string) => {
    try {
      const { error } = await supabase
        .from('available_time_slots')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Horario eliminado",
        description: "Se ha eliminado el horario correctamente."
      });
      
      // Refresh time slots
      fetchTimeSlots(date);
    } catch (error) {
      console.error('Error removing time slot:', error);
      toast({
        title: "Error",
        description: "No se pudo eliminar el horario.",
        variant: "destructive"
      });
    }
  };

  // Update appointment status
  const updateAppointmentStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('appointment_requests')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Estado actualizado",
        description: `La cita ha sido marcada como "${status}".`
      });
      
      // Refresh appointments
      fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment status:', error);
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado de la cita.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container-fluid">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-valoraBlue mb-8">
              Panel de Administración de Calendario
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left column - Calendar and Time Slot Management */}
              <div className="md:col-span-5">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4 flex items-center text-valoraBlue">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Gestión de Disponibilidad
                  </h2>
                  
                  <div className="mb-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      locale={es}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Añadir Horario Disponible</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onAddTimeSlot)} className="flex items-end gap-2">
                        <div className="flex-1">
                          <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Hora</FormLabel>
                                <FormControl>
                                  <Input
                                    type="time"
                                    {...field}
                                    className="w-full"
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button type="submit" className="flex items-center gap-1">
                          <Plus className="h-4 w-4" />
                          Añadir
                        </Button>
                      </form>
                    </Form>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium">
                        Horarios para {date && format(date, 'dd/MM/yyyy', { locale: es })}
                      </h3>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => date && fetchTimeSlots(date)}
                        disabled={isLoading}
                      >
                        <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
                        Actualizar
                      </Button>
                    </div>
                    
                    {isLoading ? (
                      <div className="text-center py-4">Cargando horarios...</div>
                    ) : timeSlots.length > 0 ? (
                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <div 
                            key={slot.id}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded border"
                          >
                            <div>{slot.time}</div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeTimeSlot(slot.id)} 
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        No hay horarios disponibles para esta fecha
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Right column - Appointment Requests */}
              <div className="md:col-span-7">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-valoraBlue">
                      Solicitudes de Citas
                    </h2>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={fetchAppointments}
                      disabled={loadingAppointments}
                    >
                      <RefreshCw className={`h-4 w-4 mr-1 ${loadingAppointments ? 'animate-spin' : ''}`} />
                      Actualizar
                    </Button>
                  </div>
                  
                  {loadingAppointments ? (
                    <div className="text-center py-4">Cargando solicitudes...</div>
                  ) : appointments.length > 0 ? (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Hora</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Acciones</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {appointments.map((appointment) => (
                            <TableRow key={appointment.id}>
                              <TableCell>
                                {format(new Date(appointment.date), 'dd/MM/yyyy')}
                              </TableCell>
                              <TableCell>{appointment.time}</TableCell>
                              <TableCell>{appointment.name}</TableCell>
                              <TableCell className="max-w-[150px] truncate">
                                {appointment.email}
                              </TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  appointment.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : appointment.status === 'cancelled' 
                                      ? 'bg-red-100 text-red-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {appointment.status === 'confirmed' 
                                    ? 'Confirmada' 
                                    : appointment.status === 'cancelled' 
                                      ? 'Cancelada' 
                                      : 'Pendiente'}
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="flex space-x-1">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="text-green-600 hover:bg-green-50"
                                    onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                                    disabled={appointment.status === 'confirmed'}
                                  >
                                    Confirmar
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="text-red-600 hover:bg-red-50"
                                    onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                                    disabled={appointment.status === 'cancelled'}
                                  >
                                    Cancelar
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-500">
                      No hay solicitudes de citas pendientes
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminCalendar;
