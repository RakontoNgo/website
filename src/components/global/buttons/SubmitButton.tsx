'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

interface IProps {
  nameFr: string;
  nameEn: string;
  className?: string;
}

function SubmitButton({ nameFr, nameEn, className }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <div>
      {' '}
      <button
        className={`${className} flex items-center text-background justify-center bg-primary border border-primary px-4 py-3 hover:bg-transparent hover:text-primary transform duration-500  font-bold`}
        type="submit"
      >
        {selectedLanguage === 'Fr' ? nameFr : nameEn}
      </button>
    </div>
  );
}

export default SubmitButton;
