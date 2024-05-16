import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Seamless Integrations",
    "content": "AppConnect enables seamless integration across AI/Machine Learning, DevOps/IT, Marketing, Sales, and more."
  },
  {
    "title": "Integrated Marketing Automation",
    "content": "Insightly Marketing offers intuitive tools, A/B testing, and enterprise-grade segmentation for personalized customer journeys."
  },
  {
    "title": "Fast Time to ROI",
    "content": "Studies show significantly faster go-live times and a low total cost of ownership, ensuring a quick return on investment."
  },
  {
    "title": "Wide Range of Integrations",
    "content": "AppConnect seamlessly integrates with applications across finance, HR, sales, marketing, support, devOps/IT, and e-commerce."
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
            <h3 className="mb-3">USP of Insightly</h3>
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
