import React from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { AiOutlineSmile } from 'react-icons/ai'
import resume from '../Images/resume.pdf';
import background from '../Images/Mountains_edit.png';

const About = () => {
  return(
    <div className="resume-container">
      <div className="background-container">
        <img className="background-img" src={background} alt="not available"/>
        <h1 className="resume-salutation">Hi there!</h1>
        <div className="resume-text">If you've navigated here</div>
        <div className="resume-text2">I would say you're interested in my work history!</div>
        <div className="resume-emoji"><AiOutlineSmile size={60}/></div>
        <div className="resume-text3">Or feel free to view it below!</div>
        <div className="profile-intro">
          <a target="nothing" href={resume}>Download my resume</a>
        </div>
      </div>
      <div className="resume-pdf">
        <Document file={resume} >
          <Page pageNumber={1}  scale={2.0}/>
        </Document>
      </div>
    </div>
  );
}

export default About;