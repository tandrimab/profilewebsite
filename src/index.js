import React from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";

// Project library
import App from "components/App";

const profileName = "Debopam Bhattacherjee";
ReactDOM.render(
  <App profileName={profileName} />,
  document.getElementById("root")
);
document.querySelector("title").textContent = profileName;
WebFont.load({
  google: {
    families: ["Carter One:400", "Nunito:400,600,700,800", "sans-serif"]
  }
});
