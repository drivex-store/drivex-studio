import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'buttonComponent',
  title: 'Button Component',
  type: 'object',
  fields: [
    defineField({
      name: 'button',
      type: 'object',
      fields: [
        defineField({ name: 'link', type: 'link' }), 
        defineField({ name: 'size', type: 'string', options: { list: ['sm', 'default', 'lg'] } }),
        defineField({ name: 'theme', type: 'string', options: { list: ['light', 'dark', 'brand'] } }),
        defineField({ name: 'variant', type: 'string', options: { list: ['button', 'link'] } })
      ]
    }),
    defineField({ 
      name: 'selfAlign', 
      type: 'string', 
      options: { list: ['default', 'top', 'bottom', 'center'] },
      initialValue: 'default' 
    })
  ]
})
