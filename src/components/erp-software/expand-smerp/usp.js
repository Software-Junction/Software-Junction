import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../expand-smerp/exp.module.scss";

const uspData = [
  {
    "title": "Manufacturing and Exports Specialist",
    "content": "Tailored specifically for manufacturing industries and export-oriented businesses, ensuring optimized operations in these sectors."
  },
  {
    "title": "Fully Customizable ERP Solution",
    "content": "Offers complete flexibility to customize every aspect of the ERP system according to the unique requirements of the business, ensuring seamless integration with existing processes and workflows."
  },
  {
    "title": "Efficiency and Cost Savings",
    "content": "Claims to reduce production costs by up to <span style=\"color:#f95738 ;\"><strong>30%</strong></span>, maximizing efficiency and profitability for businesses."
  },
  {
    "title": "Integration + Innovation + Intelligence",
    "content": "Emphasizes on integration with various third-party software, marketplaces, logistics, and payment systems, coupled with innovative features like picture-based search and integrated communication channels, enhancing overall business intelligence and efficiency."
  },
  {
    "title": "Expand Sure Shield",
    "content": "Guarantees data protection with multiple location storage, Microsoft Azure, <span style=\"color:#f95738 ;\"><strong>99.9%</strong></span> uptime, SSL encryption, and private database, ensuring the security and integrity of sensitive business information."
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
            <h3 className="mb-3">USP of Expand smERP</h3>
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
