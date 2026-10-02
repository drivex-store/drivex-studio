import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cardsComponent',
  title: 'Cards Component',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'textCard' }, { type: 'mediaCard' }],
    }),
  ],
  preview: {
    select: { cards: 'cards' },
    prepare({ cards }) {
      const count = cards ? cards.length : 0
      return {
        title: 'Cards Component',
        subtitle: `${count} card${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
