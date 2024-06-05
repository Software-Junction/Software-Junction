import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../kizeo/kizeo.module.scss";

const uspData = [
  {
    title: "Mobile Data Collection Efficiency",
    content:
      "Kizeo Forms offers a mobile forms application that allows users to collect field data efficiently. The mobile app provides a flexible solution for professionals across various industries to digitalize their activities.",
  },
  {
    title: "Time and Productivity Savings",
    content:
      "Users can save time and increase efficiency by avoiding data re-entries. A reported <span style=\"color:#FC5185 ;\"><strong> 30% increase</strong></span> in workforce productivity is attributed to managing data more efficiently through Kizeo Forms.",
  },
  {
    title: "Industry-Specific Solutions",
    content:
      "Kizeo Forms enables the creation of industry-specific solutions, including <span style=\"color:#FC5185 ;\"><strong> 5S</strong></span> Audit checklists, security reports, maintenance reports, contact collection apps, return to work forms, and more.",
  },
  {
    title: "Global Presence",
    content:
      "Present in  <span style=\"color:#FC5185 ;\"><strong>52 countries</strong></span>, Kizeo Forms is utilized by professionals worldwide.",
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
            <h3 className="mb-3">USP of Kizeo Forms</h3>
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
