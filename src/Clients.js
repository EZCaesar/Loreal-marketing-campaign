import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

// Import your components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  const { branch } = useParams();
  return (
    <div className="App">
      <Header />
      <MainContent branch={branch}/>
      <Footer />
    </div>
  );
}


