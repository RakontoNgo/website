import React from 'react';
import { Slug } from 'sanity';
import { getAllOffersSlug, getOneOffer } from '@/lib/queries';
import { Metadata } from 'next';

import PageContainer from '@/components/global/PageContainer';
import OneOffer from '@/components/offers/OneOffer';
import SectionContainer from '@/components/global/SectionContainer';
import { IOffer } from '../../../../../types';
import client from '../../../../../sanity/lib/client';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getAllOffersSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const offer: IOffer = await client.fetch(getOneOffer, { slug });

  if (offer.keywords) {
    return {
      title: offer.title,
      description: offer.descriptionEN,
      keywords: offer.keywords,
    };
  }
  return {
    title: offer.title,
    description: offer.descriptionEN,
    keywords: '',
  };
}

async function Offer({ params: { slug } }: Props) {
  const offer = await client.fetch(getOneOffer, { slug });

  return (
    <PageContainer>
      <SectionContainer>
        <OneOffer offer={offer} link={`/offers/${offer.slug.current}/form`} />
      </SectionContainer>
    </PageContainer>
  );
}

export default Offer;
