import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import Paper from "./Paper";

import { papers } from "data/papers";

function Papers() {
  return (
    <div className="page-section scroll-snap" id="papers">
      <SectionTitle title="Papers" />
      <CustomScroller id="papers-list">
        {
          papers.map((data, key) => {
            return <Paper
              key={key}
              title={data.title}
              authors={data.authors}
              event={data.event}
              links={data.links}
              award={data.award}
              more={data.more}
            />
          })
        }
      </CustomScroller>
    </div>
  );
}

export default Papers;
