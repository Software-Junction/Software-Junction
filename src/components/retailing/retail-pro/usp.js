import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../retail-pro/retail.module.scss";

const uspData = [
  {
    "title": "Unified Commerce Solution",
    "content": "Retail Pro offers a comprehensive solution that unifies data from various channels and devices, providing a single point of truth for inventory, operations, and customer information. This enables businesses to deliver on their brand promise effectively."
  },
  {
    "title": "End-to-End Integration",
    "content": "The platform supports end-to-end integration through Retail Pro's API, allowing seamless data integration from key retail applications. Additionally, the App Market Resources offer various integrations and plugins, including links to SAP, to streamline operations."
  },
  {
    "title": "Subscription Pricing Model",
    "content": "Retail Pro adopts a 'Pay as You Grow' subscription pricing model, starting at <span style=\"color:#FC5185 ;\"><strong>$119</strong></span> USD monthly for the initial user at each location and <span style=\"color:#FC5185 ;\"><strong>$99</strong></span> USD monthly for each additional user per location. This pricing model is designed to accommodate businesses of varying sizes."
  },
  {
    "title": "Localized for Regional Requirements",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>30 years</strong></span> of experience, Retail Pro understands the importance of regional adaptations. The platform is fully translatable, supporting local languages, tax regulations (such as VAT, GST/HST), and other regional requirements. The robust API allows for centralized flexibility to adapt to specific regional needs."
  },
  {
    "title": "Global Presence",
    "content": "Retail Pro has a global presence, serving customers in <span style=\"color:#FC5185 ;\"><strong>130+</strong></span> countries, with over <span style=\"color:#FC5185 ;\"><strong>9,000</strong></span> customers and <span style=\"color:#FC5185 ;\"><strong>54,000</strong></span> stores relying on its software. The platform supports <span style=\"color:#FC5185 ;\"><strong>159,000</strong></span> points of sale worldwide."
  },
  {
    "title": "Certified Business Partners",
    "content": "Retail Pro encourages potential users to engage with certified Retail Pro Business Partners for consultations. This ensures that the Retail Pro POS system is a good fit for the specific retail business, highlighting a commitment to personalized service."
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
            <h3 className="mb-3">USP of Retail Pro</h3>
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
