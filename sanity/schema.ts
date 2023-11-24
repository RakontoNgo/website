import { type SchemaTypeDefinition } from 'sanity';

// Global
import blockContent from './schemas/blockContent';
import subjects from './schemas/subjects';
import navLinks from './schemas/navigationLinks';
import desktopNavlinks from './schemas/desktopNavifgationLink';
import socialMedia from './schemas/socialMedia';
import supportUscallToAction from './schemas/supportUscallToAction';
import pages from './schemas/pages';
import contactInfo from './schemas/contactInfo';
import partners from './schemas/partners';
import externalLinks from './schemas/externalLinks';

// Home page content
import presentation from './schemas/homePage/presentation';
import ourProjects from './schemas/homePage/ourProjects';
import ourLastestLastArticles from './schemas/homePage/ourLastestLastArticles';
import ourOffers from './schemas/homePage/ourOffers';
import imagesGallery from './schemas/homePage/gallery';
import ourGoals from './schemas/homePage/ourGoals';
import supportUs from './schemas/homePage/supportUs';
import homeHeader from './schemas/homePage/header';

// Projects
import projects from './schemas/projects/projects';
import projectsCategories from './schemas/projects/projectsCategories';
import projectYears from './schemas/projects/projectYears';
import projectContent from './schemas/projects/projectContent';

// Articles
import articles from './schemas/articles';
import author from './schemas/author';

// Offers
import offers from './schemas/ourOffers/offers';
import noOffers from './schemas/ourOffers/noOffers';

// ourHistory
import team from './schemas/team';
import ourHistoryHeader from './schemas/ourHistory/ourHistoryHeader';
import ourHistoryTextSection from './schemas/ourHistory/ourHistoryTextSection';
import ourMissonAndValue from './schemas/ourHistory/ourMissonAndValue';
import formStartToToday from './schemas/ourHistory/formStartToToday';
import rakontoNumbers from './schemas/ourHistory/rakontoNumbers';

// legal Mention
import legalMention from './schemas/legalMention';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    legalMention,
    rakontoNumbers,
    formStartToToday,
    ourMissonAndValue,
    team,
    projectContent,
    homeHeader,
    projectYears,
    ourGoals,
    supportUscallToAction,
    articles,
    author,
    subjects,
    blockContent,
    navLinks,
    desktopNavlinks,
    socialMedia,
    pages,
    presentation,
    ourProjects,
    ourLastestLastArticles,
    ourOffers,
    imagesGallery,
    supportUs,
    contactInfo,
    partners,
    externalLinks,
    projects,
    projectsCategories,
    offers,
    ourHistoryHeader,
    ourHistoryTextSection,
    noOffers,
  ],
};

export default schema;
