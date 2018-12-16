import React from "react";
import withAnimateLoad from "../wrappers/withAnimateLoad";
import { Button } from "semantic-ui-react";

const PageHeader = ({ mobile, title, description, subtitle, moreClicked }) => (
  <React.Fragment>
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
  </React.Fragment>
);

export default withAnimateLoad(PageHeader, "fade-in", "visible", true);
