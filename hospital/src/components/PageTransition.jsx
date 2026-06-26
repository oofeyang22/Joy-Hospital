import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/pageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [transitionStage, setTransitionStage] = useState('entering')
  const prevLocationRef = useRef(location)

  useEffect(() => {
    // Only trigger transition when location actually changes
    if (location.pathname !== prevLocationRef.current.pathname) {
      setTransitionStage('exiting')
      
      // Quick transition - start loading new page almost immediately
      const timer = setTimeout(() => {
        prevLocationRef.current = location
        setTransitionStage('entering')
      }, 150) // Reduced from 300ms to 150ms for faster transitions

      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <div
      className={`page-transition page-transition-${transitionStage}`}
      key={location.pathname}
    >
      {children}
    </div>
  )
}

