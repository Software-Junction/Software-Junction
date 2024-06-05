import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../domo/domo.module.scss";

const uspData = [
  {
    "title": "Data Multiplication",
    "content": "Domo empowers users to put data to work and multiply their impact by moving beyond basic charts and graphs to create data experiences that drive 'Aha!' insights and actions in real-time."
  },
  {
    "title": "Comprehensive Data Platform",
    "content": "Domo offers the most comprehensive data platform for businesses, integrating features such as business intelligence and analytics, data integration, app creation tools, governance, and security."
  },
  {
    "title": "Trusted by Industry Leaders",
    "content": "Domo is recognized by top analysts and thought leaders, such as Gartner, Forrester, and Dresner Advisory Services, for its effectiveness in driving ROI and providing value in record time."
  },
  {
    "title": "Customer Testimonials and Success Stories",
    "content": "Domo's customers, including well-known organizations like Regional One Health and Torchy's Tacos, testify to the platform's ability to provide real-time insights, enable quick decision-making, and drive transformative actions."
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
            <h3 className="mb-3">USP of Domo</h3>
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
