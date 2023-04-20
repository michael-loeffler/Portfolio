import React, { useState } from 'react';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Header from './components/Header';
// import Navigation from './components/Navigation'
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }    
    if (currentPage === 'Contact') {
      return <Contact />;
    }    
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
