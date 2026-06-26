import { useState, useEffect } from 'react'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'
import { ChevronDown } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The care I received here was exceptional. The doctors took the time to explain everything clearly and made me feel at ease throughout my treatment.",
      author: "Sarah Johnson",
      location: "Okinni, Osun",
      rating: 5,
      featured: true
    },
    {
      quote: "Professional, clean, and highly efficient. I was impressed by the short waiting times and the friendliness of the entire staff.",
      author: "Adeolu Bakare",
      location: "Ogbomosho",
      rating: 5
    },
    {
      quote: "Excellent medical facilities. I felt truly cared for during my recovery, and the follow-up visits were very thorough.",
      author: "Chidinma Okafor",
      location: "Ibadan",
      rating: 5
    },
    {
      quote: "I am very grateful for the expert diagnosis I received. Their medical team is truly top-tier.",
      author: "Tunde Williams",
      location: "Ile-Ife",
      rating: 5
    },
    {
      quote: "The personalized attention I received for my chronic condition has been life-changing. Highly recommended.",
      author: "Funmi Adebayo",
      location: "Ogbomoso",
      rating: 5
    },
    {
      quote: "A modern facility with a human touch. The doctors are not just experts but also very empathetic.",
      author: "Emeka Nwosu",
      location: "Lagos",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])
  
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) handleNext({ preventDefault: () => {}, stopPropagation: () => {} })
    if (distance < -50) handlePrev({ preventDefault: () => {}, stopPropagation: () => {} })
    setTouchStart(0)
    setTouchEnd(0)
  }
  
  const featuredTestimonial = testimonials[currentIndex]
  const otherTestimonials = testimonials.filter((_, index) => index !== currentIndex)
  
  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsPaused(false), 3000)
  }
  
  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsPaused(false), 3000)
  }
  
  const handleDotClick = (index) => {
    setIsPaused(true)
    setCurrentIndex(index)
    setTimeout(() => setIsPaused(false), 3000)
  }

  const faqs = [
    { question: "How do I book an appointment?", answer: "You can book an appointment by calling our office directly or using the form on our contact page." },
    { question: "What should I bring to my visit?", answer: "Please bring your ID, medical history records, and current medication list." },
    { question: "Do you accept health insurance?", answer: "Yes, we work with several major insurance providers. Please check with our reception desk." },
    { question: "Are walk-ins allowed?", answer: "We prioritize scheduled appointments, but we accommodate emergencies as much as possible." },
    { question: "What are your operating hours?", answer: "We are open Monday through Friday, from 8:00 AM to 6:00 PM." }
  ]

  const [openFAQ, setOpenFAQ] = useState(null)
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index)
  
  return (
    <section className="section">
      <FadeIn>
        <div className="testimonials-hero">
          <h1>Patient Testimonials</h1>
          <p className="testimonials-subtitle">Hear what our patients have to say about their experience with our care.</p>
        </div>
      </FadeIn>

      <ScaleIn>
        <div className="testimonial-carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={handlePrev} aria-label="Previous" type="button">‹</button>
          
          <div className="featured-testimonial" key={currentIndex} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="featured-quote-icon">"</div>
            <div className="featured-testimonial-stars">{'★'.repeat(featuredTestimonial.rating)}</div>
            <p className="featured-testimonial-quote">{featuredTestimonial.quote}</p>
            <div className="featured-testimonial-author">
              <div className="featured-author-avatar">{featuredTestimonial.author.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <div className="featured-author-name">{featuredTestimonial.author}</div>
                <div className="featured-author-location">{featuredTestimonial.location}</div>
              </div>
            </div>
          </div>
          
          <button className="carousel-btn carousel-btn-next" onClick={handleNext} aria-label="Next" type="button">›</button>
          
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button key={index} className={`carousel-dot ${index === currentIndex ? 'active' : ''}`} onClick={() => handleDotClick(index)} aria-label={`Go to ${index + 1}`} />
            ))}
          </div>
        </div>
      </ScaleIn>

      <FadeIn>
        <div className="testimonial-stats">
          <div className="testimonial-stat">
            <div className="testimonial-stat-number"><CountUp end="1500" duration={2500} suffix="+" /></div>
            <div className="testimonial-stat-label">Happy Patients</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number"><CountUp end="4.9" duration={2000} suffix="/5" /></div>
            <div className="testimonial-stat-label">Average Rating</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number"><CountUp end="98" duration={2200} suffix="%" /></div>
            <div className="testimonial-stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </FadeIn>

      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">What Patients Say</h2>
        </FadeIn>
        
        <StaggerContainer className="testimonials-grid">
          {otherTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-new">
              <div className="testimonial-card-stars">{'★'.repeat(testimonial.rating)}</div>
              <p className="testimonial-card-quote">"{testimonial.quote}"</p>
              <div className="testimonial-card-divider"></div>
              <div className="testimonial-card-footer">
                <div className="testimonial-card-avatar">{testimonial.author.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <div className="testimonial-card-author">{testimonial.author}</div>
                  <div className="testimonial-card-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <FadeIn>
        <div style={{ marginTop: 80 }}>
          <div className="faq-section-header">
            <h2 className="faq-section-title">Frequently Asked Questions</h2>
            <p className="faq-section-subtitle">Find answers to common questions about our services.</p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFAQ === index ? 'faq-item-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={openFAQ === index}>
                  <span className="faq-question-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown className={`faq-chevron ${openFAQ === index ? 'faq-chevron-open' : ''}`} size={20} />
                </button>
                <div className={`faq-answer ${openFAQ === index ? 'faq-answer-open' : ''}`}>
                  <div className="faq-answer-content">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}