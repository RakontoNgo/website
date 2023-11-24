'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React, { useEffect } from 'react';

function LangButton() {
  const { selectedLanguage, setSelectedLanguage } =
    useSelectedLanguagesFromStore();

  const handleClick = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem('Lang', language);
  };

  useEffect(() => {
    const lang = localStorage.getItem('Lang');

    if (lang) {
      setSelectedLanguage(lang);
    } else {
      localStorage.setItem('Lang', 'En');
    }
  });

  return (
    <div className="flex  relative">
      <button onClick={() => handleClick('En')} className="mr-2" type="button">
        EN
      </button>
      <button onClick={() => handleClick('Fr')} type="button">
        FR
      </button>
      <span
        className={`h-[1px] w-5/12 bg-primary absolute bottom-0 left-0 transform  ${
          selectedLanguage === 'En' ? 'translate-x-0' : 'translate-x-[135%]'
        } duration-300 ease-in-out`}
      />
    </div>
  );
}

export default LangButton;
