import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../clock-pms/clock.module.scss";

const uspData = [
  {
    "title": "Proven Track Record",
    "content": "The software has been utilized by leading hotels, resorts, and hotel groups worldwide since <span style=\"color:#FC5185 ;\"><strong>1996,</strong></span> emphasizing its reliability and long-standing presence in the industry."
  },
  {
    "title": "Tailored Tools for Different Domains",
    "content": "Clock PMS+ offers specialized tools for three key domains - Operations, Guest Journey, and Payments. This ensures that the software is not just a one-size-fits-all solution but can be customized to meet the specific needs of each hotel."
  },
  {
    "title": "Efficient Payment Processing",
    "content": "Clock PMS+ aims to stay competitive by automating payment processing. It supports various payment methods, including credit cards, online banking, and wallet apps, with top-tier security. The goal is to make payments faster and more convenient for guests."
  },
  {
    "title": "Diverse Add-Ons for Service Expansion",
    "content": "The software goes beyond room management, offering add-ons to expand services. These include non-room offerings such as daily passes to the SPA, table bookings, parking management, and integrated solutions for events, catering to a wider range of hotel services."
  },
  {
    "title": "Excellent Connectivity and Integration",
    "content": "Clock PMS+ highlights its open API, ensuring seamless integration with various applications such as Adyen, SiteMinder, and Pace. This emphasizes the software's compatibility with third-party solutions for payment, distribution, management, marketing, and more."
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
            <h3 className="mb-3">USP of Clock PMS</h3>
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
