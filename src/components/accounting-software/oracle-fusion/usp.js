import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../oracle-fusion/ora.module.scss";

const uspData = [
  
  {
    "title": "Comprehensive Suite",
    "content": "Oracle ERP offers an all-in-one solution for streamlining various business processes."
  },
  {
    "title": "Scalability",
    "content": "It's suitable for businesses of all sizes, adapting to their growth."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "Tailored solutions for different sectors."
  },
  {
    "title": "Cloud-Based Options",
    "content": "Flexible, cost-effective, and low maintenance."
  },
  {
    "title": "Advanced Analytics",
    "content": "Powerful data analysis and reporting tools."
  },
  {
    "title": "Security and Compliance",
    "content": "Emphasizes data security and regulatory compliance."
  },
  {
    "title": "Global Reach",
    "content": "Supports international operations with multi-currency and multi-language capabilities."
  },
  {
    "title": "Integration with Oracle Ecosystem",
    "content": "Seamlessly integrates with other Oracle products and services."
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
            <h3 className="mb-3">USP of Oracle Fusion Cloud ERP</h3>
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
