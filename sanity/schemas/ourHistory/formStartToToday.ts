import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'formStartToToday',
  type: 'object',
  title: 'Form Start To Today (Our History)',
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
      name: 'logos',
      type: 'array',
      title: 'Logo History',
      of: [
        {
          type: 'object',
          name: 'Logo',
          fields: [
            {
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
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'Dates',
      type: 'array',
      title: 'Dates History',
      of: [
        {
          type: 'object',
          name: 'Dates',
          fields: [
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
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
              name: 'textFr',
              title: 'Text FR',
              type: 'text',
              validation: (Rule) => Rule.required().max(400),
            },
            {
              name: 'textEn',
              title: 'Text En',
              type: 'text',
              validation: (Rule) => Rule.required().max(400),
            },
          ],
        },
      ],
    }),
  ],
});
