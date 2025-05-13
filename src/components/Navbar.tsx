import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import StockTickerWidget from './StockTickerWidget';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Function to handle smooth scrolling to sections and update URL hash
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Update URL hash
    window.location.hash = sectionId;
    
    // If already on home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    // Clear hash or set to "inicio"
    window.location.hash = "inicio";
    
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="py-4 px-4 sm:px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-fluid flex justify-between items-center">
        <div className="flex items-center gap-2">
          {location.pathname === '/' ? (
            <a 
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center cursor-pointer"
            >
              <span className="text-2xl font-lora font-bold text-valoraBlue">Valor<span className="text-valoraGold">España</span></span>
            </a>
          ) : (
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-lora font-bold text-valoraBlue">Valor<span className="text-valoraGold">España</span></span>
            </Link>
          )}
          {/* Language Selector positioned right after the logo */}
          <div className="ml-2">
            <LanguageSelector />
          </div>
        </div>
        
        {/* Stock ticker - visible on tablet and desktop */}
        <div className="hidden md:block">
          <StockTickerWidget />
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {location.pathname === '/' ? (
            <>
              <a 
                href="#servicios" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('servicios');
                }}
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                {t('services')}
              </a>
              <a 
                href="#nosotros" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('nosotros');
                }}
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                {t('about')}
              </a>
              <a 
                href="#faq" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faq');
                }}
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                Preguntas frecuentes
              </a>
              <a 
                href="#testimonios" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('testimonios');
                }}
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                {t('testimonials')}
              </a>
              <a 
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contacto');
                }}
              >
                <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white">
                  {t('contactButton')}
                </Button>
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#servicios"
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                {t('services')}
              </Link>
              <Link 
                to="/#nosotros"
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                {t('about')}
              </Link>
              <Link 
                to="/#faq"
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                Preguntas frecuentes
              </Link>
              <Link 
                to="/#testimonios"
                className="text-valoraBlue hover:text-valoraGold transition-colors font-medium"
              >
                {t('testimonials')}
              </Link>
              <Link to="/#contacto">
                <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white">
                  {t('contactButton')}
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-valoraBlue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
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
                {/* Stock ticker - visible on mobile inside menu */}
                <div className="py-2">
                  <StockTickerWidget />
                </div>
                
                {/* Language selector in mobile menu */}
                <div className="py-2">
                  <LanguageSelector />
                </div>
                
                {location.pathname === '/' ? (
                  <>
                    <a 
                      href="#servicios"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('servicios');
                      }}
                    >
                      {t('services')}
                    </a>
                    <a 
                      href="#nosotros"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('nosotros');
                      }}
                    >
                      {t('about')}
                    </a>
                    <a 
                      href="#faq"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('faq');
                      }}
                    >
                      Preguntas frecuentes
                    </a>
                    <a 
                      href="#testimonios"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('testimonios');
                      }}
                    >
                      {t('testimonials')}
                    </a>
                    <a 
                      href="#contacto"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contacto');
                      }}
                    >
                      <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white w-full">
                        {t('contactButton')}
                      </Button>
                    </a>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/#servicios"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('services')}
                    </Link>
                    <Link 
                      to="/#nosotros"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('about')}
                    </Link>
                    <Link 
                      to="/#faq"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Preguntas frecuentes
                    </Link>
                    <Link 
                      to="/#testimonios"
                      className="text-valoraBlue text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('testimonials')}
                    </Link>
                    <Link 
                      to="/#contacto"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white w-full">
                        {t('contactButton')}
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
