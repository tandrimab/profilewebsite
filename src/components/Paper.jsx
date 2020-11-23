import React from "react";

// Project library
import { ReactComponent as EllipsisLogo } from "../media/logo-ellipsis.svg";

function Paper(props) {

  function expandPaper() {
    var paperDetails = document.activeElement.parentElement.querySelector('.extra-paper-details');
    if (paperDetails.classList.contains('show-paper-details')) {
      paperDetails.classList.remove('show-paper-details');
      document.activeElement.querySelector('span').innerHTML = 'more';
    } else {
      paperDetails.classList.add('show-paper-details');
      document.activeElement.querySelector('span').innerHTML = 'less';
    }
  }

  var links = [];
  props.links.map((link, index) => (
    links.push(
      <a href={link.link}>{link.text}</a>
    )
  ));
  var award;
  if (props.award) {
    award = <p className="award">{props.award}</p>
  }
  var more = [];
  if (props.more) {
    more.push(<button className="ellipsis-toggle" onClick={expandPaper}>
      <span>more</span>
      <EllipsisLogo title="Click for more details" />
      </button>
    );
    var mediaCoverages = [];
    var mediaCoverage = [];
    if (props.more['media-coverage']) {
      props.more['media-coverage'].map((coverage) => {
        mediaCoverages.push(
          <li>
            <a href={coverage['link']}>{coverage['text']}</a>
          </li>
        )
        return true;
      });
      mediaCoverage.push(
        <div className='paper-media-coverage'>
          <p>Media Coverage</p>
          <ul>
            {mediaCoverages}
          </ul>
        </div>
      );
    }

    var extraPoints = [];
    var points = [];
    if (props.more['extra-points']) {
      props.more['extra-points'].map((point) => {
        if (point['link']) {
          points.push(
            <li>
              <span>{point['text']}</span>
              <a href={point['link']}>Click here</a>
            </li>
          );
        } else {
          points.push(
            <li>
              <span>{point['text']}</span>
            </li>
          );
        }
        return true;
      });
      extraPoints.push(
        <div className='paper-extra-points'>
          <p>Extra Points</p>
          <ul>
            {points}
          </ul>
        </div>
      );
    }
    var videos = [];
    var allVideos = [];
    if (props.more['videos']) {
      props.more['videos'].map((video) => {
        videos.push(
          <iframe
            src={video['link']}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            frameBorder='0'>
          </iframe>
        )
        return true;
      });
      allVideos.push(
        <div className='paper-videos'>
          <p>Videos</p>
          <div>
            {videos}
          </div>
        </div>
      );
    }

    more.push(
      <div className="extra-paper-details">
        <div className="extra-paper-details-inner">
          {mediaCoverage}
          {extraPoints}
          {allVideos}
        </div>
      </div>
    );
  }
  return (
    <div className="paper-div">
      <h4>{props.title}</h4>
      {award}
      <p className="paper-author">{props.authors}</p>
      {more}
      <div className="event-paper">
        <p className="event">
          {props.event}
          {links}
        </p>
      </div>
    </div>
  );
}

export default Paper;
