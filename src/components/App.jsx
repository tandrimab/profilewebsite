import React from "react";

// Project library
import Home from "./Home";
import ParticlesContainer from "./ParticlesContainer";
import Papers from "./Papers";
import Posters from "./Posters";
import Teaching from "./Teaching";
import Supervision from "./Supervision";
import Activities from "./Activities";
import Talks from "./Talks";
import Education from "./Education";

function App(props) {
  function initialDynamicSetup() {
    console.log("loaded");
    if (document.location.hash === "") {
      var scrollDistance = document.documentElement.scrollTop;
      if (scrollDistance === 0) {
        document.querySelector("#navmenu li a").classList.add('active');
      } else {
        var links = document.getElementById("navmenu").getElementsByTagName("a");
        Array.from(links).forEach((link) => {
          if (document.getElementById(link.id.replace('a-', '')).offsetTop <= scrollDistance) {
            link.classList.add('active');
          }
        });
      }
    } else {
      if (document.getElementById(document.location.hash.replace('#', '')) != null) {
        document.getElementById('a-' + document.location.hash.replace('#', ''))
        .classList.add('active');
      }
    }
  }

	function onScroll() {
    var scrollDistance = document.documentElement.scrollTop;

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

  window.addEventListener("load", initialDynamicSetup);
  window.addEventListener("scroll", onScroll);

  return (
	  <div>
		  <ParticlesContainer />
		  <Home profileName={props.profileName} />
		  <Papers />
      <Posters />
      <Teaching />
      <Supervision />
      <Activities />
      <Talks />
      <Education />
	  </div>
  );
}

export default App;
