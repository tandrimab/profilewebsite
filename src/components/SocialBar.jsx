import React from "react";
import { ReactSVG } from "react-svg";

// Project library

const icons = require.context("media/icons");

function SocialBar(props) {
  
  return (
    <div id="social-links">
      {
        props.social.map((data, key) => {
          let svg = icons(`./${data.icon}`).default;
          
          return <a key={key} href={data.link} target='_blank' rel="noopener noreferrer">
            <ReactSVG 
              src={svg}
              beforeInjection={(svg) => {
                svg.firstChild.textContent = data.title;
              }}
            />
          </a>
        })
      }
    </div>
  );
}

export default SocialBar;
