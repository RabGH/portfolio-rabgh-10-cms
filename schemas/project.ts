import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the project.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Project summary description.',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      description: 'Tech stack used for the job.',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'Link to build',
      type: 'url',
      description: 'Link to gitHub and or website built',
    }),
    defineField({
      name: 'linkToSite',
      title: 'Link to WebSite',
      type: 'url',
      description: 'Link to website built',
    }),
  ],
})
