import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mmi-softwares/mmi.module.scss";

const uspData = [
  {
    "title": "Enhanced Patient Care",
    "content": "MMI Softwares' solution aims to enhance patient care by providing a platform that facilitates efficient management and control. The digitalization of records and processes contributes to improved patient care delivery, ensuring a positive impact on overall healthcare outcomes."
  },
  {
    "title": "Revenue Optimization",
    "content": "The software is designed to unlock revenue potential for healthcare institutions. By streamlining financial processes and offering revenue cycle services, it contributes to enhanced financial management, ultimately leading to increased revenue for the hospital."
  },
  {
    "title": "Flexibility for Various Settings",
    "content": "The adaptability of the software caters to a variety of healthcare settings, from clinics to hospitals. This makes it a versatile solution that can be tailored to the specific needs of different healthcare providers, ensuring widespread applicability."
  },
  {
    "title": "Digital Record Keeping and Sharing",
    "content": "The system facilitates digital record-keeping, making all processes more efficient. Moreover, the capability to share these records across different healthcare settings ensures seamless collaboration and communication among various stakeholders in the healthcare ecosystem."
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
            <h3 className="mb-3">USP of MMI Softwares</h3>
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
