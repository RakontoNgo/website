import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'imagesGallery',
  type: 'object',
  title: 'Images Gallery',
  fields: [
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),
  ],
});
