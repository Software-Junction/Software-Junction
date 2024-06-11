import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../maestro/mae.module.scss";

const uspData = [
  {
    "title": "20+ hospitality solutions",
    "content": "Maestro PMS offers an all-in-one property management software solution designed exclusively for independent hospitality groups. The system provides <span style=\"color:#f95738 ;\"><strong>20+</strong></span> hospitality solutions, covering areas such as Front Office & CRM, Sales & Catering, Spa & Activities, Online Booking Engine, Condo Owner & Online Portal, and more."
  },
  {
    "title": "Deployment Flexibility",
    "content": "Maestro PMS provides flexibility in deployment, allowing users to choose between cloud-based solutions or on-premise hosting. The system emphasizes a painless transition, enabling properties to switch between on-premises and cloud-hosted options without the need for a new system provider or incurring additional licensing fees."
  },
  {
    "title": "Innovative Technologies for Digital Guest and Staff Experience",
    "content": "Maestro PMS supports the latest mobile, contact-free, and web-responsive technologies to enhance both the digital guest and staff experience. The platform integrates <span style=\"color:#f95738 ;\"><strong>2-way</strong></span> guest text, live chat support, and open APIs, contributing to a digitized guest experience."
  },
  {
    "title": "Extensive Integration Support",
    "content": "Maestro PMS supports more than <span style=\"color:#f95738 ;\"><strong>800</strong></span> third-party integrations through its extensive collection of open APIs. The system is designed to \"play well with others,\" allowing seamless integration with a variety of external tools and services."
  },
  {
    "title": "Legacy of Innovation and Experience",
    "content": "Maestro PMS boasts a <span style=\"color:#f95738 ;\"><strong>43-year</strong></span> legacy of developing innovative hotel management software. The system has a reputation for advanced, flexible technology and a dedication to outstanding customer service."
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
            <h3 className="mb-3">USP of Maestro PMS</h3>
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
