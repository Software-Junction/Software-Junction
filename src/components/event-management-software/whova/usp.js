import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../whova/who.module.scss";

const uspData = [
  {
    "title": "Award-Winning Event App",
    "content": "Whova's event app has received recognition, including the ETA Best Event App Award and being part of the Global Top <span style=\"color:#FC5185 ;\"><strong>100</strong></span> Software Companies. This showcases the software's commitment to excellence and innovation in the event industry."
  },
  {
    "title": "Enhanced Attendee Experience",
    "content": "The event app aims to make attendees <span style=\"color:#FC5185 ;\"><strong>10</strong></span> times happier by providing a seamless and engaging experience. Features like personalized agendas, live polls, messaging, and interactive elements contribute to a positive and memorable experience for event participants."
  },
  {
    "title": "Sponsor and Exhibitor Delight",
    "content": "Whova recognizes the importance of sponsors and exhibitors in events. The software provides various opportunities for showcasing sponsors and exhibitors, including lead generation tools like business card scanning, QR code scanning, and promotional opportunities, ensuring a high return on investment for sponsors."
  },
  {
    "title": "Media Recognition",
    "content": "Whova has garnered positive attention in local and international media outlets, including San Diego Business Journal, San Diego Union Tribune, Inc, and Forbes. This media coverage attests to the software's impact and relevance in the event planning and management industry."
  },
  {
    "title": "Modern and Trendy Appearance",
    "content": "Whova strives to make events look modern and trendy, impressing attendees, sponsors, and management teams with cutting-edge technology."
  },
  {
    "title": "Proven Track Record",
    "content": "The software boasts a track record of successfully revolutionizing event engagement, with mentions of facilitating <span style=\"color:#FC5185 ;\"><strong>3,000</strong></span> events in one year."
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
            <h3 className="mb-3">USP of Whova</h3>
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
