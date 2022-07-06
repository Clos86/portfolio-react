import React from "react";
import { ReactComponent as GithubLogo } from "../assets/icons/github-icon.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-icon.svg";
import { ReactComponent as GmailLogo } from "../assets/icons/Gmail-Logo.svg";
import { ReactComponent as TwitterLogo } from "../assets/icons/twitter.svg";

function Footer() {
  return (
    <footer className="flex justify-around">
      <a
        href="https://github.com/Clos86"
        target="_blank"
        rel="noreferrer">
        <GithubLogo width="auto" height="55px" />
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-vazquez-mendez"
        target="_blank"
        rel="noreferrer">
        <LinkedInLogo width="auto" height="50px" />
      </a>
      <a
        href="https://twitter.com/FullDevCarlos"
        target="_blank"
        rel="noreferrer">
        <TwitterLogo width="auto" height="50px" />
      </a>
      <a
        href="mailto:c.vazquez1986@gmail.com"
        target="_blank"
        rel="noreferrer">
        <GmailLogo width="auto" height="50px" />
      </a>
    </footer>
  );
}

export default Footer;
