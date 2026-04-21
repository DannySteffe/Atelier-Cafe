const galleryItems = [
  {
    title: 'Signature Cappuccino Set',
    image:
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Weekend Brunch Spread',
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fresh Pastry Counter',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cozy Indoor Seating',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Local Catering Setup',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Community Workshop Day',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
]

export function GalleryPage() {
  return (
    <section className="section page-hero">
      <div className="container section-heading">
        <p className="eyebrow">Gallery</p>
        <h1>A look inside daily life at Maple & Main Cafe.</h1>
      </div>

      <div className="container gallery-grid">
        {galleryItems.map((item) => (
          <figure key={item.title} className="gallery-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}