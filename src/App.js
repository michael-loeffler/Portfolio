import React, { useState } from 'react';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
// import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <div className='position-relative min-vh-100 w-100'>
      <Header toggleMenu={toggleMenu} showMenu={showMenu} />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} showMenu={showMenu} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
