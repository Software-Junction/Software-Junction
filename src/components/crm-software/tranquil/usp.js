import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Tailored for Indian Sales Teams",
    "content": "Specifically designed for the unique needs of the Indian sales environment."
  },
  {
    "title": "Comprehensive Desktop and Mobile Applications",
    "content": "Manage inquiries, projects, and customer interactions seamlessly on both desktop and mobile devices."
  },
  {
    "title": "KPF-driven Productivity",
    "content": "Key Performing Factors (KPF) guide your team towards productive activities, leading to more business."
  },
  {
    "title": "Cloud-Based and Integrated",
    "content": "Cloud-based CRM with leads management, communication tools, performance analytics, marketing automation, and drip campaigns."
  },
  {
    "title": "Real Estate Focus",
    "content": "Tailored features for real estate professionals, covering lead management, site visits, and deal closures."
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
            <h3 className="mb-3">USP of Tranquil CRM</h3>
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
