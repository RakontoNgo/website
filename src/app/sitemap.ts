import { MetadataRoute } from 'next';
import { cache } from 'react';
import {
  getAllArticles,
  getAllNavigationLinks,
  getAllOffers,
  getProjects,
} from '@/lib/queries';
import client from '../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));

const BASIC_URL = process.env.NEXT_PUBLIC_BASIC_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlList: string[] = [];

  const navLinks = await clientFetch(getAllNavigationLinks);
  const offers = await clientFetch(getAllOffers);
  const projects = await clientFetch(getProjects);
  const articles = await clientFetch(getAllArticles);

  for (let i = 0; i < navLinks.length; i += 1) {
    urlList.push(`${BASIC_URL}${navLinks[i].link}`);
  }

  for (let i = 0; i < offers.length; i += 1) {
    urlList.push(`${BASIC_URL}/offers/${offers[i].slug.current}`);
  }

  for (let i = 0; i < projects.length; i += 1) {
    urlList.push(`${BASIC_URL}/projects/${projects[i].slug.current}`);
  }

  for (let i = 0; i < articles.length; i += 1) {
    urlList.push(`${BASIC_URL}/articles/${articles[i].slug.current}`);
  }

  return urlList.map((url) => ({
    url,
    lastModified: new Date(),
  }));
}
