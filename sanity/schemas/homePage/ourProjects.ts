import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourProjects',
  type: 'object',
  title: 'Our Projects',
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
      name: 'textEn',
      title: 'Rakonto description EN',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'projectCategories',
      title: 'Project Catégories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'nameFr',
              title: 'Name FR',
              type: 'string',
            }),
            defineField({
              name: 'nameEn',
              title: 'Name En',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
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
