'use client';

import React from 'react';
import { IHomePresentationSection } from '../../../types';
import PresentationElement from './PresentationElement';
import SectionContainer from '../global/SectionContainer';

interface IProps {
  data: IHomePresentationSection;
}

function Presentation({ data }: IProps) {
  return (
    <SectionContainer
      id="presentation"
      className="my-10 flex flex-col lg:py-20"
    >
      {data.contentType.map((item, index) => (
        <PresentationElement item={item} index={index} key={item._key} />
      ))}
    </SectionContainer>
  );
}

export default Presentation;
