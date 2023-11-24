'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface IProps {
  itemId: string;
  children: React.ReactNode;
  backgroundImage: string;
  altImage: string;
  className?: string;
  link: string;
}

function HoverFadeEffect({
  itemId,
  children,
  backgroundImage,
  altImage,
  link,
  className,
}: IProps) {
  const [isMouseEnter, setIsMouseEnter] = useState<{
    id: string | null;
    value: boolean;
    shouldAnimate: boolean;
  }>({
    id: null,
    value: false,
    shouldAnimate: false,
  });

  return (
    <Link
      href={link}
      onMouseEnter={() =>
        setIsMouseEnter({ id: itemId, value: true, shouldAnimate: true })
      }
      onMouseLeave={() =>
        setIsMouseEnter({ id: null, value: false, shouldAnimate: false })
      }
      className={`${className} overflow-hidden cursor-pointer full flex items-center justify-center relative`}
    >
      <div className="h-full w-full absolute  top-0 z-10 items-center justify-center hidden lg:flex">
        <motion.div
          initial={isMouseEnter.shouldAnimate}
          animate={
            isMouseEnter && itemId === isMouseEnter.id
              ? {
                  opacity: [0, 0, 0.4, 0.8],
                }
              : {
                  opacity: [0.8, 0.8, 0.8, 0],
                }
          }
          transition={{ duration: 1 }}
          className="bg-background opacity-50 h-full w-full  "
        />

        <motion.div
          initial={isMouseEnter.shouldAnimate}
          animate={
            isMouseEnter && itemId === isMouseEnter.id
              ? {
                  rotate: [90, 90, 0, 0],
                  width: ['50%', '50%', '50%', '100%'],
                  height: ['50%', '50%', '50%', '100%'],
                  opacity: [0, 1, 1, 1],
                }
              : {
                  rotate: [0, 0, 0, 90, 90],
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  height: ['100%', '100%', '50%', '50%', '50%'],
                  opacity: [1, 1, 1, 0],
                }
          }
          transition={{ duration: 1 }}
          className="h-[50%] w-[50%] flex  items-center text-center justify-center absolute z-10  p-10"
        >
          <motion.div
            initial={isMouseEnter.shouldAnimate}
            animate={
              isMouseEnter && itemId === isMouseEnter.id
                ? {
                    opacity: [0, 0, 0, 0, 0, 0, 1],
                  }
                : {
                    opacity: [1, 0, 0, 0, 0, 0, 0, 0, 0],
                  }
            }
            transition={{ duration: 1.5 }}
          >
            {children}
          </motion.div>

          <Image
            src="/patternTL3.svg"
            alt=""
            height={60}
            width={60}
            className="absolute top-0 left-0"
          />
          <Image
            src="/patternTR3.svg"
            alt=""
            height={60}
            width={60}
            className="absolute top-0 right-0"
          />
          <Image
            src="/patternBL3.svg"
            alt=""
            height={60}
            width={60}
            className="absolute bottom-0 left-0"
          />
          <Image
            src="/patternBR3.svg"
            alt=""
            height={60}
            width={60}
            className="absolute bottom-0 right-0"
          />
        </motion.div>
      </div>
      <Image
        className={`object-cover ${
          isMouseEnter && itemId === isMouseEnter.id ? 'scale-125' : 'scale-100'
        } transform duration-700 ease-out`}
        fill
        priority
        src={backgroundImage}
        alt={altImage}
      />
    </Link>
  );
}

export default HoverFadeEffect;
