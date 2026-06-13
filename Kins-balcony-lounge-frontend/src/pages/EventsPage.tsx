import { Calendar, Clock } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { EVENTS } from '../data/events'

const PAGE_BG = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80'

const EVENT_TYPE_LABEL: Record<string, string> = {
  'dj-night': 'DJ Night',
  'live-music': 'Live Music',
  sports: 'Sports Night',
  special: 'Special Event',
}

const EVENT_TYPE_VARIANT: Record<string, 'gold' | 'forest' | 'surface'> = {
  'dj-night': 'gold',
  'live-music': 'forest',
  sports: 'surface',
  special: 'gold',
}

export default function EventsPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${PAGE_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center px-4">
          <SectionHeader
            label="What's On"
            title="Events & Nights"
            subtitle="Something special every week. Your weekend starts at Kins."
          />
        </div>
      </section>

      {/* Events grid */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map(event => (
              <article
                key={event.id}
                className="bg-card border border-white/5 hover:border-gold/20 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge variant={EVENT_TYPE_VARIANT[event.type]}>{EVENT_TYPE_LABEL[event.type]}</Badge>
                  </div>
                  {event.recurring && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="surface">
                        {event.recurring === 'weekly' ? 'Weekly' : 'Regular'}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="font-display text-2xl text-cream font-light mb-2">{event.title}</h2>
                  <p className="font-sans text-xs text-muted leading-relaxed mb-5">{event.subtitle}</p>

                  <div className="flex flex-col gap-2 mb-5">
                    <span className="flex items-center gap-2 font-sans text-xs text-cream/60">
                      <Calendar size={12} className="text-gold" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2 font-sans text-xs text-cream/60">
                      <Clock size={12} className="text-gold" />
                      {event.time}
                    </span>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <Button to="/contact" variant="outline" size="sm">Reserve for This Night</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Private events CTA */}
      <section className="py-16 bg-surface border-t border-gold/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="font-sans text-[10px] text-gold uppercase tracking-[0.4em] mb-4">Private Events</p>
          <h2
            className="font-display font-light text-cream mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Host Your Event at Kins
          </h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-8">
            Corporate nights, birthday celebrations, private parties — the Kins balcony is yours to book. Get in touch to plan your perfect evening.
          </p>
          <Button to="/contact" variant="primary" size="lg">Enquire Now</Button>
        </div>
      </section>
    </>
  )
}
