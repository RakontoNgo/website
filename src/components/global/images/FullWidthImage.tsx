'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import useParallax from '@/utils/useParralax';
import Video from '@/components/videos/Video';
import VideoModal from '@/components/videos/VideoModal';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import SlideUp from '@/components/animated/SlideUp';

interface IProps {
  path: string;
  alt: string;
  className?: string;
  start?: number;
  end?: number;
  videoUrl?: string;
  title?: string;
  titleEn?: string;
  bgColor?: string;
  h1ClassName?: string;
}

function FullWidthImage({
  path,
  alt,
  className = 'max-h-[65rem] lg:h-96',
  start = -100,
  end = 200,
  videoUrl,
  title,
  titleEn,
  h1ClassName = '',
  bgColor,
}: IProps) {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, url: '' });
  const y = useParallax(scrollYProgress, start, end);

  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <div className={`w-full h-80   z-0 relative  overflow-hidden ${className}`}>
      {title && titleEn && (
        <div className="h-[100%] w-[100%] relative flex justify-center items-center -translate-y-1/2  top-1/2 z-10">
          <div
            style={{ backgroundColor: `${bgColor || '#13795F'}` }}
            className="absolute w-[110%] h-[110%] top-0 left-0 opacity-50"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <SlideUp duration={1}>
              <h1
                className={`font-francoisOne text-center text-[50px] leading-none ${h1ClassName}  text-white md:text-[60px] xl:text-[90px] uppercase ${className}`}
              >
                {selectedLanguage === 'Fr' ? title : titleEn}
              </h1>
            </SlideUp>
          </div>
        </div>
      )}
      {/* MODAL */}
      {isModalOpen.isOpen && (
        <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}{' '}
      <motion.div style={{ y }} className="w-[100%] h-[130%]">
        {videoUrl ? (
          <Video
            container="h-full"
            setIsModalOpen={setIsModalOpen}
            url={videoUrl}
            className="h-[100%] w-full mt-10"
          />
        ) : (
          <Image className="object-cover" src={path} fill priority alt={alt} />
        )}
      </motion.div>
    </div>
  );
}

export default FullWidthImage;
