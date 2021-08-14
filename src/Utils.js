import turkce from './languages/tr.json';
import english from './languages/en.json';

export const languages = {
  tr: turkce,
  en:english
};
export const availableLocales = Object.keys(languages);

export const browserLocale = navigator.language.split(/[-_]/)[0];
