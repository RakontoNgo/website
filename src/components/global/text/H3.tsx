'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function H3({
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
    <h3
      className={`font-josefin uppercase  text-[20px] md:text-[25px]" ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </h3>
  );
}

export default H3;
