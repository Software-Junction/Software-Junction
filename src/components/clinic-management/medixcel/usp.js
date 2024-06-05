import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../medixcel/medi.module.scss";

const uspData = [
  {
    "title": "Seamless Integration",
    "content": "Our software seamlessly integrates EMR, Practice Management, and Patient Engagement functionalities, providing a cohesive and interconnected system. This integration ensures a smooth flow of information across different aspects of healthcare management."
  },
  {
    "title": "Efficiency and Productivity",
    "content": "The software is designed to enhance overall efficiency and productivity in medical practices. With features spanning from EMR for accurate record-keeping to Practice Management for streamlined operations, healthcare providers can focus more on patient care and less on administrative tasks."
  },
  {
    "title": "Holistic Healthcare Solution",
    "content": "Offering EMR, Practice Management, and Patient Engagement in one platform creates a holistic solution for healthcare providers. This ensures that all aspects of medical practice are addressed within a single, user-friendly system."
  },
  {
    "title": "Enhanced Coordination",
    "content": "The software promotes enhanced coordination among healthcare professionals by providing a centralized platform for managing patient data, scheduling, and engagement. This leads to better collaboration and communication within the healthcare team."
  },
  {
    "title": "Customization and Scalability",
    "content": "Our software is designed to be flexible and scalable, catering to the unique needs of different medical practices. Whether a small clinic or a large healthcare facility, the software can be customized to adapt to varying requirements."
  },
  {
    "title": "Security and Compliance",
    "content": "Prioritizing the security of patient information, the software adheres to industry-standard security protocols and compliance requirements. This ensures that healthcare providers can trust the system to safeguard sensitive patient data."
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
            <h3 className="mb-3">USP of Medixcel</h3>
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
