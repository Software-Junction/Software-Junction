import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../medeil/medl.module.scss";

const uspData = [
  {
    "title": "Error Minimization and Patient Safety",
    "content": "Medeil Cloud POS aims to minimize errors in medication dispensing, ensuring accuracy and, ultimately, enhancing patient safety."
  },
  {
    "title": "Versatility in Pharmacy Types and Sizes",
    "content": "The software is positioned as a world-class solution suitable for all types and sizes of pharmacies, accommodating various products and operational needs."
  },
  {
    "title": "Integration Capabilities",
    "content": "Medeil emphasizes easy integration, providing seamless compatibility with Point of Sale (POS) systems, electronic medical records, and other operational tools. This feature contributes to the overall flexibility and functionality of the software."
  },
  {
    "title": "Customization and Predictive Search",
    "content": "The software provides customization options, including cross-sell/upsell guidelines and a powerful predictive search feature, enhancing the user experience and facilitating transactions."
  },
  {
    "title": "Global Client Satisfaction",
    "content": "Positive testimonials from a diverse range of pharmacies worldwide, including healthcare facilities in Oman, India, Tanzania, and more, serve as endorsements of Medeil's effectiveness and reliability."
  },
  {
    "title": "Longevity and Experience",
    "content": "Mention of Medeil's service operation for over five years, ongoing maintenance, and continuous updates demonstrate the software's longevity and commitment to evolving with the needs of the pharmacy industry."
  },
  {
    "title": "Global Presence and Support",
    "content": "With offices in India and the USA, Medeil positions itself as a global SaaS company, offering support to clients in multiple countries."
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
            <h3 className="mb-3">USP of Medeil Cloud POS</h3>
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
