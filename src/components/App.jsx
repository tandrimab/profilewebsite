import React from "react";

// Project library
import Header from "./Header";
import ParticlesContainer from "./ParticlesContainer";

function App(props) {
  return (
	  <div style={{position: 'relative'}}>
		<ParticlesContainer />
		<Header profileName={props.profileName} />
	  </div>
  );
}

export default App;
