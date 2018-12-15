import React, { Component } from "react";
import "../styles/AboutSection.css";
import { Image } from "react-bootstrap";
import { Responsive } from "semantic-ui-react";

const MobilePrefaceContainer = () => (
  <Responsive maxWidth={970}>
    <div style={{ flexDirection: "column", padding: 17 }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          marginBottom: 25
        }}
      >
        <Image
          src={require("../res/brandon.jpg")}
          width="240px"
          height="240px"
        />
      </div>
      <AboutContent mobile />
    </div>
  </Responsive>
);

const DesktopPrefaceContainer = () => (
  <Responsive minWidth={971}>
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
);

const PrefaceSection = () => (
  <div>
    <DesktopPrefaceContainer />
    <MobilePrefaceContainer />
  </div>
);

const DesktopContainer = () => (
  <Responsive minWidth={641}>
    <div className="aboutContainer">
      <Banner />
      <PrefaceSection />
    </div>
  </Responsive>
);

const MobileContainer = () => (
  <Responsive maxWidth={640}>
    <div className="aboutContainerMobile">
      <Banner mobile />
      <PrefaceSection />
    </div>
  </Responsive>
);

const Banner = ({ mobile }) => (
  <div style={{ fontSize: mobile ? "10px" : "14px", paddingBottom: 20 }}>
    <h1 className="bannerStyle">
      My passion is mastering existing technologies and elevating them to the
      next level.
    </h1>
  </div>
);

const AboutContent = ({ mobile }) => {
  return (
    <div>
      <h3 align="left" style={{ fontWeight: 350 }}>
        Preface
      </h3>
      <p
        align="left"
        style={{
          fontSize: mobile ? "14px" : "15px",
          lineHeight: "2"
        }}
      >
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
      <div style={{ backgroundColor: "white" }}>
        <DesktopContainer />
        <MobileContainer />
      </div>
    );
  }
}
