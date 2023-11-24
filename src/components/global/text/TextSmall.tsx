'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function TextSmall({
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
      className={`font-josefin text-[16px] leading-[18px] md:leading-[24px] font-light   md:text-[18px] ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </p>
  );
}

export default TextSmall;
