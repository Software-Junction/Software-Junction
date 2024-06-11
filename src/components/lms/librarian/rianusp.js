import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Change Management Capabilities",
    "content": "Librarian provides powerful change management capabilities for software modules on multiple mainframe platforms.\nThe Change Control Facility (CCF) offers interactive features for managing change control for source and other data records."
  },
  {
    "title": "Efficient Application Management",
    "content": "The change control methodology includes reporting, performance monitoring, security, archiving, and recovery features.\nLibrarian facilitates comprehensive tracking and control for source code development, contributing to efficient application management."
  },
  {
    "title": "Compliance Improvement",
    "content": "Librarian helps improve compliance by maintaining an audit trail of change activity. This allows easy tracking and reporting of changes, ensuring transparency and accountability."
  },
  {
    "title": "Streamlined Change Processes",
    "content": "The Librarian CCF streamlines change processes, providing an interactive means for managing change control for source and other data records."
  }
  
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Rianusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Librarian</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["ria-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Rianusp;
