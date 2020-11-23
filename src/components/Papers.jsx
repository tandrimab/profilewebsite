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
          links={[
            { 'text': 'Paper', 'link': 'https://people.inf.ethz.ch/asingla/papers/hotnets20-inorbit.pdf' },
          ]}
        />
        <Paper
          title='"Internet from space" without inter-satellite links?'
          authors="Yannick Hauri, Debopam Bhattacherjee, Manuel Grossmann, Ankit Singla"
          event="ACM HotNets 2020"
          links={[
            { 'text': 'Paper', 'link': 'https://people.inf.ethz.ch/asingla/papers/hotnets20-ISLs.pdf' },
          ]}
        />
        <Paper
          title='Exploring the "Internet from space" with Hypatia'
          authors="Simon Kassing *, Debopam Bhattacherjee *, André Baptista Águas, Jens Eirik Saethre, Ankit Singla"
          event="ACM IMC 2020"
          award="Best Paper Award"
          links={[
            { 'text': 'Paper', 'link': 'https://people.inf.ethz.ch/asingla/papers/imc2020-hypatia.pdf' },
            { 'text': 'Visualizations', 'link': 'https://leosatsim.github.io/' },
            { 'text': 'Code', 'link': 'https://github.com/snkas/hypatia' }
          ]}
        />
        <Paper
          title="A bird’s eye view of the world's fastest networks"
          authors="Debopam Bhattacherjee, Waqar Aqeel, Gregory Laughlin, Bruce Maggs, Ankit Singla"
          event="ACM IMC 2020"
          links={[
            { 'text': 'Paper', 'link': 'https://people.inf.ethz.ch/asingla/papers/imc2020-hft.pdf' },
            { 'text': 'Code & Visualizations', 'link': 'https://github.com/debopambhattacherjee/HFTNetView' }
          ]}
        />
        <Paper
          title="Untangling Header Bidding Lore"
          authors="Waqar Aqeel, Debopam Bhattacherjee, Balakrishnan Chandrasekaran, P. Brighten Godfrey, Gregory Laughlin, Bruce Maggs, Ankit Singla"
          event="PAM 2020"
          award="Best Dataset Award"
          links={[
            { 'text': 'Paper', 'link': 'https://cspeed.net/assets/publications/aqeel-pam2020.pdf' }
          ]}
        />
        <Paper
          title="Network topology design at 27,000 km/hour"
          authors="Debopam Bhattacherjee, Ankit Singla"
          event="ACM CoNEXT 2019"
          award="IETF/IRTF Applied Networking Research Prize"
          links={[
            { 'text': 'Paper', 'link': 'https://dl.acm.org/authorize?N690850' }
          ]}
          more={{
            'media-coverage': [
              { 'text': 'ETH News, 10-Dec-2019', 'link': 'https://ethz.ch/en/news-and-events/eth-news/news/2019/12/a-new-network-design-for-the-internet-from-space.html' },
              { 'text': 'Punkt4, 11-Dec-2019', 'link': 'https://punkt4.info/social-news/news/eth-stellt-neues-modell-fuer-weltraum-internet-vor.html' },
              { 'text': 'TechXplore, 11-Dec-2019', 'link': 'https://techxplore.com/news/2019-12-network-internet-space.html' },
              { 'text': 'Computerworld, 12-Dec-2019', 'link': 'https://www.computerworld.ch/technik/networking/weltraum-internet-neuem-netzwerk-design-2404832.html' },
              { 'text': 'themediahq, 12-Dec-2019', 'link': 'https://themediahq.com/a-new-network-plan-for-the-internet-from-space/' },
              { 'text': 'Elektronikpraxis, 12-Dec-2019', 'link': 'https://www.elektronikpraxis.vogel.de/netzwerk-design-fuer-das-internet-aus-dem-weltraum-a-891025/' },
              { 'text': 'netzwoche, 13-Dec-2019', 'link': 'https://www.netzwoche.ch/news/2019-12-13/ein-neues-netzwerk-design-fuer-das-internet-aus-dem-weltraum' },
              { 'text': 'Communications of the ACM, 16-Dec-2019', 'link': 'https://cacm.acm.org/news/241610-a-network-design-for-the-internet-from-space/fulltext' },
              { 'text': 'pplware (Spanish), 19-Dec-2019', 'link': 'https://pplware.sapo.pt/ciencia/satelite-ligados-por-laser-podem-fornecer-internet-a-partir-do-espaco/' },
              { 'text': 'Washington Daily Report, 25-Dec-2019', 'link': 'https://washingtondailyreport.com/laser-linked-satellites-could-deliver-internet-from-space/' }
            ],
            'extra-points': [
              { 'text': 'Invited APNIC blog post:', 'link': 'https://blog.apnic.net/2020/02/25/network-topology-design-at-27000-km-hr/' }
            ],
            'videos': [
              { 'link': 'https://www.youtube.com/embed/1hjMRRPMGsE' }
            ]
          }}
        />
        <Paper
          title="Measuring and exploiting the cloud consolidation of the Web"
          authors="Debopam Bhattacherjee, Muhammad Tirmazi, Ankit Singla"
          event="arXiv 2019: 1906.04753"
          links={[
            { 'text': 'Paper', 'link': 'https://arxiv.org/pdf/1906.04753' }
          ]}
        />
        <Paper
          title="Dissecting Latency in the Internet's Fiber Infrastructure"
          authors="Debopam Bhattacherjee, Waqar Aqeel, Gregory Laughlin, Bruce Maggs, Ankit Singla"
          event="arXiv 2018: 1811.10737"
          links={[
            { 'text': 'Paper', 'link': 'https://arxiv.org/pdf/1811.10737.pdf' }
          ]}
        />
        <Paper
          title="cISP: A Speed-of-Light Internet Service Provider"
          authors="Debopam Bhattacherjee, Sangeetha Abdu Jyothi, Ilker Nadi Bozkurt, Muhammad Tirmazi, Waqar Aqeel, Anthony Aguirre, Balakrishnan Chandrasekaran, P. Brighten Godfrey, Gregory P. Laughlin, Bruce M. Maggs, Ankit Singla"
          event="arXiv 2018: 1809.10897"
          links={[
            { 'text': 'Paper', 'link': 'https://arxiv.org/pdf/1809.10897.pdf' }
          ]}
        />
        <Paper
          title="Gearing up for the 21st century space race"
          authors="Debopam Bhattacherjee, Waqar Aqeel, Ilker Nadi Bozkurt, Anthony Aguirre, Balakrishnan Chandrasekaran, P. Brighten Godfrey, Gregory P. Laughlin, Bruce M. Maggs, Ankit Singla"
          event="ACM HotNets 2018"
          links={[
            { 'text': 'Paper', 'link': 'https://dl.acm.org/citation.cfm?id=3286079' }
          ]}
        />
        <Paper
          title="A Cloud-based Content Gathering Network"
          authors="Debopam Bhattacherjee, Muhammad Tirmazi and Ankit Singla"
          event="USENIX HotCloud 2017"
          links={[
            { 'text': 'Paper', 'link': 'https://www.usenix.org/system/files/conference/hotcloud17/hotcloud17-paper-bhattacherjee.pdf' },
            { 'text': 'Slides', 'link': 'https://www.usenix.org/sites/default/files/conference/protected-files/hotcloud17_slides_bhattacherjee.pdf' }
          ]}
          more={{
            'media-coverage': [
              { 'text': 'The Morning Paper, 24-Aug-2017', 'link': 'https://blog.acolyer.org/2017/08/24/a-cloud-based-content-gathering-network/' }
            ]
          }}
        />
        <Paper
          title="Watch your step! Detecting stepping stones in programmable networks"
          authors="Debopam Bhattacherjee, Andrei Gurtov, Tuomas Aura"
          event="IEEE ICC Communication and Information Systems Security Symposium 2019"
          links={[
            { 'text': 'Paper', 'link': 'https://ieeexplore.ieee.org/abstract/document/8761731' }
          ]}
          more={{
            'extra-points': [
              { 'text': 'Work done when affiliated to Aalto University, Finland [2016, MS]' }
            ]
          }}
        />
      </CustomScroller>
    </div>
  );
}

export default Papers;
