import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'subjects',
  title: 'Subjects',
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
      name: 'subjectColor',
      title: 'Subject Color',
      type: 'color',
    }),
    defineField({
      name: 'orderPlacement',
      title: 'Order Placement',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
