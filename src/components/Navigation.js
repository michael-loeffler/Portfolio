import React from 'react';
import 'bootstrap';
import '../style.css';

const styles = {
  navigation: {
    background: 'turquoise',
    fontSize: '20px',
    color: 'black',
  }
}

function Navigation({ currentPage, handlePageChange, showMenu }) {
  return (
      <div style={styles.navigation} className={
        showMenu
          ? 'd-flex align-self-end justify-content-end'
          : 'd-none'
      }>
        <ul className="nav nav-tabs text-center d-block d-sm-flex">
          <li className="nav-item">
            <a
              id='mobileAbout'
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
              id='mobilePortfolio'
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
              id='mobileResume'
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={{ color: "black" }}
            >
              Resume
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              id='mobileContact'
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={{ color: "black" }}
            >
              Contact
            </a>
          </li> */}
        </ul>
      </div>
  );
}

export default Navigation;
