import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../soulcrm/soul.module.scss";

const uspData = [
  {
    "title": "All-in-One Solution for Indian Businesses",
    "content": "SoulCRM offers a comprehensive CRM solution covering marketing, sales, support, inventory, purchase, accounting, reporting, and integrations."
  },
  {
    "title": "Tailored for Indian Business Needs",
    "content": "The CRM software is designed to address the specific requirements of Indian businesses, as emphasized in the blog content."
  },
  {
    "title": "Proven Track Record",
    "content": "Trusted by over <span style=\"color:#f95738 ;\"><strong>1,000</strong></span> businesses, indicating credibility and reliability in the market."
  },
  {
    "title": "Free Trial Offer",
    "content": "Businesses can experience the benefits of SoulCRM with a free trial, allowing them to set up their teams for success before committing."
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
            <h3 className="mb-3">USP of SoulCRM</h3>
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
