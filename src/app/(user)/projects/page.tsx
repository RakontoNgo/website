import React, { cache } from 'react';
import { Metadata } from 'next';
import {
  getPages,
  getProjects,
  getProjectsCategories,
  getProjectsYear,
  getSubjects,
} from '@/lib/queries';
import getPageContent from '@/utils/getPageContent';
import PageContainer from '@/components/global/PageContainer';
import ProjectsList from '@/components/projects/ProjectsList';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pagecContent = getPageContent(pages, '/projects');

  return {
    title: pagecContent.title,
    description: pagecContent.description,
    keywords: pagecContent.keywords,
  };
}

async function page() {
  const projects = await clientFetch(getProjects);
  const projectsCategories = await clientFetch(getProjectsCategories);
  const subjects = await clientFetch(getSubjects);
  const years = await clientFetch(getProjectsYear);

  return (
    <PageContainer>
      <ProjectsList
        projectCategories={projectsCategories}
        subjects={subjects}
        years={years}
        projects={projects}
      />
    </PageContainer>
  );
}

export default page;
