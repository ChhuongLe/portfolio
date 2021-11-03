import React from 'react';
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
      <div className="techContainer">
        <h2>What I know</h2>
        <div>
          <h3>Front End:</h3>
          <div className="skillIcons">
            <AiOutlineHtml5 size={70}/>
            <FaCss3Alt  size={70}/>
            <SiJavascript  size={70}/>
            <FaReact  size={70}/>
          </div>
        </div>
        <div>
          <h3>Back End:</h3>
          <div className="skillIcons">
            <SiMysql  size={70}/>
            <SiPostgresql  size={70}/>
            <SiMongodb  size={70}/>
            <FaNodeJs  size={70}/>
          </div>
        </div>
        <div>
          <h3>Other tools:</h3>
          <div className="skillIcons">
            <SiJira  size={70}/>
            <FaAws  size={70}/>
            <SiBabel  size={70}/>
            <SiWebpack  size={70}/>
            <FaDocker  size={70}/>
            <SiNginx  size={70}/>
            <SiFirebase  size={70}/>
          </div>
        </div>
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