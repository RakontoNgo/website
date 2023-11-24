'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import urlForImage from '../../../../sanity/lib/image';
import { SanityImage } from '../../../../types';

interface IProps {
  gallery: SanityImage[];
  setIsModal: Dispatch<
    SetStateAction<{ isOpen: boolean; image: SanityImage | null }>
  >;
  x: MotionValue<number>;
}

function DesktopGallery({ gallery, setIsModal, x }: IProps) {
  return (
    <motion.div
      style={{ x }}
      className="hidden lg:flex lg:w-[120%]  space-y-2 lg:space-x-2 lg:space-y-0 flex-col lg:flex-row items-center justify-center"
    >
      {gallery.map((item) => (
        <button
          type="button"
          onClick={() =>
            setIsModal({
              isOpen: true,
              image: item,
            })
          }
          key={item.asset._ref}
          className="w-full   h-[125px] md:h-[250px] group lg:h-[300px] relative overflow-hidden "
        >
          <Image
            src={urlForImage(item.asset).url()}
            alt={item.alt ? item.alt : 'unknow image'}
            fill
            priority
            className="object-cover group-hover:scale-110 transition ease-in duration-500"
          />
        </button>
      ))}
    </motion.div>
  );
}

export default DesktopGallery;
