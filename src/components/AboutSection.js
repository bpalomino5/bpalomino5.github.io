import React, { Component } from "react";
import "../styles/AboutSection.css";
import { Image } from "react-bootstrap";
import { Responsive } from "semantic-ui-react";

const AboutContent = () => {
  return (
    <div>
      <h3 align="left" style={{ fontWeight: 350 }}>
        Preface
      </h3>
      <p align="left" style={{ fontSize: "1em" }}>
        <br />
        My life is filled with diversity amongst my career, language, and
        activities. I share my knowledge and skills as a means to spread
        awareness, excitement, and passion for my craft with others.
        <br />
        <br />I strive to achieve the best principles and practices of Software
        Engineering and the User Experience. My execution, organization, and
        creativitiy defines my confidence in any practical situation that I have
        gone through, with only a hunger to achieve more.
        <br />
        <br />
        <br />
        <br />
        <br />
        BS Computer Science - Cal Poly Pomona
      </p>
    </div>
  );
};

export default class AboutSection extends Component {
  render() {
    return (
      <div>
        <Responsive minWidth={651}>
          <div
            className="aboutSection"
            style={{
              flexDirection: "row"
            }}
          >
            <div className="imageContainer">
              <Image
                src={require("../res/brandon.jpg")}
                width="280px"
                height="280px"
              />
            </div>
            <AboutContent />
          </div>
        </Responsive>
        <Responsive maxWidth={650}>
          <div className="aboutSection" style={{ flexDirection: "column" }}>
            <div
              className="imageContainer"
              style={{
                justifyContent: "center",
                marginBottom: 25,
                marginRight: 0
              }}
            >
              <Image
                src={require("../res/brandon.jpg")}
                width="180px"
                height="180px"
                circle
              />
            </div>
            <AboutContent />
          </div>
        </Responsive>
      </div>
    );
  }
}
