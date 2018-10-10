import React, { Component } from "react";
import PageContainer from "../components/PageContainer";

export default class Electronics extends Component {
  render() {
    return (
      <PageContainer
        description={"Embedded"}
        subtitle="Development"
        topImage={require("../res/bg3.jpg")}
      />
    );
  }
}
