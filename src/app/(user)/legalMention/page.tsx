import { getPages } from '@/lib/queries';
import getPageContent from '@/utils/getPageContent';
import React, { cache } from 'react';
import { Metadata } from 'next';
import SectionContainer from '@/components/global/SectionContainer';
import Body from '@/components/articles/Body';
import H1 from '@/components/global/text/H1';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pageContent = getPageContent(pages, '/legalMention');

  return {
    title: pageContent.title,
    description: pageContent.description,
    keywords: pageContent.keywords,
  };
}

async function legalMention() {
  const pages = await clientFetch(getPages);
  const pageContent = getPageContent(pages, '/legalMention');

  return (
    <SectionContainer className=" py-24 lg:py-32">
      <H1
        className="mb-5"
        contentEn={pageContent.pageBuilder[0].titleEn}
        contentFr={pageContent.pageBuilder[0].titleFr}
      />
      <Body
        blockEn={pageContent.pageBuilder[0].TextEn}
        blockFr={pageContent.pageBuilder[0].textFr}
      />
    </SectionContainer>
  );
}

export default legalMention;
