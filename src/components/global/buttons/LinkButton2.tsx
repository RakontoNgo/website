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

function LinkButton2({ link, textEn, textFr, className, query }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <Link
      className={`flex  text-left items-center justify-start text-background bg-transparent hover:bg-white hover:text-primary  border border-white px-4 py-3 hover:bg-transparent  transform duration-500  font-bold ${className}`}
      href={{ pathname: link }}
    >
      <p>{`> ${selectedLanguage === 'Fr' ? textFr : textEn}`}</p>
    </Link>
  );
}

export default LinkButton2;
