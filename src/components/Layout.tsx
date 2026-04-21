import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" onClick={() => setIsMenuOpen(false)}>
            Maple & Main Cafe
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="btn btn-sm">
              Book a Table
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <a
        href="https://wa.me/15551234567?text=Hi%20Maple%20%26%20Main%20Cafe%2C%20I%20want%20to%20book%20a%20table."
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Maple & Main Cafe</h4>
            <p>
              Neighborhood coffee, seasonal brunch, and warm hospitality in the heart of
              Brookside.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <p>124 Main Street, Brookside</p>
            <p>Open daily, 7:00 AM - 8:00 PM</p>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Maps
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}