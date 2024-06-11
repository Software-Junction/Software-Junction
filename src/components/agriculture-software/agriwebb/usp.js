import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../agriwebb/agriwebb.module.scss";

const uspData = [
  {
    title: "Profit-Driven Insights",
    content:
      "AgriWebb empowers users with instant insights into weight gains, production costs, and profit-driving opportunities. Access to powerful reporting and detailed individual animal data aids in making informed decisions for increased profitability.",
  },
  {
    title: "Accessible",
    content:
      "AgriWebb emphasizes a user-friendly experience with features like ranch mapping, individual and herd management, grazing insights, inventory management, and task management. The ability to work offline ensures functionality even in areas with limited connectivity.",
  },
  {
    title: "Trusted by a Wide Community",
    content:
      "Highlighting the trust of <span style=\"color:#f95738 ;\"><strong>16,000 farmers</strong></span> and ranchers worldwide adds credibility to AgriWebb's effectiveness and reliability. Real-life success stories from different farmers reinforce the software's positive impact on various farming enterprises.",
  },
  {
    title: "Free Trial without Obligation",
    content:
      "Offering a free trial without requiring a credit card provides a risk-free opportunity for potential users to experience the benefits firsthand.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of AgriWebb</h3>
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
