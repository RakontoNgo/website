import React, { cache } from 'react';
import { Metadata } from 'next';
import { getAllArticles, getPages, getSubjects } from '@/lib/queries';
import ArticlesSection from '@/components/articles/ArticlesSection';
import PageContainer from '@/components/global/PageContainer';
import getPageContent from '@/utils/getPageContent';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pagecContent = getPageContent(pages, '/articles');

  return {
    title: pagecContent.title,
    description: pagecContent.description,
    keywords: pagecContent.keywords,
  };
}

async function Articles() {
  const subjects = await clientFetch(getSubjects);
  const articles = await clientFetch(getAllArticles);

  return (
    <PageContainer>
      <ArticlesSection subjects={subjects} articles={articles} />
    </PageContainer>
  );
}

export default Articles;
