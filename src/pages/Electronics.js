import React, { Component } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import Blog from "../components/Blog/Blog";

const entries = [
  {
    title: "ThermoPi",
    description: "Arduino/Home Automation Thermostat",
    date: "May 2017 - December 2018",
    link: "https://github.com/bpalomino5/ThermoPi",
    details: "C++: Arduino",
    img: "thermopi.jpg",
    content:
      "I started this project with a Raspberry Pi (hence the name...) , and quickly learned about IoT platform development, continuous data streaming, connection latency, embedded os, limitations, gpio, and logic circuit design, and smart hardware choices. Long story short there is a bunch to learn when trying to bridge the gap between hardware and software, but as long as the passion and persistence is alive, keep on going and try not to burn down the house."
  },
  {
    title: "B.U.R.T.O.N.",
    description: "Cloud-Based Personal Assistant",
    date: "May 2017 - June 2018",
    link: "https://github.com/bpalomino5/B.U.R.T.O.N.",
    details: "Python: Flask, Javascript: React Native",
    img: "default2.png",
    content:
      "Voice automated systems is a popular trend inside and outside of development communities, becoming now a happy commodity to the public. However, there is still much to push for in terms of providing the right needs for users. Burton is designed to test and push the voice systems even further. "
  }
];

export default class Electronics extends Component {
  render() {
    return (
      <PageContainer
        description={"Embedded"}
        subtitle="Development"
        topImage={require("../res/backgrounds/bg3.jpg")}
      >
        <Blog type="Electronics" entries={entries} />
      </PageContainer>
    );
  }
}
