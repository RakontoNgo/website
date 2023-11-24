import React from 'react';
import Image from 'next/image';
import Body from '../articles/Body';
import { Block, SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  content: {
    TextEn: Block[];
    titleEn: string;
    textFr: Block[];
    titleFr: string;
    image: SanityImage;
  };
}

function NoOffers({ content }: IProps) {
  return (
    <div className=" pt-20 h-screen w-screen max-w-content  px-4 lg:px-10">
      <div className="relative z-10">
        <Body blockEn={content.TextEn} blockFr={content.textFr} />
      </div>
      <div className="flex lg:items-end lg:justify-end lg:-translate-y-44 animate-backgroundAnimation">
        <Image
          src={urlForImage(content.image.asset).url()}
          alt=""
          width={1000}
          height={400}
        />
      </div>
    </div>
  );
}

export default NoOffers;
