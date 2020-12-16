import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import Teaching from "./Teaching";

import { teachings } from "data/teachings";

function Teachings(props) {
  const teachingImages = require.context('media/images/teaching');

  return (
    <div className="page-section scroll-snap" id="teaching">
      <SectionTitle title="Teaching" />
      <CustomScroller id='teaching-list'>
        {
          teachings.map((data, key) => {
            let teachingImage = teachingImages(`./${data.image}`).default;
            
            return <Teaching
              key={key}
              subject={data.subject}
              semesters={data.semesters}
              institute={data.institute}
              place={data.place}
              image={teachingImage}
              link={data.link}
            />
          })
        }
      </CustomScroller>
    </div>
  );
}

export default Teachings;
