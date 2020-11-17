import React from "react";
import CustomScroller from "react-custom-scroller";

// Project library
import SectionTitle from "./SectionTitle.jsx";
import Paper from "./Paper.jsx";

function Papers() {
  return (
    <div className="page-section" id="papers">
      <SectionTitle title="Papers" />
      <CustomScroller id="papers-list">
        <Paper
          title="In-orbit computing: an outlandish thought experiment?"
          authors="Debopam Bhattacherjee *, Simon Kassing *, Melissa Licciardello, Ankit Singla"
          event="ACM HotNets 2020"
          link="#"
        />
        <Paper
          title='"Internet from space" without inter-satellite links?'
          authors="Yannick Hauri, Debopam Bhattacherjee, Manuel Grossmann, Ankit Singla"
          event="ACM HotNets 2020"
          link="#"
        />
        <Paper
          title='Exploring the "Internet from space" with Hypatia'
          authors="Simon Kassing *, Debopam Bhattacherjee *, André Baptista Águas, Jens Eirik Saethre, Ankit Singla"
          event="ACM IMC 2020"
          link="#"
        />
        <Paper
          title="A bird’s eye view of the world's fastest networks"
          authors="Debopam Bhattacherjee, Waqar Aqeel, Gregory Laughlin, Bruce Maggs, Ankit Singla"
          event="ACM IMC 2020"
          link="#"
        />
        <Paper
          title="Untangling Header Bidding Lore"
          authors="Waqar Aqeel, Debopam Bhattacherjee, Balakrishnan Chandrasekaran, P. Brighten Godfrey, Gregory Laughlin, Bruce Maggs, Ankit Singla"
          event="PAM 2020"
          award="[Best Dataset Award]"
          link="https://cspeed.net/assets/publications/aqeel-pam2020.pdf"
        />
        <Paper
          title="Network topology design at 27,000 km/hour"
          authors="Debopam Bhattacherjee, Ankit Singla"
          event="ACM CoNEXT 2019"
          award="[IETF/IRTF Applied Networking Research Prize]"
          link="https://dl.acm.org/authorize?N690850"
        />
        <Paper
          title="Measuring and exploiting the cloud consolidation of the Web"
          authors="Debopam Bhattacherjee, Muhammad Tirmazi, Ankit Singla"
          event="arXiv 2019: 1906.04753"
          link="https://arxiv.org/pdf/1906.04753"
        />
        <Paper
          title="Dissecting Latency in the Internet's Fiber Infrastructure"
          authors="Debopam Bhattacherjee, Waqar Aqeel, Gregory Laughlin, Bruce Maggs, Ankit Singla"
          event="arXiv 2018: 1811.10737"
          link="https://arxiv.org/pdf/1811.10737.pdf"
        />
        <Paper
          title="cISP: A Speed-of-Light Internet Service Provider"
          authors="Debopam Bhattacherjee, Sangeetha Abdu Jyothi, Ilker Nadi Bozkurt, Muhammad Tirmazi, Waqar Aqeel, Anthony Aguirre, Balakrishnan Chandrasekaran, P. Brighten Godfrey, Gregory P. Laughlin, Bruce M. Maggs, Ankit Singla"
          event="arXiv 2018: 1809.10897"
          link="https://arxiv.org/pdf/1809.10897.pdf"
        />
        <Paper
          title="Gearing up for the 21st century space race"
          authors="Debopam Bhattacherjee, Waqar Aqeel, Ilker Nadi Bozkurt, Anthony Aguirre, Balakrishnan Chandrasekaran, P. Brighten Godfrey, Gregory P. Laughlin, Bruce M. Maggs, Ankit Singla"
          event="ACM HotNets 2018"
          link="https://dl.acm.org/citation.cfm?id=3286079"
        />
        <Paper
          title="A Cloud-based Content Gathering Network"
          authors="Debopam Bhattacherjee, Muhammad Tirmazi and Ankit Singla"
          event="USENIX HotCloud 2017"
          link="https://www.usenix.org/system/files/conference/hotcloud17/hotcloud17-paper-bhattacherjee.pdf"
          slides="https://www.usenix.org/sites/default/files/conference/protected-files/hotcloud17_slides_bhattacherjee.pdf"
        />
        <Paper
          title="Watch your step! Detecting stepping stones in programmable networks"
          authors="Debopam Bhattacherjee, Andrei Gurtov, Tuomas Aura"
          event="IEEE ICC Communication and Information Systems Security Symposium 2019"
          link="https://ieeexplore.ieee.org/abstract/document/8761731"
        />
      </CustomScroller>
    </div>
  );
}

export default Papers;
