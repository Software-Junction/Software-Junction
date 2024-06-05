import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../zoho-people/zo.module.scss";

const uspData = [
  {
    "title": "Core HR Simplified",
    "content": "The software eliminates the need for mundane spreadsheets and rigid systems, offering smarter and more efficient features. This includes an easily scalable employee database, efficient case management, smart HR workflows, and insightful analytics, freeing HR professionals from administrative tasks."
  },
  {
    "title": "Learning and Development Reinvented",
    "content": "Zoho People's learning and development system facilitate dynamic learning experiences for employees. This includes blended learning with virtual classrooms, centralized course management, quizzes, and assessments to enhance employee skills."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "Zoho People caters to businesses of all sizes and industries, with tailored solutions for small, medium, and enterprise-level organizations. It offers industry-specific solutions for media and advertising, information technology, education, healthcare, finance, and more."
  },
  {
    "title": "Security and Trust",
    "content": "Zoho People prioritizes trust and customer security, with data security and privacy measures in place. Built on a cloud infrastructure, the software ensures the safety and protection of data <span style=\"color:#FC5185 ;\"><strong>24/7.</strong></span>"
  },
  {
    "title": "Business Agility",
    "content": "Zoho People empowers companies to adapt to evolving changes in skills, work locations, and business functions. It provides consistent, accurate, and real-time visibility of the global workforce, enabling better decision-making for increased business agility."
  },
  {
    "title": "Integration Capabilities",
    "content": "Zoho People integrates seamlessly with other essential tools and platforms, including QuickBooks, Zapier, <span style=\"color:#FC5185 ;\"><strong>Office 365,</strong></span> Zoho CRM, Adobe Sign, Zoho Recruit, and more. This integration enhances the overall efficiency of HR processes."
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
            <h3 className="mb-3">USP of Zoho People</h3>
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
