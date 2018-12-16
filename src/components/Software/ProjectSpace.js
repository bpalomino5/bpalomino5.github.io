import React, { Component } from "react";

const projects = [
  {
    title: "Goodmate",
    description: "Friendly Roommate Organizer",
    date: "January 2018 - November 2018",
    link: "https://github.com/bpalomino5/Goodmate",
    details: "Javascript: React Native"
  },
  {
    title: "Recette",
    description: "The Social Recipes Sharing Network",
    date: "January 2018 - March 2018",
    link: "https://github.com/bpalomino5/RealTech-Inc/tree/master/Project-R",
    details: "Javascript: Node|Express|React"
  },
  {
    title: "Vierve",
    description: "Making College Parking Easier",
    date: "September 2017 - January 2018",
    link: "http://server.vierve.com/",
    details: "Javascript: React Native, Java: Android"
  },
  {
    title: "ThermoPi",
    description: "Arduino/Home Automation Thermostat",
    date: "May 2017 - December 2018",
    link: "https://github.com/bpalomino5/ThermoPi",
    details: "C++: Arduino"
  },
  {
    title: "GreenLeaf",
    description: "Family Financial Organizer",
    date: "October 2018 - Present",
    link: "https://github.com/bpalomino5/GreenLeaf",
    details: "Javascript: React"
  },
  {
    title: "B.U.R.T.O.N.",
    description: "Cloud-Based Personal Assistant",
    date: "May 2017 - June 2018",
    link: "https://github.com/bpalomino5/B.U.R.T.O.N.",
    details: "Python: Flask, Javascript: React Native"
  },
  {
    title: "Pac-Man",
    description: "Original Pac Man Game Clone",
    date: "December 2016 - January 2017",
    link: "https://github.com/bpalomino5/Pac-Man",
    details: "Java: LWJGL"
  }
];

const ProjectSection = ({ title, description, date, link, details }) => (
  <div style={{ textAlign: "center" }}>
    <a href={link}>{title}</a>
    <div>{description}</div>
    <div>{date}</div>
    <div>{details}</div>
    <br />
  </div>
);

export default class ProjectSpace extends Component {
  render() {
    return (
      <div className="homeStyle" style={{ backgroundColor: "white" }}>
        {projects.map((p, i) => (
          <ProjectSection
            key={i}
            title={p.title}
            description={p.description}
            date={p.date}
            link={p.link}
            details={p.details}
          />
        ))}
      </div>
    );
  }
}
