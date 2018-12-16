import React, { Component } from "react";
import "../../styles/PageContainer.css";
import { NavBarDesktop, NavBarMobile } from "./NavBar";
import BottomBar from "./BottomBar";
import PageHeader from "./PageHeader";
import PageSegment from "./PageSegment";
import {
  Menu,
  Button,
  Responsive,
  Visibility,
  Sidebar,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

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
      <Responsive minWidth={730}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <PageSegment topImage={topImage}>
            <Visibility
              once={false}
              onBottomPassed={this.hideFade}
              onBottomPassedReverse={this.showFade}
            >
              <NavBarDesktop fixed={fixed} fade={fade} />
            </Visibility>
            <PageHeader
              title={this.props.title}
              description={this.props.description}
              subtitle={this.props.subtitle}
              moreClicked={this.props.moreClicked}
            />
          </PageSegment>
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
      <Responsive maxWidth={729}>
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
            <Menu.Item as={Link} to="/software" style={{ marginBottom: 10 }}>
              <div className="mbTextStyle">Software</div>
            </Menu.Item>
            <Menu.Item as={Link} to="/electronics" style={{ marginBottom: 10 }}>
              <div className="mbTextStyle">Electronics</div>
            </Menu.Item>
            <Button
              as="a"
              inverted
              style={{ marginLeft: "0.5em", marginTop: 5 }}
            >
              <div className="mbTextStyle" style={{ padding: 4 }}>
                Contact
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
              <PageSegment topImage={topImage} mobile>
                <NavBarMobile mobile handleToggle={this.handleToggle} />
                <PageHeader
                  mobile
                  title={this.props.title}
                  description={this.props.description}
                  subtitle={this.props.subtitle}
                  moreClicked={this.props.moreClicked}
                />
              </PageSegment>
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
