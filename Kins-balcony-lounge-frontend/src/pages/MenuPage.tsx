import { useState } from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import Badge from '../components/ui/Badge'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu'
import type { MenuCategory } from '../types'

const PAGE_BG = 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1600&q=80'
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1551024709-8f23befc548e?auto=format&fit=crop&w=600&q=80'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('signature-cocktails')

  const filtered = MENU_ITEMS.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-20 flex items-center justify-center"
        style={{ backgroundImage: `url(${PAGE_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 text-center px-4">
          <SectionHeader label="Kins Balcony Lounge" title="Our Menu" subtitle="Crafted cocktails, premium spirits & chef's bites." />
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-surface/95 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto scrollbar-none -mx-1">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-4 font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-200 whitespace-nowrap border-b-2 ${
                  activeCategory === cat.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-muted hover:text-cream'
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu items */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(item => (
              <article
                key={item.id}
                className="bg-card border border-white/5 hover:border-gold/20 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {item.image && (
                  <div className="relative overflow-hidden h-44 shrink-0">
                    <img
                      src={item.image ?? FALLBACK_IMG}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    {item.badge && (
                      <div className="absolute top-3 left-3">
                        <Badge>{item.badge}</Badge>
                      </div>
                    )}
                  </div>
                )}

                <div className={`p-5 flex flex-col flex-1 ${!item.image && item.badge ? 'pt-4' : ''}`}>
                  {!item.image && item.badge && (
                    <div className="mb-3">
                      <Badge>{item.badge}</Badge>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-xl text-cream font-light">{item.name}</h3>
                    <span className="font-sans text-sm font-medium text-gold whitespace-nowrap shrink-0">
                      Ksh {item.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted font-sans py-16">Nothing here yet — check back soon.</p>
          )}
        </div>
      </section>

      {/* Menu note */}
      <div className="bg-surface border-t border-gold/10 py-8 text-center px-4">
        <p className="font-sans text-xs text-muted max-w-md mx-auto">
          Menu and prices subject to change. Ask your server about today's specials and allergen information.
        </p>
      </div>
    </>
  )
}
