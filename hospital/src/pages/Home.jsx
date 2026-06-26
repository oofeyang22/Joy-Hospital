import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import bannerLogo from '../assets/banner.png?format=webp&w=450&quality=80'
import leaderImage from '../assets/leader.png?format=webp&w=400&quality=80'
import heroVideo from '../assets/hero.mp4'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'
import { useToast } from '../components/Toast'

export default function Home() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)
  const [achievementIndex, setAchievementIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  
  // Achievement carousel data
  const achievementCards = [
    { 
      title: 'Great hospital with top-notch in Ikeja, Lagos state',
      description: 'Joy Hospital takes immense pride in having qualified Orthopaedic Surgeons. Advanced orthopaedic care is offered, coupled with modern surgical techniques, and a higher standard of patient management.'
    },
    { 
      title: 'First Total Hip Replacement (THR) in Ikeja - 2010',
      description: 'In 2010, our hospital achieved a historic milestone by performing the first-ever Total Hip Replacement surgery in Ikeja. This complex procedure restored mobility and reduced chronic pain for patients suffering from severe hip arthritis, fractures, and degenerative conditions.'
    },
    { 
      title: 'First Total Knee Replacement (TKR) - Golden Knee in Ikeja',
      description: 'We proudly performed Ikeja\'s first Total Knee Replacement, also known as the Golden Knee Replacement, using advanced implant materials designed for durability and longevity. This procedure has transformed the lives of countless patients with end-stage arthritis.'
    },
    { 
      title: 'First Shoulder Replacement in Ikeja',
      description: 'Our team accomplished another breakthrough by performing the first Shoulder Replacement surgery in Ikeja. This procedure helps patients suffering from severe shoulder arthritis, fractures, or rotator cuff injuries regain motion and comfort.'
    },
    { 
      title: 'High Surgical Volume - 130 to 150 Surgeries Monthly',
      description: 'With an average of 130–150 surgeries every month,Joy Hospitals is one of the most active surgical centers in the region. This high surgical load reflects the trust placed in us by patients and the community.'
    },
    { 
      title: 'Comprehensive Tumour Procedures',
      description: 'Our orthopaedic oncology division handles a wide spectrum of bone tumour surgeries, including tumour excision, limb-sparing procedures, and reconstruction, ensuring preservation of limb function and appearance.'
    }
  ]
  
  // Testimonial carousel data
  const testimonialCards = [
    { 
      name: 'Sarah Johnson',
      location: 'Okinni, Osun',
      rating: 5,
      quote: 'he care I received here was exceptional. The doctors took the time to explain everything clearly and made me feel at ease throughout my treatment.'
    },
    { 
      name: 'Adeolu Bakare',
      location: 'Ogbomosho',
      rating: 5,
      quote: 'Professional, clean, and highly efficient. I was impressed by the short waiting times and the friendliness of the entire staff.'
    },
    { 
      name: 'Chidinma Okafor',
      location: 'Ibadan',
      rating: 5,
      quote: 'Excellent medical facilities. I felt truly cared for during my recovery, and the follow-up visits were very thorough.'
    }
  ]
  
  // Auto-rotate achievement cards
  useEffect(() => {
    const achievementTimer = setInterval(() => {
      setAchievementIndex((prev) => (prev + 1) % achievementCards.length)
    }, 5000)
    
    return () => clearInterval(achievementTimer)
  }, [])
  
  // Auto-rotate testimonial cards
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonialCards.length)
    }, 3500)
    
    return () => clearInterval(testimonialTimer)
  }, [])

  // Force video to play on mount
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.loop = true
      video.playsInline = true
      
      video.load()
      
      const playVideo = async () => {
        try {
          await video.play()
          setVideoLoaded(true)
        } catch (error) {
          if (import.meta.env.DEV) {
            console.log('Video autoplay prevented, will retry:', error)
          }
          
          const handleInteraction = () => {
            video.play().catch(() => {})
            document.removeEventListener('click', handleInteraction)
            document.removeEventListener('touchstart', handleInteraction)
          }
          
          document.addEventListener('click', handleInteraction, { once: true })
          document.addEventListener('touchstart', handleInteraction, { once: true })
        }
      }
      
      playVideo()
      
      const checkPlaying = () => {
        if (video.paused && video.readyState >= 2) {
          video.play().catch(() => {})
        }
      }
      
      const intervalId = setInterval(checkPlaying, 1000)
      
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [])

  // Handle scroll to feedback form when hash is present
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === '#feedback-form') {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' })
          setTimeout(() => {
            const element = document.getElementById('feedback-form')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }, 300)
        }, 100)
      }
    }

    if (window.location.hash === '#feedback-form') {
      handleHashScroll()
    }

    window.addEventListener('hashchange', handleHashScroll)

    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xykaqzoz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.', 5000)
        form.reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const features = [
    { 
      number: "01",
      title: 'Experienced Team', 
      desc: 'Our team of highly skilled doctors, nurses, and support staff bring decades of combined experience to provide you with the best possible care.' 
    },
    { 
      number: "02",
      title: '24/7 Emergency Care', 
      desc: 'Round-the-clock emergency services with rapid response teams and state-of-the-art equipment to handle any medical crisis.' 
    },
    { 
      number: "03",
      title: 'Patient-Centered Approach', 
      desc: 'We prioritize your comfort and well-being with personalized treatment plans tailored to your specific needs and concerns.' 
    },
    { 
      number: "04",
      title: 'Affordable Healthcare', 
      desc: 'Quality healthcare should be accessible to all. We offer transparent pricing and various payment options to suit your budget.' 
    },
    { 
      number: "05",
      title: 'Comprehensive Services', 
      desc: 'From diagnosis to recovery, we offer a complete range of medical services under one roof for your convenience and continuity of care.' 
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section-new hero-parallax animate-in" role="banner">
        {/* Video Background */}
        <div className={`hero-video-background ${videoLoaded ? 'video-loaded' : ''}`}>
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video"
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onLoadedData={() => {
              setVideoLoaded(true)
              const video = videoRef.current
              if (video && video.paused) {
                video.play().catch(() => {})
              }
            }}
            onCanPlay={() => {
              setVideoLoaded(true)
              const video = videoRef.current
              if (video && video.paused) {
                video.play().catch(() => {})
              }
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-content-new">
          <div className="hero-badge">Joy Hospital</div>
          <h1 className="hero-title-new">Joy Hospital</h1>
          <p className="hero-subtitle-new" dangerouslySetInnerHTML={{ __html: 'Your trusted partner in <strong>orthopaedic</strong> and <strong>multispecialty</strong> care' }}>
          </p>
          <div className="hero-actions">
            <Link className="btn btn-large btn-with-icon" to="/services" aria-label="Browse our medical services">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
              Explore Our Services
            </Link>
            <Link className="btn btn-outline-large btn-with-icon" to="/facilities" aria-label="Discover our world-class facilities">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              Discover Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* KPI Stats Section */}
      <ScaleIn>
        <section className="home-stats-section">
          <StaggerContainer className="home-stats-grid">
            <div className="home-stat-item">
              <div className="home-stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="home-stat-number">
                <CountUp end={50000} duration={2500} suffix="+" />
              </div>
              <div className="home-stat-label">Successful Surgeries</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="home-stat-number">
                <CountUp end={25} duration={2000} suffix="+" />
              </div>
              <div className="home-stat-label">Years of Care</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="home-stat-number">
                <CountUp end={85000} duration={2200} suffix="+" />
              </div>
              <div className="home-stat-label">Patients Cured</div>
            </div>
          </StaggerContainer>
        </section>
      </ScaleIn>

      {/* Leader Section */}
      <FadeIn>
        <div className="home-leader-section">
          <div className="home-leader-card">
            <div className="home-leader-image">
              <img src={leaderImage} alt="Joy" />
            </div>
            <div className="home-leader-content">
              <h3>Dr Ajayi</h3>
              <p className="home-leader-title">MRCS, FRCS</p>
              <p className="home-leader-bio" dangerouslySetInnerHTML={{ __html: 'Dr Ajayi is a highly experienced orthopaedic surgeon with over 25 years of expertise in joint replacements, trauma surgery, and sports medicine. He has trained at prestigious institutions in the UK and Europe, bringing world-class orthopaedic care to the region.' }}></p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Excellence Section */}
      <section className="home-excellence-section">
        <FadeIn>
          <div className="home-excellence-header">
            <h2>Why Choose Us</h2>
            <p dangerouslySetInnerHTML={{ __html: 'Discover what makes Joy Hospital the preferred choice for <strong>quality healthcare</strong> and <strong>patient satisfaction</strong>' }}></p>
          </div>
        </FadeIn>
        
        <StaggerContainer className="home-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="home-feature-card">
              <div className="home-feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
            </div>
          ))}
        </StaggerContainer>
        
        {/* Learn More Button */}
        <FadeIn>
          <div className="home-learn-more-container">
            <Link to="/about" className="home-learn-more-btn" onClick={() => window.scrollTo(0, 0)}>
              <span>Learn More About Us</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Quick Services Preview */}
      <FadeIn>
        <section className="home-quick-services">
          <h2>Quick Access</h2>
          <StaggerContainer className="quick-services-grid">
            <Link to="/doctors" className="quick-service-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>Find a Doctor</h3>
              <p>Connect with our experienced specialists</p>
            </Link>
            <Link to="/services" className="quick-service-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Our Services</h3>
              <p>Explore our comprehensive medical services</p>
            </Link>
            <a href="tel:+2348107726872" className="quick-service-card">
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Emergency Care</h3>
              <p>24/7 emergency services available</p>
            </a>
            <Link to="/facilities" className="quick-service-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
              <h3>Our Facilities</h3>
              <p>State-of-the-art medical infrastructure</p>
            </Link>
          </StaggerContainer>
        </section>
      </FadeIn>

      {/* Achievements Sneak Peek */}
      <FadeIn>
        <section className="home-sneak-peek-section achievements-preview">
          <div className="sneak-peek-card">
            <div className="sneak-peek-content">
              <div className="sneak-peek-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Our Achievements
              </div>
              <h2>Pioneering Healthcare Milestones</h2>
              <p>Discover the groundbreaking achievements that have established Dr. Ramaswamy Hospitals as a leader in orthopaedic care.</p>
              <div className="sneak-peek-stats">
                <div className="peek-stat">
                  <div className="peek-stat-number">16+</div>
                  <div className="peek-stat-label">Milestones</div>
                </div>
                <div className="peek-stat">
                  <div className="peek-stat-number">25+</div>
                  <div className="peek-stat-label">Years of Excellence</div>
                </div>
                <div className="peek-stat">
                  <div className="peek-stat-number">150+</div>
                  <div className="peek-stat-label">Monthly Surgeries</div>
                </div>
              </div>
              <Link to="/achievements" className="sneak-peek-cta" onClick={() => window.scrollTo(0, 0)}>
                View All Achievements
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="sneak-peek-visual achievements-visual">
              <div className="carousel-container">
                {achievementCards.map((card, index) => (
                  <div 
                    key={index}
                    className={`carousel-card achievement-card ${index === achievementIndex ? 'active' : ''}`}
                  >
                    <h3 className="carousel-card-title">{card.title}</h3>
                    <p className="carousel-card-desc">{card.description}</p>
                  </div>
                ))}
              </div>
              <div className="carousel-dots">
                {achievementCards.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === achievementIndex ? 'active' : ''}`}
                    onClick={() => setAchievementIndex(index)}
                    aria-label={`Go to achievement ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Testimonials Sneak Peek */}
      <FadeIn>
        <section className="home-sneak-peek-section testimonials-preview">
          <div className="sneak-peek-card reverse">
            <div className="sneak-peek-visual testimonials-visual">
              <div className="carousel-container">
                {testimonialCards.map((card, index) => (
                  <div 
                    key={index}
                    className={`carousel-card testimonial-card ${index === testimonialIndex ? 'active' : ''}`}
                  >
                    <div className="carousel-rating-badge">
                      {[...Array(card.rating)].map((_, i) => (
                        <svg key={i} className="star-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="carousel-card-quote">"{card.quote}"</p>
                    <div className="carousel-card-author">
                      <h3 className="carousel-card-name">{card.name}</h3>
                      <p className="carousel-card-location">{card.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-dots">
                {testimonialCards.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === testimonialIndex ? 'active' : ''}`}
                    onClick={() => setTestimonialIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="sneak-peek-content">
              <div className="sneak-peek-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Testimonials
              </div>
              <h2>What Our Patients Say</h2>
              <p>Real stories from real patients who have experienced our care and commitment to excellence.</p>
              <Link to="/testimonials" className="sneak-peek-cta" onClick={() => window.scrollTo(0, 0)}>
                Read More Testimonials
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Social Corner - Instagram Feed */}
      <FadeIn>
        <section className="social-corner-section">
          <div className="social-corner-header">
            <h2>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', marginRight: '12px', verticalAlign: 'middle' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow Us
            </h2>
            <p>Stay connected with us on social media for the latest updates, health tips, and hospital news</p>
          </div>
          
          <div className="follow-feed-container">

            
            <div className="social-corner-cta">
              <a 
                href="https://github.com/oofeyang22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-follow-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
              
              <a 
                href="https://github.com/oofeyang22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="facebook-follow-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>

              <a 
                href="https://github.com/oofeyang22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-follow-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
              
              <a 
                href="https://github.com/oofeyang22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-follow-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Feedback Form Section */}
      <FadeIn>
        <section id="feedback-form" className="home-feedback-section">
          <div className="home-feedback-card">
            <h3>Share Your Feedback</h3>
            <p>We value your opinion and strive to continuously improve our services. Please share your experience with us.</p>
            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="feedback-name" className="visually-hidden">Your Name *</label>
                  <input type="text" id="feedback-name" name="name" placeholder="Your Name" required aria-required="true" />
                </div>
                <div className="form-group">
                  <label htmlFor="feedback-email" className="visually-hidden">Your Email</label>
                  <input type="email" id="feedback-email" name="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="feedback-phone" className="visually-hidden">Phone Number *</label>
                <input type="tel" id="feedback-phone" name="phone" placeholder="Phone Number" required aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="feedback-subject" className="visually-hidden">Select Subject *</label>
                <select id="feedback-subject" name="subject" required className="feedback-select" aria-required="true">
                  <option value="">Select Subject *</option>
                  <option value="Hospital Feedback">Hospital Feedback</option>
                  <option value="Maintenance Feedback">Maintenance Feedback</option>
                  <option value="Food Quality">Food Quality</option>
                  <option value="Feedback on Staffs">Feedback on Staffs</option>
                  <option value="Feedback on Doctors">Feedback on Doctors</option>
                  <option value="custom">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="feedback-custom-subject" className="visually-hidden">Custom Subject</label>
                <input type="text" id="feedback-custom-subject" name="custom_subject" placeholder="Custom Subject" className="custom-subject-input" />
              </div>
              <div className="form-group">
                <label htmlFor="feedback-message" className="visually-hidden">Your Message *</label>
                <textarea id="feedback-message" name="message" placeholder="Your Message" rows="4" required aria-required="true"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="feedback-source" className="visually-hidden">How did you hear about us?</label>
                <input type="text" id="feedback-source" name="how_did_you_know" placeholder="How did you hear about us?" />
              </div>
              <button type="submit" className="btn btn-large" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}