import React from 'react';
import '../projects/project.css';
import img from '../projects/work1.png';

function Project() {
  return (
    <section id="works">
      <h2 className="worktitle">My Projects</h2>
      <p className="workdesc">
      I specialize in building robust, scalable, and secure server-side applications. With a strong foundation in backend technologies and database management, I focus on optimizing performance, ensuring data integrity, and supporting seamless integration with frontend systems to help businesses build powerful digital infrastructures.
      </p>

      <div className="worksimgs">
        {[1, 2, 3, 4].map((item) => (
          <div className="workimage-container" key={item}>
            <img src={img} alt={`Project ${item}`} className="workimage" />
            <div className="layer">
              <h3>{item === 1 ? "Zoho Website Clone" : `Project ${item}`}</h3>
              <p>
                {item === 1
                  ? "This website clone is inspired by the original Zoho website."
                  : `A brief description of Project ${item} goes here.`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="seemore">See More</button>
    </section>
  );
}

export default Project;
