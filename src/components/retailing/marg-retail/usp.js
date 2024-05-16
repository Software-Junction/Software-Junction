import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Empowering Businesses Through IT",
    "content": "Marg Retail Software is dedicated to empowering businesses and contributing to the growth of India through the use of Information Technology. With over <span style=\"color:#FC5185 ;\"><strong>1 million</strong></span> businesses served worldwide, it stands as a reliable partner for retailers."
  },
  {
    "title": "GST Ready and Error-Free",
    "content": "Ensure hassle-free GST billing and return filing with Marg's GST-ready Retail Software. The software allows you to file GST returns, TCS, and TDS directly, ensuring <span style=\"color:#FC5185 ;\"><strong>100%</strong></span> error-free reports and compliance."
  },
  {
    "title": "Connected Banking with ICICI Integration",
    "content": "Experience online banking within Marg ERP through seamless integration with ICICI Bank. Manage various bank transactions, including NEFT and RTGS, with auto-bank reconciliation across <span style=\"color:#FC5185 ;\"><strong>140+</strong></span> banks."
  },
  {
    "title": "Online Purchase Import and eRetail Web Application",
    "content": "Save time with <span style=\"color:#FC5185 ;\"><strong>100%</strong></span> accuracy by importing bills from Excel, CSV, or PDF formats. The eRetail web application allows you to view and compare nearby distributors, place online orders, and track order status."
  },
  {
    "title": "Ease of Use and Quick Implementation",
    "content": "Marg Retail POS Software is designed for easy implementation, allowing businesses to start billing within just <span style=\"color:#FC5185 ;\"><strong>5 minutes</strong></span>. The user-friendly interface ensures quick adoption without the need for additional manpower."
  },
  {
    "title": "Integrated Accounting and Digital Payments",
    "content": "Streamline finances and accounting with integrated accounting solutions. Digitally pay distributors and vendors using secure multiple payment options like Debit/Credit Cards, Net Banking, UPI, and more."
  },
  {
    "title": "Multi-Currency and Multi-Lingual Billing",
    "content": "Accept payments in multiple modes and currencies, including Pound, Dollar, and Euro. Increase sales by designing customized invoices in local languages, fostering better connections with customers."
  },
  {
    "title": "24x7 Support and Global Presence",
    "content": "Benefit from <span style=\"color:#FC5185 ;\"><strong>24x7</strong></span> support with <span style=\"color:#FC5185 ;\"><strong>850+</strong></span> sales and support centers and <span style=\"color:#FC5185 ;\"><strong>8500+</strong></span> sales and service professionals worldwide. Marg ERP Limited has a global presence with a strong commitment to customer success."
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
            <h3 className="mb-3">USP of Marg Retail Software</h3>
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
