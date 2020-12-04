import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "components/SectionTitle";
import SupervisionEntry from "./SupervisionEntry";

import { supervisions } from "data/supervision";

function Supervision(props) {
  return (
    <div className="page-section scroll-snap" id="supervision">
      <SectionTitle title="Supervision" />
      <CustomScroller id="supervision-list">
        <label>Present</label>
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='David Bidjan Irani'
          place='ETH Zürich'
        />
        <SupervisionEntry
          thesis='Master thesis (joint supervision with Simon Kassing)'
          supervisee='Fizza Zafar'
          place='ETH Zürich'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Patrick Eigensatz'
          place='ETH Zürich'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Lorenz Holzhauer'
          place='ETH Zürich'
        />
        <label>Past</label>
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='Manuel Grossmann'
          projectTitle='"Routing for a satellite mega-constellation"'
          place='ETH Zürich'
          year='2020'
        />
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='Baptista Aguas André'
          projectTitle='"Routing for a satellite mega-constellation"'
          place='ETH Zürich'
          year='2020'
        />
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='Andrei Isac'
          projectTitle='"Fast Web Browsing Over The Tor Network"'
          place='ETH Zürich'
          year='2019'
        />
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='Tobias Krebs'
          projectTitle='"Web browsing with privacy-enhanced man-in-the-middle"'
          place='ETH Zürich'
          year='2019'
        />
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='Oliver Butz'
          projectTitle='"Assessing unfairness in the Internet/Web ecosystem"'
          place='ETH Zürich'
          year='2018'
        />
        <SupervisionEntry
          thesis='Master thesis'
          supervisee='Jonas Purtschert'
          projectTitle='"Turning Web page delivery upside down: A Content Gathering Network"'
          place='ETH Zürich'
          year='2018'
        />
        <SupervisionEntry
          thesis='Distributed Systems Laboratory (Master studies; 10 credits)'
          supervisee='Abbas Hussain‎ & Baptista Aguas André'
          projectTitle='"LEO satellite constellation topology visualization"'
          place='ETH Zürich'
          year='2019'
        />
        <SupervisionEntry
          thesis='Distributed Systems Laboratory (Master studies; 10 credits)'
          supervisee='Isac Andrei & Ursache Andrei‎'
          projectTitle='"Topology design for wide-area low-latency network with multiple media"'
          place='ETH Zürich'
          year='2018'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Hauri Yannick'
          projectTitle='"Internet from space without inter-satellite laser?"'
          place='ETH Zürich'
          year='2020'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Jens Eirik Saethre'
          projectTitle='"Simulations of Satellite-based low-latency Internet"'
          place='ETH Zürich'
          year='2019'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='András Köpe'
          projectTitle='"Performance of fetching web pages on mobile devices"'
          place='ETH Zürich'
          year='2019'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Allan Benelli'
          projectTitle='"Customizing QUIC / HTTP2 for Web servers"'
          place='ETH Zürich'
          year='2019'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Johannes Gallmann'
          projectTitle='"Turning Web Page Delivery Upside Down: Optimizing a Smart Proxy"'
          place='ETH Zürich'
          year='2018'
        />
        <SupervisionEntry
          thesis='Bachelor thesis'
          supervisee='Cédric Neukom'
          projectTitle='"Customizing QUIC for Web servers"'
          place='ETH Zürich'
          year='2018'
        />
      </CustomScroller>
    </div>
  );
}

export default Supervision;
