import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ixpert-erp/ixp.module.scss";

const uspData = [
  {
    "title": "Windows ERP and Cloud ERP",
    "content": "IXPert offers both Windows-based and cloud-based ERP solutions, catering to businesses' preferences and requirements. The ERP systems integrate core processes such as finance, supply chain, sales, manufacturing, and human resources."
  },
  {
    "title": "Finance and Accounting",
    "content": "Comprehensive VAT-enabled finance and accounting software for businesses in multiple regions, providing an intuitive user interface and essential financial management features."
  },
  {
    "title": "Inventory Management",
    "content": "Tools for better inventory control, offering visibility and integration with the ERP system to manage stock effectively."
  },
  {
    "title": "Auto Sales and Service",
    "content": "Specific solutions for auto sales and service management, aiding in streamlining operations, managing inventory, scheduling jobs, and billing."
  },
  {
    "title": "HR & Payroll",
    "content": "Human resource management system automating transactions, payroll, and other HR-related processes, enabling businesses to manage operations and gain insights into their workforce."
  },
  {
    "title": "Supply Chain Management",
    "content": "Solutions facilitating seamless management of supply chain operations, offering visibility into transportation, warehouse, and inventory processes to maximize efficiency."
  },
  {
    "title": "Trading & Distribution",
    "content": "Comprehensive solutions for managing all aspects of the trading and distribution process, including finances, stock, logistics, sales, and purchases, with real-time insights for quick decision-making."
  },
  {
    "title": "Supermarket and Apparel & Footwear",
    "content": "Tailored solutions for managing supermarket, hypermarket, and apparel/footwear operations, providing real-time insights, visibility, and control over business processes to increase revenue and improve efficiency."
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
            <h3 className="mb-3">USP of IXPert ERP</h3>
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
