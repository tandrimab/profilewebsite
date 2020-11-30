import React from "react";

// Project library
import SocialBar from "./SocialBar";
import { ReactComponent as DownloadLogo } from "../media/logo-download.svg";
import profileLogo from "../media/male-profile-picture.png";
// import profileLogo from "../media/debopam.jpeg";
import CV from "../media/Resume_07NOV2020.pdf"

function Home(props) {
  return (
    <div className="page-section" id="home">
      <div id="about-card">
        <div id="social-me">
          <img id="prof-img-box" src={profileLogo} alt="profile-img" />
          <div id="my-profile">
            <p className="heading2">{props.profileName}</p>
            <p className="heading3">PhD Candidate @ <a href='https://ndal.ethz.ch/' target='_blank' rel="noopener noreferrer">NDAL</a></p>
            <p className="heading3"><a href='https://www.systems.ethz.ch/' target='_blank' rel="noopener noreferrer">Systems Group</a> | <a href='https://www.ethz.ch/en.html' target='_blank' rel="noopener noreferrer">ETH Zürich</a></p>
            <SocialBar />
          </div>
        </div>
        <div id="about-me">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <a href={CV} target='_blank' id="download-cv" rel="noopener noreferrer">
            <DownloadLogo />
            Download CV
          </a>
          <br />
          <br />
          <div id='contact'>
            <div className='contact-left'>
              <p><span>Phone:</span> +41 779421314</p>
              <p><span>Email:</span> [firstname].[lastname]@inf.ethz.ch</p>
            </div>
            <div className='contact-right'>
              <p><span>Office:</span> STF G222, Stampfenbachstrasse 114, 8092 Zürich</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
