import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'supportUs',
  type: 'object',
  title: 'support Us',
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
      name: 'callToAction',
      title: 'Call to actions',
      type: 'array',
      of: [
        defineField({
          name: 'callToAction',
          title: 'Call to action',
          type: 'object',
          fields: [
            defineField({
              name: 'nameEn',
              title: 'Name EN',
              type: 'string',
            }),
            defineField({
              name: 'nameFr',
              title: 'Name FR',
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
              name: 'buttonNameFr',
              title: 'Button Name FR',
              type: 'string',
            }),
            defineField({
              name: 'buttonNameEn',
              title: 'Button Name En',
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
    }),
  ],
});
