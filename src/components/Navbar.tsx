
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 sm:px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-fluid flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-merriweather font-bold text-valoraBlue">Valora<span className="text-valoraGold">España</span></span>
        </a>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-valoraBlue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#servicios" className="text-valoraBlue hover:text-valoraGold transition-colors font-medium">Servicios</a>
          <a href="#nosotros" className="text-valoraBlue hover:text-valoraGold transition-colors font-medium">Nosotros</a>
          <a href="#testimonios" className="text-valoraBlue hover:text-valoraGold transition-colors font-medium">Testimonios</a>
          <a href="#contacto">
            <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white">
              Contactar
            </Button>
          </a>
        </div>
        
        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="pt-16 pb-6 px-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-valoraBlue"
              >
                <X size={24} />
              </Button>
              
              <div className="flex flex-col space-y-6 items-center">
                <a 
                  href="#servicios" 
                  className="text-valoraBlue text-lg font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </a>
                <a 
                  href="#nosotros" 
                  className="text-valoraBlue text-lg font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a 
                  href="#testimonios" 
                  className="text-valoraBlue text-lg font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonios
                </a>
                <a 
                  href="#contacto" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white w-full">
                    Contactar
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
