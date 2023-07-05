import React from 'react';
import { img } from '../../assets/img/img';
import './project.scss';

function Project() {
  return (
    <div id="project">
      <div className="projectTitle">
        <span>Projects</span>
        <p>
          Following projects showcases my skills and experience. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my ability to solve
          problems, work with different technologies, and manage projects effectively.
        </p>
      </div>
      <div className="projectCard">
        <div className="cardItem">
          <a
            className="cardImg"
            href="https://transcendent-starship-9a90d3.netlify.app/"
            target="_blank"
          >
            <img src={img.samar} alt="" />
          </a>
          <p>Homepage with eye-catching interface and high compatibility.</p>
          <div className="cardLink">
            <span>#html #css #responsive</span>
            <a href="https://github.com/MinhPhung97/Samar" target="_blank">
              <i className="bi bi-github" />
              GitHub
            </a>
          </div>
        </div>
        <div className="cardItem">
          <a className="cardImg" href="https://marvelous-faun-38a45f.netlify.app/" target="_blank">
            <img src={img.vintube} alt="" />
          </a>
          <p>Vintube is a video sharing platform, aiming to connect people with each other.</p>
          <div className="cardLink">
            <span>#reactjs #redux #nodejs #mongodb #firebase</span>
            <a href="https://github.com/MinhPhung97/vintube" target="_blank">
              <i className="bi bi-github" />
              GitHub
            </a>
          </div>
        </div>
        <div className="cardItem">
          <a className="cardImg" href="https://vin-portfolio.vercel.app/" target="_blank">
            <img src={img.portfolio} alt="" />
          </a>
          <p>
            My web portfolio page contains personal information and projects on which I have worked.
          </p>
          <div className="cardLink">
            <span>#reactjs #sass</span>
            <a href="https://github.com/MinhPhung97/portfolio" target="_blank">
              <i className="bi bi-github" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
