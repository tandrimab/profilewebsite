import React from "react";

// Project library
import SocialBar from "./SocialBar";
import { ReactComponent as DownloadLogo } from "../media/logo-download.svg";

function AboutCard(props) {
  return (
    <div id="about-card">
      <div id="social-me">
        <img id="prof-img-box" src={props.imgUrl} alt="profile-img" />
        <div id="my-profile">
          <p className="heading2">{props.profileName}</p>
          <p className="heading3">{props.designation}</p>
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
        <br /><br />
        <div id="download-cv">
          <DownloadLogo />
          <a href="#">Download CV</a>
        </div>
      </div>
      {/* <div id="about-box">
        
      </div> */}
    </div>
  );
}

export default AboutCard;
