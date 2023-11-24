import CloseButton from '@/components/global/buttons/CloseButton';
import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { SanityImage } from '../../../../types';
import urlForImage from '../../../../sanity/lib/image';

interface IProps {
  gallery: SanityImage[];
  setIsModal: Dispatch<
    SetStateAction<{ isOpen: boolean; image: SanityImage | null }>
  >;
  isAnimated: boolean;
  isModal: { isOpen: boolean; image: SanityImage | null };
}

function ModalGallery({ gallery, setIsModal, isAnimated, isModal }: IProps) {
  return (
    <div className="fixed h-screen w-screen bg-black bg-opacity-90 top-0 left-0 z-50 flex flex-col items-center">
      <div className="w-11/12 h-[10%]  max-w-6xl flex items-center justify-end">
        <CloseButton
          background="background-none"
          onClick={() => {
            setIsModal({ isOpen: false, image: null });
          }}
        />
      </div>
      <div className="w-11/12  h-[80%] max-w-5xl relative animate-fadeIn">
        {isAnimated && (
          <Image
            src={urlForImage(isModal.image!.asset).url()}
            alt={isModal.image!.alt ? isModal.image!.alt : 'unknow image'}
            fill
            priority
            className="animate-fadeIn object-cover"
          />
        )}
      </div>
      <div className="w-11/12 animate-fadeIn  h-[20%] flex items-center overflow-x-scroll p-5 space-x-2">
        {gallery.map((item) => (
          <button
            type="button"
            onClick={() => setIsModal({ isOpen: true, image: item })}
            key={item.asset._ref}
            className="w-96 h-[80%] group relative"
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className={`object-cover  group-hover:scale-110 group-hover:opacity-100 opacity-70 transition ease-in duration-300 ${
                item === isModal.image && 'scale-110 opacity-100'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ModalGallery;
