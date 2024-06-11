import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../zoho-analytics/zoho.module.scss";

const uspData = [
  {
    "title": "Unified Business Analytics",
    "content": "Zoho Analytics offers pre-built integrations across various business applications, allowing users to unify organizational data and gain insights from reports blending across different business functions."
  },
  {
    "title": "Flexible Deployment Options",
    "content": "Zoho Analytics offers flexible deployment options, including a proprietary cloud service, public cloud, or on-premise environments, ensuring that businesses can choose the deployment method that best fits their needs and preferences."
  },
  {
    "title": "High Scale, Extensible Platform",
    "content": "With a robust set of APIs, Zoho Analytics enables elaborate customization and highly extensible low-code/no-code integration with any technology stack, providing scalability and adaptability to evolving business requirements."
  },
  {
    "title": "Security and Governance",
    "content": "The platform is equipped with time-tested and accredited enterprise-grade security features and a governance framework to ensure continuous data management and stewardship, providing peace of mind to users regarding data security and compliance."
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
            <h3 className="mb-3">USP of Zoho Analytics</h3>
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
