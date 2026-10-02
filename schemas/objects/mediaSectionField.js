import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mediaSectionField',
  title: 'Media Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionContent',
      title: 'Media Section Content',
      type: 'mediaSection',
    }),
  ],
  preview: {
    select: {
      type: 'sectionContent.appMedia.type',
      media: 'sectionContent.appMedia.image',
    },
    prepare({ type, media }) {
      return {
        title: 'Media Section',
        subtitle: type === 'externalVideo' ? 'External Video' : 'Image',
        media,
      }
    },
  },
})
