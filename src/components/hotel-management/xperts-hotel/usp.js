import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../xperts-hotel/xpe.module.scss";

const uspData = [
  {
    "title": "Efficient Front Desk Operations",
    "content": "Streamlined front desk operations with features such as room availability checks, reservation management, check-in/check-out facilities, and support for multiple payment options contribute to an efficient and customer-friendly experience."
  },
  {
    "title": "Comprehensive Housekeeping/Hospitality Management",
    "content": "The Housekeeping/Hospitality module includes features for managing hotel and room articles, extra bed accommodations, and billing for services like laundry and beauty care."
  },
  {
    "title": "Restaurant and Room Service Management",
    "content": "The Restaurant/Room Service module facilitates billing for restaurant and bar services, with detailed reports on daily sales, tax collection, and performance metrics for resources and employees."
  },
  {
    "title": "Back Office and Inventory Control",
    "content": "The Back Office/Inventory module enables effective control over stock management, purchase entries, stock adjustments, and provides reports on stock levels, reorder points, and recipe consumption."
  },
  {
    "title": "External Device Integration",
    "content": "Xperts Hotel integrates with various external devices such as EPBX, cash drawers, laser printers, barcode scanners, credit card readers, and magnetic stripe card readers, enhancing operational efficiency."
  },
  {
    "title": "Powerful Role-Based Security",
    "content": "The software prioritizes security with powerful role-based access controls, preventing unauthorized access and ensuring the confidentiality and integrity of sensitive information."
  },
  {
    "title": "SMS Integration for Business Promotion",
    "content": "Xperts Hotel includes SMS integration, offering a powerful tool for businesses to promote their services and stay competitive in the market."
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
            <h3 className="mb-3">USP of Xperts Hotel</h3>
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
