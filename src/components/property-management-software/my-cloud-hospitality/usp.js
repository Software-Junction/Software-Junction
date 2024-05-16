import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Zero Upfront Fee",
    content:
      "The software offers a cloud-based hotel solution with no upfront fees, making it cost-effective for hoteliers.",
  },
  {
    title: "Comprehensive Cloud Solution",
    content:
      "mycloud is a fully customizable cloud hotel software that covers various modules such as PMS, Point of Sale (POS), Channel Manager, Banquets, Inventory, F&B Costing, Back Office, Central Reservation System, and more.",
  },
  {
    title: "Security Measures",
    content:
      "The software follows GDPR and PCI-compliance ready security standards, including in-built user management security, limited server access, real-time data backup, and encryption.",
  },
  {
    title: "Anti-Cyber Crime Measures",
    content:
      "IP address-based access, firewalls, anti-spam, and anti-virus tools are implemented to prevent cyber threats. The software undergoes vulnerability assessments against OWASP <span style=\"color:#FC5185 ;\"><strong> top 10</strong></span>.",
  },
  {
    title: "Low Learning Curve",
    content:
      "The software is designed for easy adoption, allowing hoteliers to manage guest-facing services with minimal training.",
  },
  {
    title: "Trusted Globally",
    content:
      'The software is trusted and loved by <span style="color:#FC5185 ;"><strong>2000</strong></span> hotels across <span style="color:#FC5185 ;"><strong>40+</strong></span> countries, highlighting its global acceptance and reliability.',
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of mycloud Hospitality</h3>
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
