import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer id="footer">
      <p>Copyright 2023. All Rights Reserved</p>
      <div className="footerSocial">
        <a href="https://github.com/MinhPhung97" target="_blank">
          <i className="bi bi-github" />
        </a>
        <a href="https://www.facebook.com/minhphung.nguyen.100/" target="_blank">
          <i className="bi bi-facebook" />
        </a>
        <a href="https://www.instagram.com/viencent97/" target="_blank">
          <i className="bi bi-instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
