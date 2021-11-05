import React from 'react';
import "./Footer.css";
import {IconContext} from 'react-icons';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const style = {
  padding: "0 50px 50px 0",
}

const Footer = () => {
  return (
    <div className="footerContainer">
        <a href="https://linkedin.com/in/chhuongle" target="blank" className="footer-button"><FaLinkedin size={50} color="#0E76A8" style={style}/></a>
        <a href="https://github.com/chhuongle" target="blank" className="footer-button"><FaGithub size={50} color="black" style={style}/></a>
        <a href="https://www.instagram.com/supawok/" target="blank" className="footer-button"><FaInstagram size={50} color="#8134AF" style={style}/></a>
        <br />
    </div>
  )
}

export default Footer;