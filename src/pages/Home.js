import React, { Component } from "react";
import "../styles/Home.css";
import AboutSection from "../components/AboutSection";
import {
  Menu,
  Button,
  Responsive,
  Visibility,
  Sidebar,
  Segment,
  Icon
} from "semantic-ui-react";
import StackGrid from "react-stack-grid";
import { Fade } from "react-bootstrap";

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

const ResponsiveContainer = ({ children }) => {
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
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
    let height = window.innerHeight;
    let topSectionH = height - 20;

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
              height: topSectionH,
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
              <TopBar fixed={fixed} fade={fade} />
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
            <Menu.Item as="a" style={{ marginBottom: 10 }}>
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

const TopBar = ({ fixed, fade }) => {
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
          <Menu.Item as="a">
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

const LanguageBox = ({ title, description }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "2.5em" }}>{title}</div>
    <div style={{ fontSize: "1.2em" }}>{description}</div>
  </div>
);

const SoftwareSection = () => (
  <div className="homeStyle" style={{ backgroundColor: "white" }}>
    <div className="homeStyle sHeading">
      <div className="sTop">Software</div>
      <div className="sBottom">DEVELOPMENT</div>
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

export default class Home extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <AboutSection />
        <SoftwareSection />
      </ResponsiveContainer>
    );
  }
}
