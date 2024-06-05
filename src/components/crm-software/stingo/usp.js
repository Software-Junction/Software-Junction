import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../stingo/stin.module.scss";

const uspData = [
  {
    "title": "Comprehensive Sales Acceleration Suite",
    "content": "Stingo CRM integrates auto-capture leads, a WhatsApp chatbot, real-time collaboration, and IVR Cloud Telephony for a holistic solution."
  },
  {
    "title": "Integrated Complaint Desk",
    "content": "Automated complaint ticket system with SMS/Email notifications for prompt issue resolution and superior customer retention."
  },
  {
    "title": "Versatile Telephony Solutions",
    "content": "Toll-free, virtual numbers, missed call handling, and Voice Call Campaigns (OBD) facilitate cost-free connections and efficient call distribution."
  },
  {
    "title": "Flexibility and Customization",
    "content": "Stingo CRM is highly customizable, allowing users to personalize the interface and functionalities to suit their preferences."
  },
  {
    "title": "Cost Savings and Increased Sales",
    "content": "Proven testimonials showcase a <span style=\"color:#FC5185 ;\"><strong>25%</strong></span> reduction in operational costs and a remarkable <span style=\"color:#FC5185 ;\"><strong>20x</strong></span> increase in sales."
  },
  {
    "title": "Customized Solutions for Industries and Regions",
    "content": "Stingo caters to various industries and regions, providing tailored solutions for real estate, manufacturing, and support ticket management."
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
            <h3 className="mb-3">USP of Stingo</h3>
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
