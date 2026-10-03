import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingSectionField',
  title: 'Pricing Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionContent',
      title: 'Pricing Section Content',
      type: 'pricingSection',
    }),
  ],
  preview: {
    select: { title: 'sectionContent.headline.text' },
    prepare({ title }) {
      return { title: title || 'Pricing Section' }
    },
  },
})
