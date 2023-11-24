import React from 'react';
import {
  getAllArticles,
  getAllArticlesSlug,
  getOneArticle,
} from '@/lib/queries';
import { Slug } from 'sanity';
import PageContainer from '@/components/global/PageContainer';
import BasicText from '@/components/global/text/BasicText';
import FullWidthImage from '@/components/global/images/FullWidthImage';
import Body from '@/components/articles/Body';
import GalleryImage from '@/components/global/images/GalleryImage';
import ArticleSideBar from '@/components/articles/ArticleSideBar';
import Partners from '@/components/global/Partners';
import ArticlesFooter from '@/components/articles/ArticlesFooter';
import { Metadata } from 'next';
import SectionContainer from '@/components/global/SectionContainer';
import client from '../../../../../sanity/lib/client';
import { Article } from '../../../../../types';
import urlForImage from '../../../../../sanity/lib/image';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getAllArticlesSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const article: Article = await client.fetch(getOneArticle, { slug });

  if (article.keywords) {
    return {
      title: article.title,
      description: article.descriptionEN,
      keywords: article.keywords,
    };
  }
  return {
    title: article.title,
    description: article.descriptionEN,
    keywords: '',
  };
}

async function OneArticle({ params: { slug } }: Props) {
  const article: Article = await client.fetch(getOneArticle, { slug });
  const articles: Article[] = await client.fetch(getAllArticles);

  return (
    <PageContainer>
      <SectionContainer>
        <FullWidthImage
          title={article.title}
          titleEn={article.titleEn}
          className="mt-5"
          path={
            article.banner
              ? urlForImage(article.banner.asset).url()
              : urlForImage(article.mainImage.asset).url()
          }
          alt={article.mainImage.alt ? article.mainImage.alt : 'unknow Image'}
          end={200}
          start={-400}
        />
        <BasicText
          className="mt-5 font-bold"
          contentEn={article.descriptionEN}
          contentFr={article.descriptionFR}
        />
        <div className="flex mt-10">
          <div className="w-full lg:w-8/12">
            <Body blockEn={article.bodyEn} blockFr={article.bodyFr} />
            <GalleryImage data={article.gallery} />
            {article.partners && <Partners data={article.partners} />}
          </div>
          <ArticleSideBar article={article} allArticles={articles} />
        </div>
        <ArticlesFooter article={article} allArticles={articles} />
      </SectionContainer>
    </PageContainer>
  );
}

export default OneArticle;
