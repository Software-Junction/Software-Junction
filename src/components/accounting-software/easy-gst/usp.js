import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../easy-gst/easy.module.scss";

const uspData = [
  {
    "title": "Automated Processes",
    "content": "Streamlining tasks with automation to save time and reduce errors."
  },
  {
    "title": "Compliance Assistance",
    "content": "Real-time guidance to ensure adherence to evolving GST regulations."
  },
  {
    "title": "Error Detection",
    "content": "Built-in checks to catch and correct mistakes in GST returns."
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
            <h3 className="mb-3">USP of EasY GST</h3>
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
