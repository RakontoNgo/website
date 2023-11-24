import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectsCategories',
  title: 'Projects Categories',
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
      name: 'projectColor',
      title: 'Project Color',
      type: 'color',
    }),
  ],
});
