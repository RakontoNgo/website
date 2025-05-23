'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import NavOverlay from './NavOverlay';
import { INavLinks, ISocialMedia } from '../../../types';
import LangButton from '../global/buttons/LangButton';
import LinkButton from '../global/buttons/LinkButton';

interface IProps {
  navLinks: INavLinks[];
  socialMedia: ISocialMedia[];
  desktopNavLinks: INavLinks[];
}

function NavBar({ navLinks, desktopNavLinks, socialMedia }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className=" h-16  z-50 fixed bg-background  top-0 max-w-content  w-full px-4  md:px-10 flex justify-between items-center">
      {/* LOGO */}
      <Link href="/">
        <Image
          src="/logo/logo2.svg"
          width={150}
          height={200}
          alt="RAKONTO"
          priority
        />
      </Link>

      {/* DESKTOP NAVBAR */}
      <div className="font-josefin  items-center  space-x-4 hidden md:flex">
        <LinkButton
          link="/make-a-donation"
          textEn="Make a donation"
          textFr="Faire un don"
        />

        {desktopNavLinks.map((item) => (
          <div className="" key={item.nameEn}>
            {item.nameEn === 'Explore' ? (
              <button
                onClick={() => setIsOverlayOpen(true)}
                type="button"
                className="uppercase flex flex-col space-y-1 bg-none group hover:bg-primary 0 h-10 w-10 items-center justify-center rounded-full border border-primary"
              >
                <span className="h-[1px] w-4 bg-primary group-hover:bg-background" />
                <span className="h-[1px] w-4 bg-primary group-hover:bg-background" />
                <span className="h-[1px] w-4 bg-primary group-hover:bg-background" />

                {/* {selectedLanguage === 'Fr' ? item.nameFr : item.nameEn} */}
              </button>
            ) : (
              <Link href={item.link}>
                {selectedLanguage === 'Fr' ? item.nameFr : item.nameEn}
              </Link>
            )}
          </div>
        ))}
        <LangButton />
      </div>

      {/* MOBILE BUTTON*/}
      <div className="flex md:hidden items-start text-primary">
        <div className="text-sm mr-2">
          <LangButton />
        </div>
        <button
          onClick={() => setIsOverlayOpen(true)}
          className="text-primary ml-2 font-josefin flex "
          type="button"
        >
          MENU
        </button>
      </div>

      {/* OVERLAY MENU*/}
      <NavOverlay
        socialMedia={socialMedia}
        navLinks={navLinks}
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
    </div>
  );
}

export default NavBar;
