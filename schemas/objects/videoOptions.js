import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoOptions',
  title: 'Video Options',
  type: 'object',
  fields: [
    defineField({ name: 'autoPlay', title: 'Autoplay', type: 'boolean', initialValue: false }),
    defineField({ name: 'controls', title: 'Show Controls', type: 'boolean', initialValue: true }),
    defineField({ name: 'loop', title: 'Loop', type: 'boolean', initialValue: false }),
    defineField({ name: 'muted', title: 'Muted', type: 'boolean', initialValue: false }),
  ],
})
