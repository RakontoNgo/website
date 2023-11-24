'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
// import { useInView } from 'framer-motion';
import { useInView } from 'framer-motion';
import H2 from '../global/text/H2';
import { Block, SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import Body from '../articles/Body';
import SectionContainer from '../global/SectionContainer';
import SlideUp from '../animated/SlideUp';

// import SlideUp from '../animated/SlideUp';

function OurMissonAndValues({
  data,
}: {
  data: {
    _type: string;
    _key: string;
    titleEn: string;
    titleFr: string;
    textFr: Block[];
    TextEn: Block[];
    textFr2: Block[];
    TextEn2: Block[];
    image: SanityImage;
  };
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <SectionContainer id="ourvalues" className="py-32">
      <div
        ref={ref}
        className=" flex flex-col lg:flex-row lg:items-center  w-full "
      >
        <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
          {inView && (
            <SlideUp duration={1}>
              <Image
                src={urlForImage(data.image.asset).url()}
                alt=""
                width={200}
                height={200}
              />
            </SlideUp>
          )}
        </div>
        <div className="lg:w-9/12">
          {inView && (
            <SlideUp duration={1}>
              <H2
                className="font-bold italic"
                contentEn={data.titleEn}
                contentFr={data.titleFr}
              />
            </SlideUp>
          )}

          {inView && (
            <SlideUp
              duration={1}
              className="flex flex-col lg:flex-row lg:items-center"
            >
              <div className="lg:w-6/12 lg:p-5">
                <Body blockEn={data.TextEn} blockFr={data.textFr} />
              </div>
              <div className="lg:w-6/12 lg:p-5">
                <Body blockEn={data.TextEn2} blockFr={data.textFr2} />
              </div>
            </SlideUp>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}

export default OurMissonAndValues;
