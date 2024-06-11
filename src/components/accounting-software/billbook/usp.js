import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../billbook/bill.module.scss";

const uspData = [
  {
    "title": "User-Friendly Interface",
    "content": "MyBillBook offers an intuitive and easy-to-use interface for streamlined billing and finance management."
  },
  {
    "title": "GST Compliance",
    "content": "It helps users create GST-compliant invoices and manage tax documentation."
  },
  {
    "title": "Customizable Invoices",
    "content": "Users can personalize invoices to match their brand identity."
  },
  {
    "title": "Inventory Management",
    "content": "The software supports inventory tracking and control."
  },
  {
    "title": "Expense Tracking",
    "content": "MyBillBook allows for efficient expense recording and tracking."
  },
  {
    "title": "Multi-Language Support",
    "content": "It is accessible in multiple languages for a broader user base."
  },
  {
    "title": "Payment Reminders",
    "content": "Automated reminders assist in timely payment collection."
  },
  {
    "title": "Cloud-Based Accessibility",
    "content": "Users can access their data from anywhere via the cloud."
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
            <h3 className="mb-3">USP of My Bill Book</h3>
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
