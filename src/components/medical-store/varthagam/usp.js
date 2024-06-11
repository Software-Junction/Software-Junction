import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../varthagam/var.module.scss";

const uspData = [
  {
    "title": "Comprehensive Inventory Classification",
    "content": "VarthagamSoft offers flexible and comprehensive inventory classification tailored to meet the specific needs of each department within a pharmaceutical business. This ensures efficient organization and management of diverse product categories."
  },
  {
    "title": "100% Audit Trail",
    "content": "The software provides a robust audit trail for all operations, aiding in the investigation of issues and identification of operational discrepancies. This feature enhances security measures and allows proactive steps to prevent future lapses."
  },
  {
    "title": "Flexible Billing Management",
    "content": "The billing screen is designed for speed and ease of use, facilitating faster checkouts. The system allows authorization control-based stock updates for quick billing, with the flexibility to make adjustments later."
  },
  {
    "title": "Integrated Delivery Challans",
    "content": "The software enables the issuance of delivery challans to customers, which can be conveniently combined into sales invoices. Invoices can be saved with a single keystroke at the billing point, streamlining the payment process at the cash counter."
  },
  {
    "title": "Phased Inventory Management",
    "content": "VarthagamSoft's inventory management includes a feature allowing the phased-out availability of products for purchase orders, goods receipt, sales, and sales returns before discontinuation. Stock age analysis is provided to track and manage the age of stock effectively."
  },
  {
    "title": "Tailored Solutions for Various Industries",
    "content": "The software is not limited to pharmaceuticals but extends its capabilities to diverse industries such as FMCG, supermarket management, hardware, electronics, vegetables, and fruits, offering specialized solutions for each business segment."
  },
  {
    "title": "Web Order and Report Accessibility",
    "content": "VarthagamSoft introduces web order functionality, allowing customers to place orders directly and check outstanding balances. The software also provides web reports for easy access to sales, purchase, accounts, and inventory-related reports."
  },
  {
    "title": "Multi-Server Access and Standby Server Support",
    "content": "The multi-server feature serves as a central application server for managing all branches, facilitating easy tracking of sales and purchase reports. Additionally, standby servers enhance application convenience and verify backup and recovery processes."
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
            <h3 className="mb-3">USP of VarthagamSoft</h3>
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
