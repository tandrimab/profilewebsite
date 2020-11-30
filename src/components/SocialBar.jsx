import React from "react";

// Project library
import { ReactComponent as MailLogo } from "../media/mail.svg";
import { ReactComponent as LinkedInLogo } from "../media/logo-linkedin.svg";
import { ReactComponent as ScholarLogo } from "../media/scholar.svg";
import { ReactComponent as GithubLogo } from "../media/logo-github.svg";
import { ReactComponent as TwitterLogo } from "../media/logo-twitter.svg";
import { ReactComponent as FbLogo } from "../media/logo-facebook.svg";

function SocialBar() {
  return (
    <div id="social-links">
      {/* <img className="social-media-img" src="media/mail.svg" alt="mail-img" /> */}
      <a href='[firstname].[lastname]@inf.ethz.ch' target='_blank' rel="noopener noreferrer"><MailLogo /></a>
      <a href='https://www.linkedin.com/in/bdebopam/' target='_blank' rel="noopener noreferrer"><LinkedInLogo /></a>
      <a href='https://scholar.google.com/citations?user=hl3YvokAAAAJ' target='_blank' rel="noopener noreferrer"><ScholarLogo /></a>
      <a href='' target='_blank'><GithubLogo /></a>
      <a href='' target='_blank'><TwitterLogo /></a>
      <a href='' target='_blank'><FbLogo /></a>
    </div>
  );
}

export default SocialBar;
