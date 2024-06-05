import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../hospilogix/hos.module.scss";

const uspData = [
  {
    "title": "Wide Adoption and Credibility",
    "content": "Implemented at more than <span style=\"color:#FC5185 ;\"><strong>100</strong></span> hospitals across India, including prestigious institutions like Medanta, Metro Group of Hospitals, Primus Group of Hospitals, the Indian Army, and the Indian Air Force. Presence in NABH and NABL accredited hospitals and labs, indicating compliance with quality standards."
  },
  {
    "title": "Speedy Implementation and Support",
    "content": "Acknowledges the critical nature of time in hospitals, boasting quick implementation with some units going live in as little as <span style=\"color:#FC5185 ;\"><strong>3</strong></span> days. Provides support for critical issues seven days a week."
  },
  {
    "title": "Technological Advancements",
    "content": "Utilizes open source technology standards to keep the Total Cost of Ownership (TCO) low during deployment. HL7 and DICOM compliant, ensuring seamless integration with medical equipment and third-party applications. Fully functional on thin clients, minimizing the cost of hardware deployment."
  },
  {
    "title": "Interoperability and Integration",
    "content": "Seamlessly integrates with all <span style=\"color:#FC5185 ;\"><strong>HL7/R232</strong></span> compliant medical equipment and third-party applications. Offers integration possibilities with ERP systems like SAP and Oracle."
  },
  {
    "title": "Quality and Compliance Focus",
    "content": "NABH and NABL compliant, emphasizing adherence to quality standards in healthcare."
  },
  {
    "title": "Diverse Industry Presence",
    "content": "Used by hospitals of varying sizes, ranging from <span style=\"color:#FC5185 ;\"><strong>30</strong></span>-bed units to <span style=\"color:#FC5185 ;\"><strong>800</strong></span>-bed units, showcasing scalability and adaptability."
  },
  {
    "title": "Versatile Specialized Modules",
    "content": "Provides specialty modules catering to specific healthcare needs such as IVF & Infertility, EMR (Electronic Medical Records), CSSD, Oncology, etc."
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
            <h3 className="mb-3">USP of Hospilogix</h3>
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
