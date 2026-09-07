import PageContainer from '@/components/global/PageContainer';
import OurMissonAndValues from '@/components/ourHistory/OurMissonAndValues';

import React, { cache } from 'react';
import { getPages } from '@/lib/queries';
import getPageContent from '@/utils/getPageContent';
import { Metadata } from 'next';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pages = await clientFetch(getPages);

  const pageContent = getPageContent(pages, '/ourmission');

  return {
    title: pageContent.title,
    description: pageContent.description,
    keywords: pageContent.keywords,
  };
}

async function page() {
  const pages = await clientFetch(getPages);

  const pageContent = getPageContent(pages, '/ourmission').pageBuilder;

  return (
    <PageContainer>
      <OurMissonAndValues data={pageContent[0]} />
    </PageContainer>
  );
}

export default page;
