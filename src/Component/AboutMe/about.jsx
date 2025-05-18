import React, { useState } from 'react';
import '../AboutMe/about.css';
import aboutImage from '../AboutMe/firstt.png';

function About() {
  const [activeTab, setActiveTab] = useState('skills');
  const [fade, setFade] = useState(true);

  const handleTabClick = (tab) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(true);
    }, 200);
  };

  return (
    <section id="about" style={{ backgroundColor: '#1E1E1E' }}>
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="Ragul profile" className="about-image" />
        </div>

        <div className="about-content">
          <p className="about-description">
            Hi, I'm <strong>Ragul</strong>, a Python full-stack developer skilled in both front-end and back-end technologies.
            I specialize in building scalable web applications using <strong>React.js</strong> and <strong>Django</strong>. I also have experience
            with database systems such as <strong>MySQL</strong> and <strong>PostgreSQL</strong>, and I focus on delivering responsive, user-friendly solutions.
          </p>

          <div className="tab-controls">
            <button
              className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => handleTabClick('skills')}
              aria-current={activeTab === 'skills' ? 'true' : undefined}
            >
              Skills
              <span className="underline"></span>
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => handleTabClick('education')}
              aria-current={activeTab === 'education' ? 'true' : undefined}
            >
              Education
              <span className="underline"></span>
            </button>
            <button
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => handleTabClick('experience')}
              aria-current={activeTab === 'experience' ? 'true' : undefined}
            >
              Experience
              <span className="underline"></span>
            </button>
          </div>

          <div className={`tab-content ${fade ? 'fade-in' : 'fade-out'}`}>
            {activeTab === 'skills' && (
                <ul className="tab-list">
                  <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript</li>
                  <li><strong>Frameworks & Libraries:</strong> React.js, Bootstrap, Django</li>
                  <li><strong>Back-End:</strong> Python, REST API, MySQL, PostgreSQL</li>
                  <li><strong>Tools & Others:</strong> Git, Postman, exe packaging</li>
                </ul>
              )}

            {activeTab === 'education' && (
              <ul className="tab-list">
                <li><strong>Post Graduation:</strong> MCA – 7.4 CGPA</li>
                <li><strong>Under Graduation:</strong> BCA – 7.1 CGPA</li>
                <li><strong>Specialization:</strong> Python Full-Stack at Besant Technologies, Velachery</li>
              </ul>
            )}

            {activeTab === 'experience' && (
              <ul className="tab-list">
                <li><strong>Internship:</strong> Backend Developer at Emayam Technology Pvt Ltd.</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
