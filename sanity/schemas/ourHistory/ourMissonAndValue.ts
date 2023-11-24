import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourMissonAndValue',
  type: 'object',
  title: 'our Misson And Value',
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
      title: 'Text EN',
      type: 'blockContent',
    }),
    defineField({
      name: 'textFr2',
      title: 'Text FR 2',
      type: 'blockContent',
    }),
    defineField({
      name: 'TextEn2',
      title: 'Text EN 2',
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
  ],
});
