import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Certified Quality",
    "content": "As a certified <span style=\"color:#FC5185 ;\"><strong>ISO 9001:2008 company,</strong></span> CBO ERP Limited emphasizes quality control in its software solutions. This certification underscores the commitment to delivering high-quality products that meet international standards."
  },
  {
    "title": "Global Presence",
    "content": "With a customer base of <span style=\"color:#FC5185 ;\"><strong>1100+</strong></span> clients in Bharat (India) and overseas, CBO ERP Limited has established itself as a leading service provider worldwide. The company's global reach indicates its ability to meet the diverse needs of businesses operating in different regions."
  },
  {
    "title": "Information Security",
    "content": "Holding the<span style=\"color:#FC5185 ;\"><strong> ISO 27001:2013</strong></span> certification for information security, CBO ERP Limited prioritizes the protection of sensitive data. This ensures that the software solutions maintain a high level of security, crucial for businesses dealing with confidential information."
  },
  {
    "title": "End-to-End Business Solutions",
    "content": "CBO ERP Limited offers a range of software modules, including Sales Force Automation, Supply Chain Management, Manufacturing Management, Finance, HR Payroll, and E-commerce. This comprehensive suite of solutions caters to various business needs, providing an integrated approach to managing different aspects of a company."
  },
  {
    "title": "Pharma Distribution Expertise",
    "content": "The software addresses specific challenges faced by pharmaceutical distributors, such as monitoring product distribution, adhering to regulatory controls, and achieving full traceability through multiple levels of manufacture. This targeted approach makes CBO ERP Limited's software a valuable asset for companies in the pharmaceutical distribution sector."
  },
  {
    "title": "Client-Centric Approach",
    "content": "Serving a diverse customer base, CBO ERP Limited focuses on achieving client satisfaction. The emphasis on quick links to ERP software, products, downloads, and various modules reflects a user-friendly approach, making it easier for clients to navigate and access relevant information."
  }
  
  
  
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of CBO ERP Limited</h3>
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
