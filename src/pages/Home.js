import React, { Component } from "react";
import "../styles/Home.css";
import AboutSection from "../components/AboutSection";
import {
  Menu,
  Button,
  Responsive,
  Visibility,
  Transition,
  Grid
} from "semantic-ui-react";

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
  let color = !fixed ? "transparent" : "rgba(1,1,1,0.7)";
  return (
    <Menu
      borderless
      inverted
      secondary={!fixed}
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

const LanguageBox = ({ title, description }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "2.5em" }}>{title}</div>
    <div style={{ fontSize: "1.2em" }}>{description}</div>
  </div>
);

const SoftwareSection = () => (
  <div className="homeStyle">
    <div className="homeStyle sHeading">
      <div className="sTop">Software</div>
      <div className="sBottom">DEVELOPMENT</div>
    </div>
    {/* <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 50
      }}
    > */}
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <LanguageBox
            title="Java"
            description="4 years of object-oriented design of user interfaces, graphics, & games."
          />
        </Grid.Column>
        <Grid.Column>
          <LanguageBox
            title="C++"
            description="5 years of algorithm design, architecture management, & interaces."
          />
        </Grid.Column>
        <Grid.Column>
          <LanguageBox
            title="Python"
            description="4 years of algorithm & data analysis, simulations, & prototyping."
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <LanguageBox
            title="Web"
            description="2 years in UX/UI design, HTML, CSS, JS with Bootstrap."
          />
        </Grid.Column>
        <Grid.Column>
          <LanguageBox
            title="Mobile"
            description="3 years designing scalable Android & IOS apps with some full featured releases."
          />
        </Grid.Column>
        <Grid.Column>
          <LanguageBox
            title="Frameworks"
            description="1 year working with ReactJS, React Native, Google Firebase, Heroku Cloud"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    {/* </div> */}
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
      </ResponsiveContainer>
    );
  }
}
