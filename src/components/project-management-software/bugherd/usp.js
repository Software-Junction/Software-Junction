import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../bugherd/bugherd.module.scss";

const uspData = [
  {
    title: "Customer Testimonials",
    content:
      'Over <span style="color:#f95738 ;"><strong>10,000</strong></span> companies and <span style="color:#f95738 ;"><strong>350,000</strong></span> users across <span style="color:#f95738 ;"><strong>172</strong></span> countries trust BugHerd. Customer reviews highlight time savings, improved implementation speed, and enhanced feedback collection.',
  },
  {
    title: "Integrate with Ease",
    content:
      "BugHerd seamlessly integrates with project management, customer support, and CRM tools. Choose to send as much or as little information between BugHerd and integrated tools.",
  },
  {
    title: "CEO's Personal Guarantee",
    content:
      '<span style="color:#f95738 ;"><strong>14</strong></span>-day free trial without needing a credit card. <span style="color:#f95738 ;"><strong>60</strong></span>-day money-back guarantee if not satisfied with the purchase. CEO Steve is confident you\'ll love the tool and offers a substantial guarantee.',
  },
  {
    title: "Use Cases",
    content:
      "Marketing Agencies: Streamline website overhauls and ongoing tweaks. UAT Testing: Obtain actionable, replicable, and visual feedback. Online Learning: Effortlessly review online courses and gather stakeholder feedback. Web Development Agencies: Excel in managing large and complex websites.",
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
            <h3 className="mb-3">USP of BugHerd</h3>
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
