'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function H2({
  contentFr,
  contentEn,
  className,
  textColor = 'text-primary',
}: {
  contentFr: string;
  contentEn: string;
  textColor?: string;
  className?: string;
}) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <h2
      className={`font-josefin text-[25px] ${textColor} md:text-[30px] uppercase ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </h2>
  );
}

export default H2;
