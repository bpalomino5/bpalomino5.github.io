import React, { Component } from "react";
import "../styles/BottomBar.css";

export default class BottomBar extends Component {
  render() {
    const { mobile } = this.props;
    return (
      <div>
        <div className="preFooter">
          <div className="socialBlock">
            <a
              href="https://www.linkedin.com/in/brandon-palomino/"
              className="iconWrapper"
            >
              <img
                className="bs-image-style"
                src={require("../res/linkedin.png")}
              />
            </a>
            <a href="https://github.com/bpalomino5" className="iconWrapper">
              <img
                className="bs-image-style"
                src={require("../res/github.png")}
              />
            </a>
          </div>
        </div>
        <footer>
          <div className={`footer-inner ${mobile ? "mobile" : "desktop"}`}>
            {mobile && (
              <div className="back-to-top-nav">
                <a href="/">Back to Top</a>
              </div>
            )}
            <div className={`siteInfo ${mobile ? "mobile" : "desktop"}`}>
              <span className="site-address">
                BRANDON PALOMINO, 7287 PARKSIDE PL, RANCHO CUCAMONGA, CA
              </span>
              <span className={`site-phone ${mobile ? "mobile" : "desktop"}`}>
                909-581-2965
              </span>
            </div>
            <div className="siteBrand">
              <div className={`brand-inner ${mobile ? "mobile" : "desktop"}`}>
                <p>Powered by B.P.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
