import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import Activity from "./Activity";

import { activities } from "data/activities";

function Activities(props) {

  function getActivityComponent(data, key) {
    return <Activity
      key={key}
      text={data.text}
    />
  }

  return (
    <div className="page-section scroll-snap" id="activities">
      <SectionTitle title="Activities" />
      <CustomScroller id="activity-list">
        {
          activities.map(getActivityComponent)
        }
      </CustomScroller>
    </div>
  );
}

export default Activities;
