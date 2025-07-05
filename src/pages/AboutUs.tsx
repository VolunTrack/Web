// filename: AboutUs.tsx

import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <h2>Who We Are</h2>
            <h1>Empowering Volunteers,</h1>
            <h1>Strengthening Non-Profits</h1>
            <p>
                We are a dynamic platform that connects volunteers
                with meaningful opportunities and enhances the
                operational capabilities of non-profit organizations.
            </p>
            <p>
                We believe in the synergy that can be achieved when
                individuals and organizations come together for
                communal benefit.
            </p>
          </div>
          <img 
            src="/assets/about-us-hero-bg.png" 
            alt="volunteers background" 
            className="banner-bg-image"
          />
          <div className="banner-overlay"></div>
        </div>
      </div>

      <div className="vision">
        <div className="left">
            <img src="/assets/voluntrack_bg.png" alt="background" />
        </div>
        <div className="right">
          <h2>Our Vision</h2>
          <p>
             to foster positive
            changes within communities.
          </p>
          <p>
            Our work extends beyond education to improve
            community well-being. We facilitate effective
            collaborations between volunteers and non-profits,
            strengthening the fabric of community service.
          </p>
          <p>
            Our status as a non-profit organization underscores our
            dedication to societal advancement and enables us to
            broaden our impact.
          </p>
        </div>
      </div>

      <div className="team">
        <p>Our Team</p>
        <h1>
            We are passionate, focused
        </h1>
        <h1>
            volunteers dedicated to your success.
        </h1>
        
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/Shuolin Yin.png" alt="Shuolin Yin" />
            <h3>Shuolin Yin</h3>
            <p>Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/Feiyang Xu.png" alt="Feiyang Xu" />
            <h3>Feiyang Xu</h3>
            <p>President</p>
          </div>
          <div className="team-member">
            <img src="/images/Alan Yang.png" alt="Alan Yang" />
            <h3>Alan Yang</h3>
            <p>Tech Director</p>
          </div>
          <div className="team-member">
            <img src="/images/Shuolin Yin.png" alt="Shuolin Yin" />
            <h3>Shuolin Yin</h3>
            <p>Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/Alan Yang.png" alt="Alan Yang" />
            <h3>Alan Yang</h3>
            <p>Tech Director</p>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h1>
              Join us! We empower students,
              volunteers, and non-profits for
              a stronger community.
            </h1>
            <p>
              We enrich high school students' education by providing
              hands-on experience in web design, development, and
              marketing, combining technical skills with academic learning
              to promote practical skills, empathy, and teamwork.
            </p>
            <p>
              Be a part of Voluntrack's journey. Whether you are a student
              seeking to gain real-world experience, a volunteer looking to
              make a difference, or a non-profit organization aiming for
              greater efficacy, Voluntrack is your partner in creating a
              stronger, more connected community.
            </p>
            <button onClick={() => window.open('mailto:info@voluntracks.com')}>
              Contact us
            </button>
          </div>
          <img 
            src="/assets/about-us-contact-bg.png" 
            alt="contact background" 
            className="contact-bg-image"
          />
          <div className="contact-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;