import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectContent',
  type: 'object',
  title: 'projectContent',
  fields: [
    defineField({
      name: 'title',
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
      name: 'textEn',
      title: 'Text En',
      type: 'blockContent',
    }),
    defineField({
      name: 'textFR',
      title: 'Text FR',
      type: 'blockContent',
    }),
    defineField({
      type: 'string',
      name: 'url',
      title: 'Video URL',
      description: 'A URL to a vimeo or youtube video',
    }),
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
    defineField({
      name: 'externalsLinks',
      title: 'Externals Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'externalLinks' } }],
    }),

    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        defineField({
          title: 'file',
          name: 'File',
          type: 'file',
          fields: [
            defineField({
              name: 'title',
              title: 'Title FR',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Title EN',
              type: 'string',
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'reference',
              to: { type: 'author' },
            }),
          ],
        }),
      ],
    }),
  ],
});
