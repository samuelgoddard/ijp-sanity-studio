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
      title: "Short Title",
      name: "shortTitle",
      description: '(Optional) Shorter version of the title (used on the home page teaser)',
      type: "string",
    },
    {
      title: "Index Letter",
      name: "indexLetter",
      description: 'the letter index [(a)] for this project, eg: "a"',
      type: "string",
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
    },
    {
      title: 'Thumbnail Image',
      name: 'thumbnailImage',
      type: 'image',
      description: 'The image used as the thumbnail / teaser image for this projects (eg: home page and all projects)',
    },
    {
      title: 'Client',
      name: 'client',
      type: 'string',
      description: 'eg: "Paul Smith"',
    },
    {
      title: 'Years',
      name: 'years',
      type: 'string',
      description: 'eg: "2017—19"',
    },
    {
      title: 'Disciplines',
      name: 'disciplines',
      type: 'string',
      description: 'eg: "Art Direction, Interactive"',
    },
    {
      title: 'Abstract Intro',
      name: 'abstractIntro',
      type: 'array', 
      of: [{type: 'block'}],
      description: 'The text block for the abstract introduction',
    },
    {
      title: 'Abstract Image',
      name: 'abstractmIage',
      type: 'image',
      description: 'The image for the abstract introduction',
    },
    {
      title: 'Detail Intro',
      name: 'detailIntro',
      type: 'array', 
      of: [{type: 'block'}],
      description: 'The text block for the detail introduction',
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