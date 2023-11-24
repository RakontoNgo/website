import ContactForm from '@/components/contactUs/ContactForm';
import React, { cache } from 'react';
import { Metadata } from 'next';
import { getContactInfos, getPages } from '@/lib/queries';
import getPageContent from '@/utils/getPageContent';
import SectionContainer from '@/components/global/SectionContainer';
import ContactText from '@/components/contactUs/ContactText';
import Image from 'next/image';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pagecContent = getPageContent(pages, '/contact');

  return {
    title: pagecContent.title,
    description: pagecContent.description,
    keywords: pagecContent.keywords,
  };
}

async function page() {
  const contactInfos = await clientFetch(getContactInfos);
  return (
    <SectionContainer className="w-full pt-20">
      <div className="flex items-start">
        <div className="w-full lg:w-6/12 min-h-screen">
          <ContactText contactInfos={contactInfos[0]} />
          <ContactForm />
        </div>
        <div className="w-7/12 h-[500px] hidden lg:flex relative animate-backgroundAnimation">
          <Image
            src="/HAND-BIRD-FOREST-GREEN.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default page;
