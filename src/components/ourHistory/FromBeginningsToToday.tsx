'use client';

import React from 'react';
import Image from 'next/image';
import H2 from '../global/text/H2';
import Length from '../global/Length';
import H3 from '../global/text/H3';
import BasicText from '../global/text/BasicText';
import { SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  data: {
    titleEn: string;
    titleFr: string;
    logos: {
      type: string;
      _key: string;
      image: SanityImage;
    }[];
    Dates: {
      _key: string;
      _type: string;
      date: string;
      titleEn: string;
      titleFr: string;
      textEn: string;
      textFr: string;
    }[];
  };
}

function FromBeginningsToToday({ data }: IProps) {
  return (
    <div className="mt-20 flex flex-col items-center lg:mt-10">
      <H2
        textColor="text-secondary"
        className="font-bold italic text-center lg:text-left"
        contentEn={data.titleEn}
        contentFr={data.titleFr}
      />

      {data.logos && (
        <div className="flex flex-col lg:flex-row items-center mt-5 ">
          {data.logos.map((logo, index) => (
            <div
              className="flex flex-col lg:flex-row items-center"
              key={logo._key}
            >
              <Image
                className="mt-8"
                src={urlForImage(logo.image.asset).url()}
                width={200}
                height={200}
                alt=""
              />
              {index !== data.logos.length - 1 && (
                <Length className="mt-10 rotate-45 lg:-rotate-45 lg:mx-5" />
              )}
            </div>
          ))}
        </div>
      )}

      {data.Dates && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 lg:mx-20">
          {data.Dates.map((date, index) => (
            <div
              key={date._key}
              className="flex flex-col items-center mt-10 lg:flex-row"
            >
              <div className="w-9/12 mr-2">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn={date.date}
                  contentFr={date.date}
                />
                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn={date.titleEn}
                  contentFr={date.titleFr}
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn={date.textEn}
                  contentFr={date.textFr}
                />
              </div>
              {index !== data.Dates.length - 1 && (
                <Length className="mt-10 rotate-45 lg:-rotate-45" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FromBeginningsToToday;
