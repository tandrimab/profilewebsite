import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import Poster from "./Poster";

import { posters } from "data/posters";

function Posters(props) {

  function getPosterComponent(data, key) {
    return <Poster
      key={key}
      title={data.title}
      authors={data.authors}
      event={data.event}
    />
  }
  
  return (
    <div className="page-section scroll-snap" id="posters">
      <SectionTitle title="Posters" />
      <CustomScroller id='posters-list'>
        {
          posters.map(getPosterComponent)
        }
      </CustomScroller>
    </div>
  );
}

export default Posters;
