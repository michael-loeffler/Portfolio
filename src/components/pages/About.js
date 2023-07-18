import React from 'react';
import headshot from '../../assets/Loeffler, Michael - Headshot small.jpg'

export default function About() {
  return (
    <div style={{paddingBottom: "50px"}}>
      <h1 className='text-center mt-3'>About Me</h1>
      <div className="mt-4 d-flex justify-content-around align-items-top mh-50">
        <img className='col-md-3' src={headshot} alt=""/>
          <p className='ml-3 mb-0 col-md-7 lead'>
          Motivated Full-Stack Web Developer and recent graduate of the Coding Boot Camp at Northwestern University. Background in Engineering and Higher Education Administration, pursuing a career shift into the tech world. Skilled problem-solver and fast learner who is passionate about gaining new competencies and working through challenges with increased efficiency. Strengths include collaboration, attention to detail, flexibility, innovation, project management, and clear communication.
          </p>
      </div>
    </div>
  );
}
