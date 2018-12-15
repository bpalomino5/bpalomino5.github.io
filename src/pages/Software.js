import React, { Component } from "react";
import PageContainer from "../components/PageContainer/PageContainer";

export default class Software extends Component {
  render() {
    return (
      <PageContainer
        description={"Software"}
        subtitle="Engineering"
        topImage={require("../res/bg1.jpg")}
      />
    );
  }
}
