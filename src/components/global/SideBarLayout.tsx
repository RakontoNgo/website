'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import handleAnimate from '@/utils/handleAnimate';
import Image from 'next/image';
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface IProps {
  searchTerm: string;

  setSearchTerm: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
}

function SideBarLayout({
  setIsAnimate,
  setSearchTerm,
  searchTerm,
  children,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    handleAnimate(setIsAnimate);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsFilterOpen(true);
    }
  }, []);
  return (
    <div
      className={`fixed overflow-hidden  lg:sticky lg:top-20 z-20 bottom-7 w-[90%] lg:w-[22%] border-2 lg:border-none lg:p-0 border-primary  right-5 bg-background text-primary shadow-2xl lg:shadow-none  text-lg p-3 lg:mr-10  ${
        isFilterOpen ? 'h-[85vh]' : 'h-[6vh] lg:h-screen'
      } transform duration-500 ease-out `}
    >
      <button
        type="button"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="flex justify-between items-start text-left mb-5 w-full"
      >
        <Image
          className={`${
            isFilterOpen ? 'rotate-180' : 'rotate-0'
          } transform duration-500 ease-out flex lg:hidden`}
          src="/downArrow.svg"
          alt="down"
          height={15}
          width={13}
        />
      </button>
      <input
        className="focus:outline-none bg-background border-b border-primary text-primary w-full"
        type="text"
        placeholder={selectedLanguage === 'Fr' ? 'Rechercher' : 'Search'}
        value={searchTerm}
        onChange={handleSearch}
      />
      {children}
    </div>
  );
}

export default SideBarLayout;
