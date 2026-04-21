export function AboutPage() {
  return (
    <section className="section page-hero">
      <div className="container split-feature">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
          alt="Cafe owner speaking with guests at the counter"
        />
        <div>
          <p className="eyebrow">About Us</p>
          <h1>Serving Brookside with warmth, quality, and care since 2017.</h1>
          <p>
            Maple & Main Cafe began as a small family project to bring specialty coffee and simple,
            seasonal food to our local market. Today, we are a trusted gathering spot for students,
            professionals, and families across the neighborhood.
          </p>
          <p>
            We partner with nearby farms, bakeries, and dairy suppliers to keep our menu fresh,
            ethical, and rooted in community.
          </p>
        </div>
      </div>

      <div className="container card-grid values-grid">
        <article className="service-card">
          <h3>Craft Quality</h3>
          <p>Every beverage is calibrated daily for consistency and flavor.</p>
        </article>
        <article className="service-card">
          <h3>Local Partnerships</h3>
          <p>Our menu highlights regional ingredients and local producers.</p>
        </article>
        <article className="service-card">
          <h3>Genuine Service</h3>
          <p>We remember names, preferences, and make every visit feel personal.</p>
        </article>
      </div>
    </section>
  )
}