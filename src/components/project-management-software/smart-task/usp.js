import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../smart-task/smart-task.module.scss";

const uspData = [
  {
    title: "Unified Platform",
    content:
      "SmartTask offers a single application for various business functions, including Sales, Customer Success, Hiring, Project Tracking, and more. This eliminates the need for multiple apps, providing a centralized hub for all work-related activities.",
  },
  {
    title: "Free Forever",
    content:
      "SmartTask is available for free, making it accessible to teams without any cost. This commitment to a free plan ensures that teams can benefit from the platform without budget constraints.",
  },
  {
    title: "Trusted by Thousands",
    content:
      'With over <span style="color:#f95738 ;"><strong>20,000</strong></span> teams worldwide relying on SmartTask, it establishes trust and credibility in its ability to meet the diverse needs of teams across different industries.',
  },
  {
    title: "Dedicated Support",
    content:
      'SmartTask emphasizes supporting user growth with dedicated support, including free training and setup. It has been voted <span style="color:#f95738 ;"><strong>#1</strong></span> in Ease of Use, ensuring a user-friendly experience.',
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
            <h3 className="mb-3">USP of SmartTask</h3>
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
