import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Embedded Machine Learning and Natural Language Processing",
    "content": "The platform incorporates machine learning and natural language processing technologies to enhance productivity and foster an analytics-driven culture within organizations."
  },
  {
    "title": "Any Source, Any Data Connectivity",
    "content": "The platform offers over <span style=\"color:#FC5185 ;\"><strong>35</strong></span> out-of-the-box native data connection choices, enabling users to unify data from various sources securely."
  },
  {
    "title": "Built-in Data Preparation and Enrichment",
    "content": "Oracle Analytics includes self-service data preparation capabilities to ingest, profile, repair, and extend datasets, saving time and reducing errors."
  },
  {
    "title": "Machine Learning Integration",
    "content": "Machine learning capabilities within Oracle Analytics help users discover patterns and insights from data, removing human bias and enabling better decision-making."
  },
  {
    "title": "Choice of Deployment Options",
    "content": "Users have the flexibility to choose between native cloud, private hosted cloud, or deployment via Oracle Cloud Marketplace."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Oracle Analytics</h3>
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
