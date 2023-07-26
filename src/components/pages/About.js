import React from 'react';
import headshot from '../../assets/Loeffler, Michael - Headshot small.jpg'
import "../../style.css";

export default function About() {
  return (
    <div>
      <h1 className='text-center mt-3'>About Me</h1>
      <div id='about' className="mt-4">
        <img id='headshot' src={headshot} alt="" />
        <p id='bio' className='lead'>
          Motivated Full-Stack Web Developer and recent graduate of the Coding Boot Camp at Northwestern University. Background in Engineering and Higher Education Administration, pursuing a career shift into the tech world. Skilled problem-solver and fast learner who is passionate about gaining new competencies and working through challenges with increased efficiency. Strengths include collaboration, attention to detail, flexibility, innovation, project management, and clear communication.
        </p>
      </div>
    </div>
  );
}
