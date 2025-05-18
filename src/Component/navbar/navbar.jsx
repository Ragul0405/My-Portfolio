import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../navbar/navbar.css';
import rlogo from '../navbar/r-logo.png';
import chat from '../navbar/chat.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navparent">
      <nav className="navbar">
        <a href='#'><img src={rlogo} alt="Logo" className="logo" /></a>

        <h2 className='ragul'>RAGUL<span className='dot'>.</span></h2>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <Link activeClass= 'active' to='intro' spy={true} offset={-50} duration={500} smooth={true} className="home">Home</Link>
          <Link activeClass= 'active' to='about' spy={true} offset={-50} duration={500} smooth={true} className="about">About</Link>
          <Link activeClass= 'active' to='skills' spy={true} offset={-50} duration={500} smooth={true} className="service">Service</Link>
          <Link activeClass= 'active' to='works' spy={true} offset={-50} duration={500} smooth={true} className="projects">My Projects</Link>
          <Link activeClass= 'active' to='contact' spy={true} offset={-50} duration={500} smooth={true} className="contact">Contact</Link>
        </div>

        <button className="navbtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
        }}>
          <img src={chat} alt="" className="navconbtn" />
          Contact Me
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
