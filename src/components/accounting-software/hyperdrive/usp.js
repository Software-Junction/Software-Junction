import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "User-Friendly Interface",
    "content": "Intuitive and easy-to-use interface for seamless operations."
  },
  {
    "title": "Customization",
    "content": "Highly customizable to adapt to various business needs."
  },
  {
    "title": "Multi-Platform Compatibility",
    "content": "Works on Windows, Android, and iOS devices."
  },
  {
    "title": "Real-Time Data",
    "content": "Provides real-time insights for informed decision-making."
  },
  {
    "title": "Offline Mode",
    "content": "Ensures uninterrupted service even without an internet connection."
  },
  {
    "title": "Security",
    "content": "Robust security features for data protection."
  },
  {
    "title": "Integration",
    "content": "Seamlessly integrates with other business systems."
  },
  {
    "title": "Mobile Ordering",
    "content": "Supports mobile ordering and payments for enhanced customer experience."
  },
  {
    "title": "Inventory Management",
    "content": "Efficiently manages inventory levels to reduce wastage."
  },
  {
    "title": "Customer Loyalty",
    "content": "Helps create and manage customer loyalty programs for retention and attraction."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of HDPOS</h3>
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
