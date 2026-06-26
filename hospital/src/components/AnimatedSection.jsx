import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Pure CSS scroll-triggered animations with Intersection Observer
export function FadeIn({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="animate-fade-in-up">{children}</div>
}

export function StaggerContainer({ children, className = "" }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`stagger-container ${className}`}>{children}</div>
}

export function StaggerItem({ children, className = "" }) {
  return <>{children}</>
}

export function ScaleIn({ children }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className="animate-scale-in">{children}</div>
}