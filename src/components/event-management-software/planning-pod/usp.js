import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../planning-pod/plan.module.scss";

const uspData = [
  {
    "title": "Integrated Excellence",
    "content": "Bring together over <span style=\"color:#f95738 ;\"><strong>20</strong></span> specialized event tools seamlessly integrated into one platform. No more scattered data, spreadsheets, or stand-alone apps. With Planning Pod, manage your entire event lifecycle from a single, convenient location."
  },
  {
    "title": "Effortless Collaboration",
    "content": "Our platform facilitates real-time communication and collaboration. Centralize your event-related communications, enhance client interactions, and coordinate effortlessly with staff, contractors, and vendors. Our integrated CRM and email tools make collaboration seamless."
  },
  {
    "title": "Drama-Free Event Tracking",
    "content": "Minimize oversights and gain key insights with our event management software. Track every detail, avoid missed deadlines, and keep your team organized. Get a real-time, big-picture view of your events and business for enhanced efficiency."
  },
  {
    "title": "Extensive Integration Capabilities",
    "content": "Seamlessly integrate with hundreds of platforms, including Google, Quickbooks, Salesforce, MailChimp, Slack, and EventBrite. Share data across apps via Zapier, ensuring your workflow remains interconnected and efficient."
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
            <h3 className="mb-3">USP of Planning Pod</h3>
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
