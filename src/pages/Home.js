import React, { Component } from "react";
import "../styles/Home.css";
import AboutSection from "../components/AboutSection";
import { Menu, Container, Button } from "semantic-ui-react";

const TopBar = () => {
  return (
    <Menu fixed={"top"} inverted secondary size="massive">
      <Container>
        <Menu.Item header>PALOMINO</Menu.Item>
        <Menu.Item position="right">
          <Menu.Item as="a" active>
            Work
          </Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Portfolio</Menu.Item>
          <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
            Contact
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  render() {
    let height = window.innerHeight;
    let topSectionH = height - 70;

    return (
      <div className="homeStyle">
        <div
          className="headerImage"
          style={{
            height: topSectionH,
            background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${require("../res/bg2.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <TopBar />
          <div className="topStyle topTitle">BRANDON PALOMINO</div>
          <div className="topStyle topDescription">
            Insight, Innovation, & <br /> Technology.
          </div>
        </div>
        <AboutSection />
        <div className="contactSection">
          <h3 align="left">Let's Connect</h3>
          <br />
          12bpalomino@gmail.com
          <br />
        </div>
      </div>
      // <div className="container">
      //   <NavBar
      //     onMenuClick={this.toggleSideBar}
      //     sidebarVisible={this.state.sidebarVisible}
      //   >
      //     <div className="homeStyle">
      //       <AboutSection />
      //       <div className="contactSection">
      //         <h3 align="left">Let's Connect</h3>
      //         <br />
      //         12bpalomino@gmail.com<br />
      //       </div>
      //     </div>
      //   </NavBar>
      // </div>
    );
  }
}
