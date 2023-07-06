import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import awards from './awards'
import capability from './capability'
import projects from './projects'
import singletonHome from './singletonHome'
import imageBlock from './blocks'
import defaultImage from './defaultImage'
import socials from './socials'
import singletonInfo from './singletonInfo'
import singletonContact from './singletonContact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    projects,
    capability,
    singletonHome,
    singletonInfo,
    singletonContact,
    defaultImage,
    awards,
    imageBlock,
    socials
  ]),
})
