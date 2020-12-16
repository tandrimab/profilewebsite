import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import Talk from "./Talk";

import { talks } from "data/talks";

function Talks(props) {

  function getTalkComponent(data, key) {
    return <Talk
      key={key}
      title={data.title}
      events={data.events}
    />
  }

  return (
    <div className="page-section scroll-snap" id="talks">
      <SectionTitle title="Talks" />
      <CustomScroller id="talks-list">
        {
          talks.map(getTalkComponent)
        }
      </CustomScroller>
    </div>
  );
}

export default Talks;
