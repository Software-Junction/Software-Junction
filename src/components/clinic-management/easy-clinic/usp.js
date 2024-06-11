import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../easy-clinic/easy.module.scss";

const uspData = [
  {
    "title": "Doctor-Centric Design",
    "content": "Tailored for doctors and clinics, Easy Clinic stands out as a software designed by doctors, ensuring it addresses the unique needs and workflows of medical professionals."
  },
  {
    "title": "Robust and Secure Technology",
    "content": "Built on modern technology, Easy Clinic guarantees bank-level data security, unlimited scalability, and speed. The software is not only clinically safe but also stays ahead of the curve to meet the evolving needs of dynamic clinics."
  },
  {
    "title": "Global Reach and Adoption",
    "content": "With usage in <span style=\"color:#f95738 ;\"><strong>200+</strong></span> cities worldwide and satisfied clients globally, Easy Clinic has a proven track record of efficiency and effectiveness. The software is trusted and embraced by healthcare professionals across different regions."
  },
  {
    "title": "Free 30-Day Trial with Full Support and Training",
    "content": "Easy Clinic offers a risk-free trial period, allowing users to experience the software without the need for a credit card. During this period, full support and training are provided to ensure a smooth onboarding process."
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
            <h3 className="mb-3">USP of Easy Clinic</h3>
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
