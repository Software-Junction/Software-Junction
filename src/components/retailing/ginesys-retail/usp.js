import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ginesys-retail/gen.module.scss";

const uspData = [
  {
    "title": "Cloud-Based Agility",
    "content": "Ginesys ERP is built on cloud technology, offering advantages such as no infrastructure management, lower security risks, and lower cost of ownership. Cloud computing ensures ease of access from anywhere, anytime, promoting flexibility in operations."
  },
  {
    "title": "Comprehensive Retail Value Chain Coverage",
    "content": "Ginesys is designed specifically for the retail value chain, offering solutions for various business models including d2C eCommerce, retail stores, and B2B trading. Modules such as POS systems, ecommerce Order Management, Warehouse Management, and Accounting cater to the entire retail business ecosystem."
  },
  {
    "title": "Fast and Scalable Implementation",
    "content": "Ginesys Retail ERP provides the fastest time to Return on Investment (ROI) and claims to have the highest ROI among ERPs. The system is flexible, modular, and scalable, making it adaptable to shifts in market dynamics and ensuring quick ERP rollout."
  },
  {
    "title": "Powerful Reporting Engine",
    "content": "Ginesys offers a robust reporting tool with over <span style=\"color:#f95738 ;\"><strong>200</strong></span> standard reports, allowing users to customize and analyze data according to their specific needs. The reporting engine is highlighted as a key feature, providing business owners with actionable insights for decision-making."
  },
  {
    "title": "Audit Logs for Security",
    "content": "The ERP system keeps detailed audit logs of all user activities, providing users with a comprehensive review of system usage. This feature enhances security and accountability within the system."
  },
  {
    "title": "Garment Manufacturing Expertise",
    "content": "For businesses involved in garment manufacturing, Ginesys provides cloud-based software that streamlines complex production processes. It ensures accurate calculations of finished costs and facilitates easy tracking of raw materials across different stages of production."
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
            <h3 className="mb-3">USP of Ginesys Retail ERP</h3>
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
