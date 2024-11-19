import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'supportUs',
  type: 'object',
  title: 'support Us',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Section Title EN',
      type: 'string',
    }),
    defineField({
      name: 'titleFr',
      title: 'Section Title FR',
      type: 'string',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to actions',
      type: 'array',
      of: [
        defineField({
          name: 'callToAction',
          title: 'Call to action',
          type: 'object',
          fields: [
            defineField({
              name: 'nameEn',
              title: 'Name EN',
              type: 'string',
            }),
            defineField({
              name: 'nameFr',
              title: 'Name FR',
              type: 'string',
            }),
            defineField({
              name: 'textFr',
              title: 'Text FR',
              type: 'blockContent',
            }),
            defineField({
              name: 'TextEn',
              title: 'Content EN',
              type: 'blockContent',
            }),

            defineField({
              name: 'buttonNameFr',
              title: 'Button Name FR',
              type: 'string',
            }),
            defineField({
              name: 'buttonNameEn',
              title: 'Button Name En',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'donationSection',
      title: 'Donation Section',
      type: 'object',
      fields: [
        defineField({
          name: 'textIntroFr',
          type: 'text',
          title: 'Text Intro FR',
        }),
        defineField({
          name: 'textIntroEn',
          type: 'text',
          title: 'Text Intro EN',
        }),
        defineField({
          name: 'cols',
          title: 'cols',
          type: 'array',
          of: [
            defineField({
              name: 'col',
              title: 'Col',
              type: 'object',
              fields: [
                defineField({
                  name: 'titleFr',
                  type: 'string',
                  title: 'Title FR',
                }),
                defineField({
                  name: 'titleEn',
                  type: 'string',
                  title: 'Title EN',
                }),
                defineField({
                  name: 'textFr',
                  title: 'Text FR',
                  type: 'blockContent',
                }),
                defineField({
                  name: 'textEn',
                  title: 'Text EN',
                  type: 'blockContent',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'textOutro',
          title: 'Text Outro',
          type: 'object',
          fields: [
            { name: 'titleFr', type: 'string', title: 'Title FR' },
            { name: 'titleEn', type: 'string', title: 'Title EN' },
            { name: 'textFr', type: 'text', title: 'Text FR' },
            { name: 'textEn', type: 'text', title: 'Text EN' },
          ],
        }),
        { name: 'imageTitleFr', type: 'string', title: 'Image Title Fr' },
        { name: 'imageTitleEn', type: 'string', title: 'Image Title En' },
      ],
    }),
  ],
});
