import { defineArrayMember, defineField, defineType } from 'sanity'

const PADDING_OPTIONS = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']

export default defineType({
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'object',
      fields: [
        defineField({
          name: 'level',
          title: 'Heading Level',
          type: 'string',
          options: { list: ['h1', 'h2', 'h3', 'h4'] },
          initialValue: 'h2',
        }),
        defineField({ name: 'text', title: 'Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: { annotations: [{ type: 'linkField' }] },
        }),
      ],
    }),
    defineField({
      name: 'priceCards',
      title: 'Price Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Price Card',
          fields: [
            defineField({ name: 'tag', title: 'Tag', type: 'string' }),
            defineField({ name: 'bestFor', title: 'Best For', type: 'string' }),
            defineField({ name: 'pricePrefix', title: 'Price Prefix', type: 'string' }),
            defineField({ name: 'priceAmount', title: 'Price Amount', type: 'string' }),
            defineField({ name: 'priceCurrency', title: 'Price Currency', type: 'string' }),
            defineField({ name: 'priceInterval', title: 'Price Interval', type: 'string' }),
            defineField({
              name: 'list',
              title: 'List',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  title: 'List Item',
                  fields: [defineField({ name: 'text', title: 'Text', type: 'string' })],
                  preview: {
                    select: { title: 'text' },
                    prepare({ title }) {
                      return { title: title || 'List Item' }
                    },
                  },
                }),
              ],
            }),
            defineField({
              name: 'listAnimated',
              title: 'List Animated',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'cardTheme',
              title: 'Card Theme',
              type: 'string',
              options: {
                list: [
                  { title: 'Light', value: 'light' },
                  { title: 'Dark', value: 'dark' },
                ],
                layout: 'radio',
              },
              initialValue: 'light',
            }),
            defineField({ name: 'button', title: 'Button', type: 'button' }),
          ],
          preview: {
            select: { title: 'tag', subtitle: 'priceAmount' },
            prepare({ title, subtitle }) {
              return { title: title || 'Price Card', subtitle }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'paddingTop',
      title: 'Padding Top',
      type: 'string',
      options: { list: PADDING_OPTIONS },
      initialValue: 'md',
    }),
    defineField({
      name: 'paddingBottom',
      title: 'Padding Bottom',
      type: 'string',
      options: { list: PADDING_OPTIONS },
      initialValue: 'md',
    }),
  ],
  preview: {
    select: { title: 'headline.text', cards: 'priceCards' },
    prepare({ title, cards }) {
      const count = cards ? cards.length : 0
      return {
        title: title || 'Pricing Section',
        subtitle: `${count} price card${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
