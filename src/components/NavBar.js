import React, { Component } from "react";
import "../styles/NavBar.css";
// import { Icon } from "react-icons-kit";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Fade } from "react-bootstrap";

const DesktopContainer = ({ fixed, fade, aboutClicked }) => {
  return (
    <Fade in={fade}>
      <Menu
        borderless
        inverted
        secondary
        size="massive"
        style={{
          padding: 10,
          backgroundColor: !fixed ? "transparent" : "rgba(1,1,1,0.7)"
        }}
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

const MobileContainer = ({ handleToggle }) => {
  return (
    <Menu inverted secondary size="large" style={{ paddingTop: 10 }}>
      <Menu.Item>
        <div className="tHeaderTextStyle">PALOMINO</div>
      </Menu.Item>
      <Menu.Item position="right" onClick={handleToggle}>
        <Icon size="big" name="sidebar" />
      </Menu.Item>
    </Menu>
  );
};

export default class NavBar extends Component {
  render() {
    const { mobile, handleToggle, fixed, fade, aboutClicked } = this.props;
    return (
      <div>
        {mobile ? (
          <MobileContainer handleToggle={handleToggle} />
        ) : (
          <DesktopContainer
            fixed={fixed}
            fade={fade}
            aboutClicked={aboutClicked}
          />
        )}
      </div>
    );
  }
}
