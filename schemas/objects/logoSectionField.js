import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'logoSectionField',
  title: 'Logo Bar',
  type: 'object',
  fields: [
    defineField({ name: 'sectionContent', title: 'Content', type: 'logoSection' }),
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
    select: { title: 'sectionSettings.sectionTitle' },
  },
})