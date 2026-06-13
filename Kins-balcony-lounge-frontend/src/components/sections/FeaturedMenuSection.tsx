import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { FEATURED_ITEMS } from '../../data/menu'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1551024709-8f23befc548e?auto=format&fit=crop&w=600&q=80'

export default function FeaturedMenuSection() {
  const items = FEATURED_ITEMS.slice(0, 4)

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Our Menu"
          title="Crafted with Intention"
          subtitle="From signature cocktails to premium spirits and chef's bites — every item is made to elevate your night."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map(item => (
            <article
              key={item.id}
              className="bg-card border border-white/5 hover:border-gold/20 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={item.image ?? FALLBACK_IMG}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                {item.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge>{item.badge}</Badge>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-cream font-light mb-1">{item.name}</h3>
                <p className="font-sans text-xs text-muted leading-relaxed mb-4">{item.description}</p>
                <p className="font-sans text-sm font-medium text-gold">Ksh {item.price.toLocaleString()}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button to="/menu" variant="outline" size="lg">View Full Menu</Button>
        </div>
      </div>
    </section>
  )
}
