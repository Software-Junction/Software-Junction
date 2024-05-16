import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Consolidated Portfolio",
    "content": "SAS Analytics Pro combines Base SAS, SAS/STAT, and SAS/GRAPH into a single package, reducing costs associated with licensing, maintenance, and training while ensuring consistent and reliable data analysis across the enterprise."
  },
  {
    "title": "Innovative Statistical Techniques",
    "content": "Continuously updated statistical procedures reflect the latest advancements in methodology. Users benefit from support provided by experienced statisticians, ensuring accurate answers to complex data questions."
  },
  {
    "title": "Visualizations and Reporting",
    "content": "Users can easily create and share a variety of visualizations, including graphs, maps, and charts, in standard office formats. This facilitates the delivery of analytical insights to stakeholders where they are needed most."
  },
  {
    "title": "Advanced Programming Features",
    "content": "SAS Analytics Pro Advanced Programming offers additional statistical techniques for quality assessment, time-series analysis, and optimization, empowering statisticians with the tools they need to tackle complex analytical challenges."
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
            <h3 className="mb-3">USP of SAS Analytics Pro</h3>
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
