import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Global Recognition",
    "content": "Trusted by <span style=\"color:#FC5185 ;\"><strong>2000</strong></span> customers worldwide, positioning it as the \"World's Best GOT CRM <span style=\"color:#FC5185 ;\"><strong>2020.</strong></span>\""
  },
  {
    "title": "Synergetic Integration with Social Apps",
    "content": "Seamlessly collaborate with <span style=\"color:#FC5185 ;\"><strong>60+</strong></span> social apps, ensuring a connected digital ecosystem."
  },
  {
    "title": "Flexibility and Trial Period",
    "content": "Experience the CRM's flexibility with a <span style=\"color:#FC5185 ;\"><strong>15-day</strong></span> free trial, no credit card required, and no hidden costs."
  },
  {
    "title": "Tailored for All Business Types",
    "content": "Versatile CRM catering to enterprises and small businesses with lead and product management, sales automation, and anytime support."
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
            <h3 className="mb-3">USP of GOT CRM</h3>
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
