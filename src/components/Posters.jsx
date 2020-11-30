import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import Poster from "./Poster.jsx";

function Posters(props) {
  return (
    <div className="page-section scroll-snap" id="posters">
      <SectionTitle title="Posters" />
      <CustomScroller id='posters-list'>
        <Poster 
          title="A Cloud-based Content Gathering Network"
          authors="Debopam Bhattacherjee, Muhammad Tirmazi and Ankit Singla"
          event={
            { 'text': 'USENIX HotCloud 2017 Poster Session', 'link': 'https://drive.google.com/file/d/0B_c6n15v_sC7T2lOZktKQzF1WUU/view?usp=sharing' }
          }
        />
        <Poster 
          title="Detection of Stepping Stones in Software Defined Networks"
          authors="Debopam Bhattacherjee, Andrei Gurtov, Tuomas Aura"
          event={
            { 'text': 'Aalto Secure Systems Demo Day 2016', 'link': 'https://wiki.aalto.fi/download/attachments/112176170/Poster_Debopam_Final.pdf?version=1&modificationDate=1463991111667&api=v2' }
          }
        />
        <Poster 
          title="A cloud-based solution to configure home and small office routers"
          authors="Andi Bidaj, Ashok Rajendran, Debopam Bhattacherjee, Markku Antikainen and Tuomas Aura"
          event={
            { 'text': 'NordSec 2015', 'link': 'http://nordsec2015.csc.kth.se/Posters/debopam.pdf' }
          }
        />
      </CustomScroller>
    </div>
  );
}

export default Posters;
