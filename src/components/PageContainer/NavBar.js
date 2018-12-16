import React, { Component } from "react";
import "../../styles/NavBar.css";
// import { Icon } from "react-icons-kit";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Fade } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import withAnimateLoad from "../wrappers/withAnimateLoad";

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSoftware: false,
      isElectronics: false
    };
  }

  componentDidMount() {
    // console.log(this.props);
    if (this.props.location.pathname === "/software") {
      this.setState({ isSoftware: true });
    } else if (this.props.location.pathname === "/electronics") {
      this.setState({ isElectronics: true });
    }
  }

  render() {
    const { fixed, fade } = this.props;
    const { isSoftware, isElectronics } = this.state;
    return (
      <Fade in={fade}>
        <Menu
          borderless
          inverted
          secondary
          size="massive"
          style={{
            padding: 10,
            backgroundColor: !fixed ? "transparent" : "rgba(33,37,41,0.9)"
          }}
          fixed={fixed ? "top" : null}
        >
          <Menu.Item>
            <a href="/" className="tHeaderTextStyle">
              PALOMINO
            </a>
          </Menu.Item>
          <Menu.Item position="right">
            <Menu.Item active={isSoftware} as={Link} to="/software">
              <div className="tbTextStyle">Software</div>
            </Menu.Item>
            <Menu.Item active={isElectronics} as={Link} to="/electronics">
              <div className="tbTextStyle">Electronics</div>
            </Menu.Item>
            <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
              <div className="tbTextStyle" style={{ padding: 4 }}>
                Contact
              </div>
            </Button>
          </Menu.Item>
        </Menu>
      </Fade>
    );
  }
}

const MobileContainer = ({ handleToggle }) => {
  return (
    <Menu inverted secondary size="large" style={{ paddingTop: 10 }}>
      <Menu.Item>
        <a href="/" className="tHeaderTextStyle">
          PALOMINO
        </a>
      </Menu.Item>
      <Menu.Item position="right" onClick={handleToggle}>
        <Icon size="big" name="sidebar" />
      </Menu.Item>
    </Menu>
  );
};

const DesktopContainerWithRouter = withRouter(DesktopContainer);

class NavBar extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { mobile, handleToggle, fixed, fade, aboutClicked } = this.props;
    return (
      <div>
        {mobile ? (
          <MobileContainer handleToggle={handleToggle} />
        ) : (
          <DesktopContainerWithRouter
            fixed={fixed}
            fade={fade}
            aboutClicked={aboutClicked}
          />
        )}
      </div>
    );
  }
}

const NavBarDesktop = withAnimateLoad(NavBar, "mfade-in", "visible", true);
const NavBarMobile = withAnimateLoad(NavBar, "mfade-in", "visible", false);

export { NavBarDesktop, NavBarMobile };
