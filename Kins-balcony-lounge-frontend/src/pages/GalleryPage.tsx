import { useState } from 'react'
import { X } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { GALLERY_IMAGES } from '../data/gallery'
import type { GalleryImage } from '../types'

const PAGE_BG = 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80'

function LightboxModal({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-muted hover:text-cream transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div
        className="max-w-4xl w-full max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={image.src.replace('w=600', 'w=1200').replace('w=800', 'w=1400')}
          alt={image.alt}
          className="w-full h-full object-contain"
          style={{ maxHeight: '85vh' }}
        />
        <p className="font-sans text-xs text-muted text-center mt-3">{image.alt}</p>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-20 flex items-center justify-center"
        style={{ backgroundImage: `url(${PAGE_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center px-4">
          <SectionHeader
            label="The Kins Experience"
            title="The View. The Vibes."
            subtitle="See what Karen is talking about. Moments from the balcony."
          />
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map(image => (
              <div
                key={image.id}
                className="break-inside-avoid cursor-pointer group overflow-hidden relative"
                onClick={() => setLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-cream font-sans text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social media plug */}
      <section className="py-14 bg-surface border-t border-gold/10 text-center px-4">
        <p className="font-sans text-[10px] text-gold uppercase tracking-[0.4em] mb-3">Follow Along</p>
        <p className="font-display text-3xl md:text-4xl text-cream font-light mb-6">
          @balconylounge_karen
        </p>
        <a
          href="https://www.instagram.com/balconylounge_karen/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-primary transition-all duration-200"
        >
          Follow on Instagram
        </a>
      </section>

      {/* Lightbox */}
      {lightbox && <LightboxModal image={lightbox} onClose={() => setLightbox(null)} />}
    </>
  )
}
