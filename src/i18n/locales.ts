export type Locales = {
  [key: string]: string;
};

const locales: Locales = { en: 'English', de: 'Deutsch' };

export const getLanguage = (s: string): string => s.substring(0, 2);

export default locales;
