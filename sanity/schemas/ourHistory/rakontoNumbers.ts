import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'rakontoNumbers',
  type: 'object',
  title: 'RaknontoNumbers',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Section Title EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleFr',
      title: 'Section Title FR',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleBisEn',
      title: 'Section Title Bis EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleBisFr',
      title: 'Section Title Bis FR',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'textImageFR',
      title: `Image s text FR`,
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'textImageEn',
      title: `Image s text EN`,
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'numbers',
      type: 'array',
      title: 'Numbers',
      of: [
        {
          type: 'object',
          name: 'oneNumber',
          fields: [
            {
              name: 'titleFr',
              title: 'Title FR',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'titleEn',
              title: 'Title En',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'number',
              title: 'Number',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'animationDuration',
              title: 'numberAnimation',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
});
