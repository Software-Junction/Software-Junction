import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../schoolmate/mate.module.scss'

const uspData = [
  {
    title: "Multilingual Support",
    content:
    "SchoolMate offers its services in <span style=\"color:#f95738 ;\"><strong>17 European languages</strong></span>, ensuring that users can interact with the platform in their preferred language.This multilingual support is crucial for international and diverse language schools, creating a more inclusive and user-friendly experience."
    },
  {
    title: " Modular System",
    content:
    "SchoolMate provides a modular system, allowing schools to choose specific features based on their needs.This flexibility means schools can customize the platform according to their unique requirements, optimizing the use of resources and avoiding unnecessary complexity."
    },
  {
    title: "Communication Features",
    content:
    "The platform facilitates quick and easy messaging directly from SchoolMate to students and teachers' phones. Efficient communication tools within the platform create a more connected and responsive educational community, improving overall collaboration."
    },
  {
    title: "Online Learning Integration",
    content:
    "SchoolMate allows the addition of online lessons using popular tools such as Zoom, Google Meets, Microsoft Teams, and LearnCube.This integration caters to the growing trend of online learning, providing schools with the flexibility to adapt to various teaching methods."
    },
  {
    title: "Mobile Apps and Integrations",
    content:
    "Google and iOS mobile apps are available for students and teachers, enhancing accessibility to the platform.Integrations with sales/CRM and bank feed further streamline workflows, ensuring a seamless and interconnected experience."
    },
  {
    title: "Finance Management",
    content:
    "The finance module is flexible and seamless, specifically designed for language schools to handle invoicing, teacher payments, and debtor management.The automated invoicing system is a time-saving feature, simplifying financial processes and reducing administrative workload."
    },
  {
    title: "Registration Module",
    content:
    "The registration module is integrated directly into the school's website, automating the registration process.This integration ensures accurate capture of information, saving time and ensuring that the school receives the necessary details from prospective students."
    },
  {
    title: "Study Drive",
    content:
    "Study Drive centralizes educational files, allowing teachers to share materials and create online tests for students.Secure cloud storage enhances efficiency, providing easy access to teaching resources from anywhere."
    },
  {
    title: "CRM and Task Management",
    content:
    "The CRM system captures and manages contacts, tracks opportunities, and improves sales performance.Task management features allow teams to organize and assign tasks efficiently, enhancing overall productivity and collaboration."
    },
  {
    title: "Reports and Surveys",
    content:
    "The platform offers a powerful reporting tool for strategic planning and forecasting, providing real-time data insights.Surveys allow the collection of valuable feedback from students, parents, and teachers, contributing to informed decision-making."
    },
];

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
            <h3 className="mb-3">USP of SchoolMate</h3>
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
