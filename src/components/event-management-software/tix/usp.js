import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../tix/tix.module.scss";

const uspData = [
  {
    "title": "Risk-Free Experience",
    "content": "No start-up costs, set-up fees, software costs, or hidden charges.\nLow, transparent service fees ensure a risk-free investment for your events."
  },
  {
    "title": "Comprehensive Features",
    "content": "Fully integrated access controls, event management, and multi-channel distribution capabilities.\nRobust reporting suite for easy access to ticket sales and donation information.\nMobile ticket sales with barcode scanning for on-the-go convenience."
  },
  {
    "title": "Customizable Brand Integration",
    "content": "Private label solution for ticket purchasing seamlessly integrated into your website.\nCustomization options include logos, banners, links, fonts, and colors."
  },
  {
    "title": "Secure and Trustworthy",
    "content": "PCI Level <span style=\"color:#FC5185 ;\"><strong>1</strong></span> certified for the highest level of payment card industry security.\n<span style=\"color:#FC5185 ;\"><strong>128</strong></span>-bit SSL encryption ensures the safety of sensitive information.\nCompliance with Visa Global Registry of Service Providers and Nevada Gaming Commission standards."
  },
  {
    "title": "Multi-Industry Capabilities",
    "content": "Tailored solutions for various industries, including performing arts, universities, sports events, dance schools, casinos, film festivals, tours, non-profits, and more.\nFree set-up for a seamless integration into your specific organizational needs."
  },
  {
    "title": "Engagement and Analytics",
    "content": "CRM tools for enhancing relationships with patrons.\nEmail marketing features to keep customers engaged.\nAnalytics tools for detailed reporting and insights."
  },
  {
    "title": "Trusted by Diverse Organizations",
    "content": "Thousands of venues, promoters, producers, universities, and more rely on Tix as their complete box office and online ticketing solution."
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
            <h3 className="mb-3">USP of Tix</h3>
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
