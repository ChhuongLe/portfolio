import React from 'react';
import './Landing.css';
import background from '../Images/Mountains.jpg';

const Landing = () => {
  return(
    <div>
      <div className="landingContainer">
        <img className="background" src={background} />
        <div className="intro">Hello, world!</div>
        <h1 className="name">I'm Chhuong</h1>
        <div className="job">a full-stack engineer</div>
      </div>
      <div className="techContainer">
        <div>What I know</div>
      </div>
      <div className="meContainer">
        <div>Get to know me!</div>
      </div>
      <div className="contactMeContainer">
        <div>Add button here to direct user to contact me page</div>
      </div>
   </div>
  );
}

export default Landing;