'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import H2 from '../global/text/H2';
import BasicText from '../global/text/BasicText';
import NumberAnimation from './NumberAnimation';
import FullWidthImage from '../global/images/FullWidthImage';
import { IRakontoNumbers } from '../../../types';
import H1 from '../global/text/H1';

function RakontoNumbers({ data }: { data: IRakontoNumbers }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="bg-primary mt-20 lg:mt-52  flex flex-col items-center mb-10 pt-10"
    >
      <div className="p-5 w-full flex flex-col items-center">
        <H1
          textColor="text-white font-bold text-center"
          contentEn={data.titleEn}
          contentFr={data.titleFr}
        />
        <H2
          className="text-center text-white mt-2"
          contentEn={data.titleBisEn}
          contentFr={data.titleBisFr}
        />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-8/12 lg:mt-5">
          {data.numbers.map((element) => (
            <div className="" key={element._key}>
              {inView && (
                <NumberAnimation
                  targetValue={element.number}
                  animationDuration={element.animationDuration}
                />
              )}
              <BasicText
                className="text-center text-white"
                contentEn={element.titleEn}
                contentFr={element.titleFr}
              />
            </div>
          ))}
        </div>
      </div>

      <FullWidthImage
        title={data.textImageFR}
        titleEn={data.textImageEn}
        className="mt-10 max-h-[105rem] lg:h-[50rem]"
        path="/woarewe.webp"
        h1ClassName="lg:translate-y-[35%]"
        alt="unkown image"
        end={0}
        start={0}
        bgColor="none"
      />
    </div>
  );
}

export default RakontoNumbers;
