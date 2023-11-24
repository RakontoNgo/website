'use client';

import React from 'react';
import Image from 'next/image';
import { useScroll, motion } from 'framer-motion';
import useParallax from '@/utils/useParralax';

interface IProps {
  image: string;
  start: number;
  end: number;
  opacity?: number;
}

function Background({ image, start, end, opacity = 0.3 }: IProps) {
  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, start, end);

  return (
    <motion.div
      style={{ y }}
      className="h-screen w-full hidden  left-0 lg:flex flex-col absolute -z-10 animate-backgroundAnimation  top-[0]"
    >
      <div className="bg-gradient-to-b from-background to-transparent h-3/6 -translate-y-1 z-10 relative top-0" />

      <Image
        className="object-cover object-center"
        style={{ opacity }}
        src={image}
        fill
        alt=""
      />
    </motion.div>
  );
}

export default Background;
