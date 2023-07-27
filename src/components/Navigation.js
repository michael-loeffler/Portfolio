import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap';

function Navigation({ currentPage, handlePageChange }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <div className='d-flex justify-content-end'>
      <div className={
        showMenu
          ? 'd-flex align-items-end'
          : 'd-none'
      }>
        <ul className="nav nav-tabs align-items-end">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About Me')}
              className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
              style={{ color: "black" }}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              style={{ color: "black" }}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={{ color: "black" }}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={{ color: "black" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <button onClick={toggleMenu} type="button" className='btn' aria-label='Hamburger Menu'>
        {showMenu ? (
          <FontAwesomeIcon icon={faXmark} size='2xl' />
        ) : (
          <FontAwesomeIcon icon={faBars} size='2xl' />
        )}
      </button>
    </div>
  );
}

export default Navigation;
