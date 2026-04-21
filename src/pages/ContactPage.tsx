export function ContactPage() {
  return (
    <section className="section page-hero">
      <div className="container section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you need and our team will get back within one business day.</h1>
      </div>

      <div className="container contact-grid">
        <div className="contact-panel">
          <h2>Visit or Call</h2>
          <p>124 Main Street, Brookside, CA 95000</p>
          <p>(555) 123-4567</p>
          <p>hello@maplemaincafe.com</p>
          <p>Open daily: 7:00 AM - 8:00 PM</p>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your full name" />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required placeholder="Your phone number" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your event, booking, or catering needs"
          />

          <button type="submit" className="btn btn-lg">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}