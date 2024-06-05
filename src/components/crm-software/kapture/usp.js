import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../kapture/kap.module.scss'

const uspData = [
  {
    "title": "Industry-Tailored Solutions",
    "content": "Kapture CRM offers customizations for diverse industries, including Retail, serving as a CX partner for leading e-commerce giants."
  },
  {
    "title": "Hyper-personalized Customer Experience",
    "content": "Utilizes generative AI for personalized, contextual, and intelligent support, delivering unique resolutions based on customer profiles and interactions."
  },
  {
    "title": "Automation for Efficiency",
    "content": "Offers ML-backed ticket escalation, prioritized assignment of support tickets, and drag-and-drop automation creation for streamlined operations."
  },
  {
    "title": "Future-Proof Technology",
    "content": "Utilizes a multi-tenant architecture cloud platform, ensuring a future-proof solution for enterprises."
  },
  {
    "title": "Dedicated Account Manager",
    "content": "Ensures swift implementation and exceptional customer support through a dedicated account manager."
  },
  {
    "title": "Seamless API Integrations",
    "content": "Boasts <span style=\"color:#FC5185 ;\"><strong>1000+</strong></span> out-of-the-box Enterprise API integrations for centralized support operations and extraordinary agent performance."
  },
  {
    "title": "Enterprise-Grade Security and Compliance",
    "content": "Encrypts sensitive data, masks PHI/PPI information, and provides access only to necessary information, ensuring enterprise-grade security and compliance."
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
            <h3 className="mb-3">USP of Kapture CRM</h3>
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
