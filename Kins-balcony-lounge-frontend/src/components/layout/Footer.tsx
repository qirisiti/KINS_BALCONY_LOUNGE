import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../ui/SocialIcons'
import { CONTACT_INFO } from '../../data/contact'

const NAV_LINKS = [
  { label: 'Menu', path: '/menu' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-display text-3xl text-gold font-medium tracking-wider">KINS</span>
              <span className="font-sans text-[9px] text-cream/50 uppercase tracking-[0.3em]">Balcony Lounge</span>
            </Link>
            <p className="font-sans text-sm text-muted leading-relaxed mt-4">
              Karen's premier balcony bar. Premium cocktails, stunning views, and unforgettable nights.
            </p>
            <p className="mt-6 font-sans text-[10px] text-gold/60 uppercase tracking-[0.25em] italic">
              "Tell a friend to tell a friend"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted mb-5">Explore</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-cream/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted mb-5 flex items-center gap-2">
              <Clock size={12} />
              Hours
            </h3>
            <ul className="flex flex-col gap-2.5">
              {CONTACT_INFO.hours.map(({ day, time }) => (
                <li key={day} className="font-sans text-xs text-cream/70">
                  <span className="text-muted">{day}</span>
                  <br />
                  <span className="text-cream/80">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted mb-5">Find Us</h3>

            <div className="flex items-start gap-2.5 mb-4">
              <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
              <p className="font-sans text-xs text-cream/70 leading-relaxed">{CONTACT_INFO.address}</p>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              {CONTACT_INFO.phone.map(phone => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 font-sans text-xs text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone size={12} className="text-gold shrink-0" />
                  {phone}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-muted">
            © {new Date().getFullYear()} Kins Balcony Lounge. Karen, Nairobi.
          </p>
          <p className="font-sans text-[10px] text-muted/50 uppercase tracking-[0.2em]">
            Drink Responsibly
          </p>
        </div>
      </div>
    </footer>
  )
}
