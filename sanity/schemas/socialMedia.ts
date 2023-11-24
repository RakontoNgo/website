import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialMedia',
  title: 'Social Medias',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
    }),
    defineField({
      name: 'iconWhite',
      title: 'Icon White',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
    }),
  ],
});
