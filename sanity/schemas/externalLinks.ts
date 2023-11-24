import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'externalLinks',
  title: 'External Links',
  type: 'document',
  fields: [
    defineField({
      name: 'titleFr',
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
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
