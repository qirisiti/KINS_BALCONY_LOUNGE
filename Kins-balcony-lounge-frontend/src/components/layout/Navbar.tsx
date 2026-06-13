import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useScrollNavbar } from '../../hooks/useScrollNavbar'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollNavbar(60)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-primary/95 backdrop-blur-md border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
            <span className="font-display text-xl md:text-2xl text-gold font-medium tracking-wider">KINS</span>
            <span className="font-sans text-[8px] text-cream/60 uppercase tracking-[0.3em]">Balcony Lounge</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                      isActive ? 'text-gold' : 'text-cream/70 hover:text-cream'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button to="/contact" variant="outline" size="sm">Reserve</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-2 -mr-2"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary/98 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 mb-10">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-display text-3xl font-light transition-colors duration-200 ${
                    isActive ? 'text-gold italic' : 'text-cream hover:text-gold'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button to="/contact" variant="primary" size="lg" onClick={() => setMobileOpen(false)}>
          Reserve a Table
        </Button>
        <p className="mt-8 font-sans text-[10px] text-muted uppercase tracking-[0.3em]">Karen, Nairobi</p>
      </div>
    </>
  )
}
