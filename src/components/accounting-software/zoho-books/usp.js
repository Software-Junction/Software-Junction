import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../zoho-books/zoho.module.scss";

const uspData = [
  
    {
      "title": "User-Friendly Interface",
      "content": "Intuitive and user-friendly accounting software for easy navigation."
    },
    {
      "title": "Cloud-Based",
      "content": "Accessible from anywhere with an internet connection for ultimate flexibility."
    },
    {
      "title": "Integration",
      "content": "Seamlessly integrates with other Zoho products and third-party apps."
    },
    {
      "title": "Automation",
      "content": "Automates tasks like invoicing, expense tracking, and reconciliation to save time."
    },
    {
      "title": "Customization",
      "content": "Tailor the software to your business with customizable features."
    },
    {
      "title": "Financial Reports",
      "content": "Provides detailed reports for informed decision-making."
    },
    {
      "title": "Security",
      "content": "Ensures data protection and encryption for financial data."
    },
    {
      "title": "Affordability",
      "content": "Competitive pricing for budget-conscious small businesses."
    },
    {
      "title": "Multi-Currency Support",
      "content": "Supports multiple currencies for global operations."
    },
    {
      "title": "Scalability",
      "content": "Scales with your business as it grows, offering long-term solutions."
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
            <h3 className="mb-3">USP of Zoho Books</h3>
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
