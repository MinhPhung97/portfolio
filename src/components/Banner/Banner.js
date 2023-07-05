import React, { useEffect, useRef } from 'react';
import './banner.scss';
import Typed from 'typed.js';
import bannerImg from '../../assets/img/header-img.svg';
import cv from '../../assets/file/NguyenMinhPhung-FrontEndDevelope-CV.pdf';

function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Nguyen Minh Phung', 'Front End Develope'],
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="banner">
      <div className="bannerTitle">
        <span>Welcome my Portfolio</span>
        <h1>Hello! It's Me.</h1>
        <h2>And I'm</h2>
        <span ref={el} />
        <div className="download">
          <a href={cv} download>
            Download CV
          </a>
        </div>
      </div>
      <div className="bannerImg">
        <img src={bannerImg} alt="" className="animate__animated animate__zoomIn" />
      </div>
    </div>
  );
}

export default Banner;
