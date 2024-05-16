import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Comprehensive Digital Transformation",
    content:
      "Brainvire specializes in transformative digital solutions across various domains, including eCommerce, AI, IoT, and Cloud technology. This implies that they offer a wide range of services to cater to diverse business needs.",
  },
  {
    title: "Proven Track Record",
    content:
      'The company boasts a strong reputation, having earned the trust of over <span style="color:#FC5185 ;"><strong>2000</strong></span> clients and <span style="color:#FC5185 ;"><strong>200+</strong></span> global brands across <span style="color:#FC5185 ;"><strong>70+</strong></span> countries. The inclusion of multiple awards further reinforces their credibility and success in delivering quality solutions.',
  },
  {
    title: "Expertise in Leading Technologies",
    content:
      "Brainvire showcases expertise in leading technologies such as Magento, Shopify, Adobe Commerce, CRM for Commerce, and more. This implies that they stay current with industry trends and leverage advanced technologies to provide cutting-edge solutions.",
  },
  {
    title: "Global Presence",
    content:
      "With a global presence spanning North America, EMEA, APAC, and the Middle East, Brainvire positions itself as a reliable partner for businesses worldwide. This indicates their readiness to serve clients on a global scale.",
  },
  {
    title: "Industry Recognition and Partnerships",
    content:
      "Brainvire is associated with leading platforms like Adobe, Magento, Odoo, and others. This demonstrates their commitment to quality and excellence, as recognized by industry leaders.",
  },
  {
    title: "Diverse Service Offerings",
    content:
      "Brainvire offers a broad spectrum of services, including eCommerce development, mobile apps, open source solutions, cutting-edge solutions, AI & ML, digital transformation, and online marketing. This indicates their ability to address various business needs under one roof.",
  },
  {
    title: "Longevity and Stability",
    content:
      'With over <span style="color:#FC5185 ;"><strong>21</strong></span> years of service, Brainvire emphasizes its experience and longevity in the industry, implying stability and a deep understanding of client needs.',
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
            <h3 className="mb-3">USP of Brainvire Infotech</h3>
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
