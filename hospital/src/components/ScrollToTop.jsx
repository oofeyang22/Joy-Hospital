import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Aggressive scroll to top with multiple attempts
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Force all scrollable containers to top
      const main = document.getElementById('main-content')
      if (main) main.scrollTop = 0
    }
    
    // Immediate scroll
    scrollToTop()
    
    // Multiple fallback scrolls to catch animations/delays
    const timeouts = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100)
    ]
    
    return () => timeouts.forEach(clearTimeout)
  }, [pathname])
  
  return null
}

