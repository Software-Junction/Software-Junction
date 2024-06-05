import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../automatecrm/auto.module.scss";

const uspData = [
  {
    "title": "Automation Mastery",
    "content": "Effortlessly automate tasks across Sales, Marketing, Support, Projects, Orders, Payments, and more."
  },
  {
    "title": "SLA Management",
    "content": "Proactively manage Service Level Agreements (SLAs) across various processes with automated reallocation and time-based rules."
  },
  {
    "title": "Affiliate and Distributor Management",
    "content": "Manage affiliates, contractors, and distributors effortlessly. Keep them updated, build a robust support system, and track sales performance."
  },
  {
    "title": "Social Media Integration",
    "content": "Monitor sentiments, connect with chatbots, increase engagement, and capture new customers directly from social media channels."
  },
  {
    "title": "Subscription and Billing Management",
    "content": "Streamline recurring orders and payments, track receivables, reduce churn, and ensure smooth renewals."
  },
  {
    "title": "Power of AI/ML",
    "content": "Leverage sentiment analysis, connect with ML models, and make data-driven decisions for an enhanced CRM experience."
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
            <h3 className="mb-3">USP of AutomateCRM</h3>
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
