
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Flag } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ca', name: 'Català', flag: '🏴' },
  { code: 'val', name: 'Valencià', flag: '🏴' },
  { code: 'gl', name: 'Galego', flag: '🏴' },
  { code: 'eu', name: 'Euskara', flag: '🏴' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
        <span className="text-lg" aria-hidden="true">{currentLanguage.flag}</span>
        <span className="sr-only">Change language. Current language: {currentLanguage.name}</span>
        <Flag className="h-4 w-4 text-valoraBlue" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`flex items-center space-x-2 ${language === lang.code ? 'bg-gray-100' : ''}`}
          >
            <span className="text-lg" aria-hidden="true">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
