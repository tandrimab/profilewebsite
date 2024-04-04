import React, { Fragment } from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import Supervision from "./Supervision";

import { supervisions } from "data/supervisions";

function Supervisions(props) {
  return (
    <div className="page-section scroll-snap" id="supervision">
      <SectionTitle title="Supervision" />
      <CustomScroller id="supervision-list">
        {
          supervisions.map((data, key) => {
            return <Fragment key={key}>
              <label>{data.tag}</label>
              {
                data.entries.map((entry, key) => {
                  return <Supervision
                    key={key}
                    thesis={entry.thesis}
                    supervisee={entry.supervisee}
                    projectTitle={entry.projectTitle}
                    place={entry.place}
                    year={entry.year}
                    currentaffiliation={entry.currentaffiliation}
                  />
                })
              }
            </Fragment>
          })
        }
      </CustomScroller>
    </div>
  );
}

export default Supervisions;
