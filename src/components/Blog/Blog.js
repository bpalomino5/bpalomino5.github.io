import React, { Component } from "react";
import "../../styles/Blog.css";
import { Responsive } from "semantic-ui-react";

const BlogEntry = ({
  i,
  title,
  description,
  date,
  link,
  details,
  content,
  mobile,
  img
}) => (
  <article className={`entry ${i > 0 && "type2"} ${mobile && "mobile"}`}>
    <header className={`entry-header ${mobile && "mobile"}`}>
      <div className="meta-above-title">
        <div className="entry-morefrom">{details}</div>
      </div>
      <h1 className={`entry-title ${mobile && "mobile"}`}>
        <a href={link}>{title}</a>
      </h1>
      <div className="meta-below-title">
        <div className="entry-byline">{description}</div>
        <div className="entry-date">{date}</div>
      </div>
    </header>
    <div className="entry-content">
      <div className={`block-content ${mobile && "mobile"}`}>
        <p>{content}</p>
      </div>
      <div className={`block-image ${mobile && "mobile"}`}>
        <img src={require(`../../res/entries/${img}`)} alt="entry banner" />
      </div>
    </div>
  </article>
);

const BlogPage = ({ mobile, entries }) => (
  <div className={`homeStyle page ${mobile && "mobile"}`}>
    <div className="main-content">
      {entries.map((p, i) => (
        <BlogEntry
          key={i}
          i={i}
          title={p.title}
          description={p.description}
          date={p.date}
          link={p.link}
          details={p.details}
          content={p.content}
          mobile={mobile}
          img={p.img}
        />
      ))}
    </div>
  </div>
);

const DesktopContainer = ({ children }) => (
  <Responsive minWidth={730}>{children}</Responsive>
);

const MobileContainer = ({ children }) => (
  <Responsive maxWidth={729}>{children}</Responsive>
);

export default class Blog extends Component {
  render() {
    const { entries } = this.props;
    return (
      <div>
        <DesktopContainer>
          <BlogPage entries={entries} />
        </DesktopContainer>
        <MobileContainer>
          <BlogPage mobile entries={entries} />
        </MobileContainer>
      </div>
    );
  }
}
