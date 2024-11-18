import PageContainer from '@/components/global/PageContainer';
import Header from '@/components/homepage/Header';
import Presentation from '@/components/homepage/Presentation';
import LastestArticles from '@/components/homepage/LastestArticles';
import type { Metadata } from 'next';
import OurProjects from '@/components/homepage/OurProjects';
import { cache } from 'react';
import { getAllArticles, getPages, getSubjects } from '@/lib/queries';
import ImagesGallery from '@/components/homepage/gallery/ImagesGallery';
import SupportUs from '@/components/homepage/SupportUs';

// import OurGoals from '@/components/homepage/OurGoals';
import OurOffers from '@/components/homepage/OurOffers';
import getPageContent from '@/utils/getPageContent';
import client from '../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const homePageContent = getPageContent(pages, '/');

  return {
    title: homePageContent.title,
    description: homePageContent.description,
    keywords: homePageContent.keywords,
  };
}

export default async function Home() {
  const pages = await clientFetch(getPages);

  const homePageContent = getPageContent(pages, '/');
  const articles = await clientFetch(getAllArticles);
  const subjects = await clientFetch(getSubjects);

  return (
    <PageContainer>
      <Header data={homePageContent.pageBuilder[7]} />
      <Presentation data={homePageContent.pageBuilder[0]} />
      {/* <OurGoals data={homePageContent.pageBuilder[1]} /> */}
      <OurProjects
        data={homePageContent.pageBuilder[2]}
        projectsSubjects={subjects}
      />
      <LastestArticles
        data={homePageContent.pageBuilder[3]}
        articles={articles}
      />
      <OurOffers data={homePageContent.pageBuilder[4]} />
      <ImagesGallery data={homePageContent.pageBuilder[5]} />
      <SupportUs data={homePageContent.pageBuilder[6]} />
    </PageContainer>
  );
}
