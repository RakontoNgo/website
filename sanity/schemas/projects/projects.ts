import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'KeyWords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEN',
      title: 'Description EN',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'descriptionFR',
      title: 'Description FR',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
      name: 'banner',
      title: 'Banner image',
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
    }),
    defineField({
      type: 'string',
      name: 'url',
      title: 'Video URL',
      description: 'A URL to a vimeo or youtube video',
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subjects' } }],
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        defineArrayMember({
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
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'projectsCategories' } }],
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'partners' } }],
    }),
    defineField({
      name: 'externalsLinks',
      title: 'Externals Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'externalLinks' } }],
    }),
    defineField({
      name: 'projectYear',
      title: 'Years',
      type: 'reference',
      to: { type: 'projectsYear' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'content',
      type: 'array',
      title: 'Project Content',
      of: [
        defineArrayMember({
          name: 'projectContent',
          title: 'project Content',
          type: 'projectContent',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
