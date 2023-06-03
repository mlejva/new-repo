import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer-container">
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;