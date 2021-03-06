import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import  { AiOutlineHtml5, AiOutlineInstagram } from 'react-icons/ai';
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
import background from '../Images/Mountains_edit.png';
import prof from '../Images/Icon_prof.png';

const style = {
  margin: "0 .75vw 0 0"
}

const Landing = () => {
  return(
    <div className="landing-container">
      <div className="landingContainer">
        <img className="background" src={background} alt="not available"/>
        <div className="intro">Hello, world!</div>
        <h1 className="name">I'm Chhuong</h1>
        <div className="job">a full-stack developer</div>
      </div>
      <div className="meContainer">
        <img className="profile-image" src={prof} alt='not available'/>
        <div className="salutation">Hi!</div>
        <div className="bio"> My name is Chhuong (pronounced "CHONG") and I am a full stack engineer based in San Fransico, CA.
          I love taking landscape photographs and doing sports. I am also a cat dad to the most adorable ragdoll, Loki!</div>
        <div className="insta-description">Check him out here!</div>
            <a href="https://www.instagram.com/lokithedoll/" target="blank"><AiOutlineInstagram size={50} color="black"/></a>
        <div className="dots">. . . . .</div>
      </div>
      <div className="techContainer">
        <h2 className="bio-title">My Tech Stack</h2>
        <div>
          <h3 className="stack-title">Front End:</h3>
          <IconContext.Provider value={{size: 50}}>
            <AiOutlineHtml5 style={style}/>
            <FaCss3Alt style={style}/>
            <SiJavascript style={style}/>
            <FaReact style={style}/>
          </IconContext.Provider>
        </div>
        <div>
          <h3 className="stack-title">Back End:</h3>
          <IconContext.Provider value={{size: 50}} >
            <SiMysql style={style}/>
            <SiPostgresql style={style}/>
            <SiMongodb style={style}/>
            <FaNodeJs style={style}/>
          </IconContext.Provider>
        </div>
        <div>
          <h3 className="stack-title">Other tools:</h3>
          <IconContext.Provider value={{size: 50}}>
            <SiJira style={style}/>
            <FaAws style={style}/>
            <SiBabel style={style}/>
            <SiWebpack style={style}/>
            <FaDocker style={style}/>
            <SiNginx style={style}/>
            <SiFirebase style={style}/>
          </IconContext.Provider>
        </div>
        <button className="button"><Link to ='/portfolio/projects' className="link-button">My Projects</Link></button>
      </div>
      <div className="dots">. . . . .</div>
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch!</h2>
        <div className="contact-description">If you like my work or just want to talk about photography and cats while we code together, shoot me an email!</div>
        <button className="button"><Link to='/portfolio/contact'className="link-button">Contact Me!</Link></button>
      </div>
   </div>
  );
}

export default Landing;