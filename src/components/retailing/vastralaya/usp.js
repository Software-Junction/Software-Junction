import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Integrated CRM + ERP Solution",
    "content": "Vastralaya offers a high-quality web-based CRM + ERP solution tailored for garment retailers and wholesalers globally."
  },
  {
    "title": "Integration of Various Organizational Systems",
    "content": "Integration of various organizational systems for error-free transactions and production."
  },
  {
    "title": "Variety of Modules",
    "content": "Fully-featured Cloth ERP with integrated POS software, offering multiple modules such as Master, Purchase, Sales/Billing, Stock, Broker, MIS Reports, Financial Account, and Financial Reports."
  },
  {
    "title": "Comprehensive Stock Management",
    "content": "Style, size, and color-wise stock management for better control and tracking. Graphical reports for a visual representation of stock-related data."
  },
  {
    "title": "Barcode Integration",
    "content": "Billing with barcode scanner functionality for efficient and accurate transactions. Barcode tag generation for streamlined inventory management."
  },
  {
    "title": "Multi-Location Support",
    "content": "Presence in multiple locations, with offices in Kanpur, Mumbai, Delhi, and Bengaluru, showcasing widespread accessibility and support."
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
            <h3 className="mb-3">USP of Vastralaya</h3>
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
