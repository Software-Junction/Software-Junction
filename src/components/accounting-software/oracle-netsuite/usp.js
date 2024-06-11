import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../oracle-netsuite/net.module.scss";

const uspData = [
  {
    "title": "Cloud-Based",
    "content": "Access your business data from anywhere with an internet connection."
  },
  {
    "title": "Comprehensive Suite",
    "content": "Manage various aspects of your business in one all-in-one solution."
  },
  {
    "title": "Real-Time Data",
    "content": "Make informed decisions quickly with up-to-the-minute insights."
  },
  {
    "title": "Customization",
    "content": "Tailor the software to your specific business needs."
  },
  {
    "title": "Scalability",
    "content": "Grow your ERP system to match your changing requirements."
  },
  {
    "title": "Global Capabilities",
    "content": "Support for multiple languages, currencies, and tax regulations for international businesses."
  },
  {
    "title": "E-Commerce Integration",
    "content": "Seamlessly connect with e-commerce platforms for online sales."
  },
  {
    "title": "Financial Management",
    "content": "Robust tools for accounting, billing, and financial operations."
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
            <h3 className="mb-3">USP of Oracle NetSuite ERP</h3>
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
