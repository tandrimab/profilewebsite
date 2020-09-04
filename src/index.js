import React from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";

// Project library
import App from "./components/App";

const profileName = 'Debopam Bhattacherjee'
document.querySelector('title').textContent = profileName
ReactDOM.render(<App profileName={profileName} />, document.getElementById("root"));
WebFont.load({
    google: {
      families: ['Rubik:300,400,500,700', 'sans-serif']
    }
  });