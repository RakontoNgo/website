export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

export interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

export interface IColor {
  alpha: number;
  _type: string;
  hex: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'bloclquote';
}

export interface SanityImage {
  _type: Image;
  alt?: string;
  asset: {
    _type: 'reference';
    _ref: string;
  };
}

export interface Subject extends SanityDocument {
  description: string;
  titleFr: string;
  titleEn: string;
  subjectColor: IColor;
}

export interface IPartners extends SanityDocument {
  name: string;
  link: string;
  logo: SanityImage;
}

export interface Author extends SanityDocument {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

export interface IYear extends SanityDocument {
  year: number;
  _type: string;
}

export interface SanityPage extends SanityDocument {
  keywords: string[];
  title: string;
  description: string;
  link: string;
  pageBuilder: any;
}

export interface INavLinks extends SanityDocument {
  nameEn: string;
  nameFr: string;
  link: string;
  orderPlace: string;
}

export interface ISocialMedia extends SanityDocument {
  name: string;
  link: string;
  icon: SanityImage;
  iconWhite: SanityImage;
}

export interface IHomePage extends SanityPage {
  pageBuilder: [
    {
      _type: string;
      _key: string;
      titleFr: string;
      titleEn: string;
      textEn: string;
      textFr: string;
      image: SanityImage;
    },
    {
      _type: string;
      _key: string;
      titleFr: string;
      titleEn: string;
      textEn: string;
      textFr: string;
      callToAction: {
        link: string;
        nameFr: string;
        nameEn: string;
      };
    },
  ];
}

export interface IHomePresentationSection {
  _type: string;
  _key: string;
  textEn: string;
  textFr: string;
  contentType: {
    _key: string;
    nameEn: string;
    nameFr: string;
    descriptionEn: string;
    descriptionFr: string;
    image: SanityImage;
    color: {
      hex: string;
    };
  }[];
}

export interface IHomeOurProjectSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  textEn: string;
  textFr: string;
  projectCategories: {
    _key: string;
    nameFr: string;
    nameEn: string;
    link: string;
  }[];
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface IHomeHeader {
  textEn: string;
  textFr: string;
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface IHomeOurOffersSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface IHomeGalleryImage {
  _type: string;
  _key: string;
  gallery: SanityImage[];
}

export interface IHomeSupportUs {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  TextEn: Block[];
  textFr: Block[];
  callToAction: {
    _type: string;
    _key: string;
    nameFr: string;
    nameEn: string;
    TextEn: Block[];
    textFr: Block[];
    link: string;
    buttonNameFr: string;
    buttonNameEn: string;
  }[];
}

export interface IHomeOurLastestArticlesSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface IHomeOurGoalsSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  goals: {
    _key: string;
    descriptionFr: string;
    descriptionEn: string;
    number: number;
    keywordsFr: string;
    keywordsEn: string;
  }[];
}

export interface Article extends SanityDocument {
  author: Author;
  keywords: string[];
  bodyEn: Block[];
  bodyFr: Block[];
  subjects: Subject[];
  partners: IPartners[];
  mainImage: SanityImage;
  banner: SanityImage;
  slug: Slug;
  title: string;
  titleEn: string;
  url: string;
  gallery: SanityImage[];
  descriptionEN: string;
  descriptionFR: string;
  publishedAt: string;
}

export interface IExternalsLinks extends SanityDocument {
  titleFr: string;
  titleEn: string;
  link: string;
}

export interface IContactInfos extends SanityDocument {
  email: string;
  phoneNumber: number;
  contactPageTitleEn: string;
  contactPageTitleFr: string;
  contactPageTextFr: string;
  contactPageTextEn: string;
}

export interface IFile extends SanityDocument {
  author: Author;
  title: string;
  titleEn: string;
  asset: {
    _type: 'reference';
    _ref: string;
  };
  manuscriptURL: string;
}

export interface IProjectCategories extends SanityDocument {
  titleFr: string;
  titleEn: string;
  projectColor: IColor;
}

export interface ISubject extends SanityDocument {
  titleFr: string;
  titleEn: string;
}

export interface IProjectYear extends SanityDocument {
  year: number;
}

export interface IProject extends SanityDocument {
  title: string;
  titleEn: string;
  descriptionFR: string;
  descriptionEN: string;
  keywords: string[];
  slug: Slug;
  url?: string;
  mainImage: SanityImage;
  banner: SanityImage;
  subjects?: Subject[];
  partners?: IPartners[];
  categories: IProjectCategories[];
  files?: IFile[];
  externalsLinks?: IExternalsLinks[];
  projectYear: IProjectYear;
  content: {
    _key: string;
    title: string;
    titleEn: string;
    textFR?: Block[];
    textEn?: Block[];
    gallery?: SanityImage[];
    url?: string;
    externalsLinks?: IExternalsLinks[];
    files?: IFile[];
  }[];
}

export interface IOffer extends SanityDocument {
  title: string;
  titleEn: string;
  descriptionFR: string;
  descriptionEN: string;
  keywords: string[];
  slug: Slug;
  mainImage: SanityImage;
  bodyEn: Block[];
  bodyFr: Block[];
  startDate: string;
  endDate: string;
  files?: IFile[];
  formLink: string;
  mondayArrayName: string;
  mondayGroupName: string;
  placesOccupied: number;
  PlacesAvailable: number;
  location: string;
}

export interface IMondayClmnArray {
  title: string;
  id: string;
  type: string;
  settings_str: string;
  value?: string | number;
}

export interface ITeam extends SanityDocument {
  firstName: string;
  lastName?: string;
  roleFr: string;
  roleEn: string;
  s;
  descriptionFr: string;
  descriptionEn: string;
  profilPicture: SanityImage;
  pronounsFr?: string;
  pronounsEn?: string;
}

export interface IOurHistoryTextSection {
  _type: string;
  _key: string;
  titleEn: string;
  titleFr: string;
  textFr: Block[];
  TextEn: Block[];
  image: SanityImage;
}

export interface IRakontoNumbers {
  titleEn: string;
  titleFr: string;
  titleBisFr: string;
  titleBisEn: string;
  textImageFR: string;
  textImageEn: string;
  numbers: {
    animationDuration: number;
    number: number;
    titleEn: string;
    _type: string;
    _key: string;
    titleFr: string;
  }[];
}
