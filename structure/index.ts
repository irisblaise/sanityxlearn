import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon, ImageIcon, ListIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('artwork').title('Artwork').icon(ImageIcon),
      S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      S.documentTypeListItem('category').title('Category').icon(ListIcon),
      S.documentTypeListItem('exhibition').title('Exhibition').icon(CalendarIcon),
      S.documentTypeListItem('contact').title('Contact').icon(PinIcon),
      S.documentTypeListItem('blogPost').title('BlogPost').icon(ListIcon),
    ])