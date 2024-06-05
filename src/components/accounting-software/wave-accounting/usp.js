import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../wave-accounting/wave.module.scss";

const uspData = [
  {
    "title": "Free Software",
    "content": "WaveApps is completely free accounting and invoicing software, making it cost-effective for small businesses."
  },
  {
    "title": "Invoicing",
    "content": "It offers professional invoicing and payment tracking features."
  },
  {
    "title": "Basic Accounting",
    "content": "Wave provides simple accounting tools for tracking income and expenses."
  },
  {
    "title": "Payroll Services",
    "content": "Users can manage payroll and tax calculations in one place."
  },
  {
    "title": "Bank and Credit Card Connections",
    "content": "Easily import and categorize transactions by connecting to bank and credit card accounts."
  },
  {
    "title": "Receipt Scanning",
    "content": "A mobile app allows users to scan and upload receipts for expense tracking."
  },
  {
    "title": "Financial Reporting",
    "content": "Provides basic financial reports for insights into your business finances."
  },
  {
    "title": "Integration",
    "content": "Offers limited but essential integrations with platforms like PayPal and Etsy."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of  Wave Accounting</h3>
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
