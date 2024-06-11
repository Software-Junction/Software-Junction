import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../netsuite-crm/net.module.scss'

const uspData = [
  {
    "title": "360-Degree Customer View",
    "content": "Provides a single view of customer preferences, transactions, and interactions across all channels for complete visibility."
  },
  {
    "title": "Challenges Addressed",
    "content": "Solves issues like multiple data sources and poor visibility into lead and sales activity, aligning marketing campaigns with sales and managing commissions effectively."
  },
  {
    "title": "Faster Time to Value",
    "content": "Offers a packaged experience based on best practices for rapid business value and continuity from sales to services to support."
  },
  {
    "title": "Scalability and Flexibility",
    "content": "NetSuite's pricing model allows for easy scalability as businesses grow, with the flexibility to activate new modules and add users."
  },
  {
    "title": "Cost-Effective Cloud Solution",
    "content": "NetSuite CRM is included with the NetSuite platform, providing a cost-effective, cloud-based solution for businesses of all sizes."
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
            <h3 className="mb-3">USP of NetSuite CRM</h3>
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
