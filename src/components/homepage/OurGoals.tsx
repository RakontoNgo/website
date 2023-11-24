'use client';

import React, { useMemo } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { IHomeOurGoalsSection } from '../../../types';
import H1 from '../global/text/H1';

function OurGoals({ data }: { data: IHomeOurGoalsSection }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  const goalsDescription = useMemo(() => {
    const array: {
      key: string;
      number: number;
      keywordsFr: string;
      sentenceFr: string;
      keywordsEn: string;
      sentenceEn: string;
    }[] = [];
    data.goals.forEach((item) => {
      const splitEn = item.descriptionEn.split(' ');
      const splitFr = item.descriptionFr.split(' ');

      const keyWordsEn = splitEn.splice(0, 1);
      const keyWordsFr = splitFr.splice(0, 1);

      array.push({
        key: item._key,
        number: item.number,
        keywordsEn: keyWordsEn.join(' '),
        sentenceEn: splitEn.join(' '),
        keywordsFr: keyWordsFr.join(' '),
        sentenceFr: splitFr.join(' '),
      });
    });

    return array;
  }, [data.goals]);

  return (
    <section className="my-10 flex flex-col lg:flex-row-reverse">
      <H1
        className="text-right w-full lg:w-6/12 xl:w-4/12"
        contentEn={data.titleEn}
        contentFr={data.titleFr}
      />

      <ul className="flex flex-col space-y-8 mt-10  w-full lg:w-6/12 xl:w-8/12">
        {goalsDescription.map((item) => (
          <li
            className="flex items-center border-b border-primary pb-5"
            key={item.key}
          >
            <span className="text-[3rem] font-francoisOne text-primary mr-4">
              0{item.number}
            </span>
            <div className="flex items-start ">
              <span className="font-josefin text-[16px] ml-1 leading-[18px] md:leading-[24px] text-primary uppercase mr-2 float-left">
                {selectedLanguage === 'Fr' ? item.keywordsFr : item.keywordsEn}
                <span className="font-josefin text-[16px] lowercase ml-1 leading-[18px] md:leading-[24px] text-textColor   md:text-[20px]">
                  {item.sentenceFr}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OurGoals;
