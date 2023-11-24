import { groq } from 'next-sanity';

export const getAllPosts = groq`
*[_type == "post"] {
    ...,
    author->,
    categories[]->
} | order(publishedAt desc)
`;

export const getAllDesktopNavigationLinks = groq`
*[_type == "desktopNavigationLinks"] {
    ...,
} | order(orderPlace asc)
`;

export const getAllNavigationLinks = groq`
*[_type == "navigationLinks"] {
    ...,
} | order(orderPlace asc)
`;

export const getAllSocialMedia = groq`
*[_type == "socialMedia"] {
    ...,
} 
`;

export const getPages = groq`
*[_type == "pages"] {
    ...,
} 
`;

export const getAllArticles = groq`
*[_type == "articles"] {
    ...,
    author->,
    partners[]->,
    subjects[]->
} | order(publishedAt desc)`;

export const getAllArticlesSlug = groq`
*[_type == "articles"] {
slug
}`;

export const getOneArticle = groq`
*[_type == "articles" && slug.current == $slug][0] {
  ...,
author->,
 partners[]->,
 subjects[]->
}`;

export const getContactInfos = groq`
*[_type == "contactInfos"] {
    ...,
} 
`;

export const getSubjects = groq`
*[_type == "subjects"] {
    ...,
} | order(orderPlacement asc)
`;

export const getProjects = groq`
*[_type == "projects"] {
    ...,
  projectYear->,
  partners[]->,
  subjects[]->,
  categories[]->,
  externalsLinks[]->
}| order(startDate desc)
`;

export const getProjectsYear = groq`
*[_type == "projectsYear"] {
    ...,
}| order(year desc) `;

export const getProjectsCategories = groq`
*[_type == "projectsCategories"] {
    ...,
} `;

export const getProjectsSlug = groq`
*[_type == "projects"] {
slug
}
`;

export const getOneProject = groq`
*[_type == "projects" && slug.current == $slug][0] {
  ...,
  projectYear->,
  partners[]->,
  subjects[]->,
  categories[]->,
  externalsLinks[]->,
  content[]{
    ...,
    externalsLinks[]->,
    files[]{
    ...,
    "manuscriptURL": asset->url
  }
  },
  files[]{
    ...,
    "manuscriptURL": asset->url
  }
}`;

export const getAllOffers = groq`
*[_type == "offers"] {
    ...,
    files[]{
    ...,
    "manuscriptURL": asset->url
    }
}`;

export const getAllOffersSlug = groq`
*[_type == "offers"] {
slug
}`;

export const getOneOffer = groq`
*[_type == "offers" && slug.current == $slug][0] {
    ...,
    files[]{
    ...,
    "manuscriptURL": asset->url
  }
} 
`;

export const getAllTeamMembers = groq`
*[_type == "team"] {
    ...,
  } | order(orderPlacement asc)
`;
