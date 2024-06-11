import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../batchmaster/batch.module.scss";

const uspData = [
  {
    "title": "Automation and Efficiency",
    "content": "The software automates HR processes, reducing reliance on outdated methods like spreadsheets and paper files. This automation enhances efficiency by streamlining workflows and reducing the likelihood of errors associated with manual data entry. By automating tasks such as payroll processing and attendance tracking, organizations can save time and resources, allowing HR teams to focus on more strategic initiatives."
  },
  {
    "title": "Data-Based Decision Making",
    "content": "BatchMaster HERD includes analytics features that allow organizations to analyze HR data for meaningful insights. These insights can be used for informed decision-making in areas such as productivity improvement, goal setting, and workforce management. The emphasis on data-driven decisions contributes to a more strategic and proactive approach to HR management."
  },
  {
    "title": "Integration Options",
    "content": "BatchMaster HERD offers integration options with modern technologies such as biometric systems, QR codes, and bar codes. This integration reduces the risk of proxy attendance and tailgating. Integrating with these technologies enhances security and accuracy in processes like attendance tracking."
  },
  {
    "title": "Industry-Specific Expertise",
    "content": "BatchMaster Software has significant industry experience with over 2500 implementations worldwide, particularly in process manufacturing industries. This expertise ensures that the HRMS solution is tailored to address the unique challenges of specific industries. Industry-specific functionalities are embedded in the software to support critical processes related to micro-verticals within the manufacturing sector."
  },
  {
    "title": "Promotion of Collaboration",
    "content": "The software provides a unified platform where everyone in the organization can collaborate. This leads to faster issue resolution, improved communication, and quicker realization of ideas. By fostering collaboration, BatchMaster HERD contributes to creating a positive and efficient workplace culture."
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
            <h3 className="mb-3">USP of BatchMaster HERD</h3>
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
