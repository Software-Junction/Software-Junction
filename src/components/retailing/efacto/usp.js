import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../efacto/efacto.module.scss";

const uspData = [
  {
    "title": "Proven Track Record",
    "content": "Tested and trusted with over <span style=\"color:#f95738 ;\"><strong>1000</strong></span> users in grocery stores, <span style=\"color:#f95738 ;\"><strong>300+</strong></span> users in gift galleries, <span style=\"color:#f95738 ;\"><strong>100+</strong></span> users in cosmetic retail stores, <span style=\"color:#f95738 ;\"><strong>100+</strong></span> users in apparels & footwear, and more across different sectors."
  },
  {
    "title": "Sector-Specific Modules",
    "content": "Tailored modules for various industries including Super Markets & Grocery Stores, Personal & Beauty Care, Gifts & Greetings, Apparel & Fashion, Warehousing & Distribution, and Manufacturing Processes."
  },
  {
    "title": "Batch Tracking for Expiry",
    "content": "Point of Sale Software for cosmetics and beauty care products provides batch-wise tracking with expiry date, a crucial feature for retail industries."
  },
  {
    "title": "Supply Chain Management",
    "content": "Strong support for distribution networks, including Retail Chains, Distribution Networks, C&F Agents Networks, or Own Sales Depot Networks."
  },
  {
    "title": "Manufacturing ERP",
    "content": "Specifically designed for manufacturing processes in industries like Tooling, Metal, Apparels, Engineering, Steel Service Centers, etc."
  },
  {
    "title": "Comprehensive ERP Modules",
    "content": "Encompassing modules for Procurement & Planning, Point of Sale (POS) Billing, Order Management & Sales, Repacking & Making, CRM & Loyalty Programme, Accounting, TDS & GST, Shop Floor & Manufacturing, and Dashboard & MIS App."
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
            <h3 className="mb-3">USP of eFacto</h3>
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
