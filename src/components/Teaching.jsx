import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import TeachingEntry from "./TeachingEntry.jsx";
import FutureInternetImg from "../media/future-internet.jpeg";
import BigDataImg from "../media/big-data.jpeg";
import ComputerNetworksImg from "../media/computer-networks.png";
import AdvancedComputerNetworksImg from "../media/advanced-computer-networks.jpeg";
import InformationSecurityImg from "../media/information-security.jpeg";
import NetworkSecurityImg from "../media/network-security.jpeg";

function Teaching(props) {
  return (
    <div className="page-section scroll-snap" id="teaching">
      <SectionTitle title="Teaching" />
      <CustomScroller id='teaching-list'>
        <TeachingEntry
          subject='Future Internet'
          semesters={[
            'Spring 2020',
            'Spring 2019'
          ]}
          institute='ETH Zürich'
          place='Zürich, Switzerland'
          image={FutureInternetImg}
        />
        <TeachingEntry
          subject='Computer Networks'
          semesters={[
            'Spring 2020',
            'Spring 2019'
          ]}
          institute='ETH Zürich'
          place='Zürich, Switzerland'
          image={ComputerNetworksImg}
        />
        <TeachingEntry
          subject='Advanced Computer Networks'
          semesters={[
            'Spring 2018',
            'Spring 2017'
          ]}
          institute='ETH Zürich'
          place='Zürich, Switzerland'
          image={AdvancedComputerNetworksImg}
        />
        <TeachingEntry
          subject='Big Data'
          semesters={[
            'Autumn 2016'
          ]}
          institute='ETH Zürich'
          place='Zürich, Switzerland'
          image={BigDataImg}
          link='http://www.systems.ethz.ch/courses/fall2016/bigdata'
        />
        <TeachingEntry
          subject='Network Security'
          semesters={[
            'Autumn 2015'
          ]}
          institute='Aalto University'
          place='Espoo, Finland'
          image={NetworkSecurityImg}
          link='https://mycourses.aalto.fi/course/view.php?id=8787'
        />
        <TeachingEntry
          subject='Information Security'
          semesters={[
            'Autumn 2015'
          ]}
          institute='Aalto University'
          place='Espoo, Finland'
          image={InformationSecurityImg}
          link='https://mycourses.aalto.fi/course/view.php?id=4617'
        />
      </CustomScroller>
    </div>
  );
}

export default Teaching;
