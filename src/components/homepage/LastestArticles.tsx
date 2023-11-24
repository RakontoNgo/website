'use client';

import React, { useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Article, IHomeOurLastestArticlesSection } from '../../../types';
import H1 from '../global/text/H1';
import LinkButton from '../global/buttons/LinkButton';
import SlideUp from '../animated/SlideUp';
import ArticleCard from '../articles/ArticleCard';
import SectionContainer from '../global/SectionContainer';

interface IProps {
  data: IHomeOurLastestArticlesSection;
  articles: Article[];
}

function LastestArticles({ data, articles }: IProps) {
  const latestAticles = useMemo(() => articles.slice(0, 4), [articles]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 100px -50px 0px' });

  return (
    <SectionContainer className=" my-32 ">
      <div ref={ref}>
        {inView && (
          <SlideUp duration={1.2} className="flex items-end justify-between">
            <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
          </SlideUp>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  items-start gap-10 -mt-0">
          {latestAticles.map((item, index) => (
            <li key={item._id} className="my-5 w-full">
              {inView && (
                <SlideUp duration={index * 0.5 + 1}>
                  <ArticleCard item={item} />
                </SlideUp>
              )}
            </li>
          ))}
        </ul>
        <div className="flex w-full justify-end mt-5 lg:mt-5">
          <LinkButton
            className="w-9/12 lg:w-3/12"
            textEn={data.callToAction.nameEn}
            textFr={data.callToAction.nameFr}
            link={data.callToAction.link}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default LastestArticles;
