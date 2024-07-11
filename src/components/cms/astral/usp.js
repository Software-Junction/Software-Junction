import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../astral/astral.module.scss';

const uspData = [
  {
    "title": "Comprehensive Cross-Functional System",
    "content": "The School Management System by Astral Technologies is described as a cross-functional enterprise system. This means it goes beyond basic functionalities and incorporates a range of modules. These modules collectively support various internal processes within educational institutes."
  },
  {
    "title": "Flexible Deployment Options",
    "content": "Astral's Inventory Management System is web-based and cloud-ready. This flexibility allows users to choose between hosting the application on their own servers or deploying it on the cloud with a service provider of their choice. This adaptability caters to diverse infrastructure preferences."
  },
  {
    "title": "User-friendly Platform for Stakeholders",
    "content": "The School Management System offers user-friendly dashboards tailored for different roles. These roles include Management, Principal, Staff, Students, Parents, and Teachers. Each stakeholder has a customized interface that caters to their specific needs, making the platform accessible and easy to use."
  },
  {
    "title": "Secure and Private Database",
    "content": "Emphasizing data security, Astral Technologies ensures that the School Management System comes with an exclusive private and secure database. This feature safeguards sensitive information and maintains the confidentiality and integrity of the data stored."
  },
  {
    "title": "Reduced Administrative Costs",
    "content": "The system aims to bring down administrative costs by automating various tasks such as fee administration and payroll management. Automation reduces manual efforts, minimizes errors, and contributes to overall cost efficiency in managing administrative processes."
  },
  {
    "title": "Endless Possibilities for Knowledge Sharing",
    "content": "The platform is designed to leverage internet technology for exposure, knowledge gaining, and sharing within the educational community. This implies that the system provides a platform for collaboration and information exchange, fostering a culture of continuous learning and growth."
  }
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
            <h3 className="mb-3">USP of Astral Technologies</h3>
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
