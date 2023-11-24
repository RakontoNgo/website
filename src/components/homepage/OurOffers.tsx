'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { IHomeOurOffersSection } from '../../../types';
import H1 from '../global/text/H1';
import LinkButton from '../global/buttons/LinkButton';
import SectionContainer from '../global/SectionContainer';
import SlideUp from '../animated/SlideUp';

function OurOffers({ data }: { data: IHomeOurOffersSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <SectionContainer bgImage="/backgroundHome/bgOffer5.png" className="">
      <div ref={ref} className="flex flex-col items-center py-52">
        {inView && (
          <SlideUp duration={1.2} className="text-center lg:w-full ">
            <H1
              contentEn={data.titleEn}
              contentFr={data.titleFr}
              className="py-5"
            />
          </SlideUp>
        )}
        {inView && (
          <SlideUp duration={1.5}>
            <LinkButton
              className="w-full  lg:w-[350px] mt-10 text-center"
              textEn={data.callToAction.nameEn}
              textFr={data.callToAction.nameFr}
              link={data.callToAction.link}
            />
          </SlideUp>
        )}
      </div>
    </SectionContainer>
  );
}

export default OurOffers;
