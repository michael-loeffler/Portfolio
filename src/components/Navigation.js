import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
    <button className='btn' type="button" data-bs-toggle="collapse" data-bs-target="#menuTabs" aria-expanded="false" aria-controls='#menuTabs'>
    <FontAwesomeIcon icon={faBars} size='2xl'/>
    </button>
    
    <div className='collapse align-items-end' id='menuTabs'>
     <ul className="nav nav-tab">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About Me')}
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          style={{color: "black"}}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={{color: "black"}}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={{color: "black"}}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{color: "black"}}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
    </>
  );
}

export default Navigation;
