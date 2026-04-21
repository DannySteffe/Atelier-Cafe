import { useEffect, useState } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [reserveModalOpen, setReserveModalOpen] = useState(false)
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' })
  const [reserveFormData, setReserveFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  })
  const [newsletter, setNewsletter] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  const fallbackImage =
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitStatus('success')
    window.setTimeout(() => {
      setContactFormData({ name: '', email: '', message: '' })
      setSubmitStatus('idle')
    }, 2500)
  }

  const handleReserveSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitStatus('success')
    window.setTimeout(() => {
      setReserveFormData({ name: '', email: '', date: '', time: '', guests: '2' })
      setReserveModalOpen(false)
      setSubmitStatus('idle')
    }, 2500)
  }

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitStatus('success')
    window.setTimeout(() => {
      setNewsletter('')
      setSubmitStatus('idle')
    }, 2000)
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget.src !== fallbackImage) {
      event.currentTarget.src = fallbackImage
    }
  }

  const menuItems = [
    {
      title: 'Tokyo Drift Espresso',
      desc: 'Single-origin espresso with dark cacao notes and orange peel finish.',
      price: '$6',
    },
    {
      title: 'Paris Almond Croissant',
      desc: 'Layered butter pastry with roasted almond cream and toasted flakes.',
      price: '$7',
    },
    {
      title: 'Smoked Salmon Tartine',
      desc: 'Sourdough, whipped cream cheese, dill, capers, and citrus zest.',
      price: '$14',
    },
    {
      title: 'Vanilla Bean Matcha',
      desc: 'Ceremonial matcha blended with Madagascar vanilla and oat milk.',
      price: '$8',
    },
  ]

  const featuredItems = [
    {
      name: 'Midnight Pour Over',
      note: 'Slow-drip Ethiopian roast, jasmine aroma, silky body.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Signature Brunch Board',
      note: 'Artisanal cheeses, warm bread, seasonal fruit, and house jam.',
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Cloud Cream Latte',
      note: 'Velvet milk texture with subtle caramel and sea salt finish.',
      image:
        'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1461988091159-192b6df7054f?auto=format&fit=crop&w=900&q=80',
  ]

  const testimonials = [
    {
      quote:
        'Feels like a boutique cafe in Paris. Every detail is intentional, from plating to service.',
      name: 'Elise Monroe',
    },
    {
      quote:
        'The atmosphere is calm and elevated. My favorite place for client meetings in Brookside.',
      name: 'Daniel Watanabe',
    },
    {
      quote:
        'Incredible coffee and minimalist elegance. It is the one cafe I always recommend.',
      name: 'Sana Ito',
    },
  ]

  return (
    <div className="bg-stone-100 text-[#1f1a17]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-stone-700/10 bg-[#f4f0e9]/95 shadow-[0_10px_30px_rgba(20,16,13,0.08)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className={`font-display text-xl tracking-wide transition-colors duration-300 sm:text-2xl ${
              scrolled ? 'text-[#1f1a17]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Atelier Cafe
          </a>

          <div
            className={`hidden items-center gap-7 text-sm font-medium transition-colors duration-300 md:flex ${
              scrolled ? 'text-[#2b231e]' : 'text-white/90'
            }`}
          >
            <a href="#about" className={`nav-link-underline ${scrolled ? 'nav-link-dark' : ''}`}>
              About
            </a>
            <a href="#menu" className={`nav-link-underline ${scrolled ? 'nav-link-dark' : ''}`}>
              Menu
            </a>
            <a href="#featured" className={`nav-link-underline ${scrolled ? 'nav-link-dark' : ''}`}>
              Featured
            </a>
            <a href="#gallery" className={`nav-link-underline ${scrolled ? 'nav-link-dark' : ''}`}>
              Gallery
            </a>
            <a href="#contact" className={`nav-link-underline ${scrolled ? 'nav-link-dark' : ''}`}>
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setReserveModalOpen(true)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? 'border-[#c7b7a2] bg-[#f4eee5] text-[#2e241d] hover:bg-[#eee5d8]'
                  : 'border-white/40 bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Reserve
            </button>
            <button
              type="button"
              className={`grid h-10 w-10 place-content-center rounded-full border transition md:hidden ${
                scrolled ? 'border-[#d3c7b7] bg-[#f5f0e8] text-[#2e241d]' : 'border-white/45 bg-white/10 text-white'
              }`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="block h-0.5 w-4 bg-current" />
              <span className="mt-1 block h-0.5 w-4 bg-current" />
            </button>
          </div>
        </nav>

        <div
          className={`mx-6 mb-4 overflow-hidden rounded-2xl border bg-[#f7f1e8]/95 shadow-[0_16px_30px_rgba(22,17,13,0.08)] backdrop-blur-xl transition-all duration-300 md:hidden lg:mx-8 ${
            menuOpen ? 'max-h-80 border-[#ded3c5] py-2 opacity-100' : 'max-h-0 border-transparent py-0 opacity-0'
          }`}
        >
          {['about', 'menu', 'featured', 'gallery', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-[#2f251e] capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
          <img
            src="https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=2000&q=80"
            alt="Premium cafe hero artwork"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white animate-fade-up">
            <p className="mb-4 tracking-[0.25em] text-stone-200/90 uppercase">Paris x Tokyo Inspired</p>
            <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              A Refined Cafe Experience, Crafted for Slow Moments.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-stone-100/90 sm:text-lg">
              Specialty coffee, curated pastries, and an atmosphere designed with quiet luxury.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#about"
                className="inline-flex rounded-full bg-[#c6a77b] px-8 py-3 text-sm font-semibold tracking-wide text-[#1f1a17] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d4b58c]"
              >
                Discover Our Story
              </a>
              <button
                type="button"
                onClick={() => setReserveModalOpen(true)}
                className="inline-flex rounded-full border border-white/40 bg-white/15 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/25"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center lg:px-8">
          <div className="order-2 md:order-1">
            <p className="mb-3 tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">About</p>
            <h2 className="font-display text-4xl leading-tight text-[#1f1a17] sm:text-5xl">
              Rooted in craftsmanship, designed with calm elegance.
            </h2>
            <p className="mt-6 max-w-xl text-stone-600">
              Atelier Cafe began as a small neighborhood concept where high-end coffee culture meets
              minimalist architecture. We source ethically roasted beans, bake in-house each morning,
              and serve guests in a space inspired by luxury cafes in Paris and Tokyo.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl shadow-[0_24px_50px_rgba(23,19,15,0.12)] md:order-2">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
              alt="Elegant coffee and pastry presentation"
              className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </section>

        <section id="menu" className="bg-[#efeae1] py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="mb-3 tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">Menu</p>
            <h2 className="font-display text-4xl text-[#1f1a17] sm:text-5xl">Curated essentials</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {menuItems.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#ded6c9] bg-white/80 p-7 shadow-[0_8px_20px_rgba(28,23,18,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(28,23,18,0.1)]"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-[#201a16]">{item.title}</h3>
                    <span className="rounded-full bg-[#f2ebdf] px-3 py-1 text-sm font-semibold text-[#6d5540]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-600">{item.desc}</p>
                  <div className="mt-5 h-px w-full origin-left scale-x-0 bg-[#c7ae8a] transition duration-300 group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <p className="mb-3 tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">Featured</p>
          <h2 className="font-display text-4xl text-[#1f1a17] sm:text-5xl">Seasonal highlights</h2>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-3xl border border-[#e6ddd2] bg-white shadow-[0_16px_30px_rgba(26,21,17,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_40px_rgba(26,21,17,0.1)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={handleImageError}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-[#201a16]">{item.name}</h3>
                  <p className="mt-3 text-stone-600">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-[#f5f0e8] py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="mb-3 tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">Gallery</p>
            <h2 className="font-display text-4xl text-[#1f1a17] sm:text-5xl">Life at Atelier</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className="group overflow-hidden rounded-2xl shadow-[0_12px_24px_rgba(26,21,17,0.08)] transition duration-500 hover:-translate-y-1"
                >
                  <img
                    src={src}
                    alt={`Cafe gallery ${index + 1}`}
                    onError={handleImageError}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[#f1ece4] py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="mb-3 tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">Testimonials</p>
            <h2 className="font-display text-4xl text-[#1f1a17] sm:text-5xl">Loved by regulars</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-[#e3dbce] bg-white/85 p-7 shadow-[0_10px_22px_rgba(24,19,14,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-stone-700">"{item.quote}"</p>
                  <p className="mt-5 font-semibold text-[#574435]">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">Contact</p>
              <h2 className="font-display text-4xl text-[#1f1a17] sm:text-5xl">Get in touch</h2>
              <p className="mt-5 max-w-xl text-stone-600">
                Visit us, reserve a table, ask about catering, or book a private coffee tasting.
                We reply quickly and can help plan anything from a weekend brunch to an office drop-off.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ded3c5] bg-white p-5 shadow-[0_10px_22px_rgba(20,16,13,0.05)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8c6b4f]">Location</p>
                  <p className="mt-2 font-semibold text-[#2f251e]">124 Main Street, Brookside, CA</p>
                </div>
                <div className="rounded-2xl border border-[#ded3c5] bg-white p-5 shadow-[0_10px_22px_rgba(20,16,13,0.05)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8c6b4f]">Hours</p>
                  <p className="mt-2 font-semibold text-[#2f251e]">Daily 7:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#ded3c5] bg-white p-5 shadow-[0_10px_22px_rgba(20,16,13,0.05)]">
                <p className="text-sm uppercase tracking-[0.18em] text-[#8c6b4f]">Quick Contact</p>
                <p className="mt-2 text-stone-700">hello@ateliercafe.com</p>
                <p className="text-stone-700">(555) 123-4567</p>
                <a
                  href="https://wa.me/15551234567?text=Hi%20Atelier%20Cafe%2C%20I%20would%20like%20to%20make%20a%20reservation"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-600"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-4 rounded-3xl border border-[#ded3c5] bg-white p-6 shadow-[0_18px_40px_rgba(20,16,13,0.07)]"
            >
              <h3 className="font-display text-2xl text-[#1f1a17]">Send a message</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={contactFormData.name}
                onChange={(event) => setContactFormData({ ...contactFormData, name: event.target.value })}
                className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] placeholder-stone-400 transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
                required
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={contactFormData.email}
                onChange={(event) => setContactFormData({ ...contactFormData, email: event.target.value })}
                className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] placeholder-stone-400 transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
                required
              />
              <textarea
                placeholder="How can we help?"
                rows={5}
                value={contactFormData.message}
                onChange={(event) => setContactFormData({ ...contactFormData, message: event.target.value })}
                className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] placeholder-stone-400 transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#2f5d62] py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1f4145]"
              >
                Send Message
              </button>
              {submitStatus === 'success' && (
                <p className="text-center text-sm text-green-600">Message sent successfully. We'll reply soon.</p>
              )}
            </form>
          </div>
        </section>

        <section className="bg-[#efe9e1] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="tracking-[0.2em] text-xs uppercase text-[#8c6b4f]">Newsletter</p>
            <h2 className="mt-3 font-display text-3xl text-[#1f1a17]">Stay updated</h2>
            <p className="mt-4 text-stone-600">
              Exclusive offers, seasonal menu updates, and events delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                value={newsletter}
                onChange={(event) => setNewsletter(event.target.value)}
                className="flex-1 rounded-full border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] placeholder-stone-400 transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-[#2f5d62] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f4145]"
              >
                Subscribe
              </button>
            </form>
            {submitStatus === 'success' && <p className="mt-3 text-sm text-green-600">Subscribed! Check your email.</p>}
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/15551234567?text=Hi%20Atelier%20Cafe%2C%20I%20want%20to%20know%20more"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(34,197,94,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-green-600"
      >
        <span>💬</span> WhatsApp
      </a>

      {reserveModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition"
          onClick={() => setReserveModalOpen(false)}
        >
          <form
            onSubmit={handleReserveSubmit}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md space-y-4 rounded-3xl bg-white p-8 shadow-[0_24px_50px_rgba(0,0,0,0.15)]"
          >
            <h2 className="font-display text-3xl text-[#1f1a17]">Reserve a Table</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={reserveFormData.name}
              onChange={(event) => setReserveFormData({ ...reserveFormData, name: event.target.value })}
              className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] placeholder-stone-400 transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
              required
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={reserveFormData.email}
              onChange={(event) => setReserveFormData({ ...reserveFormData, email: event.target.value })}
              className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] placeholder-stone-400 transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
              required
            />
            <input
              type="date"
              value={reserveFormData.date}
              onChange={(event) => setReserveFormData({ ...reserveFormData, date: event.target.value })}
              className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
              required
            />
            <input
              type="time"
              value={reserveFormData.time}
              onChange={(event) => setReserveFormData({ ...reserveFormData, time: event.target.value })}
              className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
              required
            />
            <select
              value={reserveFormData.guests}
              onChange={(event) => setReserveFormData({ ...reserveFormData, guests: event.target.value })}
              className="w-full rounded-xl border border-[#d9cfc1] bg-white px-4 py-3 text-[#1f1a17] transition focus:border-[#a89377] focus:outline-none focus:ring-2 focus:ring-[#a89377]/10"
              required
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setReserveModalOpen(false)}
                className="flex-1 rounded-full border border-[#d9cfc1] py-3 font-semibold text-[#1f1a17] transition hover:bg-stone-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 rounded-full bg-[#2f5d62] py-3 font-semibold text-white transition hover:bg-[#1f4145]"
              >
                Reserve
              </button>
            </div>
            {submitStatus === 'success' && (
              <p className="text-center text-sm text-green-600">
                Reservation request sent! We'll confirm via email.
              </p>
            )}
          </form>
        </div>
      )}

      <footer className="border-t border-[#ddd3c4] bg-[#ece5da] py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-display text-lg text-[#1f1a17]">Atelier Cafe</h3>
              <p className="mt-3 text-sm text-stone-600">
                A refined neighborhood cafe inspired by luxury culture in Paris and Tokyo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2f251e]">Hours</h4>
              <p className="mt-3 space-y-1 text-sm text-stone-600">
                <span className="block">Mon-Fri: 7:00 AM - 8:00 PM</span>
                <span className="block">Sat: 8:00 AM - 9:00 PM</span>
                <span className="block">Sun: 8:00 AM - 7:00 PM</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2f251e]">Contact</h4>
              <p className="mt-3 space-y-1 text-sm text-stone-600">
                <span className="block">124 Main Street</span>
                <span className="block">(555) 123-4567</span>
                <span className="block">hello@ateliercafe.com</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2f251e]">Follow</h4>
              <div className="mt-3 flex gap-4">
                <a href="#" className="footer-link text-sm">
                  Instagram
                </a>
                <a href="#" className="footer-link text-sm">
                  Facebook
                </a>
                <a href="#" className="footer-link text-sm">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[#ddd3c4] pt-8 text-center text-sm text-stone-600">
            <p>&copy; 2026 Atelier Cafe. All rights reserved. Designed with elegance.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
