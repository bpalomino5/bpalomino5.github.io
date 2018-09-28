import React, { Component } from "react";
import "../styles/SoftwareSection.css";
import StackGrid from "react-stack-grid";
import { Button } from "semantic-ui-react";

const LanguageInfo = [
  {
    title: "Java",
    description:
      "4 years of object-oriented design of user interfaces, graphics, & games."
  },
  {
    title: "C++",
    description:
      "5 years of algorithm design, architecture management, & interfaces."
  },
  {
    title: "Python",
    description:
      "4 years of algorithm & data analysis, simulations, & prototyping."
  },
  {
    title: "Web",
    description: "2 years in UX/UI design, HTML, CSS, JS with Bootstrap."
  },
  {
    title: "Mobile",
    description:
      "3 years designing scalable Android & IOS apps with some full featured releases with Android SDK & React"
  },
  {
    title: "Tools & Frameworks",
    description:
      "2 years working with NodeJS, Express, MySQL, ReactJS, React Native, Google Firebase, Heroku Cloud, Amazon Web Services"
  }
];

const LanguageBox = ({ title, description }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "2.5em" }}>{title}</div>
    <div style={{ fontSize: "1.2em" }}>{description}</div>
  </div>
);

export default class SoftwareSection extends Component {
  render() {
    let width = window.innerWidth;
    return (
      <div className="homeStyle" style={{ backgroundColor: "white" }}>
        <div
          className="homeStyle sHeading"
          style={{ height: width < 641 ? "30vh" : "70vh" }}
        >
          <div className={`sTop${width < 641 ? "Small" : "Large"}`}>
            Software
          </div>
          <div className={`sBottom${width < 641 ? "Small" : "Large"}`}>
            DEVELOPMENT
          </div>
        </div>
        <StackGrid
          columnWidth={400}
          gutterWidth={50}
          gutterHeight={50}
          style={{ marginTop: 40 }}
        >
          {LanguageInfo.map((item, i) => (
            <LanguageBox
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </StackGrid>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            paddingTop: 30,
            paddingBottom: 30
          }}
        >
          <Button basic color="black" size="massive">
            Learn More
          </Button>
        </div>
      </div>
    );
  }
}
