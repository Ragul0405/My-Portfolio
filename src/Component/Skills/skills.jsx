import React from 'react';
import '../Skills/skills.css';
import web from '../Skills/web.png';
import webapp from '../Skills/webapp.png';
import sql from '../Skills/sql.png';

function Skills() {
  return (
    <section id='skills'>
      <span className="skilltitle">What I do</span>
      <span className="skilldes">
        I am a skilled and passionate backend developer specializing in building robust, scalable server-side applications and APIs. 
        I have expertise in Python, Django, REST APIs, and working with relational databases like PostgreSQL and MySQL.
      </span>

      <div className="skillbars">

        <div className="skilbar">
          <img src={web} alt="Backend Development" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Backend Development</h2>
            <p>
              Designing and implementing server-side logic, database integration, and APIs to power dynamic and scalable web applications.
            </p>
          </div>
        </div>

        <div className="skilbar">
          <img src={webapp} alt="API Development" className="skillbarimg" />
          <div className="skillbartext">
            <h2>API Development</h2>
            <p>
              Building RESTful APIs to facilitate communication between front-end and backend services, ensuring security and performance.
            </p>
          </div>
        </div>

        <div className="skilbar">
          <img src={sql} alt="Database Management" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Database Management</h2>
            <p>
              Designing, optimizing, and maintaining relational databases such as PostgreSQL and MySQL for efficient data storage and retrieval.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
