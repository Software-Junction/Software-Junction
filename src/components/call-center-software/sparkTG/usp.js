import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sparkTG/sparkTG.module.scss";

const uspData = [
  {
    title: "High Reliability and Uptime",
    content:
      "With a <span style=\"color:#FC5185 ;\"><strong>99.99% uptime guarantee </strong></span> and backup solutions, SparkTG ensures uninterrupted service, crucial for businesses relying on telephony solutions.",
  },
  {
    title: "Exceptional Audio Quality",
    content:
      "SparkTG boasts high-quality audio for crystal-clear communication, enhancing customer experience during calls.",
  },
  {
    title: "Enhanced Security",
    content:
      "All calls are encrypted for security, utilizing Transport Layer Security (TLS) and Secure Real-time Transport Protocol (SRTP), ensuring the privacy and integrity of communication.",
  },
  {
    title: "Comprehensive Feature Set",
    content:
      "SparkTG offers a range of features including blended calling, custom IVR, call reporting and recording, sticky agent functionality, real-time call monitoring and statistics, admin and agent dashboards, telephony APIs, and more.",
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

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of SparkTG</h3>
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
