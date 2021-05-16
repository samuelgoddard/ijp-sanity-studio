export default {
  title: "Projects",
  name: 'project',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Index Letter",
      name: "indexLetter",
      description: 'the letter index [(a)] for this project, eg: "a"',
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Client',
      name: 'client',
      type: 'string',
      description: 'eg: "Paul Smith"',
      validation: Rule => Rule.required()
    },
    {
      title: 'Years',
      name: 'years',
      type: 'string',
      description: 'eg: "2017—19"',
      validation: Rule => Rule.required()
    },
    {
      title: 'Disciplines',
      name: 'disciplines',
      type: 'string',
      description: 'eg: "Art Direction, Interactive"',
      validation: Rule => Rule.required()
    },
    {
      title: 'Abstract Intro',
      name: 'abstractIntro',
      type: 'text',
      description: 'The text for the abstract introduction',
      validation: Rule => Rule.required()
    },
    {
      title: 'Abstract Image',
      name: 'abstractmIage',
      type: 'image',
      description: 'The image for the abstract introduction',
    },
    {
      title: 'Content Blocks',
      name: 'contentBlocks',
      description: 'The modular blocks that will appear in the "Detail" section',
      type: 'array',
      of: [{type: 'imageBlock', title: 'Image Block'}],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'This will generate the routes on the front-end and needs to be set',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
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