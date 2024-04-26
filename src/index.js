import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Clients from './Clients';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:branch/admin" element={<Admin />} />
        <Route path="/:branch/clients" element={<Clients />} />
      </Routes>
    </Router>
  </React.StrictMode>
);