import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../agolytics/ago.module.scss";

const uspData = [
  {
    "title": "Location Intelligence",
    "content": "Algolytics provides AlgoMaps, offering insights through location-based analytics, behavioral mapping, and data enrichment, enabling businesses to understand customer behavior and market trends based on geographical data."
  },
  {
    "title": "Big Data & Stream Based Modeling",
    "content": "Algolytics' Scoring.One and Event Engine enable real-time analysis of large datasets and data streams, allowing businesses to detect patterns, anomalies, and opportunities as they emerge, facilitating proactive interventions and optimizations."
  },
  {
    "title": "Comprehensive Suite of Solutions",
    "content": "Algolytics offers a range of solutions including customer scoring, risk management, sales optimization, churn reduction, fraud prevention, and data quality management, addressing diverse business needs across industries."
  },
  {
    "title": "High-End, Business-Proven Tools",
    "content": "Algolytics' tools like AdvancedMiner, Automatic Business Modeler, Scoring.One, and Event Engine are trusted by businesses worldwide, offering robust functionality and reliability to drive innovation and operational efficiency."
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
            <h3 className="mb-3">USP of Algolytics</h3>
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
