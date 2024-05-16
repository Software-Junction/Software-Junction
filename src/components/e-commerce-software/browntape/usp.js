import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Effortless Online Sales",
    content:
      "Browntape offers an eCommerce software tailored for the complex needs of modern retail businesses. The platform facilitates selling on multiple marketplaces, streamlining online sales processes.",
  },
  {
    title: "Comprehensive Integrations",
    content:
      "Browntape provides seamless integration with various systems, including ERP, WMS, POS, and CRM. Compatibility with leading ERP systems such as SAP, Microsoft Dynamics, Oracle, IBM, Ginesys, and Salesforce enhances versatility.",
  },
  {
    title: "Enhanced Security Measures",
    content:
      'The software ensures <span style="color:#FC5185 ;"><strong>2028</strong></span>-bit encrypted security, prioritizing the protection of sensitive data and transactions.',
  },
  {
    title: "Inventory and Order Management",
    content:
      "Browntape offers robust inventory and order management features, including automatic order processing, safety buffer stock, scan and pack capabilities, and location-wise user access.",
  },
  {
    title: "Omnichannel Capabilities",
    content:
      "The platform supports omnichannel strategies, connecting both online and offline store networks to fulfill orders seamlessly.",
  },
  {
    title: "Tailored Enterprise Solutions",
    content:
      "Browntape caters to the needs of enterprise-level businesses by providing ERP integrations, digital marketing services, and comprehensive eCommerce account management.",
  },
  {
    title: "Customized ERP Integrations",
    content:
      "The software supports customized ERP integrations, ensuring that businesses can connect their preferred ERP systems, such as SAP, Microsoft Dynamics, Oracle, IBM, Ginesys, and Salesforce.",
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
            <h3 className="mb-3">USP of Browntape</h3>
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
