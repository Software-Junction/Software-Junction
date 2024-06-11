import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ihospitality/ihos.module.scss";

const uspData = [
  {
    "title": "Enhanced Guest Experience",
    "content": "The software aims to create a frictionless guest shopping and booking experience by overcoming the complexity of disparate technology systems. The focus on maximizing sales and increasing guest engagement reflects a commitment to delivering an enhanced overall guest experience."
  },
  {
    "title": "Personalization and Revenue Optimization",
    "content": "The company advocates for personalization in the travel and hospitality industry, driving customer loyalty and improving revenue share per customer. The insights and strategies provided in articles highlight how personalization, unbundling, and re-bundling can lead to increased revenues."
  },
  {
    "title": "Innovative Strategies for Revenue Growth",
    "content": "IBS Software provides insights and strategies for boosting revenues through innovative shopping cart strategies, experimentation, and testing. Success stories, such as helping Treasure Island and Circus Circus Las Vegas, demonstrate the practical application of these strategies in achieving substantial revenue growth."
  },
  {
    "title": "Proven Success with Marquee Customers",
    "content": "Highlighting marquee customers such as Air Canada, Disney, Expedia, and Hyatt lends credibility to IBS Software's capabilities and success in serving major players in the industry."
  },
  {
    "title": "Tailored Solutions and Customization",
    "content": "The success stories, particularly the case study about helping Treasure Island reach an untapped market, showcase IBS Software's ability to provide custom solutions tailored to specific client needs."
  },
  {
    "title": "Global Reach and Industry Recognition",
    "content": "The presence of offices globally and partnerships with major players like British Airways and Booking.com indicate a broad industry reach and recognition."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of iHospitality</h3>
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
