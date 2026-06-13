import { Eye, Music, GlassWater, Tv2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const BALCONY_IMG = 'https://images.unsplash.com/photo-1687511844598-165c1fc387cc?auto=format&fit=crop&w=900&q=80'

const PILLARS = [
  {
    icon: Eye,
    title: 'Balcony Views',
    desc: 'Signature elevated terrace with panoramic views over Karen. The view that started it all.',
  },
  {
    icon: GlassWater,
    title: 'Craft Cocktails',
    desc: 'Handcrafted cocktails built around bold flavours and premium spirits.',
  },
  {
    icon: Music,
    title: 'Live DJ Nights',
    desc: 'Resident DJs every Friday & Saturday. Afrobeats, R&B and everything in between.',
  },
  {
    icon: Tv2,
    title: 'Sports Bar',
    desc: 'Every big match on our screens. Football, rugby — come watch with the crowd.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden"
              style={{ backgroundImage: `url(${BALCONY_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/20 rounded-sm -z-10" />
            {/* Stat card */}
            <div className="absolute -bottom-6 left-6 bg-card border border-gold/20 px-6 py-4 backdrop-blur-sm">
              <p className="font-display text-4xl text-gold font-light leading-none">2+</p>
              <p className="font-sans text-[10px] text-muted uppercase tracking-[0.2em] mt-1">Years Bringing<br />Karen Alive</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Our Story"
              title={'Karen\'s Newest\nClassy Escape'}
              subtitle="We opened our doors as Karen's freshest and most chic balcony bar — a place to unwind, connect, and experience Nairobi's southern suburbs from above."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {PILLARS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="w-8 h-8 flex items-center justify-center border border-gold/30 rounded-sm mb-1">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <h3 className="font-sans text-sm font-medium text-cream uppercase tracking-[0.15em]">{title}</h3>
                  <p className="font-sans text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
