'use client';

import SlideUp from '@/components/animated/SlideUp';
import Body from '@/components/articles/Body';
import H2 from '@/components/global/text/H2';
import React from 'react';
import { IOurHistoryTextSection } from '../../../../types';

interface IProps {
  data: IOurHistoryTextSection[];
}

function Section1({ data }: IProps) {
  return (
    <div>
      <SlideUp duration={1.2} className="mt-10 lg:mt-32 lg:w-10/12">
        <H2
          className="font-bold italic"
          contentEn={data[0].titleEn}
          contentFr={data[0].titleFr}
        />
        <Body blockEn={data[0].TextEn} blockFr={data[0].textFr} />
      </SlideUp>
    </div>
  );
}

export default Section1;
