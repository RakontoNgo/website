'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React, { useState } from 'react';

function BasicText({
  contentFr,
  contentEn,
  className,
  maxChars = 800, // Maximum characters for truncation
}: {
  contentFr: string;
  contentEn: string;
  className?: string;
  maxChars?: number;
}) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const content = selectedLanguage === 'Fr' ? contentFr : contentEn;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  const displayedContent = isExpanded
    ? content
    : content.length > maxChars
    ? `${content.slice(0, maxChars)}...`
    : content;
  return (
    <p
      className={`font-josefin text-[16px] lg:text-[18px] font-light ${className}`}
    >
      {displayedContent}{' '}
      {content.length > maxChars && (
        <button onClick={toggleExpand} className="text-primary underline ml-2">
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </p>
  );
}

export default BasicText;
