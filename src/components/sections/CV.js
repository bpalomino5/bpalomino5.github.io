import React, { Component } from "react";
import "../../styles/cv.css";
import { Responsive } from "semantic-ui-react";

const skills = [
  {
    title: "Languages",
    items: "C++, Java, Python, Javascript, Bash, SQL, HTML, CSS"
  },
  {
    title: "Frameworks",
    items: "Android, ReactJS, NodeJS, Express, MySQL"
  },
  {
    title: "Development Tools",
    items: "Git, Android Studio, ESLint, VSCode"
  },
  {
    title: "Operating Systems",
    items: "MacOS, GNU/Linux, Raspbian"
  }
];

const leadershipEntries = [
  {
    title: "President",
    company: "Cal Poly Pomona Salsa Club",
    date: "Jan 2018 - Jun 2018",
    location: "",
    bullets: [
      "Established a lasting cultural organization in the Los Angeles salsa collegiate community.",
      "Created a welcoming and supportive learning environment for all my peers."
    ]
  },
  {
    title: "Vice President",
    company: "",
    date: "Dec 2016 - Dec 2017",
    location: "",
    bullets: [
      "Provided weekly instruction for club members in Latin dancing styles.",
      "Event organizer for member participation across campus and the Los Angeles community."
    ]
  }
];

const iProjEntries = [
  {
    title: "Home Automation NLP Assistant",
    company: "B.U.R.T.O.N.",
    location: "Pomona, CA",
    date: "Jan 2017 - May 2018",
    bullets: [
      "Cloud-based Virtual Assistant which handles user requests and connects with smart devices.",
      "Technologies: Raspberry Pi, Python, Wit.ai, AWS Polly, Heroku Cloud."
    ]
  },
  {
    title: "Arduino/Home Automation Thermostat",
    company: "ThermoPi",
    location: "Pomona, CA",
    date: "May 2017 - Present",
    bullets: [
      "Cloud-based Smart Thermostat providing online connected services to users.",
      "Efficiently managing year-round energy consumption, reduced daily energy allocations by 200%.",
      "Technologies: Particle Photon & Cloud, Blynk IoT, C++, Electronics."
    ]
  }
];

const expEntries = [
  {
    title: "Founder",
    company: "Goodmate",
    location: "Pomona, CA",
    date: "Mar 2018 - Present",
    bullets: [
      "Scaled firsthand roommate issues into a horizontal mobile app solution applicable to any housing situation.",
      "Focus on early-stage product development, cost-effectiveness, security, maintainability.",
      "Hands-on implementation of complex components: organizer, reminders, rich user interactions.",
      "Implemented enhanced UX/UI features based on Google Firebase Metrics & feedback to increase app productivity and user retention by 300%"
    ]
  },
  {
    title: "Fullstack Software Developer",
    company: "Recette",
    location: "Pomona, CA",
    date: "Jan 2018 - Mar 2018",
    bullets: [
      "Co-created and deployed a food service network with social interaction features.",
      "Supervised a team of 5 for 11 weeks, guided the product design and management.",
      "Significantly improved the team structure and efficiency by using agile development processes."
    ]
  },
  {
    title: "Frontend Software Developer",
    company: "Vierve",
    location: "Pomona, CA",
    date: "Sep 2017 - Jan 2018",
    bullets: [
      "Co-founded mobile parking solutions app for university campuses.",
      "Took ownership of developing IOS integration and redesigning UI from the ground up.",
      "Saving $1000+ in parking costs servicing 100+ users."
    ]
  }
];

const CVSection = ({ title, mobile, children }) => (
  <div>
    <HorizontalBlock mobile={mobile} />
    <div className={`item-block ${mobile && "side"}`}>
      <div className={`item-title ${mobile && "mobile"}`}>
        <h2>{title}</h2>
      </div>
      <div className="item-description">{children}</div>
    </div>
  </div>
);

