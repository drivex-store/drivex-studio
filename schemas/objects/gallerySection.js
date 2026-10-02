import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallerySection',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Gallery Item',
          fields: [
            defineField({
              name: 'columnStart',
              title: 'Column Start',
              type: 'number',
              description: 'Grid column the item starts on (1-12)',
              validation: (Rule) => Rule.min(1).max(12).integer(),
            }),
            defineField({
              name: 'columnSpan',
              title: 'Column Span',
              type: 'number',
              description: 'Number of grid columns the item spans (1-12)',
              validation: (Rule) => Rule.min(1).max(12).integer(),
            }),
            defineField({
              name: 'media',
              title: 'Media',
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Media Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Image', value: 'image' },
                      { title: 'External Video', value: 'externalVideo' },
                    ],
                    layout: 'radio',
                  },
                  initialValue: 'image',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                  description: 'Also used as the poster when type is External Video.',
                }),
                defineField({
                  name: 'externalVideoUrl',
                  title: 'External Video URL',
                  type: 'url',
                  hidden: ({ parent }) => parent?.type !== 'externalVideo',
                }),
                defineField({
                  name: 'aspectRatio',
                  title: 'Aspect Ratio',
                  type: 'number',
                  description: 'Width / height (e.g. 1.7778 for 16:9). 0 = auto / original.',
                  initialValue: 0,
                }),
                defineField({
                  name: 'highResolution',
                  title: 'High Resolution',
                  type: 'boolean',
                  initialValue: false,
                }),
                defineField({
                  name: 'videoOptions',
                  title: 'Video Options',
                  type: 'videoOptions',
                  hidden: ({ parent }) => parent?.type !== 'externalVideo',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              start: 'columnStart',
              span: 'columnSpan',
              type: 'media.type',
              media: 'media.image',
            },
            prepare({ start, span, type, media }) {
              return {
                title: `${type === 'externalVideo' ? 'Video' : 'Image'} (start ${start ?? '-'}, span ${span ?? '-'})`,
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'gap',
      title: 'Gap',
      type: 'string',
      description: 'Spacing between items in px (e.g. "16")',
      initialValue: '16',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      const count = items ? items.length : 0
      return {
        title: 'Gallery Section',
        subtitle: `${count} item${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
