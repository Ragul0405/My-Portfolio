import React from 'react';
import '../intro/intro.css';
import { Link } from 'react-scroll';
import smallprofile from './logo512.png';
import smalbag from './bag.png';
import download from './download.png';
import resume from './Ragul_Resume.pdf';

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <div className="text-content">
          <span className="intopara">Hello,</span>
          <h1 className="iam">
            I'm <span className="name">Ragul</span>
            <br />
            Full-Stack Developer
          </h1>
          <p className="intopara">
                        A dedicated Full-Stack Developer with a strong focus on backend technologies. I specialize in building robust, scalable applications using <strong>Django, Django REST Framework, and Python</strong>. On the frontend, I create clean and responsive interfaces with <strong>React.js, HTML5, CSS3, and JavaScript</strong>. I’m passionate about turning ideas into real-time applications and have experience working on live projects at <strong>Emayam Technologies</strong>.
          </p>

          <div className="button-group">
            <Link to="contact" spy={true} offset={-50} duration={500} smooth={true}>
              <button className="hirebtn">
                <img src={smalbag} alt="Hire" className="btnicon" />
                Hire Me
              </button>
            </Link>
            <a href={resume} download="Ragul_CV.pdf">
              <button className="hirebtn">
                <img src={download} alt="Download" className="btnicon" />
                Download CV
              </button>
            </a>
          </div>
        </div>

        <img src={smallprofile} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
}

export default Intro;
