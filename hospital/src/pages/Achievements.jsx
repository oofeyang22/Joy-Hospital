import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { Award } from 'lucide-react'
import CountUp from '../components/CountUp'
import { useState } from 'react'

// Achievement images import
import msmchSurgery from '../assets/surgery.png'
import tkrXray from '../assets/knee.png'
import shoulderXray from '../assets/shoulder.jpg'
import spineXray from '../assets/fixation.jpg'
import pelvicXray from '../assets/Pelvic-Fracture.jpg'
import polytraumaXray from '../assets/polytrauma.png'
import tumourImg from '../assets/tumor.png'
import paediatricImg from '../assets/paediatrics.jpg'
import geriatricImg from '../assets/geriatric.png'
import softTissueImg from '../assets/tissue.jpg'
import tendonTransferImg from '../assets/tendon.png'
import totalHipReplacement from '../assets/hip.png'
import reverseShoulderReplacement from '../assets/reverse.png'
import osteoidOsteomaImg from '../assets/osteoid.png'

const xrayImages = {
  1: msmchSurgery,
  2: totalHipReplacement,
  3: tkrXray,
  4: shoulderXray,
  5: reverseShoulderReplacement,
  6: tumourImg,
  7: spineXray,
  8: polytraumaXray,
  9: pelvicXray,
  10: paediatricImg,
  11: geriatricImg,
  12: softTissueImg,
  13: tendonTransferImg,
  14: osteoidOsteomaImg,
}

export default function Achievements() {
  const [flippedCards, setFlippedCards] = useState({})
  const [animatingCard, setAnimatingCard] = useState(null)
  
  const stats = [
    { number: "17", suffix: "+", label: "Major Milestones", duration: 1800 },
    { number: "10000", suffix: "+", label: "Patients Served", duration: 2800 },
    { number: "150", suffix: "/mo", label: "Surgical Volume", duration: 2200 },
    { number: "25", suffix: "+", label: "Years of Experience", duration: 2000 }
  ]

  const achievements = [
    { id: 1, key: 'msmch', title: 'MSMCH Ortho', desc: 'First Orthopedic department establishment.', category: 'Milestone' },
    { id: 2, key: 'thr', title: 'Hip Replacement', desc: 'Successfully performed total hip replacement.', category: 'Milestone' },
    { id: 3, key: 'tkr', title: 'Golden Knee', desc: 'Advanced total knee replacement surgery.', category: 'Milestone' },
    { id: 4, key: 'shoulder', title: 'Shoulder Replacement', desc: 'Precision shoulder arthroplasty.', category: 'Milestone' },
    { id: 5, key: 'revShoulder', title: 'Reverse Shoulder', desc: 'Complex reverse shoulder replacement.', category: 'Milestone' },
    { id: 6, key: 'tumour', title: 'Tumour Procedures', desc: 'Specialized orthopaedic oncology.', category: 'Specialized' },
    { id: 7, key: 'spine', title: 'Spine Surgery', desc: 'Cervical and lumbar spine fixation.', category: 'Specialized' },
    { id: 8, key: 'polytrauma', title: 'Polytrauma', desc: 'Comprehensive fracture management.', category: 'Specialized' },
    { id: 9, key: 'pelvic', title: 'Pelvic Fixation', desc: 'Complex pelvic reconstruction.', category: 'Specialized' },
    { id: 10, key: 'paediatric', title: 'Paediatric Care', desc: 'Specialized care for children.', category: 'Care' },
    { id: 11, key: 'geriatric', title: 'Geriatric Care', desc: 'Compassionate elderly trauma care.', category: 'Care' },
    { id: 12, key: 'softTissue', title: 'Tissue Reconstruction', desc: 'Advanced soft tissue repair.', category: 'Advanced' },
    { id: 13, key: 'tendon', title: 'Tendon Transfer', desc: 'Restoring function via transfer.', category: 'Advanced' },
    { id: 14, key: 'osteoid', title: 'Osteoid Osteoma', desc: 'Precision excision surgery.', category: 'Specialized' }
  ]

  const handleCardClick = (cardId, event) => {
    if (event && (event.target.closest('.view-xray-button') || event.target.closest('button'))) return
    if (animatingCard === cardId) return
    
    setAnimatingCard(cardId)
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }))
    setTimeout(() => setAnimatingCard(null), 700)
  }

  return (
    <div className="achievements-modern-page">
      <section className="achievements-hero-modern">
        <div className="achievements-hero-overlay"></div>
        <div className="achievements-hero-content">
          <FadeIn>
            <div className="achievements-hero-badge">
              <Award className="badge-icon" size={20} />
              <span>Professional Excellence</span>
            </div>
            <h1 className="achievements-hero-title">Our Achievements</h1>
            <p className="achievements-hero-subtitle">Decades of dedicated care and surgical precision.</p>
          </FadeIn>
        </div>
      </section>

      <ScaleIn>
        <section className="home-stats-section">
          <StaggerContainer className="home-stats-grid achievements-stats-inline">
            {stats.map((stat, index) => (
              <div key={index} className="home-stat-item">
                <div className="home-stat-number">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="home-stat-label">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </section>
      </ScaleIn>

      <section className="achievements-grid-section">
        <div className="container">
          <StaggerContainer className="achievements-grid-modern">
            {achievements.map((item, index) => (
              <FadeIn key={item.id} delay={index * 50}>
                <div 
                  className={`achievement-card-modern ${flippedCards[item.id] ? 'flipped' : ''}`}
                  onClick={(e) => handleCardClick(item.id, e)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="achievement-card-inner">
                    <div className="achievement-card-front">
                      <div className="achievement-number-badge"><span>{String(item.id).padStart(2, '0')}</span></div>
                      {xrayImages[item.id] && (
                        <div className="achievement-image-container">
                          <img src={xrayImages[item.id]} alt={item.title} className="achievement-xray-image" loading="lazy" />
                        </div>
                      )}
                      <div className="achievement-content">
                        <span className="achievement-category">{item.category}</span>
                        <h3 className="achievement-title">{item.title}</h3>
                      </div>
                    </div>
                    <div className="achievement-card-back">
                      <div className="achievement-back-content">
                        <h3 className="achievement-back-title">{item.title}</h3>
                        <p className="achievement-description">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="achievements-cta-section">
        <div className="container">
          <FadeIn>
            <div className="achievements-cta-card">
              <div className="cta-content">
                <h2>Ready to Start Your Recovery?</h2>
                <p>Contact our expert team to discuss your orthopedic needs today.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="cta-button-primary">Book Consultation</a>
                  <a href="/services" className="cta-button-secondary">View Services</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}