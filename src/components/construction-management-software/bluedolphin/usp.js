import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Agile and Data-Driven Transformation",
    content:
      "BlueDolphin fully supports an agile way of working, providing architecture templates and reference models for quick and consistent transformation. The platform aggregates various data sources, facilitating the creation of data-driven solutions that align with business objectives.",
  },
  {
    title: "Intelligent Analytics and Impact Evaluation",
    content:
      "BlueDolphin offers intelligent analytic functionalities for impact evaluation and alignment with existing solutions. Users can design effective solutions and perform accurate impact analyses, enhancing scenario planning capabilities.",
  },
  {
    title: "Cross-Departmental Collaboration",
    content:
      "Supporting various modeling languages, BlueDolphin ensures role-based accessibility for stakeholders. This enables cross-departmental collaboration, allowing quick input gathering and solution design enrichment without compromising data validity.",
  },
  {
    title: "Beautiful Architectural Design Capabilities",
    content:
      "BlueDolphin supports Archimate® and BPMN, providing a central repository for architectural designs. Users can plan, design, and manage transformation solutions in their preferred language, fostering a collaborative and inclusive environment.",
  },
  {
    title: "Centralized Repository and Visualization",
    content:
      "The platform allows users to capture, manage, and utilize all architecture objects and relationships in one intelligent repository. Organizations can map and visualize goals and business capabilities for better understanding among stakeholders.",
  },
  {
    title: "Out-of-the-Box Solution Templates",
    content:
      "BlueDolphin offers out-of-the-box solution templates for planning based on strategic goals. It enables the development of integrated architecture solutions for agile teams, promoting efficiency in transformation processes.",
  },
  {
    title: "Continuous Maintenance and Single Source of Truth",
    content:
      "BlueDolphin supports re-use, recycling, automation, and duplication of data with continuous maintenance. Organizations can maintain a single source of truth for applications, business processes, data, and technology.",
  },
  {
    title: "Seamless Integration with Existing Databases",
    content:
      "BlueDolphin seamlessly integrates with standard databases and applications, eliminating the need to duplicate tasks. Users can sync databases with BlueDolphin, providing easy access to the entire IT landscape in one platform.",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of BlueDolphin</h3>
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
