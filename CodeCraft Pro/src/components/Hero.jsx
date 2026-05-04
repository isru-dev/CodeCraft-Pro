import './hero.css';

export function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tagline">Elevate Your Workflow</span>
          <h1 className="hero-title">Master Modern Engineering with <span className="highlight">CodeCraft Pro</span></h1>
          <p className="hero-subtitle">
            Go beyond the basics. Learn full-stack architecture, 
            system design, and advanced performance patterns.
          </p>
          <div className="hero-actions">
            <button className="btn-main">Get Started</button>
            <button className="btn-outline">Browse Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
}