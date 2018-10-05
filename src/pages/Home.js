import React, { Component } from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import SoftwareSection from "../components/SoftwareSection";
import {
  Menu,
  Button,
  Responsive,
  Visibility,
  Sidebar,
  Segment
} from "semantic-ui-react";
import scrollToComponent from "react-scroll-to-component";

const AnimateLoad = (WrappedComponent, preAnimate, posAnimate, toggleFlex) => {
  return class extends Component {
    state = { didMount: false };
    componentDidMount() {
      setTimeout(() => {
        this.setState({ didMount: true });
      }, 0);
    }
    render() {
      const { didMount } = this.state;
      return (
        <div
          className={`${toggleFlex && "homeStyle"} ${preAnimate} ${didMount &&
            posAnimate}`}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

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
    <div className={`topStyle topTitle ${mobile ? "mobile" : "desktop"}`}>
      BRANDON PALOMINO
    </div>
    <div className={`topStyle topDescription ${mobile ? "mobile" : "desktop"}`}>
      Insight, Innovation, & <br /> Technology.
    </div>
  </div>
);

const HomePageHeadingwithAnimate = AnimateLoad(
  HomePageHeading,
  "fade-in",
  "visible",
  true
);

const NavBarDeskAnimate = AnimateLoad(NavBar, "mfade-in", "visible", true);
const NavBarMobileAnimate = AnimateLoad(NavBar, "mfade-in", "visible", false);

const SegmentwithImage = ({ children, mobile }) => {
  return (
    <div className={`homeStyle sg-image-style ${!mobile && "desktop"}`}>
      {children}
    </div>
  );
};

const SegmentwithImageAnimate = AnimateLoad(
  SegmentwithImage,
  "mfade-in",
  "ifade-in",
  true
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
          <SegmentwithImageAnimate>
            <Visibility
              once={false}
              onBottomPassed={this.hideFade}
              onBottomPassedReverse={this.showFade}
            >
              <NavBarDeskAnimate
                fixed={fixed}
                fade={fade}
                aboutClicked={this.props.aboutClicked}
              />
            </Visibility>
            <HomePageHeadingwithAnimate />
          </SegmentwithImageAnimate>
        </Visibility>
        {children}
        <BottomSection />
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
            style={{ padding: 20, backgroundColor: "#212529" }}
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
              <SegmentwithImageAnimate mobile>
                <NavBarMobileAnimate mobile handleToggle={this.handleToggle} />
                <HomePageHeadingwithAnimate mobile />
              </SegmentwithImageAnimate>
            </Segment>
            {children}
            <BottomSection mobile />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

const BottomSection = ({ mobile }) => {
  return (
    <div>
      <div className="preFooter">
        <div className="socialBlock">
          <a
            href="https://www.linkedin.com/in/brandon-palomino/"
            className="iconWrapper"
          >
            <img
              className="bs-image-style"
              src={require("../res/linkedin.png")}
            />
          </a>
          <a href="https://github.com/bpalomino5" className="iconWrapper">
            <img
              className="bs-image-style"
              src={require("../res/github.png")}
            />
          </a>
        </div>
      </div>
      <footer>
        <div className={`footer-inner ${mobile ? "mobile" : "desktop"}`}>
          {mobile && (
            <div className="back-to-top-nav">
              <a href="/" className="nav-style">
                Back to Top
              </a>
            </div>
          )}
          <div className={`siteInfo ${mobile ? "mobile" : "desktop"}`}>
            <span className="site-address">
              BRANDON PALOMINO, 7287 PARKSIDE PL, RANCHO CUCAMONGA, CA
            </span>
            <span className={`site-phone ${mobile ? "mobile" : "desktop"}`}>
              909-581-2965
            </span>
          </div>
          <div className="siteBrand">
            <div className={`brand-inner ${mobile ? "mobile" : "desktop"}`}>
              <p>Powered by B.P.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
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
