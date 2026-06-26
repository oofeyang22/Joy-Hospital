import { FadeIn, StaggerContainer } from '../components/AnimatedSection'
import drEmeka from '../assets/leader.png?format=webp&w=600&quality=80'
import drJanet from '../assets/doctor.png?format=webp&w=600&quality=80'
import drAjayi from '../assets/doctor2.jpg?format=webp&w=600&quality=80'
import drIwobi from '../assets/doctor3.jpg?format=webp&w=600&quality=80'


export default function Doctors() {
  const doctors = [
    { 
      name: "Dr. Emeka",
      specialty: "Senior Consultant",
      bio: "Expertise in patient care and clinical excellence.",
      education: "MBBS, MD",
      specialties: ["General Medicine", "Consultation"],
      image: drEmeka
    },
    { 
      name: "Dr. Janet",
      specialty: "Consultant Physician",
      bio: "Dedicated to holistic patient wellness.",
      education: "MBBS, MD",
      specialties: ["Internal Medicine", "Diagnostics"],
      image: drJanet
    },
    { 
      name: "Dr. Ajayi",
      specialty: "Specialist",
      bio: "Committed to high-quality healthcare standards.",
      education: "MBBS",
      specialties: ["General Surgery", "Emergency Care"],
      image: drAjayi
    },
    { 
      name: "Dr. Iwobi",
      specialty: "Consultant",
      bio: "Focusing on advanced medical treatments.",
      education: "MBBS, MS",
      specialties: ["Surgery", "Clinical Research"],
      image: drIwobi
    }
  ]
  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="doctors-hero">
          <h1>Our Expert Doctors</h1>
          <p className="doctors-subtitle">
            Dedicated professionals providing compassionate care for you and your family.
          </p>
        </div>
      </FadeIn>

      {/* Doctors Grid */}
      <StaggerContainer className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card-enhanced">
            <div className="doctor-card-header-enhanced">
              <div className="header-pattern"></div>
              <div className="doctor-avatar-wrapper">
                <div className="doctor-card-avatar-enhanced">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="doctor-avatar-image"
                    />
                  ) : (
                    <div className="doctor-avatar-placeholder">
                      <span className="initials-text">
                        {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="avatar-glow"></div>
              </div>
            </div>
            
            <div className="doctor-card-content">
              <h3 className="doctor-name-enhanced">{doctor.name}</h3>
              <p className="doctor-specialty-enhanced">{doctor.specialty}</p>
              <p className="doctor-education-enhanced">{doctor.education}</p>
              
              <div className="doctor-specialties-enhanced">
                {doctor.specialties.map((spec, idx) => (
                  <span key={idx} className="specialty-badge">
                    {spec}
                  </span>
                ))}
              </div>
              
              <p className="doctor-bio-enhanced">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </StaggerContainer>

      {/* Why Choose Our Doctors */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">Why Choose Our Doctors?</h2>
        </FadeIn>
        <StaggerContainer className="doctor-features-grid">
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">01</div>
            <h3>Expertise</h3>
            <p>Highly qualified professionals with years of experience.</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">02</div>
            <h3>Patient Care</h3>
            <p>We prioritize your health with personalized treatment plans.</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">03</div>
            <h3>Innovation</h3>
            <p>Utilizing modern medical techniques and technology.</p>
          </div>
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <FadeIn>
        <div className="doctors-cta">
          <h2>Join Our Medical Team</h2>
          <p>We are always looking for passionate professionals to join us.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:olaitan863@gmail.com" className="btn btn-large">Email Resume</a>
            <a href="tel:+2348107726872" className="btn btn-large">Call Now</a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}