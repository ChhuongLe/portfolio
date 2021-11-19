import React from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { AiOutlineSmile } from 'react-icons/ai'
import resume from '../Images/resume.pdf';
import background from '../Images/Mountains_edit.png';
import keyboard from '../Images/osu_keeb.jpg';
import underKeeb from '../Images/osu_keeb_underside.jpg';

import Anda from '../Images/anda.jpg';

const About = () => {
  return(
    <div className="resume-container">
      <div className="background-container">
        <img className="background-img" src={background} alt="not available"/>
        <h1 className="resume-salutation">Hi there!</h1>
        <div className="resume-text">If you've navigated here</div>
        <div className="resume-text2">I would say you're interested in my work history!</div>
        <div className="resume-emoji"><AiOutlineSmile size={60}/></div>
        <div className="resume-text3">Or feel free to read about me below!</div>
        <div className="profile-intro">
          <a target="nothing" href={resume}>Download my resume</a>
        </div>
      </div>
      <div className="about-container">
        <div className="about-bio">
          <h2 className="header">About Me</h2>
          <div className="bio-description">
            <h4 className="section-header">Education:</h4>
            I graduated from the <b>University of California, Riverside</b> back in 2016 as a <b>Chemical and Environmental Engineering</b> major and also recieved my minor in <b>Computer Science</b>. I was a part of the American Institue of Chemical Engineers, Engineering without Borders, and Tennis on Campus during my time there.<br/>
            <div className="seperator"> . . . . . .</div>
            <h4 className="section-header">Why Software Engineering?</h4>
            Ah yes, why software engineering? While working my first job out of university, I was in charge of developing a product that dealt with data collection and embedded systems.
            <div className="seperator"> . . . . . .</div>
            <h4 className="section-header">Hobbies:</h4>
            For hobbies, I always describe myself as a student. I simply love learning new things all the time, whether it be things like cooking new dishes or creating small projects for games that I play. Here is an example of a 2 switch keyboard that I made specifically for a game that I play called OSU! <br/><br/>
            <img className="keyboard" src={keyboard} />
            <img className="keyboard" src={underKeeb} />
            <br />
            <br />
            Other activities that I love doing are playing tennis with friends and taking landscape photos of the cities and countries that I visit! Check out my instagram for some of my shots! I'm still developing my style of shooting so please feel free to give me some pointers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;