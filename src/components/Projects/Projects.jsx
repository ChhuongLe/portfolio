import React, { useState } from 'react';
import './Projects.css';
import FEC from '../Images/frontPageEdit.png';
import SDC from '../Images/databaseImage.png';
import Billy from '../Images/healthyFoodsEdit.PNG';
import RPG from '../Images/recyclePGEdit.png';

const Projects = () => {
  // Todo: make individual projects into components for modularity
  return (
    <div className="ContainerProjects">
      <div className="FEC" role="button">
        <a href="https://github.com/ChhuongLe/project-catwalk"><img src={FEC} alt="not available" />
          <div className="img_description">Project-Catwalk</div>
        </a>
      </div>
      <div className="SDC">
        <img src={SDC} alt="not available" />
        <div className="img_description">Atlier QA Backend</div>
      </div>
      <div className="BlueOcean">
        <img src={Billy} alt="not available" />
        <div className="img_description">Health Foods Inc.</div>
      </div>
      <div className="RPG">
        <img src={RPG} alt="not available" />
        <div className="img_description">Recycle PG</div>
      </div>
    </div>
  );
}

export default Projects;