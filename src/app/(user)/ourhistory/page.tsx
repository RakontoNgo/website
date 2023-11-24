import PageContainer from '@/components/global/PageContainer';
import SectionContainer from '@/components/global/SectionContainer';
import TextWithPicture from '@/components/ourHistory/TextWithPicture';
import React, { cache } from 'react';
import { getAllTeamMembers, getPages } from '@/lib/queries';
import TeamMembers from '@/components/ourHistory/TeamMembers';
import OurMissonAndValues from '@/components/ourHistory/OurMissonAndValues';
import TextSection from '@/components/ourHistory/TextSection';
import RakontoNumbers from '@/components/ourHistory/RakontoNumbers';
import getPageContent from '@/utils/getPageContent';
import { Metadata } from 'next';
import Header from '@/components/ourHistory/Header';
import FromBeginningsToToday from '@/components/ourHistory/FromBeginningsToToday';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pagecContent = getPageContent(pages, '/ourHistory');

  return {
    title: pagecContent.title,
    description: pagecContent.description,
    keywords: pagecContent.keywords,
  };
}

async function page() {
  const pages = await clientFetch(getPages);

  const team = await clientFetch(getAllTeamMembers);
  const pageContent = getPageContent(pages, '/ourHistory').pageBuilder;

  const textSectionArray = pageContent.slice(2, 6);

  return (
    <PageContainer>
      <SectionContainer>
        <Header dataBanner={pageContent[0]} dataIntro={pageContent[1]} />
        <TextSection data={textSectionArray} />
        <TextWithPicture data={pageContent[6]} />
        <TeamMembers team={team} />
        <OurMissonAndValues data={pageContent[7]} />
        <FromBeginningsToToday data={pageContent[8]} />
        <RakontoNumbers data={pageContent[9]} />
      </SectionContainer>
    </PageContainer>
  );
}

export default page;
