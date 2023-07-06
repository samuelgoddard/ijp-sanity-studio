export default {
  title: 'Contact Page',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Email Address',
        name: 'emailAddress',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Instagram',
        name: 'instagram',
        type: 'url',
        validation: Rule => Rule.required()
      },
      {
        title: 'Threads',
        name: 'threads',
        type: 'url',
        validation: Rule => Rule.required()
      },
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