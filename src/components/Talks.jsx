import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import Talk from "./Talk.jsx";

function Talks(props) {
  return (
    <div className="page-section scroll-snap" id="talks">
      <SectionTitle title="Talks" />
      <CustomScroller id="talks-list">
        <Talk
          title="In-orbit computing: an outlandish thought experiment?"
          events={[
            'ACM HotNets 2020'
          ]}
        />
        <Talk
          title="'Internet from space' without inter-satellite links?"
          events={[
            'ACM HotNets 2020'
          ]}
        />
        <Talk
          title="Exploring the 'Internet from space' with Hypatia"
          events={[
            'ACM IMC 2020'
          ]}
        />
        <Talk
          title="A bird’s eye view of the world's fastest networks"
          events={[
            'ACM IMC 2020'
          ]}
        />
        <Talk
          title="Network topology design at 27,000 km/hour"
          events={[
            'ACM CoNEXT 2019',
            'ETH Zürich Systems Group Retreat 2020',
            'APNIC 50'
          ]}
        />
        <Talk
          title="Gearing up for the 21st century space race"
          events={[
            'ACM HotNets 2018',
            'ETH Zürich Systems Group Retreat 2019'
          ]}
        />
        <Talk
          title="Speeding up the Internet"
          events={[
            'ETH Zürich Systems Group Retreat 2018'
          ]}
        />
        <Talk
          title="A Cloud-based Content Gathering Network"
          events={[
            'USENIX HotCloud 2017'
          ]}
        />
        <Talk
          title="Detection of Stepping Stones in Software Defined Networks"
          events={[
            'ETH Zürich (April 2016)'
          ]}
        />
      </CustomScroller>
    </div>
  );
}

export default Talks;
