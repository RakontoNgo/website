import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'legalMention',
  type: 'object',
  title: 'Legal Mention',
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
  ],
});
