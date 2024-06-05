import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../eventorg/org.module.scss";

const uspData = [
  {
    "title": "Multi-Event Capability",
    "content": "EventOrg stands out by allowing organizations to host multiple events within a single app. The ability to customize each event's branding, background, and themes provides a unique and tailored experience, fostering brand consistency and recognition."
  },
  {
    "title": "Flexible Module System",
    "content": "With an intuitive module system, EventOrg caters to diverse event needs. Event planners can easily select and integrate features that suit their specific requirements, ensuring a flexible and scalable solution for events of various sizes and types."
  },
  {
    "title": "Live Event Streaming Integration",
    "content": "EventOrg goes beyond traditional event apps by seamlessly integrating with popular live streaming platforms like Zoom, Google Meet, Youtube, and Facebook. This enhances the event experience, allowing participants to join sessions from anywhere globally."
  },
  {
    "title": "Attendee Engagement Features",
    "content": "EventOrg focuses on delighting attendees with features such as live Q&A sessions, chat functionality, social walls, and interactive polls. These elements enhance participant interaction, creating a dynamic and engaging event atmosphere."
  },
  {
    "title": "Global Presence and Support",
    "content": "EventOrg establishes its global presence with offices in Kochi, India, and Cleveland, United States. This not only demonstrates a commitment to serving a diverse clientele but also ensures responsive customer support across different time zones."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of EventOrg</h3>
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
