import React, { useState } from 'react';
import './Projects.css';
import FEC from '../Images/frontPageEdit.png';
import SDC from '../Images/databaseImage.png';
import Billy from '../Images/healthyFoodEdit.png';
import RPG from '../Images/recyclePGEdit.png';

const Projects = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="ContainerLanding">
      <div className="FEC" role="button">
        <img src={FEC} alt="not available" />
        <div>Project-Catwalk</div>
      </div>
      <div className="SDC">
        <img src={SDC} alt="not available" />
      </div>
      <div className="BlueOcean">
        <img src={Billy} alt="not available" />
      </div>
      <div className="RPG">
        <img src={RPG} alt="not available" />
      </div>
    </div>
  );
}

export default Projects;