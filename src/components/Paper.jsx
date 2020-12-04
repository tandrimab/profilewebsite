import React, { Fragment } from "react";

// Project library
import { ReactComponent as EllipsisLogo } from "media/icons/logo-ellipsis.svg";

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

  return (
    <div className="paper-div">
      <h4>{props.title}</h4>
      {
        props.award &&
          <p className="award">{props.award}</p>
      }
      <p className="authors">{props.authors}</p>
      {
        props.more &&
          <Fragment>
            <button className="ellipsis-toggle" onClick={expandPaper}>
              <span>more</span>
              <EllipsisLogo title="Click for more details" />
            </button>

            <div className='extra-paper-details'>
              <div className='extra-paper-details-inner'>
                {/* Add Media Coverages */}
                {
                  props.more['media-coverage'] &&
                  <div className='paper-media-coverage'>
                    <p>Media Coverage</p>
                    <ul>
                      {
                        props.more['media-coverage'].map((coverage, key) => {
                          return <li key={key}>
                            <a href={coverage['link']} target='_blank' rel="noopener noreferrer">{coverage['text']}</a>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                }
                {/* Add Related Points */}
                {
                  props.more['extra-points'] &&
                  <div className='paper-extra-points'>
                    <p>Related</p>
                    <ul>
                      {
                        props.more['extra-points'].map((point, index) => {
                          if (point['link']) {
                            return <li key={index}>
                              <span>{point['text']}</span>
                              <a href={point['link']} target='_blank' rel="noopener noreferrer">Click here</a>
                            </li>
                          } else {
                            return <li key={index}>
                              <span>{point['text']}</span>
                            </li>
                          }
                        })
                      }
                    </ul>
                  </div>
                }
                {/* Add Videos */}
                {
                  props.more['videos'] &&
                  <div className='paper-videos'>
                    <p>Videos</p>
                    <div>
                      {
                        props.more['videos'].map((video, key) => {
                          return <iframe
                            key={key}
                            src={video['link']}
                            title={key}
                            allowFullScreen
                            frameBorder='0'>
                          </iframe>
                        })
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          </Fragment>
      }
      {/* Add event */}
      <div className="event">
        <p>
          {props.event}
          {
            props.links.map((link, index) => {
            return  <a key={index} href={link.link} target='_blank' rel="noopener noreferrer">{link.text}</a>
            })
          }
        </p>
      </div>
    </div>
  );
}

export default Paper;
