import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
    defineField({ name: 'title', title: 'Page name', type: 'string' }),

    defineField({
      name: 'description',
      title: 'Page description',
      type: 'text',
    }),
    defineField({
      name: 'KeyWords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Sections',
      of: [
        defineArrayMember({
          name: 'presentation',
          title: 'Presentation',
          type: 'presentation',
        }),
        defineArrayMember({
          name: 'ourProjects',
          title: 'Our Projects',
          type: 'ourProjects',
        }),
        defineArrayMember({
          name: 'ourLastestArticles',
          title: 'Our Latest Articles',
          type: 'ourLastestArticles',
        }),
        defineArrayMember({
          name: 'ourOffers',
          title: 'Our Offers',
          type: 'ourOffers',
        }),
        defineArrayMember({
          name: 'imagesGallery',
          title: 'Images Gallery',
          type: 'imagesGallery',
        }),
        defineArrayMember({
          name: 'supportUs',
          title: 'Support US',
          type: 'supportUs',
        }),
        defineArrayMember({
          name: 'ourGoals',
          title: 'Our Goals',
          type: 'ourGoals',
        }),
        defineArrayMember({
          name: 'homeHeader',
          title: 'Home Header',
          type: 'homeHeader',
        }),
        defineArrayMember({
          name: 'ourHistoryTextHeader',
          title: 'Our History Text Header',
          type: 'ourHistoryTextHeader',
        }),
        defineArrayMember({
          name: 'ourHistoryTextSection',
          title: 'Our History Text Section',
          type: 'ourHistoryTextSection',
        }),
        defineArrayMember({
          name: 'ourMissonAndValue',
          title: 'our Misson And Value',
          type: 'ourMissonAndValue',
        }),
        defineArrayMember({
          name: 'formStartToToday',
          title: 'Form Start To Today (Our History)',
          type: 'formStartToToday',
        }),
        defineArrayMember({
          name: 'rakontoNumbers',
          title: 'Rakonto Numbers',
          type: 'rakontoNumbers',
        }),
        defineArrayMember({
          name: 'legalMention',
          title: 'Legal Mention',
          type: 'legalMention',
        }),
        defineArrayMember({
          name: 'noOffers',
          title: 'No Offers',
          type: 'noOffers',
        }),
      ],
    }),
  ],
});
