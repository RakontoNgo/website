'use client';

import { IOurHistoryTextSection } from '../../../types';
import Section1 from './textSections/Section1';
import Section from './textSections/Section';

interface IProps {
  data: IOurHistoryTextSection[];
}

function TextSection({ data }: IProps) {
  const textSectionsArray = [data[1], data[2], data[3]];
  return (
    <>
      <Section1 data={data} />

      {textSectionsArray.map((section, index) => (
        <Section
          data={section}
          key={section._key}
          class1={
            (index === 0 && 'mt-10 lg:mt-0 lg:flex-row  ') ||
            (index === 1 && 'mr-10 mt-10 lg:mr-52 lg:flex-row-reverse') ||
            (index === 2 &&
              'mr-10 mt-10 lg:mt-12 lg:max-w-[900px] lg:flex-row ')
          }
          class2={
            (index === 0 && 'w-4/12') ||
            (index === 1 && 'w-4/12') ||
            (index === 2 && ' w-5/12')
          }
          class3={
            (index === 0 && 'lg:ml-20 lg:w-8/12') ||
            (index === 1 && 'lg:w-8/12 lg:ml-52') ||
            (index === 2 && ' lg:w-7/12')
          }
          imageSize={index === 2 ? 200 : 300}
        />
      ))}
    </>
  );
}

export default TextSection;
