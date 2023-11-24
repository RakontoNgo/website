'use client';

import React, { useRef } from 'react';
import { useScroll, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import useParallax from '@/utils/useParralax';
import { SanityImage } from '../../../types';
import H1 from '../global/text/H1';
import BasicText from '../global/text/BasicText';
import urlForImage from '../../../sanity/lib/image';
import SlideUp from '../animated/SlideUp';

interface IProps {
  item: {
    _key: string;
    nameEn: string;
    nameFr: string;
    descriptionEn: string;
    descriptionFr: string;
    image: SanityImage;
    color: {
      hex: string;
    };
  };
  index: number;
}

function PresentationElement({ item, index }: IProps) {
  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, -200, 300);
  const y2 = useParallax(scrollYProgress, -350, 150);
  const y3 = useParallax(scrollYProgress, -300, 350);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const setMotionYvalue = (idx: number) => {
    if (idx === 0) {
      return y;
    }
    if (idx === 1) {
      return y2;
    }
    return y3;
  };

  return (
    <div
      ref={ref}
      className={`lg:h-[60vh]   flex  my-20 ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-end`}
    >
      {inView && (
        <div
          className={`w-full h-[100%] flex flex-col items-end  lg:w-5/12 ${
            index % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10'
          } lg:justify-between`}
        >
          <SlideUp
            className="flex flex-col items-end lg:items-start"
            duration={1.2}
          >
            <H1
              className={`w-full ${
                item.color.hex === '#febe10' && 'text-tertiary'
              } ${item.color.hex === '#dd6d48' && 'text-quaternary'} ${
                item.color.hex === '#13795f' && 'text-primary'
              }`}
              textColor={`text-[${item.color.hex}]`}
              contentEn={item.nameEn}
              contentFr={item.nameFr}
            />

            <BasicText
              key={item._key}
              className="mt-10 w-10/12"
              contentEn={item.descriptionEn}
              contentFr={item.descriptionFr}
            />
          </SlideUp>

          <div className="mt-10  h-20 w-20 flex flex-col justify-end items-end">
            <div
              className={`${item.color.hex === '#febe10' && 'bg-tertiary'} ${
                item.color.hex === '#dd6d48' && 'bg-quaternary'
              } ${
                item.color.hex === '#13795f' && 'bg-primary'
              }   w-full h-6 rotate-90 translate-x-[28px] -translate-y-[4px]`}
            />
            <div
              className={`${item.color.hex === '#febe10' && 'bg-tertiary'} ${
                item.color.hex === '#dd6d48' && 'bg-quaternary'
              } ${item.color.hex === '#13795f' && 'bg-primary'}  w-full h-6`}
            />
          </div>
        </div>
      )}
      {inView && (
        <div className="h-[100%] w-6/12 hidden lg:flex lg:flex-col lg:w-7/12 overflow-hidden">
          <div className="relative min-h-[120%] w-full">
            <motion.div
              key={item._key}
              style={{ y: setMotionYvalue(index) }}
              className="relative min-h-[120%] w-full"
            >
              <Image
                className="object-cover"
                src={urlForImage(item.image.asset).url()}
                fill
                alt={item.image.alt ? item.image.alt : 'unknow Image'}
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PresentationElement;
