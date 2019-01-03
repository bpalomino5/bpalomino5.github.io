import React, { Component } from "react";
import "../../styles/cv.css";
import { Responsive } from "semantic-ui-react";

const EducationSection = () => (
  <div>
    <HorizontalBlock />
    <div className="item-block">
      <div className="item-title">
        <h2>Education</h2>
      </div>
      <div className="item-description">
        <h4>California State Polytechnic University, Pomona</h4>
        <p>Bachelor of Science in Computer Science</p>
        <p>&nbsp;</p>
        <h4>Pasadena City College</h4>
        <p>Associate of Science in Mathematics</p>
        <p>Associate of Arts in Engineering and Technology</p>
        <p>Associate of Arts in Natural Sciences</p>
        <p>Associate of Arts in Humanities</p>
        <p>College Honors</p>
      </div>
      <div className="right-col">
        <div>
          <p>June 2018</p>
          <p>Major GPA: 3.2</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
);

const HorizontalBlock = () => (
  <div className="block-horizontal">
    <div className="block-line">
      <hr />
    </div>
  </div>
);

const CVPage = ({ mobile }) => (
  <div className={`homeStyle page-cv ${mobile && "mobile"}`}>
    <div className="main-content-cv">
      <div className={`block-content ${mobile && "mobile"}`}>
        <h1>Resume</h1>
      </div>
      <EducationSection />
    </div>
  </div>
);

const DesktopContainer = ({ children }) => (
  <Responsive minWidth={730}>{children}</Responsive>
);

const MobileContainer = ({ children }) => (
  <Responsive maxWidth={729}>{children}</Responsive>
);

export default class CV extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <DesktopContainer>
          <CVPage />
        </DesktopContainer>
        <MobileContainer>
          <CVPage mobile />
        </MobileContainer>
      </div>
    );
  }
}
