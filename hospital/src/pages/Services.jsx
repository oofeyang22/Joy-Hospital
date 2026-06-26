import { Link } from 'react-router-dom'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import servicesHeroImage from '../assets/banner.png?format=webp&w=1200&quality=80'

export default function Services() {
  const services = [
    { 
      title: "General Medicine", 
      desc: "Comprehensive primary care services for patients of all ages, focusing on health maintenance and disease prevention.",
      category: "Primary Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    },
    { 
      title: "Orthopedics", 
      desc: "Advanced treatment for musculoskeletal issues, including bone, joint, and ligament disorders.",
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6m6-6v6m-4 8h.01M10 22h4a2 2 0 002-2V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16a2 2 0 002 2z"/></svg>
    },
    { 
      title: "Urology", 
      desc: "Expert care for conditions affecting the urinary tract and male reproductive system.",
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/><path d="M9 16v2m6-2v2"/></svg>
    },
    { 
      title: "General Surgery", 
      desc: "Comprehensive surgical procedures performed by expert surgeons using modern techniques.",
      category: "Surgical",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2l-1 1-2-2-2 2-1-1-4 4v6h7v7l4-4 1 1 2-2-1-1 4-4-7-7z"/></svg>
    },
    { 
      title: "Neurology", 
      desc: "Specialized diagnostics and treatment for disorders of the nervous system.",
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2m7 10v4m-4 0h8"/></svg>
    },
    { 
      title: "Nephrology", 
      desc: "Dedicated care for kidney health, including hypertension and renal function management.",
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2c-1.5 2-3 3.5-3 6s1.5 4 3 4 3-1.5 3-4-1.5-4-3-6zm6 0c-1.5 2-3 3.5-3 6s1.5 4 3 4 3-1.5 3-4-1.5-4-3-6z"/><path d="M12 14v8"/></svg>
    },
  ]
  
  const highlights = [
    { title: "Patient-Centered", desc: "Your health and comfort are our top priorities." },
    { title: "Expert Staff", desc: "Care provided by highly qualified medical professionals." },
    { title: "Modern Facilities", desc: "Equipped with the latest medical technology." },
    { title: "Accessible Care", desc: "Conveniently located with flexible appointment options." }
  ]

  return (
    <section className="section">
      <FadeIn>
        <div className="services-hero services-hero-with-bg enhanced-hero-image">
          <div className="hero-image-backdrop"></div>
          <img 
            src={servicesHeroImage} 
            alt="Medical Services" 
            className="hero-background-image"
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay-gradient"></div>
          <div className="services-hero-content">
            <h1>Our Medical Services</h1>
            <p className="services-subtitle">
              Dedicated to providing comprehensive, compassionate, and high-quality healthcare for our community.
            </p>
          </div>
        </div>
      </FadeIn>

      <ScaleIn>
        <div className="service-highlights-container">
          <StaggerContainer className="service-highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="service-highlight-item">
                <div className="service-highlight-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">Our Expertise</h2>
        </FadeIn>
        
        <StaggerContainer className="services-grid-new">
          {services.map((service, index) => (
            <div key={index} className="service-card-new">
              <div className="service-card-content">
                <div className="service-card-category">{service.category}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <FadeIn>
        <section className="services-cta-section">
          <div className="services-cta-content">
            <h2>Need Medical Assistance?</h2>
            <p>Our team is ready to support your health journey. Schedule a consultation or visit us today.</p>
            <div className="services-cta-actions">
              <a 
                href="tel:+2348107726872" 
                className="btn btn-large btn-with-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
              <Link 
                to="/contact"
                className="btn btn-outline-large btn-with-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Visit Us
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </section>
  )
}