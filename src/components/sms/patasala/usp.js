import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../patasala/pat.module.scss";

const uspData = [
  {
    "title": "Efficient Onboarding and Setup",
    "content": "Patasala.in offers a streamlined onboarding process, working closely with schools to gather data, set up assessment models, implement fee plans, enable online payments, and train staff. The goal is to have schools up and running within four weeks."
  },
  {
    "title": "Continuous Product Enhancements",
    "content": "Users benefit from seamless access to new features and enhancements without incurring additional costs. Weekly rollouts of updates ensure that schools stay current with the latest tools and improvements."
  },
  {
    "title": "Quarterly Team Visits",
    "content": "Patasala.in commits to visiting schools at least once a quarter, actively seeking feedback to improve the software. This approach aims to make the platform a delight for teachers, parents, administrators, and management."
  },
  {
    "title": "Flexible Pay-as-You-Go Model",
    "content": "The software allows schools to try it for free before committing to a purchase. Schools can opt for monthly or quarterly payment plans only after they are convinced of the advantages offered by Patasala.in."
  },
  {
    "title": "Comprehensive Connectivity",
    "content": "Patasala.in connects parents, teachers, and management through a variety of platforms, including mobile apps for teachers, parents, and students, a web app for administration, and communication channels such as SMS, emails, WhatsApp messages, and mobile notifications."
  },
  {
    "title": "Extensive Feature Set",
    "content": "The platform boasts a cloud-based web solution <span style=\"color:#f95738 ;\"><strong>with over 40 modules,</strong></span> customizable settings and documents, mobile apps for all stakeholders, and dashboards for both academic and financial insights."
  },
  {
    "title": "Innovative Approach and Easy-to-Use Software",
    "content": "The software focuses on user-friendly interfaces with industry-first solutions such as contactless attendance tracking, interactive training through the 'Teach me' tool, a WYSIWYG visual editor for report card customization, and varied views for student performance analysis."
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
            <h3 className="mb-3">USP of Patasala.in</h3>
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
