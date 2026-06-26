import { useState } from 'react'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { useToast } from '../components/Toast'
import { JOY_OT_ICU_GOOGLE_MAPS_URL } from '../locationLinks'

export default function Contact() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xykaqzoz', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) {
        toast.success('Message sent successfully! We will contact you soon.', 5000)
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
  
  const socialLinks = [
    { name: "Instagram", desc: "Follow us for health updates", icon: "IG", url: "https://github.com/oofeyang22" },
    { name: "Facebook", desc: "Connect with our community", icon: "FB", url: "https://github.com/oofeyang22" },
    { name: "YouTube", desc: "Watch our educational videos", icon: "YT", url: "https://github.com/oofeyang22" },
    { name: "Linktree", desc: "All our links in one place", icon: "LT", url: "https://github.com/oofeyang22" },
    { name: "WhatsApp", desc: "Chat with us directly", icon: "WA", url: "https://wa.me/2349064813638" }
  ]

  return (
    <section className="section">
      <FadeIn>
        <div className="contact-hero">
          <h1>Contact Us</h1>
        </div>
      </FadeIn>

      <div className="contact-page-section">
        <div className="contact-section-header consultations">
          <h2>Consultations</h2>
        </div>
        <StaggerContainer className="contact-info-grid">
          <a href="https://maps.app.goo.gl/Q6ufKcY2c8rvS9hr6" target="_blank" rel="noreferrer" className="contact-card-modern contact-card-interactive">
            <div className="contact-card-icon-button">
              <div className="icon-button-circle"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div className="icon-button-glow"></div>
            </div>
            <h3 className="contact-card-title">Address</h3>
            <div className="contact-card-content">
              <p>Joy Hospital</p>
              <p>Allen Avenue, Ikeja</p>
            </div>
            <div className="contact-card-action"><span>View on Maps</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </a>

          <a href="tel:+23490658789" className="contact-card-modern contact-card-interactive">
            <div className="contact-card-icon-button">
              <div className="icon-button-circle"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            </div>
            <h3 className="contact-card-title">Phone</h3>
            <div className="contact-card-content">
              <p className="contact-highlight-text">+2348107726872</p>
              <p className="contact-note-text">Available 24/7 for emergencies</p>
            </div>
            <div className="contact-card-action"><span>Call Now</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </a>

          <a href="mailto:olaitan863@gmail.com" className="contact-card-modern contact-card-interactive">
            <div className="contact-card-icon-button">
              <div className="icon-button-circle"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            </div>
            <h3 className="contact-card-title">Email</h3>
            <div className="contact-card-content"><p className="contact-highlight-text">olaitan863@gmail.com</p></div>
            <div className="contact-card-action"><span>Send Email</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </a>

          <div className="contact-card-modern">
            <div className="contact-card-icon-button"><div className="icon-button-circle icon-static"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div></div>
            <h3 className="contact-card-title">Operating Hours</h3>
            <div className="contact-card-content">
              <div className="contact-hours-item"><strong>Emergency: 24/7</strong></div>
              <div className="contact-hours-divider"></div>
              <div className="contact-hours-item"><strong>OPENING Hours:</strong></div>
              <div className="contact-hours-item">Mon-Sat: 9 AM - 8 PM</div>
              <div className="contact-hours-item">Sunday: On Request</div>
            </div>
          </div>
        </StaggerContainer>
      </div>

      <div className="contact-page-section">
        <div className="ot-icu-contact">
          <div className="contact-content">
            <h2>OT & ICU Care</h2>
            <div className="contact-info-grid">
              <a href={JOY_OT_ICU_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-card-modern contact-card-interactive">
                <h3 className="contact-card-title">Location</h3>
                <div className="contact-card-content"><p>Allen Avenue, Ikeja</p></div>
                <div className="contact-card-action"><span>View Maps</span></div>
              </a>
              <a href="tel:+23490658789" className="contact-card-modern contact-card-interactive">
                <h3 className="contact-card-title">Emergency Contact</h3>
                <div className="contact-card-content"><p className="contact-highlight-text">+2348107726872</p></div>
                <div className="contact-card-action"><span>Call Now</span></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">Send Us a Message</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', color: '#666' }}>We are here to assist you with your health needs.</p>
        </FadeIn>
        <ScaleIn>
          <form onSubmit={handleSubmit} className="contact-form-main">
            <div className="contact-form-grid">
              <input type="text" name="name" placeholder="Full Name *" required />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="tel" name="phone" placeholder="Phone Number *" required />
              <select name="subject" required>
                <option value="">Select Subject *</option>
                <option value="Feedback">Hospital Feedback</option>
                <option value="Staff">Staff Feedback</option>
                <option value="Doctors">Doctor Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <textarea name="message" placeholder="Your Message *" rows="6" required></textarea>
            <button type="submit" className="btn btn-large" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </ScaleIn>
      </div>

      <div style={{ marginTop: 80 }}>
        <FadeIn><h2 className="section-heading">Connect With Us</h2></FadeIn>
        <StaggerContainer className="contact-social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="contact-social-card">
              <div className="contact-social-icon">{social.icon}</div>
              <h3>{social.name}</h3>
              <p>{social.desc}</p>
            </a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}