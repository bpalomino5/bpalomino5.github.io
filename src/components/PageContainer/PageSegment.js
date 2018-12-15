import React from "react";
import withAnimateLoad from "../wrappers/withAnimateLoad";

const PageSegment = ({ topImage, children, mobile }) => {
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

export default withAnimateLoad(PageSegment, "mfade-in", "ifade-in", true);
