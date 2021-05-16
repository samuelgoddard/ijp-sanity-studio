import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import awards from './awards'
import projects from './projects'
import singletonHome from './singletonHome'
import imageBlock from './blocks'
import socials from './socials'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    projects,
    singletonHome,
    awards,
    imageBlock,
    socials
  ]),
})
