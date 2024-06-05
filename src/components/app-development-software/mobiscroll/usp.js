import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mobiscroll/mobiscroll.module.scss";

const uspData = [
  {
    title: "Efficiency and Ease of Use",
    content:
      "Easy to set up with quick and straightforward installation. Truly plug & play functionality for jQuery, Javascript, React, Angular, and frameworks like Ionic. Supported by the Mobiscroll CLI for easy product installation.",
  },
  {
    title: "Dependable Support",
    content:
      "Backed by a reliable support team to assist users with any challenges or customization needs. Customer testimonial highlights the exceptional support provided by the team.",
  },
  {
    title: "Responsive and Polished UI",
    content:
      "Truly responsive design, optimized for both mobile and desktop usage. Offers a polished user experience with well-designed components.",
  },
  {
    title: "Comprehensive Documentation",
    content:
      "Well-documented API and features for easy integration and customization. Deep styling capabilities for advanced customization.",
  },
  {
    title: "Wide Range of UI Components",
    content:
      "Provides a variety of UI components, including date & time pickers, booking calendars, event calendars, pickers & dropdowns, and form components.",
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
            <h3 className="mb-3">USP of Mobiscroll</h3>
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
