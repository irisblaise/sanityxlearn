import {defineType} from 'sanity'

export const artwork = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      options: {
        list: ['Oil Painting', 'Sculpture', 'Digital Art', 'Photography', 'Mixed Media']
      }
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'Specify dimensions (e.g., 24x36 inches, 60x90 cm)'
    },
    {
      name: 'year_created',
      title: 'Year Created',
      type: 'number',
      validation: Rule => Rule.min(1000).max(new Date().getFullYear())
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Available', 'Sold', 'Not for Sale']
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Leave empty if not for sale'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'exhibitions',
      title: 'Exhibitions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'exhibition' }] }]
    }
  ],
});