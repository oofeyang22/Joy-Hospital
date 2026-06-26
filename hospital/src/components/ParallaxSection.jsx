import { useEffect, useRef } from 'react'
import '../styles/parallax.css'

export const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrolled = window.pageYOffset
      const rect = sectionRef.current.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height

      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const offset = (scrolled - elementTop) * speed
        sectionRef.current.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`}>
      {children}
    </div>
  )
}

export const ParallaxBackground = ({ children, speed = 0.3, className = '' }) => {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return

      const scrolled = window.pageYOffset
      const offset = scrolled * speed
      bgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div className={`parallax-background ${className}`}>
      <div ref={bgRef} className="parallax-background-inner">
        {children}
      </div>
    </div>
  )
}

export const ParallaxHero = ({ children, backgroundImage, className = '' }) => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const scrolled = window.pageYOffset
      const offset = scrolled * 0.5

      heroRef.current.style.transform = `translateY(${offset}px)`
      heroRef.current.style.opacity = 1 - scrolled / 500
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`parallax-hero ${className}`}>
      <div 
        ref={heroRef} 
        className="parallax-hero-bg"
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
      >
        {children}
      </div>
    </div>
  )
}

