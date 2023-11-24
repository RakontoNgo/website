'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import { SanityImage } from '../../../../types';
import urlForImage from '../../../../sanity/lib/image';

interface IProps {
  gallery: SanityImage[];
  setIsModal: Dispatch<
    SetStateAction<{ isOpen: boolean; image: SanityImage | null }>
  >;
  y: MotionValue<number>;
}

function MobileGallery({ gallery, setIsModal, y }: IProps) {
  return (
    <motion.div
      style={{ y }}
      className="w-[48.5%] lg:hidden space-x-0 bg-red- space-y-2 lg:space-x-2 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center"
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
          className="w-full   h-[200px] md:h-[250px] lg:h-[300px] relative "
        >
          <Image
            src={urlForImage(item.asset).url()}
            alt={item.alt ? item.alt : 'unknow image'}
            fill
            priority
            className="object-cover"
          />
        </button>
      ))}
    </motion.div>
  );
}

export default MobileGallery;
