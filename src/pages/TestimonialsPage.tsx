const testimonials = [
  {
    quote:
      'The catering team delivered breakfast for our office launch right on time, and everything was fresh and beautifully presented.',
    name: 'Nina R.',
    role: 'Operations Manager, Brookside Tech Hub',
  },
  {
    quote:
      'I host monthly book club meetings here because the staff is incredibly attentive and the atmosphere is always comfortable.',
    name: 'Marissa L.',
    role: 'Local Resident',
  },
  {
    quote:
      'Maple & Main has become our family brunch tradition. Great kids options, excellent coffee, and consistently friendly service.',
    name: 'Daniel K.',
    role: 'Parent and Weekend Regular',
  },
  {
    quote:
      'Their private event package made my sister\'s birthday effortless. We had a custom menu and dedicated support from start to finish.',
    name: 'Olivia P.',
    role: 'Event Guest',
  },
]

export function TestimonialsPage() {
  return (
    <section className="section page-hero">
      <div className="container section-heading">
        <p className="eyebrow">Testimonials</p>
        <h1>What local customers say about working with us.</h1>
      </div>

      <div className="container card-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p>"{item.quote}"</p>
            <h3>{item.name}</h3>
            <small>{item.role}</small>
          </article>
        ))}
      </div>
    </section>
  )
}