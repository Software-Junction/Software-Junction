import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../qualis-lims/qua.module.scss";

const uspData = [
  {
    "title": "Versatility Across Industries",
    "content": "Qualis LIMS is designed to fit laboratories across various industry verticals, including Pharmaceuticals, Lifesciences, Cell and Gene Therapy, Biopharmaceutical, Healthcare, Diagnostics, Oil & Gas, Chemicals, Agricultural, Clinical Research, and more. It offers specialized features for quality control and research centers with a focus on meeting the needs of regulated industries."
  },
  {
    "title": "Comprehensive Out-of-Box Functionality",
    "content": "The software comes with integrated modules to manage all laboratory processes. It requires minimal to no customization, making it easy to deploy."
  },
  {
    "title": "Seamless Integration and Reduced Complexity",
    "content": "Qualis LIMS seamlessly integrates with external systems such as ERP, ELN, and legacy Laboratory Management Systems, reducing complexity and ensuring better consistency."
  },
  {
    "title": "GLP Compliance",
    "content": "Qualis LIMS supports Good Laboratory Practices (GLP) compliance, including procedures, instrument calibration, maintenance, validation, training, and certification."
  },
  {
    "title": "Data Integrity and Compliance",
    "content": "Built from the ground up to meet data integrity, GxP, ISO<span style=\"color:#FC5185;\"><strong>17025</strong></span>, <span style=\"color:#FC5185;\"><strong>21</strong></span> CFR Part <span style=\"color:#FC5185;\"><strong>11</strong></span>, and EudraLex Annex <span style=\"color:#FC5185;\"><strong>11</strong></span> compliance. Provides full traceability with electronic records protection and electronic signature support."
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
            <h3 className="mb-3">USP of Qualis LIMS</h3>
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
