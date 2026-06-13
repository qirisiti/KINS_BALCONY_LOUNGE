export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  image?: string
  featured?: boolean
  badge?: string
}

export type MenuCategory =
  | 'signature-cocktails'
  | 'spirits'
  | 'beers-ciders'
  | 'non-alcoholic'
  | 'light-bites'

export interface MenuCategoryMeta {
  id: MenuCategory
  label: string
  icon: string
}

export interface Event {
  id: string
  title: string
  subtitle: string
  date: string
  time: string
  type: EventType
  image: string
  recurring?: string
  featured?: boolean
  badge?: string
}

export type EventType = 'dj-night' | 'live-music' | 'sports' | 'special'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  span?: 'wide' | 'tall' | 'normal'
}

export interface ContactInfo {
  phone: string[]
  address: string
  instagram: string
  facebook: string
  tiktok: string
  hours: { day: string; time: string }[]
}
