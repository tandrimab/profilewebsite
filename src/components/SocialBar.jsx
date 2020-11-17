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
      <MailLogo />
      <LinkedInLogo />
      <ScholarLogo />
      <GithubLogo />
      <TwitterLogo />
      <FbLogo />
    </div>
  );
}

export default SocialBar;
