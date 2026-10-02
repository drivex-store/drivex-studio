import { defineField, defineType } from 'sanity'

const PADDING_OPTIONS = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']

export default defineType({
  name: 'mediaSection',
  title: 'Media Section',
  type: 'object',
  fields: [
    defineField({
      name: 'appMedia',
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
          description: 'Width / height (e.g. 1.7778 for 16:9).',
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
    defineField({
      name: 'paddingTop',
      title: 'Padding Top',
      type: 'string',
      options: { list: PADDING_OPTIONS },
      initialValue: 'none',
    }),
    defineField({
      name: 'paddingBottom',
      title: 'Padding Bottom',
      type: 'string',
      options: { list: PADDING_OPTIONS },
      initialValue: 'none',
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
    select: { type: 'appMedia.type', media: 'appMedia.image' },
    prepare({ type, media }) {
      return {
        title: 'Media Section',
        subtitle: type === 'externalVideo' ? 'External Video' : 'Image',
        media,
      }
    },
  },
})
