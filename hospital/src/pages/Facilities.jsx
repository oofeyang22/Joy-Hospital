import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import PhotoGallery from '../components/PhotoGallery'
import facilitiesHeroImage from '../assets/facility.jpg?format=webp&w=800&quality=75'

// Import facility images
import hospitalExterior from '../assets/hospital.jpg?w=800&format=webp&quality=75'
import facility1 from '../assets/entrance.jpg?w=800&format=webp&quality=75'
import facility2 from '../assets/reception.jpg?w=800&format=webp&quality=75'
import facility3 from '../assets/care.png?w=800&format=webp&quality=75'
import facility4 from '../assets/advanced.png?w=800&format=webp&quality=75'
import facility5 from '../assets/facilities.png?w=800&format=webp&quality=75'
import facility6 from '../assets/treatment.jpg?w=800&format=webp&quality=75'
import facility7 from '../assets/unit.png?w=800&format=webp&quality=75'
import facility8 from '../assets/operation.jpg?w=800&format=webp&quality=75'
import facility9 from '../assets/diagnostics.png?w=800&format=webp&quality=75'
import facility10 from '../assets/dialysis.png?w=800&format=webp&quality=75'
import facility11 from '../assets/lab.png?w=800&format=webp&quality=75'
import facility12 from '../assets/patient.png?w=800&format=webp&quality=75'
import facility13 from '../assets/consultation.png?format=webp&w=800&quality=75'
import facility14 from '../assets/imaging.png?format=webp&w=800&quality=75'
import facility15 from '../assets/emergency.png?format=webp&w=800&quality=75'
import facility16 from '../assets/pharmacy.png?format=webp&w=800&quality=75'
import facility17 from '../assets/physio.png?format=webp&w=800&quality=75'
import facility18 from '../assets/suite.png?format=webp&w=800&quality=75'
import facility19 from '../assets/surgical.png?format=webp&w=800&quality=75'
import facility20 from '../assets/area.png?format=webp&w=800&quality=75'

export default function Facilities() {
  const galleryImages = [
        { src: hospitalExterior, alt: "Hospital Building", caption: "Joy Hospital - Ikeja" },
        { src: facility1, alt: "Hospital Exterior", caption: "Main Entrance" },
        { src: facility2, alt: "Reception", caption: "Modern Reception" },
        { src: facility3, alt: "Patient Care", caption: "Patient Care Ward" },
        { src: facility4, alt: "Equipment", caption: "Advanced Medical Equipment" },
        { src: facility5, alt: "Facility", caption: "Healthcare Facility" },
        { src: facility6, alt: "Treatment", caption: "Treatment Room" },
        { src: facility7, alt: "ICU", caption: "Intensive Care Unit" },
        { src: facility8, alt: "OT", caption: "Operation Theatre" },
        { src: facility9, alt: "Lab", caption: "Diagnostic Center" },
        { src: facility10, alt: "Dialysis", caption: "Dialysis Unit" },
        { src: facility11, alt: "Lab", caption: "Laboratory" },
        { src: facility12, alt: "Ward", caption: "Patient Ward" },
        { src: facility13, alt: "Consultation", caption: "Consultation Room" },
        { src: facility14, alt: "Imaging", caption: "Imaging Center" },
        { src: facility15, alt: "Emergency", caption: "24/7 Emergency" },
        { src: facility16, alt: "Pharmacy", caption: "In-House Pharmacy" },
        { src: facility17, alt: "Physio", caption: "Physiotherapy" },
        { src: facility18, alt: "Team", caption: "Medical Team" },
        { src: facility19, alt: "Surgery", caption: "Surgical Suite" },
        { src: facility20, alt: "Care", caption: "Care Area" }

  ]

  const highlights = [
    { title: "24/7 Emergency", desc: "Round-the-clock emergency medical services." },
    { title: "Expert Doctors", desc: "Highly skilled specialists at your service." },
    { title: "Modern Labs", desc: "State-of-the-art diagnostic capabilities." },
    { title: "Patient Care", desc: "Compassionate care focused on recovery." }
  ]

  const facilities = [
    { title: "Emergency Unit", desc: "Advanced trauma and emergency care." },
    { title: "Operation Theatre", desc: "Fully equipped surgical suites." },
    { title: "ICU Ward", desc: "Dedicated intensive care monitoring." },
    { title: "Diagnostic Lab", desc: "Comprehensive pathology services." }
    // Add remaining facilities as needed
  ]

  return (
    <section className="section">
      <FadeIn>
        <div className="facilities-hero facilities-hero-with-bg enhanced-hero-image">
          <div className="hero-image-backdrop"></div>
          <img src={facilitiesHeroImage} alt="Hospital Facilities" className="hero-background-image" loading="eager" />
          <div className="hero-overlay-gradient"></div>
          <div className="facilities-hero-content">
            <h1>Our Facilities</h1>
            <p className="facilities-subtitle">State-of-the-art medical infrastructure designed for your comfort and recovery.</p>
          </div>
        </div>
      </FadeIn>

      <ScaleIn>
        <div className="facilities-highlights-container">
          <StaggerContainer className="facilities-highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="facility-highlight-item">
                <div className="facility-highlight-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">Our Services</h2>
        </FadeIn>
        <StaggerContainer className="facilities-grid-new">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card-new">
              <div className="facility-card-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="facility-card-body">
                <h3>{facility.title}</h3>
                <p>{facility.desc}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <PhotoGallery images={galleryImages} title="Facility Gallery" previewCount={8} />

      <FadeIn>
        <div className="facilities-visit-cta" style={{ marginTop: '80px' }}>
          <h2>Visit Us</h2>
          <p>We are located in the heart of the city, ready to serve your healthcare needs.</p>
          <a href="http://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-large">Get Directions</a>
        </div>
      </FadeIn>
    </section>
  )
}