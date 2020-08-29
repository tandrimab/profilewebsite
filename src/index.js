import React from "react";
import ReactDOM from "react-dom";

// Project library
import App from "./components/App";

const profileName = 'Debopam Bhattacharjee'
document.querySelector('title').textContent = profileName
ReactDOM.render(<App profileName={profileName} />, document.getElementById("root"));
