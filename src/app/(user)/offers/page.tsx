import React, { cache } from 'react';
import { Metadata } from 'next';
import { getAllOffers, getPages } from '@/lib/queries';
import getPageContent from '@/utils/getPageContent';
import PageContainer from '@/components/global/PageContainer';
import OffersSection from '@/components/offers/OffersSection';
import NoOffers from '@/components/offers/NoOffers';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pageContent = getPageContent(pages, '/offers');

  return {
    title: pageContent.title,
    description: pageContent.description,
    keywords: pageContent.keywords,
  };
}

async function Offers() {
  const pages = await clientFetch(getPages);
  const offers = await clientFetch(getAllOffers);
  const offersPageContent = getPageContent(pages, '/offers');

  return (
    <PageContainer>
      {offers.length !== 0 ? (
        <OffersSection offers={offers} />
      ) : (
        <NoOffers content={offersPageContent.pageBuilder[0]} />
      )}
    </PageContainer>
  );
}

export default Offers;
