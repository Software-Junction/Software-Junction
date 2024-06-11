import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../eretail-cybertech/eretail-cybertech.module.scss";

const uspData = [
  {
    title: "Elegant UI Design",
    content:
      "Enjoy a visually appealing and easy-to-navigate interface for a positive user experience.",
  },
  {
    title: "Task Automation",
    content:
      "Save time and minimize errors with automated employee time tracking, inventory management, and bookkeeping.",
  },
  {
    title: "Real-Time Business Insights",
    content:
      "Stay informed with access to real-time sales data, inventory tools, and push notifications via mobile app.",
  },
  {
    title: "Free Trial Offer",
    content:
      'Start a <span style="color:#f95738 ;"><strong>14-day trial</strong></span> for instant access to our comprehensive cloud POS software for retail stores.',
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of eRetail Cybertech - pranaPOS</h3>
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
