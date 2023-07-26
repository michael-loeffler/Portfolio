import React from 'react';
import resume from '../../assets/Resume - Michael Loeffler.pdf'
import '../../style.css';

export default function Resume() {
  return (
    <div className="d-flex flex-column align-items-center" style={{paddingBottom: "50px"}}>
      <h1 className='text-center mt-3'>Resume</h1>
      <a href={resume} download="Resume - Michael Loeffler.pdf" target='_blank' rel='noopener noreferrer' className="btn btn-outline-info mt-3" id='resume'>Download my Resume</a>

        <div id='skills' className="card mt-4 text-center">
          <div className="card-header">
            <h5 className="mb-0">Front-End Proficiencies</h5>
          </div>
            <ul className="list-group">
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">jQuery</li>
              <li className="list-group-item">Handlebars</li>
              <li className="list-group-item">React</li>
            </ul>
        </div>
     
        <div className="card mt-4 mb-2 text-center">
          <div className="card-header">
            <h5 className="mb-0">Back-End Proficiencies</h5>
          </div>
            <ul className="list-group">
              <li className="list-group-item">Node</li>
              <li className="list-group-item">Object-Oriented Programming</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">MySQL</li>
              <li className="list-group-item">Sequelize</li>
              <li className="list-group-item">Model-View-Controller framework</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Mongoose</li>
              <li className="list-group-item">MERN framework (MongoDB, Express, React, Node)</li>
            </ul>
        </div>

    </div>
  );
}
