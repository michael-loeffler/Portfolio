import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const styles = {
  header: {
    background: 'turquoise',
    fontSize: '20px',
    color: 'black',
    padding: '0 20px',
  },
  h1: {
    padding: 20,
  },
};

function Header({ toggleMenu, showMenu }) {
  return (
    <header style={styles.header} className='d-flex justify-content-between align-items-center'>
      <h1 style={styles.h1}>Michael Loeffler</h1>
      
      <button onClick={toggleMenu} type="button" className='btn' aria-label='Hamburger Menu'>
        {showMenu ? (
          <FontAwesomeIcon icon={faXmark} size='2xl' />
        ) : (
          <FontAwesomeIcon icon={faBars} size='2xl' />
        )}
      </button>

    </header>
  );
}

export default Header;