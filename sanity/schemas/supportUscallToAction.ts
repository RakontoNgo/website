import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'supportUscallToAction',
  type: 'object',
  title: 'support Us / Call To Actions',
  fields: [
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
});
