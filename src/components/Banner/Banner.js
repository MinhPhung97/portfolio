import React, { useEffect, useRef } from 'react';
import './banner.scss';
import Typed from 'typed.js';
import bannerImg from '../../assets/img/header-img.svg';

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
        <p>
          I am a diligent and passionate individual when it comes to technology. I possess a strong
          knowledge base and the ability to quickly solve problems. I am open to listening and
          learning in order to continually improve my skills.
        </p>
      </div>
      <div className="bannerImg">
        <img src={bannerImg} alt="" className="animate__animated animate__zoomIn" />
      </div>
    </div>
  );
}

export default Banner;
