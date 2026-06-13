import { Calendar, Clock } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { FEATURED_EVENTS } from '../../data/events'

const EVENT_TYPE_LABEL: Record<string, string> = {
  'dj-night': 'DJ Night',
  'live-music': 'Live Music',
  sports: 'Sports',
  special: 'Special Event',
}

export default function EventsTeaser() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="What's On"
          title="Your Weekend Starts Here"
          subtitle="Every week is a different vibe. From DJ sessions to live sports — there's always a reason to come up."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEATURED_EVENTS.map(event => (
            <article
              key={event.id}
              className="relative overflow-hidden group cursor-default"
              style={{ minHeight: 320 }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20 group-hover:via-primary/80 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: 320 }}>
                <div className="mb-3">
                  <Badge variant="surface">{EVENT_TYPE_LABEL[event.type]}</Badge>
                </div>
                <h3 className="font-display text-2xl text-cream font-light mb-2">{event.title}</h3>
                <p className="font-sans text-xs text-muted leading-relaxed mb-4 line-clamp-2">{event.subtitle}</p>
                <div className="flex flex-col gap-1.5">
                  <span className="flex items-center gap-2 font-sans text-xs text-cream/60">
                    <Calendar size={11} className="text-gold" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2 font-sans text-xs text-cream/60">
                    <Clock size={11} className="text-gold" />
                    {event.time}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button to="/events" variant="outline" size="lg">All Events</Button>
        </div>
      </div>
    </section>
  )
}
