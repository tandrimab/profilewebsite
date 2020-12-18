import React, { Fragment } from "react";

// Project library
import Navbar from "components/Navbar";
import Home from "components/Home";
import ParticlesContainer from "components/ParticlesContainer";
import WhatsNew from "components/WhatsNew";
import Papers from "components/Papers";
import Posters from "components/Posters";
import Teachings from "components/Teachings";
import Supervisions from "components/Supervisions";
import Activities from "components/Activities";
import Talks from "components/Talks";
import Education from "components/Education";
import MetaTags from "react-meta-tags";

import 'css/styles.css';

import { profile } from "data/home";

function App() {
  function initialDynamicSetup() {
    document.querySelector("title").textContent = profile.name;
    
    if (document.location.hash === "") {
      var scrollDistance = Math.ceil(document.getElementById('scroll-snap-container').scrollTop);
      if (scrollDistance === 0) {
        document.querySelector("#navmenu li a").classList.add('active');
      } else {
        var links = document.getElementById("navmenu").getElementsByTagName("a");

        if (links.length > 0) {
          var prev = links[0];
          if (document.getElementById(prev.id.replace('a-', '')).offsetTop <= scrollDistance) {
            prev.classList.add('active');
          }
          for (let i = 1; i < links.length; i++) {
            const link = links[i];
            if (document.getElementById(link.id.replace('a-', '')).offsetTop > scrollDistance) {
              break;
            }
            prev.classList.remove('active');
            link.classList.add('active');
            prev = link;
          }
        }
      }
    } else {
      if (document.getElementById(document.location.hash.replace('#', '')) != null) {
        document.getElementById('a-' + document.location.hash.replace('#', ''))
        .classList.add('active');
      }
    }
  }

	function onScrollListener() {
    var scrollDistance = Math.ceil(document.getElementById('scroll-snap-container').scrollTop);
    
    var links = document.getElementById("navmenu").getElementsByTagName("a");
    Array.from(links).forEach((link) => {
      if (document.getElementById(link.id.replace('a-', '')).offsetTop <= scrollDistance) {
        var activeLink = document.querySelector("#navmenu li a.active");
        if (activeLink !== null) {
          activeLink.classList.remove('active');
          link.classList.add('active');
        }
      }
    });
  }
  
  function onResizeListener() {
    if (window.matchMedia('(max-width: 1400px)').matches) {
      document.getElementById('navbar').style.visibility = "hidden";
    }
    else if (window.matchMedia('(min-width: 1400px)').matches) {
      document.getElementById('navbar').style.visibility = "visible";
    }
  }

  window.addEventListener("load", initialDynamicSetup);
  window.addEventListener("resize", onResizeListener);

  return (
    <Fragment>
      <MetaTags>
        <meta name="description" content="Web page of Debopam Bhattacherjee" />
        <meta name="keywords" content="Debopam,Bhattacherjee,PhD,Network,ETH,Cloud,Web,Latency,Satellite,Topology" />
        <meta name="author" content="Debopam Bhattacherjee" />
      </MetaTags>
      <div id='scroll-snap-container' onScroll={onScrollListener}>
        <div id='landing-div' className='scroll-snap'>
          <ParticlesContainer />
          <Navbar profileName={profile.name} />
          <Home profileName={profile.name} />
        </div>
        <WhatsNew />
        <Papers />
        <Posters />
        <Teachings />
        <Supervisions />
        <Activities />
        <Talks />
        <Education />
      </div>  
    </Fragment>
	  
  );
}

export default App;
