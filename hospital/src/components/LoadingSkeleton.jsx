// Loading skeleton components for better perceived performance

export function CardSkeleton() {
  return (
    <div className="card">
      <div className="skeleton" style={{ height: 24, width: '60%', marginBottom: 12 }}></div>
      <div className="skeleton" style={{ height: 16, width: '100%', marginBottom: 8 }}></div>
      <div className="skeleton" style={{ height: 16, width: '90%', marginBottom: 8 }}></div>
      <div className="skeleton" style={{ height: 16, width: '80%' }}></div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="service-card">
      <div className="skeleton" style={{ width: 64, height: 64, marginBottom: 12 }}></div>
      <div className="skeleton" style={{ height: 24, width: '70%', marginBottom: 12 }}></div>
      <div className="skeleton" style={{ height: 16, width: '100%', marginBottom: 8 }}></div>
      <div className="skeleton" style={{ height: 16, width: '90%' }}></div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="testimonial-card">
      <div className="skeleton" style={{ height: 20, width: 100, marginBottom: 16 }}></div>
      <div className="skeleton" style={{ height: 16, width: '100%', marginBottom: 8 }}></div>
      <div className="skeleton" style={{ height: 16, width: '100%', marginBottom: 8 }}></div>
      <div className="skeleton" style={{ height: 16, width: '80%', marginBottom: 20 }}></div>
      <div className="skeleton" style={{ height: 18, width: 150 }}></div>
    </div>
  )
}

export function LoadingGrid({ count = 3, type = 'card' }) {
  const SkeletonComponent = {
    card: CardSkeleton,
    service: ServiceCardSkeleton,
    testimonial: TestimonialSkeleton
  }[type] || CardSkeleton

  return (
    <div className="grid grid-3" aria-live="polite" aria-busy="true">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  )
}
