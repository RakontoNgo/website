'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function H1({
  contentFr,
  contentEn,
  className,
  textColor = 'text-primary',
  textSize = 'text-[50px]',
}: {
  contentFr: string;
  contentEn: string;
  textColor?: string;
  className?: string;
  textSize?: string;
}) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <h1
      className={`font-francoisOne ${textSize} leading-none ${textColor} md:text-[60px] xl:text-[90px] uppercase  ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </h1>
  );
}

export default H1;
