import { defineField, defineType } from 'sanity'

const PADDING_OPTIONS = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']

export default defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'contactSectionRef',
      title: 'Contact Content',
      type: 'reference',
      to: [{ type: 'contactSectionDocument' }],
      description: 'Contact Section Document that holds the headline, contact text, CTA and image.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: { list: ['light', 'dark'] },
      initialValue: 'light',
    }),
    defineField({ name: 'paddingTop', title: 'Padding Top', type: 'string', options: { list: PADDING_OPTIONS } }),
    defineField({ name: 'paddingBottom', title: 'Padding Bottom', type: 'string', options: { list: PADDING_OPTIONS } }),
  ],
  preview: {
    select: { title: 'contactSectionRef.title', subtitle: 'contactSectionRef.headline.text' },
    prepare({ title, subtitle }) {
      return { title: title || 'Contact Section', subtitle }
    },
  },
})
