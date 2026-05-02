import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-200 rounded-full p-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-full font-semibold transition-colors ${
          i18n.language === 'en'
            ? 'bg-yellow-500 text-white'
            : 'bg-transparent text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-4 py-2 rounded-full font-semibold transition-colors ${
          i18n.language === 'fr'
            ? 'bg-yellow-500 text-white'
            : 'bg-transparent text-gray-700 hover:bg-gray-300'
        }`}
      >
        FR
      </button>
    </div>
  );
}
