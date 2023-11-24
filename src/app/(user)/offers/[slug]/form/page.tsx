import React from 'react';
import { Slug } from 'sanity';
import { getAllOffersSlug, getOneOffer } from '@/lib/queries';
import { Metadata } from 'next';
import Image from 'next/image';
import OffersForm from '@/components/offers/OffersForm';
import H2 from '@/components/global/text/H2';
import ErrorMessage from '@/components/global/errors/ErrorMessage';
import client from '../../../../../../sanity/lib/client';
import { IOffer } from '../../../../../../types';
import urlForImage from '../../../../../../sanity/lib/image';

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

async function formOffer({ params: { slug } }: Props) {
  const offer: IOffer = await client.fetch(getOneOffer, { slug });
  const MONDAY_API_KEY = process.env.NEXT_PUBLIC_MONDAY_API_KEY;
  const MONDAY_API_URL = process.env.NEXT_PUBLIC_MONDAY_API_URL;

  const query =
    '{ boards (limit:5) {name id groups{title id} columns{title id type settings_str} }  }';

  const getEventMondayArray = await fetch(MONDAY_API_URL as string, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: MONDAY_API_KEY as string,
    },
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json());

  const findMondayBoardName = getEventMondayArray.data.boards.find(
    (board: any) => board.name === offer.mondayArrayName
  );

  return (
    <div className="w-full flex flex-col  lg:flex-row px-4 lg:px-10  max-w-content">
      <div className="w-full lg:w-7/12 mt-10  min-h-[70vh]  flex  overflow-hidden">
        {findMondayBoardName ? (
          <OffersForm mondayBoard={findMondayBoardName} />
        ) : (
          <ErrorMessage />
        )}
      </div>
      <div className="hidden lg:flex flex-col lg:w-5/12  lg:h-[80vh] mt-20 lg:sticky lg:top-20 right-0">
        <H2
          className="flex"
          contentEn={offer.titleEn}
          contentFr={offer.title}
        />
        <Image
          src={urlForImage(offer.mainImage.asset).url()}
          width={1200}
          height={300}
          alt={offer.mainImage.alt ? offer.mainImage.alt : 'unkown image'}
        />
      </div>
    </div>
  );
}

export default formOffer;
