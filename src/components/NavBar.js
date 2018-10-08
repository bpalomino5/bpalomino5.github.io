import React, { Component } from "react";
import "../styles/NavBar.css";
// import { Icon } from "react-icons-kit";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Fade } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Menu.Item as={Link} to="/software">
            <div className="tbTextStyle">SOFTWARE</div>
          </Menu.Item>
          <Menu.Item as="a">
            <div className="tbTextStyle">ELECTRONICS</div>
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
