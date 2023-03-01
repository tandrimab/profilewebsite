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
            <p className="desgn-dept-group">{profile.designation}</p>
            <p className="desgn-dept-group"><a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-india/' target='_blank' rel="noopener noreferrer">Microsoft Research, Bangalore</a></p>
            <SocialBar social={profile.social} />
            {/*<p className="homealert">[<a className="homelink" href={process.env.PUBLIC_URL + "/" + profile.RS} target='_blank'>Research Statement</a>]
            &nbsp;
            [<a className="homelink" href={process.env.PUBLIC_URL + "/" + profile.TS} target='_blank'>Teaching Statement</a>]</p>*/}
            <p className="homealert">This Web page renders well on Chrome and Firefox</p>
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
            I co-organize a Webinar series on LEO satellite networks. To know more and subscribe for free, visit &nbsp;<a className="homelink" href="https://leoconnws.github.io/" target='_blank'>LEOCONN WS</a>
          </p>
          {/* <p>I co-organize a Webinar series on LEO satellite networks. To know more and subscribe for free, visit &nbsp;<a className="homelink" href="https://leoconnws.github.io/" target='_blank'>LEOCONN WS</a></p> */}
          { /* <br /> */ }
          {<a href={process.env.PUBLIC_URL + "/" + profile.CV} target='_blank' id="download-cv" rel="noopener noreferrer">
            <ReactSVG 
              src={downloadSvg}
              beforeInjection={(svg) => {
                svg.firstChild.textContent = profile["download-cv"].text;
              }}
            />
            {profile["download-cv"].text}
          </a>}
          <br />
          <br />
          <div id='contact'>
            <div className='contact-left'>
              {/*<p><span>Phone:</span>{profile.phone}</p>*/}
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