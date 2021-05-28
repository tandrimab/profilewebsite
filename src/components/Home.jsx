import React, { Fragment } from "react";
import { ReactSVG } from "react-svg";

// Project library
import SocialBar from "components/SocialBar";
import { profile } from "data/home";

function Home(props) {
  const icons = require.context('media/icons');
  const images = require.context('media/images/home');
  const profilePicture = images(`./${profile.picture}`).default;
  const downloadSvg = icons(`./${profile["download-cv"].icon}`).default;
  
  return (
    <div className="page-section scroll-snap" id="home">
      <div id="about-card">
        <div id="social-me">
          <img id="prof-img-box" src={profilePicture} alt="profile-img" />
          <div id="my-profile">
            <p className="profile-name">{profile.name}</p>
            <p className="desgn-dept-group">{profile.designation} @ <a href={profile.department.link} target='_blank' rel="noopener noreferrer">{profile.department.name}</a></p>
            <p className="desgn-dept-group"><a href='https://www.systems.ethz.ch/' target='_blank' rel="noopener noreferrer">Systems Group</a> | <a href='https://www.ethz.ch/en.html' target='_blank' rel="noopener noreferrer">ETH Zürich</a></p>
            <SocialBar social={profile.social} />
            <p className="homealert">[<a className="homelink" href={process.env.PUBLIC_URL + "/" + profile.RS} target='_blank'>Research Statement</a>]
            &nbsp;
            [<a className="homelink" href={process.env.PUBLIC_URL + "/" + profile.TS} target='_blank'>Teaching Statement</a>]</p>
            <p className="homealert">Organizing&nbsp;<a className="homelink" href="https://leoconn.github.io" target='_blank'>LEOCONN 2021</a>&nbsp;(June 09-10, 2021)</p>
          </div>
        </div>
        <div id="about-me">
          <p>
            {
              profile["about-me"].split('\n').map((line, key) => {
                return <Fragment key={key}>
                  <span>{line}</span>
                  <br/>
                </Fragment>
              })
            }
          </p>
          {/* <br /> */}
          <a href={process.env.PUBLIC_URL + "/" + profile.CV} target='_blank' id="download-cv" rel="noopener noreferrer">
            <ReactSVG 
              src={downloadSvg}
              beforeInjection={(svg) => {
                svg.firstChild.textContent = profile["download-cv"].text;
              }}
            />
            {profile["download-cv"].text}
          </a>
          <br />
          <br />
          <div id='contact'>
            <div className='contact-left'>
              <p><span>Phone:</span>{profile.phone}</p>
              <p><span>Email:</span>{profile.email}</p>
            </div>
            <div className='contact-right'>
              <p><span>Office:</span>{profile.office}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;