import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Efficient Billing Processes",
    "content": "Streamlined and efficient billing processes, replacing manual entry and paper invoices with a digital system. Automatic calculations for higher accuracy and reduced human error. Real-time tracking of invoice status, outstanding payments, and efficient billing activity reports."
  },
  {
    "title": "Simplified Insurance Claim Processing",
    "content": "Electronic submission of claims to insurance companies or clearinghouses. Integration of coding systems for automatic assignment of billing codes. Validation of claim data against insurance company requirements, reducing errors and ensuring accuracy."
  },
  {
    "title": "Accurate and Error-Free Billing",
    "content": "Automation of calculations and cross-referencing data, reducing the risk of overbilling or underbilling. Real-time checks and validations on claim data before submission. Accurate billing contributing to financial integrity and patient satisfaction."
  },
  {
    "title": "Advanced Reporting and Analytics",
    "content": "Detailed reports on financial performance, billing activities, and revenue cycles. Data-driven decision-making through insights from reports. Customizable dashboards and key performance indicators for monitoring and analysis."
  },
  {
    "title": "Faster Payment Processing",
    "content": "Automation of billing tasks for generating invoices, calculating charges, and processing payments. Electronic payment options for faster and secure transactions. Improving overall billing process efficiency for timely payments."
  },
  {
    "title": "Customizable Branding Templates",
    "content": "Customization of invoices and statements to match the unique brand identity of healthcare institutions. Inclusion of logos, colors, and design elements for a professional and cohesive appearance. Building trust and familiarity with patients through consistent visual representation."
  },
  {
    "title": "Improved Revenue Management and Tracking",
    "content": "Better control and visibility over financial performance. Generation of detailed reports and analytics for revenue trends and financial metrics. Optimization of revenue generation strategies through data-driven decisions."
  },
  {
    "title": "Improved Cash Flow Management",
    "content": "Automation of billing processes to reduce payment delays. Quick reimbursements leading to improved liquidity. Real-time visibility of revenue streams and financial performance."
  },
  {
    "title": "Simplified Tracking of Balances",
    "content": "Clear overview of financial transactions and outstanding dues. Advanced report-generation facilities for insights into the financial health of the hospital. Simplified tracking reducing the risk of human errors and enhancing accuracy."
  },
  {
    "title": "Customizable Invoicing Templates",
    "content": "Customization features for invoicing templates to create a cohesive brand image. Inclusion of logos, colors, and design elements for professional invoices. Storage of all invoices within the application for improved accessibility."
  },
  {
    "title": "Handling Billing for Different Departments",
    "content": "Capability to handle billing for different departments within the hospital. Segregation of billing by departments such as radiology, pathology, and pharmacy."
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
            <h3 className="mb-3">USP of Vyapar Hospital Billing Software</h3>
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
