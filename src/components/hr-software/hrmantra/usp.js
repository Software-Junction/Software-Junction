import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../hrmantra/man.module.scss";

const uspData = [
  {
    "title": "Unmatched ROI",
    "content": "HRMantra promises an exceptional <span style=\"color:#FC5185 ;\"><strong>10 times</strong></span> Return on Investment (ROI) by costing just the <span style=\"color:#FC5185 ;\"><strong>3-minute</strong></span> average salary of all employees. This ensures significant cost-effectiveness for businesses."
  },
  {
    "title": "Time Efficiency",
    "content": "The software saves an impressive <span style=\"color:#FC5185 ;\"><strong>30 minutes</strong></span> per employee per day, enhancing overall productivity. This time-saving feature is crucial for streamlining HR processes and boosting employee efficiency."
  },
  {
    "title": "AI-Driven Innovation",
    "content": "HRMantra stands out as the world's most advanced AI-driven HR & Payroll software. The inclusion of an AI-driven voicebot with ready-made APIs sets it apart in instantly connecting with various third-party systems."
  },
  {
    "title": "Comprehensive Policy Configurability",
    "content": "Offering millions of configurable policies, HRMantra provides the most comprehensive features worldwide in any Human Capital Management (HCM) software. This allows organizations to tailor their policies according to their unique requirements."
  },
  {
    "title": "Global Accessibility",
    "content": "The software is multi-lingual, multi-currency, and multi-timezone, ensuring global usability. Accessible from any smartphone with an easy-to-use interface, it saves <span style=\"color:#FC5185 ;\"><strong>30 minutes</strong></span> per employee daily, contributing to a <span style=\"color:#FC5185 ;\"><strong>6%</strong></span> improvement in productivity."
  },
  {
    "title": "Proven Track Record",
    "content": "Celebrating <span style=\"color:#FC5185 ;\"><strong>23 years</strong></span> of HRMS excellence, HRMantra showcases its extensive experience and expertise with over <span style=\"color:#FC5185 ;\"><strong>500 clients, 10,000+</strong></span> person years of expertise, and <span style=\"color:#FC5185 ;\"><strong>5,00,000+ users.</strong></span>"
  },
  {
    "title": "Clientele Trust",
    "content": "The software has gained the trust of prestigious clients such as Google Sheets, Ferrero India, Schneider, BHEL, Podar Education Network, LIC Housing Finance, POSCO Pune, Shinhan Bank, Iksula, and Kurl-On, reflecting its reliability and suitability for diverse industries."
  },
  {
    "title": "Award-Winning Recognition",
    "content": "HRMantra has received prestigious awards, including the Quality Choice Award, High Market Presence, Best Support, Best HR Vendor, Customers Choice, Great UX, Best HRMS Vendor, HR Excellence, and Innovation Awards. These accolades affirm its commitment to quality and innovation."
  },
  {
    "title": "Certified Compliances",
    "content": "HRMantra complies with essential certifications such as SOC II, GDPR, and <span style=\"color:#FC5185 ;\"><strong>ISO 27001,</strong></span> ensuring the highest standards of data security and privacy."
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
            <h3 className="mb-3">USP of HRMantra</h3>
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
