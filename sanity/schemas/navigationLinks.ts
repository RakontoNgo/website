import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigationLinks',
  title: 'Navigation links',
  type: 'document',
  fields: [
    defineField({
      name: 'nameEn',
      title: 'Name English',
      type: 'string',
    }),
    defineField({
      name: 'nameFr',
      title: 'Name French',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Path Link',
      type: 'string',
    }),
    defineField({
      name: 'orderPlace',
      title: 'Order place',
      type: 'number',
    }),
  ],
});
