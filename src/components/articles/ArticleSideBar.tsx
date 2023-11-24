/* eslint-disable no-restricted-syntax */

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SlideUp from '../animated/SlideUp';
import { Article } from '../../../types';
import H3 from '../global/text/H3';
import DateFormat from '../global/DateFormat';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';

interface IProps {
  article: Article;
  allArticles: Article[];
}

function ArticleSideBar({ article, allArticles }: IProps) {
  const [postList, setArticlesList] = useState<Article[]>([]);

  function getSimilarArticles(articles: Article[], art: Article) {
    const similarArticles: Article[] = [];

    for (const a of articles) {
      const array1: string[] = [];
      const array2: string[] = [];

      a.subjects.forEach((c) => array1.push(c.titleEn));
      art.subjects.forEach((c) => array2.push(c.titleEn));

      if (a.titleEn !== art.titleEn && array2.some((c) => array1.includes(c))) {
        similarArticles.push(a);
      }
    }
    return similarArticles;
  }

  useEffect(() => {
    setArticlesList(getSimilarArticles(allArticles, article));
  }, [allArticles, article]);

  return (
    <div className="h-[80vh] w-[25%] font-josefin border-l pl-10 border-primary hidden lg:flex flex-col lg:sticky top-20 ml-20">
      <div>
        <SlideUp duration={2} scaleInit={0.8} scaleFinish={1}>
          <H3
            className="text-primary"
            contentEn="ABOUT THIS ARTICLE"
            contentFr="À PROPOS DE CETTE ARTICLE"
          />
        </SlideUp>
        <div className="mt-3">
          <SlideUp duration={2} scaleInit={0.8} scaleFinish={1}>
            <BasicText contentEn={article.titleEn} contentFr={article.title} />
          </SlideUp>
          <SlideUp duration={2} scaleInit={0.8} scaleFinish={1}>
            <div className="opacity-70 flex flex-row w-full">
              {article.author.name} /
              <DateFormat date={article.publishedAt} />
            </div>
          </SlideUp>
          <SlideUp duration={2} scaleInit={0.8} scaleFinish={1}>
            {article.url && (
              <LinkButton
                link={article.url}
                textEn="Youtube video"
                textFr="Vidéo Youtube"
                className="mt-5 w-40"
              />
            )}
          </SlideUp>
        </div>
      </div>

      <div className="mt-12">
        <SlideUp duration={2} scaleInit={0.8} scaleFinish={1}>
          <H3
            className="text-primary"
            contentEn="ON THE SAME SUBJECT"
            contentFr="SUR LE MÊME SUJET"
          />
        </SlideUp>
        <div className="space-y-5 mt-3 flex flex-col ">
          {postList.slice(0, 3).map((a) => (
            <SlideUp key={a._id} duration={2} scaleInit={0.8} scaleFinish={1}>
              <div className="transform hover:scale-105  duration-300">
                <Link href={`/articles/${a.slug.current}`}>
                  <BasicText contentEn={a.titleEn} contentFr={a.title} />
                  <div className="flex text-lg opacity-70">
                    {' '}
                    <p>{article.author.name} . </p>
                    <DateFormat date={a.publishedAt} />
                  </div>
                  <button
                    type="button"
                    className="underline flex items-end w-full mt-1 text-primary text-lg"
                  >
                    Lire l article
                  </button>
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleSideBar;
