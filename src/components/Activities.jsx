import React from "react";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import Activity from "./Activity.jsx";

function Activities(props) {
  return (
    <div className="page-section scroll-snap" id="activities">
      <SectionTitle title="Activities" />
      <div id="activity-list">
        <Activity
          text="ACM IMC 2018 Shadow PC member"
        />
      </div>
    </div>
  );
}

export default Activities;
