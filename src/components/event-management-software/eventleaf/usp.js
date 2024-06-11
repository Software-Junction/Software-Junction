import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../eventleaf/eve.module.scss";

const uspData = [
  {
    "title": "Mobile Event App",
    "content": "Eventleaf provides a mobile event app for desktop and mobile phones, facilitating on-the-go event management, including checking in attendees, managing virtual sessions, and keeping attendees informed about schedules, sessions, speakers, and social networking."
  },
  {
    "title": "Badge Printing and Check-In",
    "content": "The platform allows for advanced badge printing or on-site badge printing using a Check-In App and a supported printer. Customizable badges with QR codes simplify venue access and conference check-ins."
  },
  {
    "title": "Audience Engagement Features",
    "content": "Eventleaf offers features such as polls, Q&As, and surveys to engage attendees and collect feedback for continuous improvement. The Q&A sessions are streamlined to avoid irrelevant questions, enhancing audience interaction."
  },
  {
    "title": "Testimonials and Customer Satisfaction",
    "content": "Positive testimonials, such as the one from Rebecca Lock at Columbia University, highlight the effectiveness of the platform, praising the team's customer service, ease of use, and overall positive experience."
  },
  {
    "title": "Versatility Across Event Types",
    "content": "Eventleaf is positioned as a versatile solution applicable to various event types, including conferences, workshops, meetings, and trade shows, showcasing its adaptability to different event management needs."
  },
  {
    "title": "No-Obligation Trial",
    "content": "The platform offers a <span style=\"color:#f95738 ;\"><strong>\"TRY FOR FREE\"</strong></span> option without requiring a credit card, allowing potential users to explore the features and benefits before committing."
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
            <h3 className="mb-3">USP of Eventleaf</h3>
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
