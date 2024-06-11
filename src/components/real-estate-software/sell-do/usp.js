import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sell-do/sell-do.module.scss";

const uspData = [
  {
    "title": "Proven Industry Trust",
    "content": "Trusted by over <span style=\"color:#f95738 ;\"><strong>1000+ brands </strong></span>, including prominent names like Casagrand, Ansal Housing, Hiranandani, Amanora, Runwal, Puraniks, and more. Demonstrates a strong reputation and reliability within the real estate sector."
  },
  {
    "title": "Extensive Experience",
    "content": "<span style=\"color:#f95738 ;\"><strong>15+ years</strong></span> of experience in the real estate CRM industry, showcasing a deep understanding of the sector's dynamics and challenges."
  },
  {
    "title": "Impressive Performance Metrics",
    "content": "Managed over <span style=\"color:#f95738 ;\"><strong> 50 million </strong></span> leads, demonstrating the capability to handle a high volume of potential clients. Successfully handled <span style=\"color:#f95738 ;\"><strong> 450 million </strong></span> customer interactions, highlighting effective customer relationship management. Facilitated the sale of <span style=\"color:#f95738 ;\"><strong> USD 25 billion </strong></span> worth of real estate inventory, showcasing substantial business impact."
  },
  {
    "title": "ISO Compliance",
    "content": "<span style=\"color:#f95738 ;\"><strong>ISO 27001</span></strong> compliance ensures a commitment to information security, instilling confidence in data protection and privacy."
  },
  {
    "title": "Recognition and Awards",
    "content": "Multiple awards from prestigious entities such as Realty Plus, Tricks Machine, CIO Review, and Prop-Tech affirming the excellence and innovation of Sell.Do in the real estate CRM space."
  },
  {
    "title": "Quick Deployment and Onboarding",
    "content": "<span style=\"color:#f95738 ;\"><strong>7 days* </strong></span>to set up and deploy a fully functional system, with an extensive <span style=\"color:#f95738 ;\"><strong> 30-day </strong></span> onboarding period for all users."
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
            <h3 className="mb-3">USP of Sell.Do</h3>
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
