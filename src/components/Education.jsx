import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import EducationEntry from "./EducationEntry.jsx";

function Education(props) {
  return (
    <div className="page-section scroll-snap" id="education">
      <SectionTitle title="Education" />
      <CustomScroller id='education-list'>
        <EducationEntry
          degree='Master of Science'
          year='2016'
          program="Erasmus Mundus Master's Programme in Security and Mobile Computing - NordSecMob"
          institutes="Track: KTH Royal Institute of Technology, Sweden -> Aalto University, Finland"
        />
        <EducationEntry
          degree='Bachelor of Engineering'
          year='2009'
          program="Computer Science"
          institutes="Jadavpur University, India"
        />
      </CustomScroller>
    </div>
  );
}

export default Education;
