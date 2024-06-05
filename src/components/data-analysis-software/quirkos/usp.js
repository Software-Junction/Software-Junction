import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../quirkos/quir.module.scss";

const uspData = [
  {
    "title": "Platform Freedom",
    "content": "Quirkos is available across multiple platforms, including Windows, Mac, Linux, and web browsers, as well as on tablets and smartphones, offering flexibility in how and where researchers can access their data."
  },
  {
    "title": "Secure Storage",
    "content": "Quirkos Cloud provides unlimited, secure storage for project data, ensuring that researchers' work is protected and backed up automatically."
  },
  {
    "title": "Adaptability",
    "content": "The software is designed to accommodate various qualitative research approaches, allowing users to organize, code, and analyze their data according to their preferred methodology."
  },
  {
    "title": "Accessibility",
    "content": "Quirkos offers discounts for students, academics, non-profit organizations, and the public sector, as well as special pricing for users in the global majority world, making qualitative analysis software accessible to everyone."
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
            <h3 className="mb-3">USP of Quirkos</h3>
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
