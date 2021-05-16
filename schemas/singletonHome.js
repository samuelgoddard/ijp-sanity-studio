export default {
  title: 'Home Page',
  name: 'home',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Hero Image',
        name: 'heroImage',
        type: 'image',
        validation: Rule => Rule.required()
      },
      {
        title: 'Hero Image (Mobile)',
        name: 'heroImageMobile',
        type: 'image',
        validation: Rule => Rule.required()
      },
      {
        title: 'Featured Projects',
        name: 'featuredProjects',
        description: 'The list of "Featured" projects to show',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'project'}
            ]
          }
        ],
      },
      {
        title: 'Biography',
        name: 'biography',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        title: 'Awards',
        name: 'awards',
        description: 'The list of awards in the footer',
        type: 'array',
        of: [{type: 'award', title: 'Award'}],
      },
      {
        title: 'Footer Blurb',
        name: 'footerBlurb',
        description: 'The block of text at the bottom left of the footer',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        title: 'Social Links',
        name: 'socialLinks',
        description: 'The array of Social Links in the footer',
        type: 'array',
        of: [{type: 'social', title: 'Social'}],
      },
      {
        title: 'Email Address',
        name: 'emailAddress',
        type: 'string',
        validation: Rule => Rule.required()
      },
  ]
}