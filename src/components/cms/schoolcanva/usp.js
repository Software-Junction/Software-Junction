import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../schoolcanva/schoolcanva.module.scss";

const Usp = () => {
  const uspData = [
    {
      title: "Comprehensive Automation",
      content: `<strong>USP : </strong>School Canvas provides an all-in-one, <span style=\"color:#f95738 ;\"><strong>360</strong></span>-degree solution to automate every aspect of school management, from admission to certificate generation, fee collection, and academic analysis. <br /><br /><strong>Benefits : </strong> Schools can streamline their processes efficiently, reducing manual workload and improving overall productivity.`
    },
    {
      title: "End-to-End School Management Software",
      content: `<strong>USP : </strong>School Canvas is an end-to-end school management software that seamlessly integrates all day-to-day operations. <br /><br /><strong>Benefits : </strong> Ensures hassle-free management, informative reports, and dashboards for faster decision-making by the school management.`
    },
    {
      title: "Customizability and Open API",
      content: `<strong>USP : </strong>Built on an open API, School Canvas offers customizable solutions tailored to the specific needs of each school, including custom URLs and tailored reports. <br /><br /><strong>Benefits : </strong> Schools can adapt the software to fit their unique requirements, promoting flexibility and scalability.`
    },
    {
      title: "Data Security",
      content: `<strong>USP : </strong>Implements a 'Zero Trust' access layer for authentication and authorization, ensuring robust data security for the Canvas application. <br /><br /><strong>Benefits : </strong> Schools can trust School Canvas to prioritize the security of their sensitive information, meeting compliance standards.`
    },
    {
      title: "Wide Array of Modules",
      content: `<strong>USP : </strong>School Canvas offers a wide array of modules catering to all stakeholders, providing a comprehensive solution for school management. <br /><br /><strong>Benefits : </strong>Schools benefit from a centralized system, reducing the need for multiple platforms and ensuring seamless information flow.`
    },
    {
      title: "Innovative Features",
      content: `<strong>USP : </strong> Innovative features like automatic payment links, admission chat-bot, and smart route optimization for school buses set School Canvas apart. <br /><br /><strong>Benefits : </strong>Schools can leverage cutting-edge technology to enhance their operational efficiency and offer better services to students and parents.`
    },
    {
      title: "Global Recognition and Credibility",
      content: `<strong>USP : </strong>The integration of a responsive website and mobile app with SEO-optimized design adds credibility and global recognition to the school. <br /><br /><strong>Benefits : </strong>Schools can enhance their online presence, attracting a wider audience and establishing themselves as technologically advanced institutions.`
    },
    {
      title: "Proven Track Record",
      content: `<strong>USP : </strong>School Canvas boasts over <span style=\"color:#f95738 ;\"><strong>550</strong></span> reputed schools as customers and more than <span style=\"color:#f95738 ;\"><strong>13</strong></span> years of experience in school ERP. <br /><br /><strong>Benefits : </strong>Schools can have confidence in the software's reliability and effectiveness, backed by a substantial track record in the education sector.`
    }
  ];

  const renderHTML = (rawHTML) => {
    return React.createElement("p", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Schoolcanvas</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
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
