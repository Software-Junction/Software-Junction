import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../deskera/des.module.scss";

const uspData = [
  {
    "title": "All-in-One Solution",
    "content": "Integrated platform for accounting and business management."
  },
  {
    "title": "Cloud-Based Accessibility",
    "content": "Access from anywhere with an internet connection."
  },
  {
    "title": "User-Friendly Interface",
    "content": "Intuitive design for users of all expertise levels."
  },
  {
    "title": "Automation and Efficiency",
    "content": "Reduces manual tasks and minimizes errors."
  },
  {
    "title": "Multi-Currency and Multi-Lingual Support",
    "content": "Accommodates international businesses."
  },
  {
    "title": "Real-time Financial Insights",
    "content": "Provides up-to-date financial data for informed decisions."
  },
  {
    "title": "Cost-Effective",
    "content": "Affordable for small and medium-sized businesses."
  },
  {
    "title": "Integration Capabilities",
    "content": "Flexible integration with other business tools."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Deskera</h3>
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
