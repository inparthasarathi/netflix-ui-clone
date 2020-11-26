import React from "react";
import "./css/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const currentYrear = new Date().getFullYear();
function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <h1>By Parthasarathi</h1>
      <p className="copyright">
        ©{" "}
        <a
          class="footer_link_comp"
          href="https://www.instagram.com/fivesquarein/"
        >
          FiveSquareCo.
        </a>
        {"  "}
        {currentYrear}, All rights reserved.
      </p>
      <br />
      <span>
        <a href="https://github.com/parthasarath1">
          <GitHubIcon fontSize="small" />
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/ext1nt/">
          <InstagramIcon fontSize="small" />
        </a>
      </span>

      <span className="footer_backToTop">
        <ArrowUpwardIcon fontSize="small" onClick={scrollTop} />
      </span>
    </footer>
  );
}

export default Footer;
