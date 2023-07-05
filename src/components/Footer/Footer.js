import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer id="footer">
      <p>Copyright 2023. All Rights Reserved</p>
      <div className="footerSocial">
        <a href="tel:0354586584" target="_blank">
          <i className="bi bi-telephone"></i>
          <span>0354586584</span>
        </a>
        <a href="mailto:nmphung97@gmail.com" target="_blank">
          <i className="bi bi-envelope"></i>
          nmphung97@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
