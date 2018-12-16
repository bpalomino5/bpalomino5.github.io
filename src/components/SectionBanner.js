import React, { Component } from "react";
import "../styles/SectionBanner.css";

export default class SectionBanner extends Component {
  render() {
    let width = window.innerWidth;
    const { title, subtitle } = this.props;
    return (
      <div>
        <div
          className="homeStyle banner-style"
          style={{ height: width < 641 ? "35vh" : "70vh" }}
        >
          <div className={`title-style ${width < 641 ? "mobile" : "desktop"}`}>
            {title}
          </div>
          <div
            className={`subtitle-style ${width < 641 ? "mobile" : "desktop"}`}
          >
            {subtitle}
          </div>
        </div>
      </div>
    );
  }
}
