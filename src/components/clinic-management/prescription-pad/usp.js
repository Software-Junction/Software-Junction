import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../prescription-pad/pres.module.scss";

const uspData = [
  {
    "title": "Efficiency and Time-Saving",
    "content": "Claims to write <span style=\"color:#FC5185 ;\"><strong>100% safe,</strong></span> error-free, and evidence-based prescriptions in under <span style=\"color:#FC5185 ;\"><strong>2 minutes.</strong></span> Emphasizes that a new prescription can take less than <span style=\"color:#FC5185 ;\"><strong>2 minutes</strong></span> to complete."
  },
  {
    "title": "Value-Added Services (VAS)",
    "content": "Offers value-added services such as ready-made prescriptions/templates, educational handouts in English and Hindi, appointment and task management, cardiac risk factor calculator, BMI calculator, and child growth calculator."
  },
  {
    "title": "Cost and Time Savings",
    "content": "Claims to save cost and money by completing a new prescription in less than <span style=\"color:#FC5185 ;\"><strong>2 minutes.</strong></span> Highlights the ability to scan patient's past history and family history, providing useful tips."
  },
  {
    "title": "Pharmacopoeia - Trusted Data Sources",
    "content": "Boasts a comprehensive pharmacopoeia with prescribing information for nearly <span style=\"color:#FC5185 ;\"><strong>70,000</strong></span> brands of Indian, British, and American drugs. Includes full monographs of nearly <span style=\"color:#FC5185 ;\"><strong>3,000</strong></span> generic drugs compiled from reputable sources like the PDR of the U.S.A., Martindale book of pharmacology, and the British National Formulary."
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
            <h3 className="mb-3">USP of Prescription Pad</h3>
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
