import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Comprehensive Hospital Management",
    "content": "DocEngage offers a single platform to run the entire hospital. Six products, <span style=\"color:#FC5185;\"><strong>30+</strong></span> apps, <span style=\"color:#FC5185;\"><strong>100+</strong></span> integrations & APIs, and connected systems provide a holistic solution."
  },
  {
    "title": "Digital Healthcare Solutions",
    "content": "Emphasizes on digital healthcare in line with the Digital India initiative. Offers a range of products covering OPD, IPD, ICU Telemedicine, Remote Patient Monitoring, CRM, Clinic Software, EHR, Homecare, and HMS."
  },
  {
    "title": "Security and Compliance",
    "content": "Ensures the highest level of security with communication encrypted through SSL, HTTPS, and geographically dispersed data centers. Adheres to ISO <span style=\"color:#FC5185;\"><strong>27001</strong></span>, ISO <span style=\"color:#FC5185;\"><strong>27017</strong></span>, ISO <span style=\"color:#FC5185;\"><strong>27018</strong></span> standards. Implements role-based access control to prevent unauthorized access to patient information. Sensitive data encryption for protection during transmission and storage. HIPAA compliance for safe and secure access to patient records."
  },
  {
    "title": "Testimonials from Trusted Clients",
    "content": "Positive testimonials from well-known healthcare providers like Apollo Homecare, Grand World Elder Care, Seva Bharathi, Chandra Skin and Laser Centre, Pushpa Khanna Memorial Center, Smriti Nursing Home, AESTHETICA360, and Skin Hair and You. Testimonials highlight the commitment, support, and effectiveness of DocEngage in various healthcare settings."
  },
  {
    "title": "Digital Transformation for Healthcare Organizations",
    "content": "Facilitates digital transformation for healthcare organizations, ensuring resourceful systems for managing data, especially during critical situations like the COVID-19 pandemic."
  },
  {
    "title": "Cost-Effective and Productivity-Boosting",
    "content": "Packages Appointment, EHR, HCRM, HMS, and Telehealth in a single product, reducing costs and increasing productivity. Utilizes AI for predictability."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of DocEngage</h3>
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
