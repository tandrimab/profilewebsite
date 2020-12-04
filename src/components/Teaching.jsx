import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import TeachingEntry from "./TeachingEntry";

import { teachings } from "data/teaching.js";
const teachingImages = require.context('media/images/teaching', true);

function Teaching(props) {
  return (
    <div className="page-section scroll-snap" id="teaching">
      <SectionTitle title="Teaching" />
      <CustomScroller id='teaching-list'>
        {
          teachings.map((data, key) => {
            let teachingImage = teachingImages(`./${data.image}`);
            
            return <TeachingEntry
              key={key}
              subject={data.subject}
              semesters={data.semesters}
              institute={data.institute}
              place={data.place}
              image={teachingImage.default}
              link={data.link}
            />
          })
        }
      </CustomScroller>
    </div>
  );
}

export default Teaching;
