import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the page',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Role of the page',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      description: 'Main image front page.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      description: 'Profile picture.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Add phone number.',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Personal E-mail address.',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Personal address.',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      description: 'Social Icons.',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
})
