import { SanityPage } from '../../types';

const getPageContent = (pages: SanityPage[], link: string): SanityPage => {
  const pageContent = pages.find((item) => item.link === link);
  if (pageContent) {
    return pageContent;
  }
  throw new Error('Page not found');
};

export default getPageContent;
