import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourGoals',
  type: 'object',
  title: 'Our goals',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title EN',
      type: 'string',
    }),
    defineField({
      name: 'titleFr',
      title: 'Title FR',
      type: 'string',
    }),
    defineField({
      name: 'goals',
      title: 'Goals',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'number',
            }),

            defineField({
              name: 'descriptionFr',
              title: 'DescriptionFr',
              type: 'text',
            }),

            defineField({
              name: 'descriptionEn',
              title: 'DescriptionEn',
              type: 'text',
            }),
            defineField({
              name: 'keywordsFr',
              title: 'Green words FR',
              type: 'string',
            }),
            defineField({
              name: 'keywordsEn',
              title: 'Green words EN',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});
