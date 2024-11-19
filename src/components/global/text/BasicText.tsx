'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React, { useEffect, useState } from 'react';

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
  const [displayedContent, setDisplayedContent] = useState(content);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (isExpanded) {
      setDisplayedContent(content);
    } else if (content.length > maxChars) {
      setDisplayedContent(`${content.slice(0, maxChars)}...`);
    } else {
      setDisplayedContent(content);
    }
  }, [isExpanded, content, maxChars]);
  return (
    <p
      className={`font-josefin text-[16px] lg:text-[18px] font-light ${className}`}
    >
      {displayedContent}
      {content.length > maxChars && (
        <button
          type="button"
          onClick={toggleExpand}
          className="text-primary underline ml-2"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </p>
  );
}

export default BasicText;
