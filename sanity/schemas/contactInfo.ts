import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInfos',
  title: 'Contact Informations',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'number',
    }),
    defineField({
      name: 'contactPageTitleEn',
      title: 'Contact page title EN',
      type: 'string',
    }),
    defineField({
      name: 'contactPageTitleFr',
      title: 'Contact page title FR',
      type: 'string',
    }),
    defineField({
      name: 'contactPageTextFr',
      title: 'Contact page text FR',
      type: 'text',
    }),
    defineField({
      name: 'contactPageTextEn',
      title: 'Contact page text EN',
      type: 'text',
    }),
  ],
});
