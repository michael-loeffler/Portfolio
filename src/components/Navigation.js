import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs align-items-end">
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
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{color: "black"}}
        >
          Contact
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
    </ul>
  );
}

export default Navigation;
