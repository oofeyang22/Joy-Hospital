import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CanonicalTag() {
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    // Get the base URL
    //const baseUrl = 'https://www.ramaswamyhospitals.com'
    
    // Normalize pathname - remove trailing slash except for homepage
    let pathname = location.pathname
    const hasTrailingSlash = pathname !== '/' && pathname.endsWith('/')
    
    // Redirect if URL has trailing slash (except homepage)
    if (hasTrailingSlash) {
      const normalizedPath = pathname.slice(0, -1)
      navigate(normalizedPath, { replace: true })
      return
    }
    
    // Build the canonical URL (without hash and query parameters)
    const canonicalUrl = `${baseUrl}${pathname}`
    
    // Find existing canonical tag or create new one
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    
    // Update the canonical URL
    canonicalLink.setAttribute('href', canonicalUrl)
    
    // Also update og:url for consistency
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', canonicalUrl)
    
    // Update twitter:url for consistency
    let twitterUrl = document.querySelector('meta[name="twitter:url"]')
    if (!twitterUrl) {
      twitterUrl = document.createElement('meta')
      twitterUrl.setAttribute('name', 'twitter:url')
      document.head.appendChild(twitterUrl)
    }
    twitterUrl.setAttribute('content', canonicalUrl)
    
  }, [location.pathname, navigate])
  
  return null // This component doesn't render anything
}
