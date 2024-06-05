import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../mightycall/mightycall.module.scss'

const uspData = [
  {
    title:
      "Security measures such as PCI-DSS certification and AWS data protection",
    content:
      "uphold the integrity of sensitive information, instilling trust and confidence in MightyCall's platform.",
  },
  {
    title: "Compliance with FCC standards",
    content:
      "guarantees the legal authentication of calls and texts, reinforcing credibility and regulatory adherence for businesses.",
  },
  {
    title: "Boasting ≈99.99% uptime",
    content:
      "MightyCall minimizes disruptions, ensuring uninterrupted business operations and reliable communication channels.",
  },
  {
    title: "Convenient payment options",
    content:
      "such as Visa, Mastercard, and PayPal simplify subscription management, ensuring a seamless user experience.",
  },
  {
    title: "Trusted by over 10,000 businesses",
    content:
      "MightyCall's proven track record underscores its reliability and effectiveness in delivering communication solutions.",
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
            <h3 className="mb-3">USP of MightyCall</h3>
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
