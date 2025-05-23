
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarX, CalendarCheck, CalendarDays } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const CalendarSection: React.FC = () => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  
  // Available time slots
  const timeSlots = [
    "10:00", "11:00", "12:00", "13:00", "16:00", "17:00", "18:00"
  ];
  
  // Handle date selection
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setTimeSlot(null); // Reset time slot when date changes
  };
  
  // Handle time slot selection
  const handleTimeSlotSelect = (slot: string) => {
    setTimeSlot(slot);
  };
  
  // Handle appointment request
  const handleRequestAppointment = () => {
    if (date && timeSlot) {
      toast({
        title: "Cita solicitada",
        description: `Has solicitado una cita para el ${format(date, 'PPP', { locale: es })} a las ${timeSlot}.`,
      });
      setDate(undefined);
      setTimeSlot(null);
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
                  <p className="text-gray-500 text-sm">
                    Los horarios disponibles se mostrarán cuando selecciones una fecha.
                  </p>
                )}
              </div>
              
              <div className="bg-valoraBlue/10 p-4 rounded-md mb-6 border-l-4 border-valoraBlue">
                <p className="text-sm text-valoraBlue">
                  Nuestros asesores te contactarán en el horario que selecciones para realizar una primera consulta sin compromiso.
                </p>
              </div>
              
              <Button 
                className="w-full py-6"
                disabled={!date || !timeSlot}
                onClick={handleRequestAppointment}
              >
                {date && timeSlot
                  ? `Solicitar cita: ${format(date, 'dd/MM', { locale: es })} a las ${timeSlot}`
                  : "Selecciona fecha y hora"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
