import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../knowit-hms/kno.module.scss";

const uspData = [
  {
    "title": "Integration",
    "content": "KnowIT HMS offers an integrated ERP solution covering all aspects of hospital management, from Front Office to Finance, HRMS, and Inventory. Modular design allows customization to meet specific needs, ensuring clients only pay for the modules they require."
  },
  {
    "title": "Web-Based Technology",
    "content": "Developed using the latest MVC technology, KnowIT HMS is accessible both as a SaaS (Cloud) and On-Premise solution. Availability on various browsers, including mobile, ensures flexibility and ease of access."
  },
  {
    "title": "Doctor's Workstations",
    "content": "The system includes a dedicated module for doctors, offering functionalities such as appointments, patient lists, reminders, and clinical documentation. Customizable clinical documentation templates cater to various medical specialties."
  },
  {
    "title": "Financial Integration",
    "content": "Complete Integrated Financial Accounting Software streamlines billing and financial processes. SSRS Report Feature allows easy export of reports in various formats."
  },
  {
    "title": "Technology Stack",
    "content": "Developed using state-of-the-art web-based N-tier architecture, including MVC with the .NET framework, SQL Server, and Internet Information Server."
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
            <h3 className="mb-3">USP of KnowIT HMS</h3>
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
