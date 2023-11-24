import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'offers',
  title: 'Our Offers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title FR',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'KeyWords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEN',
      title: 'Description EN',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'descriptionFR',
      title: 'Description FR',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Starting Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Ending Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyFr',
      title: 'Content FR',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyEn',
      title: 'Content EN',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'PlacesAvailable',
      title: 'Places Available',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placesOccupied',
      title: 'Places occupied',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'file',
          name: 'File',
          type: 'file',
          fields: [
            defineField({
              name: 'title',
              title: 'Title FR',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Title EN',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Monday Array Name',
      name: 'mondayArrayName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
