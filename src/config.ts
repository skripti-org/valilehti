import type { NavItems } from './types'

export const NAV_ITEMS: NavItems = {
  home: {
    path: '/',
    title: 'etusivu',
  },
  blog: {
    path: '/artikkelit',
    title: 'artikkelit',
  },
  tags: {
    path: '/tagit',
    title: 'tagit',
  },
  /*
  media: {
    path: '/media',
    title: 'media',
  },
  */
  about: {
    path: '/about',
    title: 'about',
  },
}

export const SITE = {
  // Your site's detail
  name: 'Välilehti',
  title: 'Välilehti',
  description: 'Skripti ry:n blogi',
  url: 'https://blog.skripti.org',
  githubUrl: 'https://github.com/skripti-org/valilehti',
  listDrafts: true,
}

export const PAGE_SIZE = 8
