import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>Finest Apothecary Skincare</p>
      <p>Nature. Science. Service.</p>
      <p>&copy; {new Date().getFullYear()} Kiehl's LLC.</p>
    </footer>
  );
}

export default Footer;