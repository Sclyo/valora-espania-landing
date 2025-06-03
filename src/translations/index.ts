
export type { TranslationKey, Translations } from './types';
export { es } from './es';
export { en } from './en';
export { ca } from './ca';
export { val } from './val';
export { gl } from './gl';
export { eu } from './eu';

// Export all translations in a single object
export const translations = {
  es: () => import('./es').then(m => m.es),
  en: () => import('./en').then(m => m.en),
  ca: () => import('./ca').then(m => m.ca),
  val: () => import('./val').then(m => m.val),
  gl: () => import('./gl').then(m => m.gl),
  eu: () => import('./eu').then(m => m.eu)
};

// For backwards compatibility, export synchronous translations
import { es } from './es';
import { en } from './en';
import { ca } from './ca';
import { val } from './val';
import { gl } from './gl';
import { eu } from './eu';

export const translationsSync = {
  es,
  en,
  ca,
  val,
  gl,
  eu
};

// Default export for backwards compatibility
export default translationsSync;
