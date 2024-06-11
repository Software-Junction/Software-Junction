import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../tiemchart/tiemchart.module.scss";

const uspData = [
  {
    title: "Proven Success",
    content:
      'With a track record of managing and delivering successful projects worth over <span style="color:#f95738 ;"><strong>$3 billion</strong></span>, Tiemchart is a reliable choice for businesses of all sizes.',
  },
  {
    title: "Project Portfolio Management",
    content:
      "Tiemchart simplifies the management of complex projects by offering a comprehensive view of ongoing projects, resource allocation, and task dependencies, helping businesses avoid delays and improve overall project success.",
  },
  {
    title: "Project Profitability Control",
    content:
      "The software enables users to take control of project revenue and costs through sophisticated billing, costing, and profit reporting modules, allowing for accurate tracking and analysis.",
  },
  {
    title: "Resource Workload Visibility",
    content:
      "Tiemchart provides a resource availability dashboard that allows businesses to gain better insight into team workload, identifying over and underutilized resources to improve overall project profitability.",
  },
  {
    title: "Integration Capabilities",
    content:
      "Tiemchart seamlessly integrates with popular project management platforms such as Excel, Oracle, Microsoft Project, and Google Drive, enhancing connectivity and collaboration.",
  },
  {
    title: "Global Presence",
    content:
      'Tiemchart is a global IT platform with offices in the Netherlands and India, serving enterprises worldwide. The core development team brings over <span style="color:#f95738 ;"><strong>20 years</strong></span> of combined experience in systems like SAP, Oracle, PeopleSoft, and JDE.',
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Tiemchart</h3>
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