const SectionEntry = ({ company, title, date, location, bullets }) => (
  <div style={{ marginBottom: 15 }}>
    <div className="item-block split">
      <div className="no-space-header">
        <h4>{company}</h4>
        <p>{title}</p>
      </div>
      <div className="no-space-header">
        <h4>{date}</h4>
        <p style={{ textAlign: "end" }}>{location}</p>
      </div>
    </div>
    <div className="list-block">
      <ul>
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  </div>
);

const LeadershipSection = ({ mobile }) => (
  <CVSection title="Leadership & Activities" mobile={mobile}>
    <div className="item-block side">
      {leadershipEntries.map((item, i) => (
        <SectionEntry
          key={i}
          title={item.title}
          company={item.company}
          date={item.date}
          location={item.location}
          bullets={item.bullets}
        />
      ))}
    </div>
  </CVSection>
);

const IndependentProjSection = ({ mobile }) => (
  <CVSection title="Independent Projects" mobile={mobile}>
    <div className="item-block side">
      {iProjEntries.map((item, i) => (
        <SectionEntry
          key={i}
          title={item.title}
          company={item.company}
          date={item.date}
          location={item.location}
          bullets={item.bullets}
        />
      ))}
    </div>
  </CVSection>
);

const ExperienceSection = ({ mobile }) => (
  <CVSection title="Experience" mobile={mobile}>
    <div className="item-block side">
      {expEntries.map((item, i) => (
        <SectionEntry
          key={i}
          title={item.title}
          company={item.company}
          date={item.date}
          location={item.location}
          bullets={item.bullets}
        />
      ))}
    </div>
  </CVSection>
);

const EducationSection = ({ mobile }) => (
  <CVSection title="Education" mobile={mobile}>
    <div className="item-block side">
      <div className="special-block">
        <div className="left-col">
          <h4>California State Polytechnic University, Pomona</h4>
          <p>Bachelor of Science in Computer Science</p>
        </div>
        <div className="right-col">
          <p>June 2018</p>
          <p>Major GPA: 3.2</p>
        </div>
      </div>
      <div className="item-block">
        <div className="left-col">
          <h4>Pasadena City College</h4>
          <p>Associate of Science in Mathematics</p>
          <p>Associate of Arts in Engineering and Technology</p>
          <p>Associate of Arts in Natural Sciences</p>
          <p>Associate of Arts in Humanities</p>
          <p>College Honors</p>
        </div>
        <div className="right-col">
          <p>May 2016</p>
          <p>GPA: 3.1 </p>
        </div>
      </div>
    </div>
  </CVSection>
);

const SkillsSection = ({ mobile }) => (
  <CVSection title="Skills" mobile={mobile}>
    <div className="item-block side">
      {skills.map((skill, i) => (
        <div className="item-block" key={i}>
          <h4 style={{ width: "40%" }}>{skill.title}:&nbsp;&nbsp;</h4>
          <p>{skill.items}</p>
        </div>
      ))}
    </div>
  </CVSection>
);

const HorizontalBlock = ({ mobile }) => (
  <div className="block-horizontal">
    <div className={`block-line ${mobile && "mobile"}`}>
      <hr />
    </div>
  </div>
);

const CVPage = ({ mobile }) => (
  <div className={`homeStyle page-cv ${mobile && "mobile"}`}>
    <div className="main-content-cv">
      <div className={`block-content ${mobile && "mobile"}`}>
        <h1>Resume</h1>
      </div>
      <EducationSection mobile={mobile} />
      <ExperienceSection mobile={mobile} />
      <IndependentProjSection mobile={mobile} />
      <SkillsSection mobile={mobile} />
      <LeadershipSection mobile={mobile} />
    </div>
  </div>
);

const DesktopContainer = ({ children }) => (
  <Responsive minWidth={730}>{children}</Responsive>
);

const MobileContainer = ({ children }) => (
  <Responsive maxWidth={729}>{children}</Responsive>
);

export default class CV extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <DesktopContainer>
          <CVPage />
        </DesktopContainer>
        <MobileContainer>
          <CVPage mobile />
        </MobileContainer>
      </div>
    );
  }
}
