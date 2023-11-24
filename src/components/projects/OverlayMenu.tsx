import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import TextUppercase from '../global/text/TextUppercase';

interface IProps {
  isOpen: string | null;
  setIsOpen: Dispatch<SetStateAction<string | null>>;
  children: React.ReactNode;
  nameEn: string;
  nameFr: string;
  height?: string;
}

function OverlayMenu({
  isOpen,
  children,
  nameEn,
  nameFr,
  setIsOpen,
  height = '200px',
}: IProps) {
  const handleClick = () => {
    if (isOpen === nameEn) {
      setIsOpen(null);
    } else {
      setIsOpen(nameEn);
    }
  };

  return (
    <div className="">
      <TextUppercase
        className="text-primary translate-y-4 bg-background z-10 relative"
        contentEn={nameEn}
        contentFr={nameFr}
      />
      <div
        className={`${
          isOpen === nameEn && isOpen ? `h-[${height}] mb-6 mt-5` : 'h-[0px]'
        }  transform duration-500 ease-out  overflow-hidden`}
      >
        {children}
      </div>
      <button
        onClick={() => handleClick()}
        type="button"
        className="flex flex-col items-end w-full  z-20 relative"
      >
        <Image
          className={`${
            isOpen === nameEn ? 'rotate-180' : 'rotate-0'
          } transform duration-500 ease-out flex `}
          src="/downArrow.svg"
          alt="down"
          height={15}
          width={13}
        />
        <div className="w-full h-[1px] bg-primary mt-2" />
      </button>
    </div>
  );
}

export default OverlayMenu;
