import React from 'react';
import { img } from '../../assets/img/img';
import './skill.scss';
import Carousel from 'react-multi-carousel';

function Skill() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 568 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="skill">
      <div className="container">
        <div className="skillTitle">
          <span>Skills</span>
          <p>
            I am a Front-end developer with experience in working with JavaScript and several
            frameworks such as React.js and Node.js. I am a fast learner and work excellently in
            teams. I am continuously seeking knowledge and actively honing my skills to improve each
            day.
          </p>
        </div>
        <div className="skillIcon">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={false}
          >
            <div className="iconItem">
              <span>HTML</span>
            </div>
            <div className="iconItem">
              <span>CSS</span>
            </div>
            <div className="iconItem">
              <span>SASS</span>
            </div>
            <div className="iconItem">
              <span>JAVASCRIPT</span>
            </div>
            <div className="iconItem">
              <span>TAILWIND CSS</span>
            </div>
            <div className="iconItem">
              <span>REDUX</span>
            </div>
            <div className="iconItem">
              <span>REACT</span>
            </div>
            <div className="iconItem">
              <span>NODE</span>
            </div>
            <div className="iconItem">
              <span>EXPRESS</span>
            </div>
            <div className="iconItem">
              <span>ANT DESIGN</span>
            </div>
            <div className="iconItem">
              <span>TEAM WORK</span>
            </div>
            <div className="iconItem">
              <span>SOLVE PROBLEM</span>
            </div>
            <div className="iconItem">
              <span>DEBUG</span>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Skill;
