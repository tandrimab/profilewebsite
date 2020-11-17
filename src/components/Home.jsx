import React from "react";

// Project library
import Navbar from "./Navbar";
import AboutCard from "./AboutCard";

function Home(props) {
  return (
    <div className="page-section" id="home">
      <Navbar profileName={props.profileName} />
      <AboutCard
        profileName={props.profileName}
        imgUrl="media/male-profile-picture.png"
        designation="PhD Candidate"
      />
    </div>
  );
}

export default Home;
