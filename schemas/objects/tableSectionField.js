import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tableSectionField',
  title: 'Table Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionContent',
      title: 'Table Section Content',
      type: 'tableSection',
    }),
  ],
  preview: {
    select: { title: 'sectionContent.headline.text' },
    prepare({ title }) {
      return { title: title || 'Table Section' }
    },
  },
})
