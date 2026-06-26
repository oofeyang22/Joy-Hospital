import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll animation hook using Intersection Observer
 * Adds 'animate-in' class when element enters viewport
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            // Optionally unobserve after animation to improve performance
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -100px 0px'
      }
    )
    
    observer.observe(element)
    
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])
  
  return ref
}
