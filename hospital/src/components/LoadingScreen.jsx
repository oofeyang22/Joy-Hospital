export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Hospital Logo Animation */}
        <div className="loading-logo">
          <div className="medical-cross">
            <div className="cross-vertical"></div>
            <div className="cross-horizontal"></div>
          </div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring pulse-ring-delay"></div>
        </div>
        
        {/* Hospital Name */}
        <h1 className="loading-title">JOY HOSPITAL</h1>
        
        {/* Tagline */}
        <p className="loading-tagline">Your Health, Our Mission</p>
        
        {/* Loading Bar */}
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        
        {/* Loading Text */}
        <div className="loading-text">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="loading-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </div>
  )
}
