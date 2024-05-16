import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Passionate Transformation of Traditional HR",
    "content": "Founded in <span style=\"color:#FC5185 ;\"><strong>2016</strong></span> by proactive and resilient entrepreneurs, OfficeKit HR is driven by a passion for transforming traditional HR practices through the adoption of technology.The focus is on addressing critical challenges faced by businesses, envisioning a collaborative approach that integrates talent, technology, and transformation."
  },
  {
    "title": "Global Presence and Reach",
    "content": "With a presence in more than<span style=\"color:#FC5185 ;\"><strong> 25 countries,</strong></span> OfficeKit HR demonstrates a global footprint, making it a recognized and trusted solution on an international scale.This global presence indicates adaptability to diverse regulatory environments and an understanding of varied business cultures."
  },
  {
    "title": "Security and Reliability",
    "content": "OfficeKit HR guarantees a fully secured environment, ensuring the confidentiality and integrity of HR data.Users can log in securely with their email accounts, providing a reliable platform for handling sensitive information."
  },
  {
    "title": "Customizable Payroll Management",
    "content": "The payroll management feature is highly customizable, allowing businesses to configure rules according to their specific payroll processes.This customization reduces workload and ensures that payroll is processed accurately, meeting the unique needs of each organization."
  },
  {
    "title": "Performance Management for High-Performance Culture",
    "content": "The software emphasizes building a high-performance work culture by incorporating effective performance management features.This includes setting and tracking employee goals, fostering a culture of continuous improvement and productivity."
  },
  {
    "title": "Client Testimonials and Reviews",
    "content": "Inclusion of client testimonials and reviews provides social proof of the positive impact of OfficeKit HR on businesses.These testimonials showcase the software's effectiveness, reliability, and the satisfaction of its users."
  },
  {
    "title": "Support for Businesses of All Sizes",
    "content": "OfficeKit HR positions itself as a versatile solution suitable for businesses of all sizes, from small enterprises to large-scale corporations.This inclusivity ensures that the software can meet the HR management needs of a wide range of organizations, making it adaptable and scalable."
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
            <h3 className="mb-3">USP of OfficeKit HR</h3>
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
