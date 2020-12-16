import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import EducationEntry from "./EducationEntry";

import { educationList } from "data/education";

function Education(props) {

  function getEducationEntryComponent(data, key) {
    return <EducationEntry
      key={key}
      degree={data.degree}
      year={data.year}
      program={data.program}
      institutes={data.institutes}
    />
  }

  return (
    <div className="page-section scroll-snap" id="education">
      <SectionTitle title="Education" />
      <CustomScroller id='education-list'>
        { educationList.map(getEducationEntryComponent) }
      </CustomScroller>
    </div>
  );
}

export default Education;
