import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../timelabs/tim.module.scss";

const uspData = [
  {
    "title": "Proven Industry Experience",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>12 years</strong></span> of domain excellence and processing more than <span style=\"color:#f95738 ;\"><strong>700,000</strong></span> employee records every month, Timelabs has established itself as a time-honored HR software trusted by leaders in various industries."
  },
  {
    "title": "Humanized System for Performance Vibes",
    "content": "Timelabs emphasizes a humanized system that connects every dot of human resource management through a rich pool of HR-tech features. This approach aims to create a positive and engaging experience for both HR professionals and employees."
  },
  {
    "title": "Quality Assurance and Value",
    "content": "Timelabs is positioned as a quality choice, emphasizing its value proposition. The software has consistently been recognized for its value by Software Suggest and Crozdesk, reinforcing its commitment to providing a high-quality solution at a competitive price."
  },
  {
    "title": "Trusted by Top Brands",
    "content": "The endorsement of Timelabs by top brands adds a layer of trust and reliability. The fact that other businesses, possibly in the same industry, swear by Timelabs' services can be a compelling reason for prospective clients to choose the software."
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
            <h3 className="mb-3">USP of Timelabs HR Software</h3>
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
