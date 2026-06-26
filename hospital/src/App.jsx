

import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import crestLogo from './assets/crest-logo.png'
import { JOY_OT_ICU_GOOGLE_MAPS_URL } from './locationLinks'
import bannerLogo from './assets/banner.png'
import ScrollToTop from './components/ScrollToTop.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'
import PageTransition from './components/PageTransition.jsx'


function App() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locationMenuOpen, setLocationMenuOpen] = useState(false)
  const [whatsappOpen, setWhatsappOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [blogsOpen, setBlogsOpen] = useState(false)
  const locationMenuRef = useRef(null)
  const whatsappRef = useRef(null)
  const servicesRef = useRef(null)
  const blogsRef = useRef(null)
  
  useEffect(() => {
    if (!locationMenuOpen) return
    const handleClickOutside = (e) => {
      if (locationMenuRef.current && !locationMenuRef.current.contains(e.target)) setLocationMenuOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [locationMenuOpen])

  useEffect(() => {
    if (!whatsappOpen) return
    const handleClickOutside = (e) => {
      if (whatsappRef.current && !whatsappRef.current.contains(e.target)) setWhatsappOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [whatsappOpen])

  useEffect(() => {
    if (!servicesOpen) return
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [servicesOpen])

  useEffect(() => {
    if (!blogsOpen) return
    const handleClickOutside = (e) => {
      if (blogsRef.current && !blogsRef.current.contains(e.target)) setBlogsOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [blogsOpen])
  
  const AllenAvenueMaps = () => {
    window.open(JOY_OT_ICU_GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer')
    setLocationMenuOpen(false)
  }
  

  
  return (
    <div className={`app ${mobileOpen ? 'mobile-open' : ''}`}>

      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <a href="https://wa.me/2349064813638" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Contact us on WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
      
      <div className="topbar">
        <div className="topbar-content">
          <div className="topbar-left">
            <img src={crestLogo} alt="JOY HOSPITAL" className="topbar-logo" />
            <div className="topbar-locations">

              <a href={JOY_OT_ICU_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="topbar-item topbar-location-item topbar-address" aria-label=" (OT & ICU Care) – Open in Google Maps">
                <svg className="topbar-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="topbar-location-label">Ikeja</span>
                <span className="topbar-location-tooltip" role="tooltip">
                  <span className="topbar-tooltip-arrow" aria-hidden="true" />
                  <span className="topbar-tooltip-inner">
                    <span className="topbar-tooltip-address">No 23, Adeleke street, Allen Avenue, Ikeja, Lagos State</span>
                    <span className="topbar-tooltip-action">View on Google Maps →</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="topbar-right">
            <a href="tel:+919912757854" className="topbar-cta topbar-emergency">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="topbar-cta-text">Emergency? Call Now: +2348107726872</span>
              <span className="topbar-cta-text-short">Emergency?</span>
            </a>
            <span className="topbar-divider">or</span>
            <div
              ref={whatsappRef}
              className={`topbar-whatsapp-wrap ${whatsappOpen ? 'whatsapp-open' : ''}`}
              aria-label="WhatsApp Us"
              aria-expanded={whatsappOpen}
            >
              <span
                className="topbar-cta topbar-whatsapp topbar-whatsapp-trigger"
                role="button"
                tabIndex={0}
                onClick={() => setWhatsappOpen((v) => !v)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setWhatsappOpen((v) => !v) } }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </span>
              <span className="topbar-whatsapp-tooltip" role="tooltip">
                <span className="topbar-tooltip-arrow" aria-hidden="true" />
                <span className="topbar-tooltip-inner topbar-whatsapp-tooltip-inner">
                  <a href="https://wa.me/2349064813638" target="_blank" rel="noopener noreferrer" className="topbar-whatsapp-option">
                    Ikeja – +2348107726872 →
                  </a>
                </span>
              </span>
            </div>
            <span className="topbar-divider">or</span>
            <Link 
              to="/#feedback-form" 
              className="topbar-cta topbar-feedback"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  const element = document.getElementById('feedback-form')
                  if (element) {
                    window.scrollTo({ top: 0, behavior: 'instant' })
                    setTimeout(() => {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }, 100)
                  }
                }
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="topbar-cta-text">Feedback</span>
              <span className="topbar-cta-text-short">Feedback</span>
            </Link>
          </div>
        </div>
      </div>
      
      <header className="header" role="banner">
        <div className="header-content">
          <NavLink to="/" className="brand">
            <img src={bannerLogo} alt="JOY HOSPITAL" className="brand-banner-logo" />
          </NavLink>
          <nav className="nav" role="navigation" aria-label="Primary navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
            <div
              ref={servicesRef}
              className={`dropdown ${servicesOpen ? 'open' : ''}`}
            >
              <button
                type="button"
                className={`dropdown-trigger ${pathname === '/services' || pathname === '/facilities' ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <svg className="dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="menu">
                <NavLink to="/services" onClick={() => setServicesOpen(false)}>Services</NavLink>
                <NavLink to="/facilities" onClick={() => setServicesOpen(false)}>Facilities</NavLink>
              </div>
            </div>
            <NavLink to="/ot-icu-care" className={({ isActive }) => isActive ? 'active' : undefined}>OT &amp; ICU Care</NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active' : undefined}>Doctors</NavLink>
            <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : undefined}>Achievements</NavLink>
            <div
              ref={blogsRef}
              className={`dropdown ${blogsOpen ? 'open' : ''}`}
            >
              <button
                type="button"
                className={`dropdown-trigger ${pathname === '/testimonials' ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={blogsOpen}
                onClick={() => setBlogsOpen((v) => !v)}
              >
                Blogs
                <svg className="dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="menu">
                <a
                  href="https://medium.com/@olaitanferanmi41"
                  onClick={() => setBlogsOpen(false)}
                >
                  Blogs
                </a>
                <Link to="/testimonials" onClick={() => setBlogsOpen(false)}>
                  Testimonials
                </Link>
              </div>
            </div>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
          </nav>
          <button className="hamburger" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu" aria-expanded={mobileOpen}>
            ☰ Menu
          </button>
        </div>
      </header>
      
      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            ✕
          </button>
          <NavLink onClick={() => setMobileOpen(false)} to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>Services</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/facilities" className={({ isActive }) => isActive ? 'active' : undefined}>Facilities</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/ot-icu-care" className={({ isActive }) => isActive ? 'active' : undefined}>OT &amp; ICU Care</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/doctors" className={({ isActive }) => isActive ? 'active' : undefined}>Doctors</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/achievements" className={({ isActive }) => isActive ? 'active' : undefined}>Achievements</NavLink>
          <a
            href="https://medium.com/@olaitanferanmi41"
            onClick={() => setMobileOpen(false)}
          >
            Blogs
          </a>
          <NavLink onClick={() => setMobileOpen(false)} to="/testimonials" className={({ isActive }) => isActive ? 'active' : undefined}>Testimonials</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
        </div>
      )}
      
      <main className="main" id="main-content" role="main">
        <Breadcrumbs />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      
      <div className="quick-actions-bar" role="toolbar" aria-label="Quick actions">
        <a href="tel:+2348107726872" className="quick-action-btn" aria-label="Call hospital">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="action-label">Call</span>
        </a>
        
        <a href="https://wa.me/2349064813638" className="quick-action-btn" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="action-label">WhatsApp</span>
        </a>
        
        <div className="quick-actions-location-wrap" ref={locationMenuRef}>
          <button
            type="button"
            className="quick-action-btn quick-action-btn-location"
            onClick={() => setLocationMenuOpen((v) => !v)}
            aria-label="Choose location"
            aria-expanded={locationMenuOpen}
            aria-haspopup="true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="action-label">Location</span>
          </button>
          {locationMenuOpen && (
            <div className="quick-actions-location-menu" role="menu">
              <button type="button" role="menuitem" className="quick-actions-location-option" onClick={AllenAvenueMaps}>
                Ikeja
              </button>
            </div>
          )}
        </div>
        
        <Link
          to="/#feedback-form"
          className="quick-action-btn"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              const element = document.getElementById('feedback-form')
              if (element) {
                window.scrollTo({ top: 0, behavior: 'instant' })
                setTimeout(() => {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 100)
              }
            }
          }}
          aria-label="Share feedback"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span className="action-label">Feedback</span>
        </Link>
      </div>
      
      <footer className="footer" role="contentinfo">
        <div className="footer-main">
          <div>
            <div>© {new Date().getFullYear()} JOY HOSPITAL</div>
            <div className="footer-division-text">(A 5-STAR HOSPITAL LOCATED IN IKEJA, LAGOS STATE.)</div>
          </div>
          <div className="links">
            <a href="https://github.com/oofeyang22">Privacy Policy</a>
            <a href="https://github.com/oofeyang22">Terms &amp; Conditions</a>
            <a href="https://github.com/oofeyang22" target="_blank" rel="noreferrer" aria-label="View on Google Maps">Google Maps</a>
            <a href="https://github.com/oofeyang22" target="_blank" rel="noreferrer" aria-label="Visit our Linktree">Linktree</a>
            <a href="https://github.com/oofeyang22" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">Instagram</a>
            <a href="https://github.com/oofeyang22" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook">Facebook</a>
            <a href="https://github.com/oofeyang22" target="_blank" rel="noreferrer" aria-label="Subscribe on YouTube">YouTube</a>
          </div>
        </div>
        <div className="footer-credit">
          Created by <a href="https://github.com/oofeyang22" target="_blank" rel="noreferrer" aria-label="Developer LinkedIn">Oofe Yang</a>
        </div>
      </footer>
    </div>
  )
}

export default App
