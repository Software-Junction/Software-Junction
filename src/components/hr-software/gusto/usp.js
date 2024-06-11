import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../gusto/gus.module.scss";

const uspData = [
  {
    "title": "Efficiency and Speed",
    "content": "The claim that <span style=\"color:#f95738 ;\"><strong>3 out of 4 customers run payroll in 10 minutes</strong></span> or less suggests that Gusto is designed for quick and streamlined payroll processing. The feature to sync hours with payroll and offer state tax registration in all <span style=\"color:#f95738 ;\"><strong>50</strong></span> states indicates a comprehensive solution that simplifies payroll tasks."
  },
  {
    "title": "Time Savings",
    "content": "Users report saving over <span style=\"color:#f95738 ;\"><strong>80 hours</strong></span> a year by using Gusto, showcasing a significant reduction in the time spent on payroll activities. The ability to run payroll bi-weekly in less than an hour each month is a testament to the time efficiency provided by Gusto, allowing businesses to focus on core operations."
  },
  {
    "title": "Customer Satisfaction and Recognition",
    "content": "Being recognized as <span style=\"color:#f95738 ;\"><strong>#1</strong></span> in Small Business Payroll Satisfaction & HR Implementation in Fall <span style=\"color:#f95738 ;\"><strong>2023</strong></span> and winning Best Payroll Software in <span style=\"color:#f95738 ;\"><strong>March 2023</strong></span> indicates high customer satisfaction and industry recognition. The fact that <span style=\"color:#f95738 ;\"><strong>85%</strong></span> of surveyed Gusto customers report having more time to run their business speaks to the positive impact Gusto has on its users."
  },
  {
    "title": "Affordable Employee Benefits",
    "content": "Gusto acts as a broker for health insurance administration at no extra cost. This feature emphasizes the affordability and convenience of managing employee benefits through Gusto. Businesses can move existing plans or seek advice from licensed advisors to find the right coverage, showcasing flexibility and support."
  },
  {
    "title": "Innovative Technology",
    "content": "Gusto's use of smart technology is highlighted, allowing users to run payroll with just a few clicks. This speaks to the modern and innovative approach taken by Gusto in delivering payroll solutions. The inclusion of insights and reporting features further demonstrates a commitment to providing businesses with tools for data-driven decision-making."
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
            <h3 className="mb-3">USP of Gusto</h3>
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
