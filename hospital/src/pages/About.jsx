import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'
import PhotoGallery from '../components/PhotoGallery'

// Assets
import leaderImage from '../assets/leader.png?format=webp&w=400&quality=80'
import directorImage from '../assets/direct.png?format=webp&w=600&quality=80'
import cfoImage from '../assets/cfo.jpg'
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


export default function About() {
  const content = {
    title: "About Joy Hospital",
    intro1: "Welcome to Joy Hospital, a beacon of healthcare excellence in Ikeja.",
    intro2: "We are committed to providing compassionate care with advanced medical technology.",
    heroCaption: "Joy Hospital - Ikeja",
    stat1Label: "Patients Served",
    stat2Label: "Years of Experience",
    stat3Label: "Procedures Completed",
    stat4Label: "Support",
    mission: "Our Mission",
    missionText: "To provide world-class, affordable healthcare to every individual in our community.",
    vision: "Our Vision",
    visionText: "To be the leading healthcare institution known for clinical outcomes and patient trust.",
    motto: "Our Motto",
    mottoText: "Healing Hands, Compassionate Hearts.",
    coreValues: "Our Core Values",
    values: [
      { title: "Integrity", desc: "Unwavering commitment to ethical medical practice." },
      { title: "Patient First", desc: "Prioritizing the well-being and comfort of our patients." },
      { title: "Excellence", desc: "Striving for the highest standards in medical procedures." },
      { title: "Innovation", desc: "Embracing cutting-edge technology for better diagnostics." }
    ],
    leadership: "Leadership Team",
    founderName: "Dr. Emeka",
    founderTitle: "Founder",
    founderEducation: "MBBS, MD - Senior Consultant",
    founderBio: "A visionary leader dedicated to transforming healthcare delivery in Ikeja.",
    directorName: "Mr. Taiwo Akanbi",
    directorTitle: "Director",
    directorEducation: "Hospital Administration Specialist",
    directorBio: "Ensuring operational excellence and compassionate patient services.",
    cfoName: "Mr. Yusuf",
    cfoTitle: "Administrator",
    cfoEducation: "BHA, MBA (Healthcare)",
    cfoBio: "Focused on seamless patient experiences and facility management.",
    photoGallery: "Our Facilities"
  }

  const stats = [
    { number: 50000, suffix: "+", label: content.stat1Label, duration: 2800 },
    { number: 25, suffix: "+", label: content.stat2Label, duration: 2000 },
    { number: 85000, suffix: "+", label: content.stat3Label, duration: 2800 },
    { number: 24, suffix: "/7", label: content.stat4Label, duration: 1500 }
  ]

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

  return (
    <section className="section">
      <div className="about-hero-container">
        <FadeIn>
          <div className="about-hero">
            <h1>{content.title}</h1>
            <div className="about-intro-text">
              <p>{content.intro1}</p>
              <p>{content.intro2}</p>
            </div>
          </div>
        </FadeIn>
        <ScaleIn>
          <div className="about-hero-image animated-hospital-image">
            <div className="about-hero-image-pattern"></div>
            <div className="image-glow-effect"></div>
            <img src={hospitalExterior} alt="Main Building" className="hospital-building-img" />
            <div className="about-hero-image-caption">{content.heroCaption}</div>
          </div>
        </ScaleIn>
      </div>

      <ScaleIn>
        <div className="about-stats-container">
          <StaggerContainer className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                <div className="about-stat-number">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      <FadeIn>
        <div className="mission-vision-container">
          <div className="mission-vision-card mission-card">
            <h2>{content.mission}</h2>
            <p>{content.missionText}</p>
          </div>
          <div className="mission-vision-card vision-card">
            <h2>{content.vision}</h2>
            <p>{content.visionText}</p>
          </div>
          <div className="mission-vision-card mission-card">
            <h2>{content.motto}</h2>
            <p>{content.mottoText}</p>
          </div>
        </div>
      </FadeIn>

      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{content.coreValues}</h2>
        </FadeIn>
        <StaggerContainer className="values-grid">
          {content.values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{content.leadership}</h2>
        </FadeIn>
        
        <ScaleIn>
          <div className="leader-spotlight">
            <div className="leader-spotlight-avatar">
              <img src={leaderImage} alt={content.founderName} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{content.founderName}</h3>
              <div className="leader-spotlight-title">{content.founderTitle}</div>
              <div className="leader-spotlight-qualifications">{content.founderEducation}</div>
              <p>{content.founderBio}</p>
            </div>
          </div>
        </ScaleIn>

        <ScaleIn>
          <div className="leader-spotlight" style={{ marginTop: 40 }}>
            <div className="leader-spotlight-avatar">
              <img src={directorImage} alt={content.directorName} className="director-profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{content.directorName}</h3>
              <div className="leader-spotlight-title">{content.directorTitle}</div>
              <div className="leader-spotlight-qualifications">{content.directorEducation}</div>
              <p>{content.directorBio}</p>
            </div>
          </div>
        </ScaleIn>

        <ScaleIn>
          <div className="leader-spotlight" style={{ marginTop: 40 }}>
            <div className="leader-spotlight-avatar">
              <img src={cfoImage} alt={content.cfoName} className="rakshana-profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{content.cfoName}</h3>
              <div className="leader-spotlight-title">{content.cfoTitle}</div>
              <div className="leader-spotlight-qualifications">{content.cfoEducation}</div>
              <p>{content.cfoBio}</p>
            </div>
          </div>
        </ScaleIn>
      </div>

      <PhotoGallery 
        images={galleryImages} 
        title={content.photoGallery}
        previewCount={8}
      />
    </section>
  )
}