import React from 'react';
import './Projects.css';
import FEC from '../Images/FrontPage.png';
import SDC from '../Images/databaseImage.png';
import Billy from '../Images/healthyFoods.PNG';
import RPG from '../Images/recyclePG.png';

const Projects = () => {
  // Todo: make individual projects into components for modularity
  return (
    <div className="ContainerProjects">
      <div className="FEC" role="button">
        <img src={FEC} alt="not available" />
          <div className="img_description">Project-Catwalk</div>
          <div className="tech-stack">JavaScript | React | Styled-Components | CSS/HTML| EC2 | Jest | React-Testing Library | Lighthouse</div>
          <div className="img-desc">Web application built leveraging React and Styled-Components allowing clients to review and explore new products </div>
          <a href="https://github.com/KFCNuggets/project-catwalk" target="blank" className="project-btn-text"> View it here!</a>
      </div>
      <div className="SDC">
        <img src={SDC} alt="not available" />
        <div className="img_description">Atlier QA Backend</div>
        <div className="tech-stack">Node.js | PostgresSql | mongoDB | Express | EC2 | Nginx | K6 |Loader.io</div>
        <div className="img-desc">Developed API that provided questions and answers data of a specified product to the front-end of project-catwalk</div>
        <a href="https://github.com/charismatic-cannolis/Q-A" target="blank" className="project-btn-text"> View it here!</a>
      </div>
      <div className="BlueOcean">
        <img src={Billy} alt="not available" />
        <div className="img_description">Health Foods Inc.</div>
        <div className="tech-stack">MongoDB | Express.Js | React | Node.js | EC2 | Firebase | Styled-Components | Lighthouse</div>
        <div className="img-desc">Full-stack application built leveraging React, Firebase, and AWS</div>
        <a href="https://github.com/HealthyBilly/BillyHealthy" target="blank" className="project-btn-text"> View it here!</a>
      </div>
      <div className="RPG">
        <img src={RPG} alt="not available" />
        <div className="img_description">Recycle PG</div>
        <div className="tech-stack">HTML5/CSS3 | Firebase</div>
        <div className="img-desc">Web application developed for Beverhack Hack-A-Thon to help combat climate change thorugh the use of a recycling game</div>
        <a href="https://recyclepg.github.io/RecyclePG/index.html" target="blank" className="project-btn-text"> View it here!</a>
      </div>
    </div>
  );
}

export default Projects;