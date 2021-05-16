export default {
  title: "Awards",
  name: 'award',
  type: "object",
  fields: [
    {
      title: "Award Website",
      description: "The name of the award website, eg: 'Siteinspire'",
      name: "awardWebsite",
      type: "string",
    },
    {
      title: "Times Won",
      name: "awardTimesWon",
      description: "Add if more than 1...",
      type: "string",
    },
    {
      title: 'Award Title',
      description: "The name of the actual award, eg: 'Site Of The Day'",
      name: 'awardTitle',
      type: 'string'
    }
  ]
}