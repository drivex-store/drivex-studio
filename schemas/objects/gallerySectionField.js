import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallerySectionField',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionContent',
      title: 'Gallery Section Content',
      type: 'gallerySection',
    }),
  ],
  preview: {
    select: {
      items: 'sectionContent.items',
      media: 'sectionContent.items.0.media.image',
    },
    prepare({ items, media }) {
      const count = items ? items.length : 0
      return {
        title: 'Gallery Section',
        subtitle: `${count} item${count !== 1 ? 's' : ''}`,
        media,
      }
    },
  },
})
