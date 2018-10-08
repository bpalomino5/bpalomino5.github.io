import React, { Component } from "react";
import "../styles/PageContainer.css";
import NavBar from "../components/NavBar";
import BottomBar from "../components/BottomBar";
import {
  Menu,
  Button,
  Responsive,
  Visibility,
  Sidebar,
  Segment
} from "semantic-ui-react";

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

const HomePageHeading = ({
  mobile,
  title,
  description,
  subtitle,
  moreClicked
}) => (
  <div className="homeStyle">
    {title && (
      <div className={`topStyle topTitle ${mobile ? "mobile" : "desktop"}`}>
        {title}
      </div>
    )}
    <div
      className={`topStyle topDescription ${
        mobile ? "mobile" : "desktop"
      } ${!title && "type2"}`}
    >
      {description}
    </div>
    {subtitle && (
      <div className={`topStyle topSubtitle ${mobile ? "mobile" : "desktop"}`}>
        {subtitle}
      </div>
    )}
    {moreClicked && (
      <div className={`btn-area ${mobile ? "mobile" : "desktop"}`}>
        <Button
          basic
          inverted
          color="grey"
          size={mobile ? "large" : "huge"}
          style={{
            margin: "auto"
          }}
          onClick={moreClicked}
        >
          <div className="btn-style">LEARN MORE</div>
        </Button>
      </div>
    )}
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

const SegmentwithImage = ({ topImage, children, mobile }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${topImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className={`homeStyle ${!mobile && "sg-image-style desktop"}`}
    >
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
    const { topImage, children } = this.props;
    const { fixed, fade } = this.state;

    return (
      <Responsive minWidth={641}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <SegmentwithImageAnimate topImage={topImage}>
            <Visibility
              once={false}
              onBottomPassed={this.hideFade}
              onBottomPassedReverse={this.showFade}
            >
              <NavBarDeskAnimate fixed={fixed} fade={fade} />
            </Visibility>
            <HomePageHeadingwithAnimate
              title={this.props.title}
              description={this.props.description}
              subtitle={this.props.subtitle}
              moreClicked={this.props.moreClicked}
            />
          </SegmentwithImageAnimate>
        </Visibility>
        {children}
        <BottomBar />
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
    const { topImage, children } = this.props;
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
              <div className="mbTextStyle">SOFTWARE</div>
            </Menu.Item>
            <Menu.Item
              as="a"
              style={{ marginBottom: 10 }}
              onClick={() => {
                this.handlePusherClick();
                // setTimeout(this.props.aboutClicked.bind(this), 500);
              }}
            >
              <div className="mbTextStyle">ELECTRONICS</div>
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
              <SegmentwithImageAnimate topImage={topImage} mobile>
                <NavBarMobileAnimate mobile handleToggle={this.handleToggle} />
                <HomePageHeadingwithAnimate
                  mobile
                  title={this.props.title}
                  description={this.props.description}
                  subtitle={this.props.subtitle}
                  moreClicked={this.props.moreClicked}
                />
              </SegmentwithImageAnimate>
            </Segment>
            {children}
            <BottomBar mobile />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export default class PageContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <DesktopContainer {...this.props}>{children}</DesktopContainer>
        <MobileContainer {...this.props}>{children}</MobileContainer>
      </div>
    );
  }
}
