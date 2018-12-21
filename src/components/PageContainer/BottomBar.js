import React, { Component } from "react";
import "../../styles/BottomBar.css";
import { withRouter } from "react-router-dom";

class BottomBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: ""
    };
  }

  componentDidMount() {
    this.setState({ path: this.props.location.pathname });
  }

  render() {
    const { mobile } = this.props;
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
                alt="linkedin"
                src={require("../../res/media/linkedin.png")}
              />
            </a>
            <a href="https://github.com/bpalomino5" className="iconWrapper">
              <img
                className="bs-image-style"
                alt="git"
                src={require("../../res/media/github.png")}
              />
            </a>
          </div>
        </div>
        <footer>
          <div className={`footer-inner ${mobile ? "mobile" : "desktop"}`}>
            {mobile && (
              <div className="back-to-top-nav">
                <a href={this.state.path}>Back to Top</a>
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
  }
}

export default withRouter(BottomBar);
