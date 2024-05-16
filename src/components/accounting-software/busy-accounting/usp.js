import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "GST Compliance",
    "content": "Busy simplifies GST management for Indian businesses."
  },
  {
    "title": "Indian Business Focus",
    "content": "Tailored for India's unique business environment and tax regulations."
  },
  {
    "title": "Inventory Management",
    "content": "Powerful inventory tracking and control capabilities."
  },
  {
    "title": "Multi-Company Support",
    "content": "Manage multiple companies within a single interface."
  },
  {
    "title": "Customization",
    "content": "Highly customizable to suit various business needs."
  },
  {
    "title": "User-Friendly Interface",
    "content": "Easy-to-use software, even for non-accountants."
  },
  {
    "title": "Strong Support and Training",
    "content": "Offers robust customer support and training resources."
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
            <h3 className="mb-3">USP of Busy Accounting</h3>
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
