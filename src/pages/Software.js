/*eslint no-script-url: 0*/
import React, { Component } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import Blog from "../components/Blog/Blog";

const entries = [
  {
    title: "Goodmate",
    description: "Friendly Roommate Organizer",
    date: "January 2018 - November 2018",
    link: "https://github.com/bpalomino5/Goodmate",
    details: "Javascript: React Native",
    img: "goodmate.png",
    content:
      "Goodmate is the app that was built for roommates and tenants like you and me. Offering its services to save everyone's time on handling the roommate's life. Multiple core aspects are packed into individual features as part of the app in order to allow you to handle all your daily checks at your fingertips."
  },
  {
    title: "Recette",
    description: "The Social Recipes Sharing Network",
    date: "January 2018 - March 2018",
    link: "https://github.com/bpalomino5/RealTech-Inc/tree/master/Project-R",
    details: "Javascript: Node|Express|React",
    img: "recette.png",
    content:
      "Recette is an online recipe service for users to upload, share, and organize their home recipes in a beautifully designed environment. Recette was my challenge firsthand at working thoroughly with a team, and developing a solid, pleasing product. Most importantly my takeaway was learning various methods in order to improve my team’s workflow."
  },
  {
    title: "Vierve",
    description: "Making College Parking Easier",
    date: "September 2017 - January 2018",
    link: "http://server.vierve.com/",
    details: "Javascript: React Native, Java: Android",
    img: "vierve.png",
    content:
      "Vierve was joint venture between me and my partner where we saw the problem before us, which was the complications of university parking, and went straight to work in making a solution for not only our campus but a mobile app which could provide our services for any university parking map. Again having my talents focused on ux/ui and core services i took the frontend, my parter did the backend. We had a strong first release with Android market with great results. And I then sought out to make React Native v2 which would incorporate the whole IOS user base."
  },
  {
    title: "GreenLeaf",
    description: "Family Financial Organizer",
    date: "October 2018 - Present",
    link: "https://github.com/bpalomino5/GreenLeaf",
    details: "Javascript: React",
    img: "greenleaf.png",
    content:
      "GreenLeaf is a financial organizer for the family which as web app has been designed to handle extensive use in its desktop and mobile forms. I aimed for simplicity with this one. It gets straight to the point using color codes and bill due date priorities in order to present the most important items right away! I got very creative with my React 16 this time around using plenty of HOC's (higher order components), the fancy Context API, and composition in order to construct views which are extendable and ready for the v2 development."
  },
  {
    title: "Pac-Man",
    description: "Original Pac Man Game Clone",
    date: "December 2016 - January 2017",
    link: "https://github.com/bpalomino5/Pac-Man",
    details: "Java: LWJGL",
    img: "pacman.png",
    content: "To be written"
  }
];

export default class Software extends Component {
  render() {
    return (
      <PageContainer
        description={"Software"}
        subtitle="Engineering"
        topImage={require("../res/backgrounds/bg1.jpg")}
      >
        <Blog type="Software" entries={entries} />
      </PageContainer>
    );
  }
}
