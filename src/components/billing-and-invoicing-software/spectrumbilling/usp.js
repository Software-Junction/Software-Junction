import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../spectrumbilling/spectrumbilling.module.scss";

const uspData = [
  {
    title: "Strategic Partnership Approach",
    content:
      "Consider Spectrum Billing Solutions your committed partner in success, focused on supporting your financial goals through effective revenue cycle management.",
  },
  {
    title: "Comprehensive Service Offering",
    content:
      "From verification of benefits to patient collections, we offer a comprehensive suite of services to meet all your billing needs.",
  },
  {
    title: "Empowering Reporting Dashboards",
    content:
      "Our reporting dashboards transform data into actionable insights, giving you the tools to optimize and enhance your revenue cycle performance.",
  },
  {
    title: "Relentless Focus on Collections",
    content:
      "Spectrum stands out for its unwavering commitment to collecting every penny, especially with challenging out-of-network payers.",
  },
  {
    title: "CEO Commitment to Innovation",
    content:
      "Spectrum's CEO, Shaya, is dedicated to constant innovation, exceeding client expectations, and providing industry-leading services to drive business growth.",
  },
  {
    title: "Premier RCM Experts",
    content:
      "Reach out to our premier RCM experts at <span style=\"color:#f95738 ;\"><strong> 872-810-3621</strong></span> for unparalleled assistance and information, reflecting our commitment to excellence.",
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
            <h3 className="mb-3">USP of Spectrum Billing Solution</h3>
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
