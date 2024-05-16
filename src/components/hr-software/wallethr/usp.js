import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Flexible Deployment Options",
    "content": "WalletHR offers the flexibility of deployment, allowing businesses to choose between Cloud-based solutions or On-Premises installations. This ensures that organizations can tailor their HR management system to align with their specific preferences and requirements."
  },
  {
    "title": "Client Testimonials Across Industries",
    "content": "Positive testimonials from clients in various industries, such as Steel Manufacturing, Auto Ancillary, NGO, Pharma, Retail, and Hospitality, provide real-world evidence of WalletHR's effectiveness across diverse business environments. This reflects the product's ability to meet the unique needs of different sectors."
  },
  {
    "title": "Proven Cost Savings",
    "content": "Testimonials from Auto Ancillary Manufacturing highlight that WalletHR contributes to significant cost savings, specifically mentioning a <span style=\"color:#FC5185 ;\"><strong>7% reduction</strong></span> in turnover year on year. This emphasizes the tangible financial benefits that businesses can derive from implementing WalletHR."
  },
  {
    "title": "Compliance-Focused Solutions",
    "content": "WalletHR demonstrates a commitment to compliance, particularly crucial in industries with stringent guidelines like Pharma. The software is adept at meeting Foreign Direct Investment (FDI) guidelines and other regulatory requirements related to access control and attendance."
  },
  {
    "title": "Proprietary Technology for Seamless Solutions",
    "content": "WalletHR employs proprietary technology, especially in managing attendance devices. This technology ensures a seamless integration of attendance data across different locations, addressing challenges faced by businesses in managing a geographically dispersed workforce."
  },
  {
    "title": "Efficient Payroll Processing",
    "content": "The product features a high-speed payroll engine, capable of processing payroll for a large number of employees in less than two minutes. This efficiency streamlines payroll operations, saving time and resources for HR departments."
  },
  {
    "title": "Global Presence",
    "content": "WalletHR's presence in multiple cities globally, including Chennai, Bengaluru, Coimbatore, Hyderabad, Mumbai, NCR, Kenya, Ghana, UAE, and Tanzania, highlights its ability to cater to businesses on a global scale. This global footprint enhances its appeal to multinational companies."
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
            <h3 className="mb-3">USP of WalletHR</h3>
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
