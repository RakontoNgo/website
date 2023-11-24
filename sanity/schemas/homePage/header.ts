import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeHeader',
  type: 'object',
  title: 'Home Header',
  fields: [
    defineField({
      name: 'textEn',
      title: 'Rakonto description EN',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),

    defineField({
      name: 'textFr',
      title: 'Rakonto description FR',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
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
