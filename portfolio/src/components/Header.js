import React from 'react';
import Navigation from './Navigation';

const styles = {
  header: {
    background: 'turquoise',
    fontSize: '100px',
    color: 'black',
    padding: '0 20px',
  },
  h1: {
    padding: 20,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
        <h1 style={styles.h1}>Michael Loeffler</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} style={styles.navbar}/>
    </header>
  );
}

export default Header;