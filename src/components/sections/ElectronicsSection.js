import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import SectionBanner from "./SectionBanner";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContentInfo = [
  {
    title: "Raspberry Pi",
    description:
      "3 years of architecture management, electronics design, and IoT application development."
  },
  {
    title: "Arduino",
    description:
      "2 years of device management, logic design, and embedded application development."
  },

  {
    title: "Tools & Frameworks",
    description:
      "3 years working with Raspbian, C++, Python, Blynk IoT, Wit.ai, Particle Cloud, Google Cloud Services, Amazon Web Services"
  }
];

const ContentBox = ({ title, description }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "2.5em" }}>{title}</div>
    <div style={{ fontSize: "1.2em" }}>{description}</div>
  </div>
);

export default class ElectronicsSection extends Component {
  render() {
    return (
      <div className="homeStyle" style={{ backgroundColor: "white" }}>
        <SectionBanner title="Electronics" subtitle="embedded" />
        <StackGrid
          columnWidth={320}
          gutterWidth={50}
          gutterHeight={50}
          style={{ marginTop: 40 }}
        >
          {ContentInfo.map((item, i) => (
            <ContentBox
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
          <Link to="/electronics">
            <Button basic color="black" size="massive">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
