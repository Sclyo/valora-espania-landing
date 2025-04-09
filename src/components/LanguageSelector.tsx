
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Define language information with real flag images
const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ca', name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'val', name: 'Valencià', flag: '🏴󠁥󠁳󠁶󠁣󠁿' },
  { code: 'gl', name: 'Galego', flag: '🏴󠁥󠁳󠁧󠁡󠁿' },
  { code: 'eu', name: 'Euskara', flag: '🏴󠁥󠁳󠁰󠁶󠁿' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors">
        <img 
          src={`/flags/${currentLanguage.code}.png`} 
          alt={currentLanguage.name} 
          className="w-5 h-3.5 object-cover"
          aria-hidden="true"
        />
        <span className="sr-only">Change language. Current language: {currentLanguage.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`flex items-center gap-3 ${language === lang.code ? 'bg-gray-100' : ''}`}
          >
            <img 
              src={`/flags/${lang.code}.png`} 
              alt={lang.name}
              className="w-5 h-3.5 object-cover" 
              aria-hidden="true"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
