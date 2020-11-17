import React from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";

// Project library
import App from "./components/App";

const profileName = "Debopam Bhattacherjee";
ReactDOM.render(
  <App profileName={profileName} />,
  document.getElementById("root")
);
document.querySelector("title").textContent = profileName;
WebFont.load({
  google: {
    families: ["Rubik:300,400,500,700", "sans-serif"]
  }
});
