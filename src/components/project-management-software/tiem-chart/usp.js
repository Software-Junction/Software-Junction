import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../tiem-chart/tiem-chart.module.scss";

const uspData = [
  {
    title: "Proven Success",
    content:
      'With a track record of successfully managing and delivering projects worth more than <span style="color:#f95738 ;"><strong>$3</strong></span> Billion, Tiemchart is a reliable and proven solution suitable for businesses of all sizes. The platform\'s effectiveness is reflected in its ability to contribute to the success of diverse projects.',
  },
  {
    title: "Interactive Gantt Charts",
    content:
      "Tiemchart's use of interactive Gantt charts allows users to easily break down projects into actionable plans. This feature provides visibility into tasks and deadlines, empowering businesses to make informed decisions and optimize project timelines.",
  },
  {
    title: "Integration Capabilities",
    content:
      "Tiemchart seamlessly integrates with popular project management platforms such as Excel, Oracle, MS Project, and Google Drive. This ensures compatibility with existing tools and facilitates a smooth transition to Tiemchart for enhanced project management.",
  },
  {
    title: "Global Reach and Expertise",
    content:
      'Tiemchart is a global IT platform for project management with offices in the Netherlands and India. The core design and development team brings over <span style="color:#f95738 ;"><strong>20</strong></span> years of combined experience in systems like SAP, Oracle, PeopleSoft, and JDE, ensuring a robust and well-crafted solution.',
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
