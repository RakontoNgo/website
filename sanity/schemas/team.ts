import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'roleFr',
      title: 'rôle FR',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roleEn',
      title: 'rôle EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionFr',
      title: 'Description Fr',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description En',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profilPicture',
      title: 'Profil Picture',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pronounsEn',
      title: 'pronounsEn',
      type: 'string',
    }),
    defineField({
      name: 'pronounsFr',
      title: 'pronounsFr',
      type: 'string',
    }),
    defineField({
      name: 'orderPlacement',
      title: 'Order Placement',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
