import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../promas/promas.module.scss";

const uspData = [
  {
    title: "Experience and Reliability",
    content:
      'The company boasts over <span style="color:#f95738;"><strong>35 years</strong></span> of experience in providing property management software. Emphasis on rock-solid accounting software and management tools.',
  },
  {
    title: "Specialization",
    content:
      "Tailored solutions for residential property management and homeowner associations.",
  },
  {
    title: "Focus on Management",
    content:
      "The software is designed to allow users to focus on managing their business without requiring extensive accounting experience.",
  },
  {
    title: "Responsive Design",
    content:
      'The mention of "Powered by WordPress" indicates that the website may have a responsive design for optimal viewing on various devices.',
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
            <h3 className="mb-3">USP of PROMAS</h3>
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
