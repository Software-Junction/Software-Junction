import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sendcloud/sendcloud.module.scss";

const uspData = [
  {
    title: "Shipping Protection",
    content:
      "Sendcloud offers a feature for protecting parcels during the shipping process. This can include insurance or additional security measures to ensure that parcels arrive intact. Protecting shipments is crucial for businesses to maintain customer trust and minimize potential losses.",
  },
  {
    title: "Branded Tracking",
    content:
      "Sendcloud allows businesses to brand the tracking experience for customers awaiting their orders. This could include customized tracking pages or notifications. Creating a branded and engaging tracking experience contributes to customer excitement and loyalty.",
  },
  {
    title: "Pack & Go Efficiency",
    content:
      "Businesses can improve order processing speed by using Sendcloud's features for picking and packing orders more effectively. Efficiency in the pack and go process leads to faster order fulfillment, reducing the time it takes for customers to receive their orders.",
  },
  {
    title: "API Integration",
    content:
      "Sendcloud provides powerful APIs that businesses can seamlessly integrate into their existing systems, such as shop systems, WMS (Warehouse Management Systems), ERP (Enterprise Resource Planning), or marketplaces. This integration allows businesses to add core shipping functionalities to their operations with minimal engineering time.",
  },
  {
    title: "Extensive Integrations",
    content:
      'Sendcloud offers integration with over <span style="color:#f95738 ;"><strong>50</strong></span> popular e-commerce platforms, including Shopify, WooCommerce, Magento, and more. This broad range of integrations ensures compatibility with various systems, making it easier for businesses to adopt Sendcloud into their existing workflows.',
  },
  {
    title: "Carrier Connectivity",
    content:
      'Sendcloud enables businesses to connect to over <span style="color:#f95738 ;"><strong>100</strong></span> different carriers. This allows flexibility in choosing the most suitable carriers for shipping. Access to a diverse range of carriers enhances shipping options and can lead to cost savings.',
  },
  {
    title: "Shipping Intelligence - Tracey",
    content:
      "Tracey, Sendcloud's Shipping Intelligence feature, provides valuable insights that can aid businesses in making informed decisions and shaping their shipping strategy. This data-driven approach helps businesses optimize their shipping processes based on real-time information.",
  },
  {
    title: "Customer Success Stories",
    content:
      'Sendcloud highlights success stories, such as a <span style="color:#f95738 ;"><strong>58% </strong></span>increase in<span style=\"color:#f95738 ;\"><strong> B2C orders</strong></span> for a case study with Boots. Customer success stories provide evidence of the platform\'s effectiveness and its positive impact on businesses.',
  },
  {
    title: "Shipping Expertise",
    content:
      "Sendcloud's team is committed to supporting businesses at every step, offering expertise to help shape shipping strategies and achieve goals. This personalized support contributes to the overall success of businesses using Sendcloud.",
  },
  {
    title: "Uptime and Documentation",
    content:
      'Sendcloud boasts an uptime of <span style="color:#f95738 ;"><strong>99.99%</strong></span>, ensuring reliability and availability for users. Clean and easy-to-read documentation for APIs makes it easier for businesses to integrate and utilize Sendcloud\'s features.',
  },
  {
    title: "Certifications",
    content:
      "The platform is BSI certified, indicating compliance with <span style=\"color:#f95738 ;\"><strong>ISO27001</strong></span> and other quality management standards. Certifications provide assurance to businesses regarding the platform's commitment to security and quality.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Sendcloud</h3>
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
