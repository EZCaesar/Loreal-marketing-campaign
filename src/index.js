import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Clients from './Clients';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  </React.StrictMode>
);