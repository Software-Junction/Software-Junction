import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "User-Friendly Interface",
    "content": "Intuitive and easy-to-use accounting software."
  },
  {
    "title": "Comprehensive Accounting",
    "content": "Covers a wide range of accounting functions."
  },
  {
    "title": "GST Compliance",
    "content": "Designed to meet Goods and Services Tax (GST) regulations."
  },
  {
    "title": "Inventory Management",
    "content": "Robust features for effective stock management."
  },
  {
    "title": "Financial Reporting",
    "content": "Provides essential financial reports."
  },
  {
    "title": "Multi-Currency Support",
    "content": "Handles transactions in multiple currencies."
  },
  {
    "title": "Data Security",
    "content": "Focuses on safeguarding your financial data."
  },
  {
    "title": "Customization",
    "content": "Can be tailored to suit specific business needs."
  },
  {
    "title": "Regular Updates",
    "content": "Keeps software current with changing regulations."
  },
  {
    "title": "Affordability",
    "content": "Cost-effective solution for small and medium-sized businesses."
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
            <h3 className="mb-3">USP of Saral Account</h3>
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
