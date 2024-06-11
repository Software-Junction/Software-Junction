import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../agvision/agvision.module.scss";

const uspData = [
  {
    title: "Efficiency",
    content:
      "Experience a significant time-saving advantage with the AgVision Scale Interface, allowing for quick processing of grain deliveries and issuance of checks in just minutes.",
  },
  {
    title: "User-Friendly",
    content:
      "AgVision software is designed to be intuitive and easy to use, ensuring a seamless experience for users at all levels of expertise.",
  },
  {
    title: "Industry Expertise",
    content:
      "Benefit from four generations of experience dedicated to producing solutions that help your agribusiness prosper.",
  },
  {
    title: "Comprehensive Solutions",
    content:
      "From accounting to inventory management, AgVision provides a comprehensive suite of tools tailored to the unique needs of agribusinesses.",
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
            <h3 className="mb-3">USP of AgVision Agribusiness Software</h3>
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
