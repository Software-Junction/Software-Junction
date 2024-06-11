import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../elitehrms/elt.module.scss";

const uspData = [
  {
    "title": "Proven and Tested Across Industries",
    "content": "The eliteHRMS software has undergone rigorous testing and implementation across various industries, including IT/ITES, Production, and Food and Beverage. This extensive testing demonstrates its adaptability and effectiveness in meeting the unique requirements of different business sectors."
  },
  {
    "title": "Payroll and Statutory Compliance",
    "content": "eliteHRMS includes a dedicated module for payroll and statutory compliance. This is particularly beneficial for finance users who often find the payroll process challenging, especially as the employee strength increases. The software simplifies these processes, ensuring accuracy and compliance with relevant regulations."
  },
  {
    "title": "Powerful ESS & MSS Services",
    "content": "The software integrates Employee Self-Service (ESS) and Manager Self-Service (MSS) features, making operations user-friendly. This allows employees to find resolutions to their needs through self-service options, reducing dependency on HR professionals for routine tasks. Managers also benefit from streamlined processes for efficient decision-making."
  },
  {
    "title": "Third-Party Integration and Reliability",
    "content": "eliteHRMS stands out by offering third-party integration capabilities, making it a versatile solution that can be customized to meet specific business needs. The mention of reliability with proven milestones indicates a track record of consistent performance, instilling confidence in the software's dependability."
  },
  {
    "title": "Compliance with Indian Statutory Laws",
    "content": "Acknowledging the importance of legal compliance, eliteHRMS ensures adherence to Indian statutory laws. This is crucial for businesses operating in India, as it helps them align their HR processes with the legal framework of the country, reducing the risk of non-compliance."
  },
  {
    "title": "Quick Implementation with Excel Uploads",
    "content": "The software facilitates quick implementation on all modules, particularly through excel uploads. This feature expedites the onboarding process, allowing users to swiftly integrate the software into their operations. Quick implementation is crucial for minimizing downtime and maximizing the benefits of the software."
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
            <h3 className="mb-3">USP of eliteHRMS</h3>
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
