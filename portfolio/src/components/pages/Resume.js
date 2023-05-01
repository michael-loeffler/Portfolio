import React from 'react';
import resume from '../../assets/Loeffler, Michael - Resume.pdf'

export default function Resume() {
  return (
    <div className="d-flex flex-column align-items-center" style={{paddingBottom: "50px"}}>
      <h1 className='text-center mt-3'>Resume</h1>
      <a href={resume} download="Loeffler, Michael - Resume.pdf" target='_blank' rel='noopener noreferrer'><button className="btn btn-info mt-3">Download my Resume</button></a>

        <div className="card mt-4 text-center w-25">
          <div className="card-header">
            <h5 className="mb-0">Front-End Proficiencies</h5>
          </div>
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">jQuery</li>
            </ul>
        </div>
     
        <div className="card mt-4 mb-2 text-center w-25">
          <div className="card-header">
            <h5 className="mb-0">Back-End Proficiencies</h5>
          </div>
            <ul className="list-group">
              <li className="list-group-item">Node</li>
              <li className="list-group-item">Object-Oriented Programming</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">SQL</li>
              <li className="list-group-item">Sequelize</li>
              <li className="list-group-item">Handlebars</li>
              <li className="list-group-item">Model View Controller framework</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Mongoose</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">MERN framework (MongoDB, Express, React, Node)</li>
            </ul>
        </div>

    </div>
  );
}
