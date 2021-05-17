export default {
  title: "Image Block",
  name: 'imageBlock',
  type: "object",
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'}
        ],
      }
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Caption",
      name: "caption",
      description: "The accompanying caption for the image",
      type: "text",
    }
  ]
}