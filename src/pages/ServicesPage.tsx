const services = [
  {
    title: 'Dine-In Cafe Experience',
    detail:
      'Comfortable seating, free Wi-Fi, and a rotating menu of breakfast, lunch, and all-day pastries.',
  },
  {
    title: 'Takeaway Coffee Program',
    detail:
      'Fast morning pickup line with app-free ordering by phone and WhatsApp for local commuters.',
  },
  {
    title: 'Office Catering',
    detail:
      'Curated breakfast boards, sandwich trays, and beverage carafes delivered across Brookside.',
  },
  {
    title: 'Event Hosting',
    detail:
      'Reserve our back lounge for private events, workshops, and birthday gatherings up to 30 guests.',
  },
  {
    title: 'Custom Celebration Cakes',
    detail:
      'Pre-order seasonal cakes and dessert boxes for milestones, team events, and family parties.',
  },
  {
    title: 'Coffee Workshops',
    detail:
      'Monthly community classes on brewing techniques, latte art basics, and bean tasting sessions.',
  },
]

export function ServicesPage() {
  return (
    <section className="section page-hero">
      <div className="container section-heading">
        <p className="eyebrow">Services</p>
        <h1>Flexible cafe services for individuals, teams, and local events.</h1>
      </div>

      <div className="container card-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}