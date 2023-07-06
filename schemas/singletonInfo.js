export default {
  title: 'Info Page',
  name: 'info',
  type: 'document',
  __experimental_actions: ['update',  'create', 'delete', 'publish'],
  fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Biography',
        name: 'biography',
        type: 'text', 
        rows: 5,
        validation: Rule => Rule.required()
      },
      {
        title: 'Capabilities',
        name: 'capabilities',
        type: 'array',
        of: [{type: 'capability', title: 'Capability'}],
      },
      {
        title: 'Awards',
        name: 'awards',
        description: 'The list of awards in the footer',
        type: 'array',
        of: [{type: 'award', title: 'Award'}],
      }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}