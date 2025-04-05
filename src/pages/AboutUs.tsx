// filename: AboutUs.tsx

import "./AboutUs.css";
import OurTeamSection from "./../components/OurTeamSection"

function AboutUs() {
  return (
    <div className="about-us">
      <div className="banner">
        <div className="banner-container">
          <div className="banner-text-container">
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
          <img src='/assets/about-banner.png' alt='banner' className='banner-image' />
          <div className="banner-image-cover" />
        </div>
      </div>

      <div className="vision">
        <div className="left">
          <img src="/assets/logo.png" alt="logo" className="logo" />
          <img src="/assets/voluntrack_bg.png" alt="background" className="background" />
        </div>
        <div className="right">
          <h2>Our Vision</h2>
          <h1>
            We strive to foster positive
            changes within communities.
          </h1>
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

      <OurTeamSection />

      <div className="contact">
        <div className="contact-container">

          <div className="left">
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
              Be a part of Voluntrack’s journey. Whether you are a student
              seeking to gain real-world experience, a volunteer looking to
              make a difference, or a non-profit organization aiming for
              greater efficacy, Voluntrack is your partner in creating a
              stronger, more connected community.
            </p>
            <a href="mailto: info@voluntracks.com">
              <button>
                Contact Us
              </button>
            </a>
          </div>
          <img src='/assets/contact-us.png' alt='banner' className='contact-image' />
          <div className="contact-image-cover" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;