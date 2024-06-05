import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../projectmates/projectmates.module.scss";

const uspData = [
  {
    title: "Award-Winning Application",
    content:
      'Recognized in the construction industry for over <span style="color:#FC5185 ;"><strong>20 years</strong></span>. Trusted by more than <span style="color:#FC5185 ;"><strong>100,000</strong></span> current projects.',
  },
  {
    title: "Streamlined Construction Processes",
    content:
      "Provides access to various tools such as project planning, design collaboration modules, reports, bidding tools, submittal tools, and punch lists. Aims to streamline building processes and reduce costly errors.",
  },
  {
    title: "Workflow Automation",
    content:
      "Total project control with automation for RFIs, submittals, change orders, daily field reports, punch lists, etc. Eliminates manual processes, saving time and improving efficiency.",
  },
  {
    title: "Capital Project Planning",
    content:
      "Total control over capital plans to align priorities with finances. Provides certainty regarding funding sources for projects.",
  },
  {
    title: "Schedule Management",
    content:
      "Total control to track schedules across multiple projects and programs. Offers transparency into critical activities to address delays promptly.",
  },
  {
    title: "Analytics & Reporting",
    content:
      "Total program data control with pre-built and customizable reports for data-driven decisions.",
  },
  {
    title: "Mobile App Accessibility",
    content:
      "Offers a versatile mobile app for construction project management that allows team members in the field to create, markup, and submit reports from anywhere.",
  },
  {
    title: "Configurability Across Industries",
    content:
      "Configurable, cloud-based construction management software catering to diverse industries. Works with clients to customize the software according to unique business needs.",
  },
  {
    title: "Customer Support and Learning Resources",
    content:
      "Hands-on, zero wait time support center. Online learning management system and tutorial videos for continuous learning.",
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

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Projectmates</h3>
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
