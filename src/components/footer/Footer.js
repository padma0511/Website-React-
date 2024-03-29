import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import facebook from "../asserts/facebook.png";
import linkedin from "../asserts/linkedin.png";
import twitter from "../asserts/twitter.png";
import instagram from "../asserts/instagram.png";
import WhatsApp from "../asserts/whatsapp.png";
import YouTube from "../asserts/youtube.png";
import logo from"../asserts/logo.png";
import "../footer/Footer.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer> 
        <div className=" footer1">
          <div className="row">
            <div className="col">
              <img src={logo} alt="logo" className="logo" width="50px" />
              <p>
                ProGlobalSolutions offers web development and digital marketing
                & Videos services to help businesses improve their online
                presence and achieve success.
              </p>
            </div>

            <div className="col">
              <h3>Services</h3>
              <div className="links">
                <a href="#">Web Development</a>
                <a href="#">App Development</a>
                <a href="#">Digital marketing</a>
                <a href="#">Corporate Video</a>
                <a href="#">Business Development</a>
              </div>
            </div>

            <div className="col">
              <h3 className="Links1">Links</h3>
              <div className="links">
                <Link to="/Home" className="links-a">
                  We do
                </Link>
                <Link to="/Service" className="links-a">
                 Service
                </Link>

                <Link to="/BS" className="links-a">
                Businessstrategy
                </Link>
                <Link to="/Marketingstrategy" className="links-a">
                Marketingstrategy
                </Link>
                <Link to="/Operationalstrategy" className="links-a">
                  Operationalstrategy
                </Link>
                <Link to="/Clients" className="links-a">
                 Clients
                </Link>
                <Link to="/Firstpage" className="links-a">
                 Works
                </Link>

                
              </div>
            </div>

            <div className="col">
              <h3 className="Links3">Contact</h3>
              <div className="contact-details">
                <p>
                  Proglobal Solutions <br /> Madurai - 625016. <br />
                  Coimbatore - 641001.
                  <br /> Chennai - 600 032.
                  <br /> TN – India.
                  <br />
                  +91 93606 20595 <br /> +91 95006 69444
                </p>
                <p></p>
              </div>
              <div className="contact-details"></div>
            </div>
            <div className="col">
              <h3 className="Links2">Follow Us</h3>
              <div className="social">
                <div className="row">
                  <div className="col icon-col">
                    <a href="#">
                      <img src={WhatsApp} className="iconic" />
                    </a>
                    <a href="#">
                      <img src={twitter} className="iconic" />
                    </a>
                    <a href="#">
                      <img src={instagram} className="iconic" />
                    </a>
                  </div>
                  <div className="col icon-col">
                    <a href="#">
                      <img src={linkedin} className="iconic" />
                    </a>
                    <a href="#">
                      <img src={facebook} className="iconic" />
                    </a>
                    <a href="#">
                      <img src={YouTube} className="iconic" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrights">
        <p className="Copy">
          Copyright © 2024 PRO GLOBAL SOLUTION | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
