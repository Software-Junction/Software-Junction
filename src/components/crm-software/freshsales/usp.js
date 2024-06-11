import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../freshsales/fresh.module.scss";

const uspData = [
  {
    "title": "AI-Powered Contact Scoring",
    "content": "Prioritize and personalize customer engagement with Freddy AI's advanced contact scoring."
  },
  {
    "title": "Predictive Deal Insights",
    "content": "Maximize efficiency and revenue with AI-powered recommendations and predictions for optimal sales strategy."
  },
  {
    "title": "Intelligent Workflow Automation",
    "content": "Automate tasks, scale outreach efficiently, and reduce manual workload with behavior-based sales sequences."
  },
  {
    "title": "Freshsales Suite",
    "content": "Unify CRM for sales, marketing, and support teams, breaking down silos for a seamless customer journey."
  },
  {
    "title": "Free Trial with No Obligation",
    "content": "Explore Freshsales risk-free with a <span style=\"color:#f95738 ;\"><strong>21-day trial,</strong></span> no credit card required, to experience the software's impact on your sales processes."
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
            <h3 className="mb-3">USP of Freshsales</h3>
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
