import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../eventsair/air.module.scss";

const uspData = [
  {
    "title": "Proven Track Record",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>30</strong></span> years of experience, EventsAir has successfully powered more than <span style=\"color:#f95738 ;\"><strong>350,000</strong></span> events globally, including major ones such as the London Olympics, Commonwealth Games, Rugby World Cup, and <span style=\"color:#f95738 ;\"><strong>G20</strong></span> Summit. This track record indicates reliability and capability in handling diverse events."
  },
  {
    "title": "Engaging Experiences",
    "content": "The platform offers tools for creating engaging and immersive event experiences, from attendee apps and social networking to gamification and audience participation features. This focus on engagement helps in delivering impactful events."
  },
  {
    "title": "Efficient Exhibitor and Sponsor Management",
    "content": "EventsAir streamlines the process of attracting and managing exhibitors and sponsors. It facilitates easy gathering of assets, coordination of exhibition staff, and supports features like exhibitor and attendee meetings, lead scanning, and follow-up automation."
  },
  {
    "title": "Security and Compliance",
    "content": "For government events, EventsAir emphasizes the highest standards of security, compliance, and data protection. This ensures that the platform is suitable for handling sensitive and secure government-related events."
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
            <h3 className="mb-3">USP of EventsAir</h3>
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
