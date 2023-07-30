import React from 'react';
import Navigation from './Navigation';

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

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header} className='d-flex justify-content-between'>
        <h1 style={styles.h1}>Michael Loeffler</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;