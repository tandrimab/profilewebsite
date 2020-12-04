import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import Activity from "./Activity.jsx";

function Activities(props) {
  return (
    <div className="page-section scroll-snap" id="activities">
      <SectionTitle title="Activities" />
      <CustomScroller id="activity-list">
        <Activity
          text="ACM IMC 2018 Shadow PC member"
        />
      </CustomScroller>
    </div>
  );
}

export default Activities;
