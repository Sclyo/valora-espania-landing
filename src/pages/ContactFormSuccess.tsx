
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactFormSuccess = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="container max-w-lg mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-valoraBlue mb-4">
              {t('formSuccessTitle')}
            </h1>
            
            <p className="text-gray-600 mb-8">
              {t('formSuccessDesc')}
            </p>
            
            <Link to="/">
              <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white">
                {t('backToHome')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactFormSuccess;
