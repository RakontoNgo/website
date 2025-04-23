'use client';

import React from 'react';
import Image from 'next/image';
// import { useScroll } from 'framer-motion';
// import useParallax from '@/utils/useParralax';

interface IProps {
  image: string;
  start: number;
  end: number;
  opacity?: number;
}

function Background({ image, start, end, opacity = 0.3 }: IProps) {
  // const { scrollYProgress } = useScroll();

  // const y = useParallax(scrollYProgress, start, end);

  return (
    <div className="h-screen w-full hidden  left-0 lg:flex flex-col absolute -z-10 animate-backgroundAnimation  -top-20">
      <div className="bg-gradient-to-b from-background to-transparent h-3/6 -translate-y-1 z-10 relative top-0" />

      <Image
        className="object-cover object-center"
        style={{ opacity }}
        src={image}
        priority
        fill
        alt="Rakonto History"
      />
    </div>
  );
}

export default Background;
