import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageComponent',
  title: 'Image Component',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'object',
      fields: [
        defineField({ name: 'type', type: 'string', initialValue: 'image' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'crop', type: 'object' }), 
        defineField({ name: 'hotspot', type: 'object' })
      ]
    }),
    defineField({ name: 'aspectRatio', type: 'string', initialValue: 'auto' }),
    defineField({ name: 'maxWidth', type: 'string' })
  ]
})
