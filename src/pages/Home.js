import React, { Component } from "react";
import "../styles/Home.css";
import PageContainer from "../components/PageContainer/PageContainer";
import AboutSection from "../components/AboutSection";
import SoftwareSection from "../components/SoftwareSection";
import scrollToComponent from "react-scroll-to-component";
import ElectronicsSection from "../components/ElectronicsSection";

export default class Home extends Component {
  render() {
    return (
      <PageContainer
        title="Brandon Palomino"
        description={"Insight, Innovation, & \n Technology."}
        topImage={require("../res/bg2.jpg")}
        moreClicked={() =>
          scrollToComponent(this.About, {
            offset: 1,
            align: "top",
            duration: 500
          })
        }
      >
        <AboutSection
          ref={aboutRef => {
            this.About = aboutRef;
          }}
        />
        <SoftwareSection />
        <ElectronicsSection />
      </PageContainer>
    );
  }
}
