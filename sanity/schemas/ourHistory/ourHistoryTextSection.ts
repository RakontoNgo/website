import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourHistoryTextSection',
  type: 'object',
  title: 'Our History Text Section',
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
