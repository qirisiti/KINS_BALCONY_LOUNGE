import type { Event } from '../types'

export const EVENTS: Event[] = [
  {
    id: 'friday-vibes',
    title: 'Friday Night Vibes',
    subtitle: 'Nairobi\'s favourite end-of-week party. DJ Sutai takes over the decks.',
    date: 'Every Friday',
    time: '8:00 PM – Late',
    type: 'dj-night',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    recurring: 'weekly',
    featured: true,
  },
  {
    id: 'saturday-sessions',
    title: 'Saturday Sessions',
    subtitle: 'Afrobeats, R&B and house music with DJ Nosh254. The best view in Karen.',
    date: 'Every Saturday',
    time: '7:00 PM – Late',
    type: 'dj-night',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80',
    recurring: 'weekly',
    featured: true,
  },
  {
    id: 'sunday-sundowners',
    title: 'Sunday Sundowners',
    subtitle: 'Wind down the weekend with live acoustic sets and cocktail specials.',
    date: 'Every Sunday',
    time: '4:00 PM – 10:00 PM',
    type: 'live-music',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    recurring: 'weekly',
    featured: true,
  },
  {
    id: 'sports-nights',
    title: 'Sports Nights',
    subtitle: 'Watch the biggest games live on our screens. Football, rugby and more.',
    date: 'Match Days',
    time: 'From Kick-Off',
    type: 'sports',
    image: 'https://images.unsplash.com/photo-1531873252965-c41d4fd5da7b?auto=format&fit=crop&w=800&q=80',
    recurring: 'match-days',
  },
  {
    id: 'radio-maisha-collab',
    title: 'Rhuma Night with Radio Maisha',
    subtitle: 'Our signature collaboration with Radio Maisha. Music, vibes and unforgettable moments.',
    date: 'Special Dates',
    time: '7:00 PM – Late',
    type: 'special',
    image: 'https://images.unsplash.com/photo-1687511844598-165c1fc387cc?auto=format&fit=crop&w=800&q=80',
    badge: 'PARTNERS',
  },
]

export const FEATURED_EVENTS = EVENTS.filter(e => e.featured)
