import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

const HERO_BG = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80'

export default function HeroSection() {
  const scrollDown = () => {
    const next = document.getElementById('about')
    next?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Layered dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

      {/* Gold horizontal rule decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <p className="font-sans text-[10px] text-gold uppercase tracking-[0.5em] mb-6">
          Karen &bull; Nairobi &bull; Kenya
        </p>

        <h1
          className="font-display font-light text-cream leading-[0.9] mb-8"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          The Finest{' '}
          <span className="text-gold italic">View</span>
          <br />
          in Karen
        </h1>

        <p className="font-sans font-light text-muted text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Premium cocktails, a stunning balcony and unforgettable vibes — right here in Karen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/menu" variant="primary" size="lg">Explore Menu</Button>
          <Button to="/contact" variant="outline" size="lg">Reserve a Table</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 hover:text-gold transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  )
}
