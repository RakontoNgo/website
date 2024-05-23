import Link from 'next/link';
import React from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';

interface IProps {
  link: string;
  textEn: string;
  textFr: string;
  className?: string;
  query?: string;
}

function LinkButton({ link, textEn, textFr, className, query }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <Link
      className={`flex items-center text-background justify-center bg-primary border border-primary px-4 py-3 hover:bg-transparent hover:text-primary transform duration-500  font-bold ${className}`}
      href={{ pathname: link, query: { slug: query } }}
    >
      {selectedLanguage === 'Fr' ? textFr : textEn}
    </Link>
  );
}

export default LinkButton;
