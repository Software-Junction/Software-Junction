import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../eshopaid/eshop.module.scss";

const uspData = [
  {
    "title": "Unified POS Solution",
    "content": "eShopaid is a comprehensive web application designed for retail chains, addressing the needs of stores, warehouses, and the head office. It offers a unified solution with real-time data synchronization, ensuring a seamless and integrated experience for businesses."
  },
  {
    "title": "Deployment Flexibility",
    "content": "Offers both Online Cloud POS and Thin Offline POS deployment models. Online Cloud POS ensures <span style=\"color:#FC5185 ;\"><strong>100%</strong></span> real-time transactions and is suitable for businesses with low to medium transaction volumes. Thin Offline POS is ideal for high transaction volumes or locations with inconsistent internet connectivity, allowing local transactions with later synchronization."
  },
  {
    "title": "Scalable for Businesses of All Sizes",
    "content": "Tailored solutions for businesses of all sizes, from small startups to large corporate giants. Adaptable to various retail models, including COCO stores, COFO businesses, FOCO shops, and FOFO establishments."
  },
  {
    "title": "Data Security",
    "content": "Implements robust disaster recovery plans and advanced encryption for data at rest and in transit. Enforces stringent access controls through an Authority matrix and incorporates two-factor authentication and secure password policies. Secures communication with third-party systems through HTTPS and SFTP channels. Regular Vulnerability Assessment and Penetration Testing (VAPT) for ongoing security and defense against threats."
  },
  {
    "title": "CRM Integration for Customer Insights",
    "content": "Built-in CRM engine enables businesses to register and track every customer, including service preferences and visit details. Connects with customers via SMS, contributing to customer retention and reducing costs."
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
            <h3 className="mb-3">USP of eShopaid</h3>
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
