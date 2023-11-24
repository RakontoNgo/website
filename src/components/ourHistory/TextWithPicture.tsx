'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import H2 from '../global/text/H2';
import { Block, SanityImage } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';
import urlForImage from '../../../sanity/lib/image';
import Body from '../articles/Body';
import SlideUp from '../animated/SlideUp';

interface IProps {
  data: {
    titleFr: string;
    titleEn: string;
    image: SanityImage;
    textFr: Block[];
    TextEn: Block[];
    callToAction: {
      nameFr: string;
      nameEn: string;
      link: string;
    };
  };
}

function TextWithPicture({ data }: IProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="mt-10 min-h-screen flex flex-col xl:flex-row justify-center items-center lg:mt-0 xl:mx-32">
      <div ref={ref} className="xl:w-6/12 flex flex-col lg:items-end">
        {inView && (
          <SlideUp duration={1}>
            <Image
              src={urlForImage(data.image.asset).url()}
              height={700}
              width={700}
              alt=""
            />
          </SlideUp>
        )}
      </div>
      {inView && (
        <div className="xl:w-6/12 lg:p-5 lg:ml-10">
          <SlideUp duration={1}>
            <H2
              className="mt-5 lg:mt-10 font-bold italic"
              contentEn={data.titleEn}
              contentFr={data.titleFr}
            />
          </SlideUp>
          <SlideUp duration={1}>
            <Body blockEn={data.TextEn} blockFr={data.textFr} />
          </SlideUp>
          <SlideUp duration={1.2}>
            <LinkButton
              className="mt-5 lg:mt-10"
              link={data.callToAction.link}
              textEn={data.callToAction.nameEn}
              textFr={data.callToAction.nameFr}
            />
          </SlideUp>
        </div>
      )}
    </div>
  );
}

export default TextWithPicture;
