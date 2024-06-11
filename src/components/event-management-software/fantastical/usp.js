import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../fantastical/fan.module.scss";

const uspData = [
  {
    "title": "Cross-Platform Integration",
    "content": "Fantastical seamlessly works across Mac, iPad, iPhone, and Apple Watch, ensuring a consistent experience across all devices."
  },
  {
    "title": "Award-Winning Design",
    "content": "Fantastical has won the Mac App of the Year <span style=\"color:#f95738 ;\"><strong>2020</strong></span> and the Apple Design Award Winner in <span style=\"color:#f95738 ;\"><strong>2015</strong></span>, showcasing its excellence in design and user interface."
  },
  {
    "title": "Powerful Views",
    "content": "Various viewing options, including DayTicker, Day, Week, Month, Quarter, and Year views, providing flexibility in managing and visualizing events and tasks."
  },
  {
    "title": "Event & Task Templates",
    "content": "The feature to quickly create templates from existing events and tasks, simplifying the process of scheduling frequent events."
  },
  {
    "title": "Tasks Integration",
    "content": "Fantastical allows users to design and complete projects directly within the application, ensuring tasks are easily manageable alongside calendar events."
  },
  {
    "title": "Time Zones Support",
    "content": "Fantastical's clear and handy time zone support makes scheduling events in multiple time zones quick, easy, and helpful."
  },
  {
    "title": "Privacy-First Approach",
    "content": "Fantastical is designed with a privacy-first approach, keeping private data on the user's device and securely storing the account password using the Keychain."
  },
  {
    "title": "Widgets and Weather Integration",
    "content": "14 widgets for home screen customization, including weather forecasts integrated into all calendar views."
  },
  {
    "title": "Interesting Calendars",
    "content": "The ability to add new, up-to-date calendars for holidays, sports, TV shows, and more, making it easy to stay up-to-date with relevant events."
  },
  {
    "title": "Multi-Language Support",
    "content": "Fantastical is fully localized in English, French, German, Italian, Spanish, and Japanese, making it accessible to users globally."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Fantastical</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
