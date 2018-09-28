import React, { Component } from "react";
import "../styles/Home.css";
import AboutSection from "../components/AboutSection";
import SoftwareSection from "../components/SoftwareSection";
import {
  Menu,
  Button,
  Responsive,
  Visibility,
  Sidebar,
  Segment,
  Icon
} from "semantic-ui-react";
import { Fade } from "react-bootstrap";
import scrollToComponent from "react-scroll-to-component";

const ResponsiveContainer = ({ children, aboutClicked }) => {
  return (
    <div>
      <DesktopContainer aboutClicked={aboutClicked}>
        {children}
      </DesktopContainer>
      <MobileContainer aboutClicked={aboutClicked}>{children}</MobileContainer>
    </div>
  );
};

const HomePageHeading = ({ mobile }) => (
  <div className="homeStyle">
    <div
      className="topStyle topTitle"
      style={{ fontSize: mobile ? "2em" : "2.2em" }}
    >
      BRANDON PALOMINO
    </div>
    <div
      className="topStyle topDescription"
      style={{
        fontSize: mobile ? "3.5em" : "5em",
        paddingBottom: mobile ? 96 : 200,
        paddingLeft: mobile ? 0 : 32,
        paddingRight: mobile ? 0 : 32,
        paddingTop: mobile ? 0 : 0
      }}
    >
      Insight, Innovation, & <br /> Technology.
    </div>
  </div>
);

class DesktopContainer extends Component {
  state = { fade: true };

  hideFixedMenu = () => this.setState({ fixed: false, fade: false });
  showFixedMenu = () => this.setState({ fixed: true, fade: true });
  showFade = () => this.setState({ fade: true });
  hideFade = () => this.setState({ fade: false });

  render() {
    const { children } = this.props;
    const { fixed, fade } = this.state;

    return (
      <Responsive minWidth={641}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div
            className="homeStyle"
            style={{
              height: "97vh",
              background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${require("../res/bg2.jpg")})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <Visibility
              once={false}
              onBottomPassed={this.hideFade}
              onBottomPassedReverse={this.showFade}
            >
              <TopBar
                fixed={fixed}
                fade={fade}
                aboutClicked={this.props.aboutClicked}
              />
            </Visibility>
            <HomePageHeading />
          </div>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={640}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            duration={300}
            animation="uncover"
            inverted
            vertical
            direction="right"
            visible={sidebarOpened}
            borderless
            style={{ padding: 20 }}
          >
            <Menu.Item as="a" style={{ marginBottom: 10 }}>
              <div className="mbTextStyle">WORK</div>
            </Menu.Item>
            <Menu.Item
              as="a"
              style={{ marginBottom: 10 }}
              onClick={() => {
                this.handlePusherClick();
                setTimeout(this.props.aboutClicked.bind(this), 500);
              }}
            >
              <div className="mbTextStyle">ABOUT</div>
            </Menu.Item>
            <Button
              as="a"
              inverted
              style={{ marginLeft: "0.5em", marginTop: 5 }}
            >
              <div className="mbTextStyle" style={{ padding: 4 }}>
                CONTACT
              </div>
            </Button>
          </Sidebar>
          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              style={{
                minHeight: 350,
                padding: "0em 0em",
                display: "flex",
                flex: 1
              }}
              vertical
              basic
            >
              <div
                className="homeStyle"
                style={{
                  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${require("../res/bg2.jpg")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Menu
                  inverted
                  secondary
                  size="large"
                  style={{ paddingTop: 10 }}
                >
                  <Menu.Item>
                    <div className="tHeaderTextStyle">PALOMINO</div>
                  </Menu.Item>
                  <Menu.Item position="right" onClick={this.handleToggle}>
                    <Icon size="big" name="sidebar" />
                  </Menu.Item>
                </Menu>
                <HomePageHeading mobile />
              </div>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

const TopBar = ({ fixed, fade, aboutClicked }) => {
  let color = !fixed ? "transparent" : "rgba(1,1,1,0.7)";
  return (
    <Fade in={fade}>
      <Menu
        borderless
        inverted
        secondary
        size="massive"
        style={{ padding: 10, backgroundColor: color }}
        fixed={fixed ? "top" : null}
      >
        <Menu.Item>
          <div className="tHeaderTextStyle">PALOMINO</div>
        </Menu.Item>
        <Menu.Item position="right">
          <Menu.Item as="a">
            <div className="tbTextStyle">WORK</div>
          </Menu.Item>
          <Menu.Item as="a" onClick={aboutClicked}>
            <div className="tbTextStyle">ABOUT</div>
          </Menu.Item>
          <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
            <div className="tbTextStyle" style={{ padding: 4 }}>
              CONTACT
            </div>
          </Button>
        </Menu.Item>
      </Menu>
    </Fade>
  );
};

export default class Home extends Component {
  render() {
    return (
      <ResponsiveContainer
        aboutClicked={() =>
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
      </ResponsiveContainer>
    );
  }
}
