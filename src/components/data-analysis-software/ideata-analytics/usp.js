import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ideata-analytics/ide.module.scss";

const uspData = [
  {
    "title": "Strategic Cloud Approach",
    "content": "Ideata Analytics optimizes resilience and integration through strategic cloud adoption, unlocking value while managing costs effectively."
  },
  {
    "title": "Comprehensive Consulting Services",
    "content": "Expert guidance from Ideata Analytics navigates industry complexities, fostering innovation and achieving strategic goals for businesses."
  },
  {
    "title": "Tech Integration for Digital Transformation",
    "content": "Ideata Analytics empowers agility and resilience through seamless tech integration, driving innovation in the dynamic digital landscape."
  },
  {
    "title": "Harnessing AI for Transformative Solutions",
    "content": "Ideata Analytics pioneers AI innovation, driving intelligent automation and predictive insights for transformative business excellence."
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
            <h3 className="mb-3">USP of Ideata Analytics</h3>
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
