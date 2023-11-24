import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'noOffers',
  type: 'object',
  title: 'No Offers',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Section Title EN',
      type: 'string',
    }),
    defineField({
      name: 'titleFr',
      title: 'Section Title FR',
      type: 'string',
    }),
    defineField({
      name: 'textFr',
      title: 'Text FR',
      type: 'blockContent',
    }),
    defineField({
      name: 'TextEn',
      title: 'Content EN',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
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
    }),
  ],
});
