import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Decision-Aid Capability",
    content:
    "The system serves as a complete decision support tool for management, providing multiple report generation capabilities. This empowers educational institutions with the necessary insights for strategic planning and decision-making."
    },
  {
    title: "User-Friendly Interface",
    content:
    "The software boasts an extremely simple and attractive user interface enriched with modern and easy-to-use GUI components. This user-friendly design ensures that administrators, teachers, and other staff members can navigate and utilize the system effortlessly."
    },
  {
    title: "High-Level Security Measures",
    content:
    "The School Management System prioritizes security at various levels, including user, module, form, and database levels. This ensures the confidentiality and integrity of sensitive information stored within the system."
    },
  {
    title: "Trusted by Numerous Institutions",
    content:
    "TechQuest Services' School Management System has gained the trust of <span style=\"color:#f95738 ;\"><strong>over 100 schools and colleges, serving more than 10,000 students and teachers.</strong></span> This track record of successful implementation establishes the software's reliability and effectiveness."
    },
  {
    title: "Experienced and Dynamic Team",
    content:
    "TechQuest Services is backed by a dynamic team of graduates and MBA professionals, bringing a wealth of experience in school software development. <span style=\"color:#f95738 ;\"><strong> With a 10-year presence in the industry</strong></span> , the company has a proven record of delivering high-quality solutions."
    }
  
];

const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Hubusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of icampushub</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["hub-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Hubusp;
