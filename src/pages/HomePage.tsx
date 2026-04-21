import { Link } from 'react-router-dom'

const highlights = [
  { label: 'Years Serving Brookside', value: '9+' },
  { label: 'Average Rating', value: '4.9/5' },
  { label: 'Locally Sourced Ingredients', value: '85%' },
]

const servicePreview = [
  {
    title: 'Breakfast & Brunch',
    description:
      'Fresh pastries, hearty brunch plates, and specialty coffee made to order every morning.',
  },
  {
    title: 'Private Events',
    description:
      'Host birthdays, team breakfasts, and intimate gatherings with custom menu packages.',
  },
  {
    title: 'Corporate Catering',
    description:
      'Reliable delivery for offices with sandwich platters, sweet trays, and beverage bundles.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Brookside's Favorite Neighborhood Cafe</p>
            <h1>Thoughtful coffee, honest food, and a place to slow down.</h1>
            <p>
              At Maple & Main Cafe, every cup is crafted with single-origin beans and every dish
              is built from seasonal, local ingredients.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="btn btn-lg">
                Reserve Your Table
              </Link>
              <Link to="/services" className="btn btn-ghost btn-lg">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="Barista preparing coffee in a bright cafe"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          {highlights.map((item) => (
            <article key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What We Offer</p>
            <h2>Services designed for everyday moments and special occasions.</h2>
          </div>
          <div className="card-grid">
            {servicePreview.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-feature">
          <img
            src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&w=1000&q=80"
            alt="Guests enjoying brunch at a cafe table"
          />
          <div>
            <p className="eyebrow">Built for Community</p>
            <h2>A local cafe with a genuine neighborhood heartbeat.</h2>
            <p>
              From weekday coffee runs to weekend family brunches, our team creates a welcoming
              space where everyone feels known.
            </p>
            <Link to="/about" className="text-link">
              Learn our story
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container testimonials-teaser">
          <div>
            <p className="eyebrow">Trusted by Local Guests</p>
            <h2>"Best latte in town and the friendliest staff by far."</h2>
            <p>
              Customers come for quality coffee and return for consistent service and warm
              hospitality.
            </p>
          </div>
          <Link to="/testimonials" className="btn btn-lg">
            Read More Reviews
          </Link>
        </div>
      </section>
    </>
  )
}