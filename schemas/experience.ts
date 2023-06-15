import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'Job Title.',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      description: 'Image of the company you worked for.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
      description: 'Company description.',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
      description: 'Date you started the job.',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
      description: 'Date ended job.',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'Is Currently Working Here',
      type: 'boolean',
      description: 'Current job title.',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      description: 'Tech stack used for the job.',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
