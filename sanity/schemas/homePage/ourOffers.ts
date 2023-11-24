import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourOffers',
  type: 'object',
  title: 'Our Offers',
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
      name: 'callToAction',
      title: 'Call to action',
      type: 'object',
      fields: [
        defineField({
          name: 'nameFr',
          title: 'Name FR',
          type: 'string',
        }),
        defineField({
          name: 'nameEn',
          title: 'Name EN',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
        }),
      ],
    }),
  ],
});
