/*eslint no-script-url: 0*/
import React, { Component } from "react";
import "../../styles/ProjectSpace.css";
import { Responsive } from "semantic-ui-react";
const projects = [
  {
    title: "Goodmate",
    description: "Friendly Roommate Organizer",
    date: "January 2018 - November 2018",
    link: "https://github.com/bpalomino5/Goodmate",
    details: "Javascript: React Native",
    content:
      "Goodmate is the app that was built for roommates and tenants like you and me. Offering its services to save everyone's time on handling the roommate's life. Multiple core aspects are packed into individual features as part of the app in order to allow you to handle all your daily checks at your fingertips."
  },
  {
    title: "Recette",
    description: "The Social Recipes Sharing Network",
    date: "January 2018 - March 2018",
    link: "https://github.com/bpalomino5/RealTech-Inc/tree/master/Project-R",
    details: "Javascript: Node|Express|React",
    content:
      "Recette is an online recipe service for users to upload, share, and organize their home recipes in a beautifully designed environment. Recette was my challenge firsthand at working thoroughly with a team, and developing a solid, pleasing product. Most importantly my takeaway was learning various methods in order to improve my team’s workflow."
  },
  {
    title: "Vierve",
    description: "Making College Parking Easier",
    date: "September 2017 - January 2018",
    link: "http://server.vierve.com/",
    details: "Javascript: React Native, Java: Android",
    content:
      "Vierve was joint venture between me and my partner where we saw the problem before us, which was the complications of university parking, and went straight to work in making a solution for not only our campus but a mobile app which could provide our services for any university parking map. Again having my talents focused on ux/ui and core services i took the frontend, my parter did the backend. We had a strong first release with Android market with great results. And I then sought out to make React Native v2 which would incorporate the whole IOS user base."
  },
  {
    title: "ThermoPi",
    description: "Arduino/Home Automation Thermostat",
    date: "May 2017 - December 2018",
    link: "https://github.com/bpalomino5/ThermoPi",
    details: "C++: Arduino",
    content:
      "I started this project with a Raspberry Pi (hence the name...) , and quickly learned about IoT platform development, continuous data streaming, connection latency, embedded os, limitations, gpio, and logic circuit design, and smart hardware choices. Long story short there is a bunch to learn when trying to bridge the gap between hardware and software, but as long as the passion and persistence is alive, keep on going and try not to burn down the house."
  },
  {
    title: "GreenLeaf",
    description: "Family Financial Organizer",
    date: "October 2018 - Present",
    link: "https://github.com/bpalomino5/GreenLeaf",
    details: "Javascript: React",
    content:
      "GreenLeaf is a financial organizer for the family which as web app has been designed to handle extensive use in its desktop and mobile forms. I aimed for simplicity with this one. It gets straight to the point using color codes and bill due date priorities in order to present the most important items right away! I got very creative with my React 16 this time around using plenty of HOC's (higher order components), the fancy Context API, and composition in order to construct views which are extendable and ready for the v2 development."
  },
  {
    title: "B.U.R.T.O.N.",
    description: "Cloud-Based Personal Assistant",
    date: "May 2017 - June 2018",
    link: "https://github.com/bpalomino5/B.U.R.T.O.N.",
    details: "Python: Flask, Javascript: React Native",
    content:
      "Voice automated systems is a popular trend inside and outside of development communities, becoming now a happy commodity to the public. However, there is still much to push for in terms of providing the right needs for users. Burton is designed to test and push the voice systems even further. "
  },
  {
    title: "Pac-Man",
    description: "Original Pac Man Game Clone",
    date: "December 2016 - January 2017",
    link: "https://github.com/bpalomino5/Pac-Man",
    details: "Java: LWJGL",
    content: "To be written"
  }
];

const ProjectSection = ({
  i,
  title,
  description,
  date,
  link,
  details,
  content,
  mobile
}) => (
  <article className={`entry ${i > 0 && "type2"} ${mobile && "mobile"}`}>
    <header className={`entry-header ${mobile && "mobile"}`}>
      <div className="meta-above-title">
        <div className="entry-morefrom">{details}</div>
      </div>
      <h1 className={`entry-title ${mobile && "mobile"}`}>{title}</h1>
      <div className="meta-below-title">
        <div className="entry-byline">{description}</div>
        <div className="entry-date">{date}</div>
      </div>
    </header>
    <div className="entry-content">
      <div className={`block-content ${mobile && "mobile"}`}>
        <p>{content}</p>
      </div>
    </div>
  </article>
);

const DesktopContainer = ({ children }) => (
  <Responsive minWidth={730}>{children}</Responsive>
);

const MobileContainer = ({ children }) => (
  <Responsive maxWidth={729}>{children}</Responsive>
);

const SoftwareBlog = ({ mobile }) => (
  <div className={`homeStyle page ${mobile && "mobile"}`}>
    <div className="main-content">
      {projects.map((p, i) => (
        <ProjectSection
          key={i}
          i={i}
          title={p.title}
          description={p.description}
          date={p.date}
          link={p.link}
          details={p.details}
          content={p.content}
          mobile={mobile}
        />
      ))}
    </div>
  </div>
);

export default class ProjectSpace extends Component {
  render() {
    return (
      <div>
        <DesktopContainer>
          <SoftwareBlog />
        </DesktopContainer>
        <MobileContainer>
          <SoftwareBlog mobile />
        </MobileContainer>
      </div>
    );
  }
}
