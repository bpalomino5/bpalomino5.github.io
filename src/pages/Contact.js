import React, { Component } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import CV from "../components/sections/CV";

export default class Contact extends Component {
  render() {
    return (
      <PageContainer
        description={"Contact"}
        subtitle="______"
        topImage={require("../res/backgrounds/bg4.jpeg")}
      >
        <CV />
      </PageContainer>
    );
  }
}
