import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Instant Customer Information",
    content:
      "Provides immediate access to customer information such as phone numbers, voicemail, and text messages.",
  },
  {
    title: "Embedded Voice",
    content:
      "Enables the addition of a call button to mobile apps or browsers, offering customers a seamless way to contact support.",
  },
  {
    title: "Unified Conversations",
    content:
      "Allows handling of calls, voicemails, and texts within the same interface used for managing emails, chat, and social messaging.",
  },
  {
    title: "Routing and Queuing Calls",
    content:
      "Utilizes interactive voice response (IVR) routing, group routing, and overflow and after-hours routing to ensure callers reach the right agent promptly. It allows customization of queue size, wait time, and offers the option for callers to request a callback.",
  },
  {
    title: "Monitoring and Reporting",
    content:
      "Offers real-time analytics to measure and enhance phone support operations. Cross-channel reporting enables comparison of performance across various communication channels. Calls can be monitored and recorded to ensure quality conversations while safeguarding customer privacy.",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Zendesk</h3>
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
