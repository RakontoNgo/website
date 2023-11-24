'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function TextUppercase({
  contentFr,
  contentEn,
  className,
}: {
  contentFr: string;
  contentEn: string;
  className?: string;
}) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <p
      className={`font-josefin text-[16px] leading-[20px] md:leading-[24px] lg:text-[20px] uppercase ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </p>
  );
}

export default TextUppercase;
