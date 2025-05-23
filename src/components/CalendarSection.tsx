
import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarX, CalendarCheck, CalendarDays, Loader2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const CalendarSection: React.FC = () => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showForm, setShowForm] = useState(false);
  
  // Fetch available time slots for the selected date
  useEffect(() => {
    const fetchTimeSlots = async () => {
      if (!date) return;
      
      setLoading(true);
      setTimeSlots([]);
      setTimeSlot(null);
      
      try {
        const formattedDate = format(date, 'yyyy-MM-dd');
        const { data, error } = await supabase
          .from('available_time_slots')
          .select('time')
          .eq('date', formattedDate)
          .eq('is_available', true)
          .order('time');
          
        if (error) throw error;
        
        // Extract time strings from the result
        const availableSlots = data.map(slot => slot.time);
        setTimeSlots(availableSlots);
      } catch (error) {
        console.error('Error fetching time slots:', error);
        toast({
          title: "Error",
          description: "No se pudieron cargar los horarios disponibles.",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchTimeSlots();
  }, [date]);
  
  // Handle date selection
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setTimeSlot(null); // Reset time slot when date changes
    setShowForm(false);
  };
  
  // Handle time slot selection
  const handleTimeSlotSelect = (slot: string) => {
    setTimeSlot(slot);
    setShowForm(true);
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle appointment request
  const handleRequestAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) return;
    
    setSubmitting(true);
    
    try {
      const formattedDate = format(date, 'yyyy-MM-dd');
      
      // Insert appointment request into Supabase
      const { error } = await supabase
        .from('appointment_requests')
        .insert({
          date: formattedDate,
          time: timeSlot,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message || null,
          status: 'pending'
        });
        
      if (error) throw error;
      
      toast({
        title: "Cita solicitada",
        description: `Has solicitado una cita para el ${format(date, 'PPP', { locale: es })} a las ${timeSlot}.`,
      });
      
      // Reset form
      setDate(undefined);
      setTimeSlot(null);
      setShowForm(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting appointment request:', error);
      toast({
        title: "Error",
        description: "No se pudo solicitar la cita. Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Disable past dates and weekends
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable past days
    if (date < today) return true;
    
    // Disable weekends (0 is Sunday, 6 is Saturday)
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  
  return (
    <section id="calendario" className="py-12 md:py-16 bg-white">
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-valoraBlue mb-4">
            Agenda una consulta
          </h2>
          <p className="text-gray-600 text-lg">
            Selecciona una fecha y horario para que uno de nuestros asesores te contacte
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-3 text-valoraBlue flex items-center">
                <CalendarDays className="mr-2 h-5 w-5" />
                Selecciona una fecha
              </h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={disabledDays}
                locale={es}
                className="rounded-md border"
                showOutsideDays={false}
              />
              {!date && (
                <div className="mt-3 text-sm text-gray-500 flex items-center">
                  <CalendarX className="mr-2 h-4 w-4" />
                  Selecciona una fecha disponible
                </div>
              )}
              {date && (
                <div className="mt-3 text-sm text-green-600 flex items-center">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Fecha seleccionada: {format(date, 'PPP', { locale: es })}
                </div>
              )}
            </div>
            
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-lg font-medium mb-4 text-valoraBlue">
                  {date ? 'Horarios disponibles' : 'Selecciona primero una fecha'}
                </h3>
                
                {date ? (
                  loading ? (
                    <div className="flex justify-center items-center py-6">
                      <Loader2 className="h-6 w-6 animate-spin text-valoraBlue" />
                      <span className="ml-2">Cargando horarios...</span>
                    </div>
                  ) : timeSlots.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleTimeSlotSelect(slot)}
                          className={cn(
                            "py-2 px-3 text-sm rounded-md border",
                            timeSlot === slot
                              ? "bg-valoraBlue text-white border-valoraBlue"
                              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-4 text-gray-500">
                      No hay horarios disponibles para esta fecha.
                    </p>
                  )
                ) : (
                  <p className="text-gray-500 text-sm">
                    Los horarios disponibles se mostrarán cuando selecciones una fecha.
                  </p>
                )}
              </div>
              
              {showForm ? (
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
                  <h3 className="text-lg font-medium mb-4 text-valoraBlue">
                    Completa tus datos
                  </h3>
                  
                  <form onSubmit={handleRequestAppointment}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensaje (opcional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full py-6"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          `Solicitar cita: ${format(date, 'dd/MM', { locale: es })} a las ${timeSlot}`
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-valoraBlue/10 p-4 rounded-md mb-6 border-l-4 border-valoraBlue">
                  <p className="text-sm text-valoraBlue">
                    Nuestros asesores te contactarán en el horario que selecciones para realizar una primera consulta sin compromiso.
                  </p>
                </div>
              )}
              
              {!showForm && (
                <Button 
                  className="w-full py-6"
                  disabled={!date || !timeSlot}
                  onClick={() => setShowForm(true)}
                >
                  {date && timeSlot
                    ? `Continuar con cita: ${format(date, 'dd/MM', { locale: es })} a las ${timeSlot}`
                    : "Selecciona fecha y hora"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
