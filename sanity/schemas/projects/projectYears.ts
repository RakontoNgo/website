import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectsYear',
  title: 'Years',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
