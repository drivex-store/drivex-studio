import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'tableSection',
  title: 'Table Section',
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
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Column',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'highlight',
              title: 'Highlight',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'title', highlight: 'highlight' },
            prepare({ title, highlight }) {
              return { title: title || 'Column', subtitle: highlight ? 'Highlighted' : undefined }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Row',
          fields: [
            defineField({
              name: 'values',
              title: 'Values',
              type: 'array',
              description: 'One value per column, in the same order as Columns.',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: { values: 'values' },
            prepare({ values }) {
              return { title: (values || []).join(' · ') || 'Row' }
            },
          },
        }),
      ],
    }),
    defineField({ name: 'button', title: 'Button', type: 'button' }),
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
  ],
  preview: {
    select: { title: 'headline.text', rows: 'rows', columns: 'columns' },
    prepare({ title, rows, columns }) {
      const r = rows ? rows.length : 0
      const c = columns ? columns.length : 0
      return {
        title: title || 'Table Section',
        subtitle: `${r} row${r !== 1 ? 's' : ''} × ${c} column${c !== 1 ? 's' : ''}`,
      }
    },
  },
})
