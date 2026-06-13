import { useState } from 'react'
import { Phone, MapPin, Clock, Send } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '../components/ui/SocialIcons'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { CONTACT_INFO } from '../data/contact'

const PAGE_BG = 'https://images.unsplash.com/photo-1531873252965-c41d4fd5da7b?auto=format&fit=crop&w=1600&q=80'

interface FormState {
  name: string
  phone: string
  date: string
  guests: string
  message: string
}

const INITIAL_FORM: FormState = { name: '', phone: '', date: '', guests: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  const inputClass = 'w-full bg-card border border-white/10 focus:border-gold/50 outline-none text-cream font-sans text-sm px-4 py-3 transition-colors duration-200 placeholder:text-muted/50'

  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-20 flex items-center justify-center"
        style={{ backgroundImage: `url(${PAGE_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 text-center px-4">
          <SectionHeader
            label="Get in Touch"
            title="Find Us in Karen"
            subtitle="Reserve a table, ask a question, or just come on through."
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div>
              <h2
                className="font-display font-light text-cream mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Come Up & See Us
              </h2>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-gold/30">
                    <MapPin size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted mb-1">Location</p>
                    <p className="font-sans text-sm text-cream/80 leading-relaxed">{CONTACT_INFO.address}</p>
                    <p className="font-sans text-xs text-muted mt-1">~2km from Galleria Mall via Magadi Road</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-gold/30">
                    <Phone size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted mb-2">Call Us</p>
                    <div className="flex flex-col gap-1">
                      {CONTACT_INFO.phone.map(phone => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="font-sans text-sm text-cream/80 hover:text-gold transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-gold/30">
                    <Clock size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted mb-2">Opening Hours</p>
                    <div className="flex flex-col gap-1.5">
                      {CONTACT_INFO.hours.map(({ day, time }) => (
                        <div key={day} className="flex justify-between gap-6 font-sans text-xs">
                          <span className="text-muted">{day}</span>
                          <span className="text-cream/80">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors border border-white/10 hover:border-gold/30 px-4 py-2.5"
                  >
                    <InstagramIcon size={13} /> Instagram
                  </a>
                  <a
                    href={CONTACT_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors border border-white/10 hover:border-gold/30 px-4 py-2.5"
                  >
                    <FacebookIcon size={13} /> Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Reservation form */}
            <div>
              <div className="bg-card border border-white/5 p-6 md:p-8">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Reservations</p>
                <h3 className="font-display text-2xl text-cream font-light mb-6">Book Your Table</h3>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 border border-gold flex items-center justify-center mx-auto mb-4">
                      <Send size={18} className="text-gold" />
                    </div>
                    <p className="font-display text-2xl text-cream font-light mb-2">Booking Request Sent</p>
                    <p className="font-sans text-sm text-muted">We'll confirm your table via WhatsApp or call shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 hover:border-gold transition-colors"
                    >
                      Make Another Booking
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone / WhatsApp *"
                      required
                      className={inputClass}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className={`${inputClass} [color-scheme:dark]`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="" disabled>Guests *</option>
                        {[1, 2, 3, 4, 5, 6, 7, '8+'].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Special requests or occasion?"
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                    <Button type="submit" variant="primary" size="lg" className="mt-2 w-full justify-center">
                      Request Reservation
                    </Button>
                    <p className="font-sans text-[10px] text-muted text-center">
                      We'll reach out via phone or WhatsApp to confirm.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded map */}
      <section className="border-t border-gold/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.696519617563!2d36.759679175150225!3d-1.3587172986284062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0540ee349813%3A0xbe186e9b5f79bd9d!2sKINS%20BALCONY%20LOUNGE!5e0!3m2!1sen!2ske!4v1781336841407!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kins Balcony Lounge on Google Maps"
        />
      </section>
    </>
  )
}
