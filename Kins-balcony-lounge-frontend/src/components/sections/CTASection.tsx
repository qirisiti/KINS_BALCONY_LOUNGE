import Button from '../ui/Button'

const CTA_BG = 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80'

export default function CTASection() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundImage: `url(${CTA_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <p className="font-sans text-[10px] text-gold uppercase tracking-[0.5em] mb-6">Join Us Tonight</p>

        <h2
          className="font-display font-light text-cream leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Tell a Friend<br />
          to Tell a <span className="text-gold italic">Friend</span>
        </h2>

        <p className="font-sans text-muted text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10">
          Come see why everyone's talking about Kins. The view, the drinks, the vibes — all waiting for you in Karen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="primary" size="lg">Reserve a Table</Button>
          <Button to="/gallery" variant="outline" size="lg">See the Vibe</Button>
        </div>

        <p className="mt-10 font-sans text-[10px] text-muted uppercase tracking-[0.3em]">
          Papai Road Junction, off Magadi Road, Karen
        </p>
      </div>
    </section>
  )
}
