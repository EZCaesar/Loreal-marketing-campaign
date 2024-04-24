import React from 'react';

import './styles.css';

// Import your components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}


