import React, { Component } from "react";
import "../styles/Home.css";
import AboutSection from "../components/AboutSection";
import { Menu, Button, Responsive, Visibility } from "semantic-ui-react";

const ResponsiveContainer = ({ children }) => {
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
    </div>
  );
};

const HomePageHeading = () => (
  <div className="homeStyle">
    <div className="topStyle topTitle">BRANDON PALOMINO</div>
    <div className="topStyle topDescription">
      Insight, Innovation, & <br /> Technology.
    </div>
  </div>
);

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    let height = window.innerHeight;
    let topSectionH = height - 50;

    return (
      <Responsive>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div
            className="homeStyle"
            style={{
              height: topSectionH,
              background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${require("../res/bg2.jpg")})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <TopBar fixed={fixed} />
            <HomePageHeading />
          </div>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

const TopBar = ({ fixed }) => {
  return (
    <Menu
      inverted={!fixed}
      secondary={!fixed}
      size="massive"
      style={{ padding: 10 }}
      fixed={fixed ? "top" : null}
    >
      <Menu.Item>
        <div className="tHeaderTextStyle">PALOMINO</div>
      </Menu.Item>
      <Menu.Item position="right">
        <Menu.Item as="a">
          <div className="tbTextStyle">WORK</div>
        </Menu.Item>
        <Menu.Item as="a">
          <div className="tbTextStyle">ABOUT</div>
        </Menu.Item>
        <Button as="a" inverted={!fixed} style={{ marginLeft: "0.5em" }}>
          <div className="tbTextStyle">CONTACT</div>
        </Button>
      </Menu.Item>
    </Menu>
  );
};

const FirstBanner = () => (
  <div className="firstBanner">
    My passion is mastering existing technologies and elevating them to the next
    level.
  </div>
);

const SoftwareSection = () => (
  <div className="homeStyle sHeading">
    <div>Software</div>
    <div>Development</div>
  </div>
);

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sidebarVisible: false
  //   };
  //   this.toggleSideBar = this.toggleSideBar.bind(this);
  // }

  // toggleSideBar() {
  //   this.setState({ sidebarVisible: !this.state.sidebarVisible });
  // }

  render() {
    return (
      <ResponsiveContainer>
        <FirstBanner />
        <AboutSection />
        <SoftwareSection />
        <div className="contactSection" style={{ height: 500 }}>
          <h3 align="left">Let's Connect</h3>
          <br />
          12bpalomino@gmail.com
          <br />
        </div>
      </ResponsiveContainer>
    );
  }
}
