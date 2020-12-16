import Translations from './Translations';

export function getTranslatedText(key) {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  let value = '';
  for (let i = 0; i < Translations.length; i++) {
    if (Translations[i].key === key) {
      value = Translations[i].translations[0][selectedLanguage];
    }
  }

  return value || key;
}
