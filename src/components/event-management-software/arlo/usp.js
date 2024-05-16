import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Repeating Events Made Easy",
    "content": "Arlo is designed for running large programs of recurring events, making it an ideal solution for organizations with a need for frequent workshops, seminars, or other repetitive activities."
  },
  {
    "title": "Additional Features for Enhanced Experience",
    "content": "Arlo offers a variety of additional features such as sessions, catering and room setup management, feedback surveys, name labels, printable certificates, transfers, cancellations, refunds, and more."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "The articles in the resources section highlight Arlo's suitability for various industries, such as business and leadership training, health and safety training, and technology training."
  },
  {
    "title": "Scalability",
    "content": "The content suggests that Arlo is suitable for companies of different scales, including those offering public courses as well as private company training, consulting, and one-to-one leadership programs."
  },
  {
    "title": "Free Trial Offering",
    "content": "Arlo provides a risk-free opportunity for potential users to explore its capabilities with a free <span style=\"color:#FC5185 ;\"><strong>14-day trial</strong></span>."
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
            <h3 className="mb-3">USP of Arlo</h3>
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
