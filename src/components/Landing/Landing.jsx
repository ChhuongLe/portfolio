import React from 'react';
import { IconContext } from 'react-icons';
import  { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDocker} from 'react-icons/fa'
import { SiJavascript,
         SiMysql,
         SiPostgresql,
         SiMongodb,
         SiJira,
         SiBabel,
         SiWebpack,
         SiNginx,
         SiFirebase } from 'react-icons/si'
import './Landing.css';
import background from '../Images/Mountains.jpg';

const Landing = () => {
  return(
    <div>
      <div className="landingContainer">
        <img className="background" src={background} alt="not available"/>
        <div className="intro">Hello, world!</div>
        <h1 className="name">I'm Chhuong</h1>
        <div className="job">a full-stack engineer</div>
      </div>
      <div className="meContainer">
        <div className="bio">Hi! My name is Chhuong (pronounced "CHONG") and I am a full stack engineer based in San Fransico, CA.
          I love taking landscape photographs and doing sports. I am also a cat dad to the most adorable ragdoll, Loki!</div>
        <div className="dots">. . . . .</div>
      </div>
      <div className="techContainer">
        <h2 className="bio-title">My Tech Stack</h2>
        <div>
          <h3 className="stack-title">Front End:</h3>
          <IconContext.Provider value={{size: "3.25vw"}}>
            <AiOutlineHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <FaReact />
          </IconContext.Provider>
        </div>
        <div>
          <h3 className="stack-title">Back End:</h3>
          <IconContext.Provider value={{size: "3.25vw"}} >
            <SiMysql />
            <SiPostgresql />
            <SiMongodb />
            <FaNodeJs />
          </IconContext.Provider>
        </div>
        <div>
          <h3 className="stack-title">Other tools:</h3>
          <IconContext.Provider value={{size:"3.25vw"}}>
            <SiJira />
            <FaAws />
            <SiBabel />
            <SiWebpack />
            <FaDocker />
            <SiNginx />
            <SiFirebase />
          </IconContext.Provider>
        </div>
      </div>
      <div className="contactMeContainer">
        <div>Add button here to direct user to contact me page</div>
      </div>
   </div>
  );
}

export default Landing;