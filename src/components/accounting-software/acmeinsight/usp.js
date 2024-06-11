import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../acmeinsight/acme.module.scss";

const uspData = [
  {
    "title": "Multi-Industry Support",
    "content": "Versatile software designed for wholesalers, retailers, and distributors."
  },
  {
    "title": "User-Friendly",
    "content": "Easy-to-use interface for users with varying technical skills."
  },
  {
    "title": "Multi-Company Billing",
    "content": "Supports billing across multiple companies or entities."
  },
  {
    "title": "Inventory Management",
    "content": "Efficiently tracks stock, batches, and product expiry."
  },
  {
    "title": "Sales Efficiency",
    "content": "Manages busy counters for streamlined sales operations."
  },
  {
    "title": "Customer Relationship Management",
    "content": "Helps maintain and nurture customer relations."
  },
  {
    "title": "Financial Accounting",
    "content": "Offers robust financial management capabilities."
  },
  {
    "title": "GST Reports",
    "content": "Generates GST reports for tax compliance."
  },
  {
    "title": "Customization",
    "content": "Adaptable with extensive settings and forms."
  },
  {
    "title": "Purchase Order Generation",
    "content": "Simplifies procurement with order creation."
  },
  {
    "title": "Routewise Functionality",
    "content": "Optimizes sales and distribution for distributors."
  },
  {
    "title": "Accounting for Accounts Payable and Receivables",
    "content": "Manages financial transactions with suppliers and customers effectively."
  },
  {
    "title": "Comprehensive Solution",
    "content": "All-in-one software addressing complexities of retail, wholesale, and distribution businesses."
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
            <h3 className="mb-3">USP of AcmeInsight</h3>
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
