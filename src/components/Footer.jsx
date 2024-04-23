import React from 'react';

import footerText from '../assets/footer/footer-text.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={footerText} alt='Finest Apothecary Skincare' className='footer-text' />
      <p className='footer-copyright'>&copy; 2024 Kiehl's LLC.</p>
    </footer>
  );
}

export default Footer;