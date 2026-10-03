import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactSectionField',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({ name: 'sectionContent', title: 'Content', type: 'contactSection' }),
    defineField({
      name: 'sectionSettings',
      title: 'Section Settings',
      type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', title: 'Section Title (internal label)', type: 'string' }),
        defineField({ name: 'customSelector', title: 'Custom Selector', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionSettings.sectionTitle',
      subtitle: 'sectionContent.contactSectionRef.title',
    },
    prepare({ title, subtitle }) {
      return { title: title || 'Contact', subtitle }
    },
  },
})
