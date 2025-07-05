// filename: HeroSection.tsx

import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
        <div className="hero-container">
            <div className="hero-text-container">
                <h1 className="slogan-1">Explore Your Next Inspiring Volunteer Adventure</h1>
                <p className="slogan-2">Find volunteer opportunities that match your passions</p>
            </div>
            <div className="logo-container">
                <img src="/assets/logo-grey-no-padding.png" alt="logo-bg-image" />
            </div>
        </div>
    </section>
  );
}

export default HeroSection;