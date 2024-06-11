import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../vyapar/vya.module.scss";

const uspData = [
  {
    "title": "Simple and User-Friendly Platform",
    "content": "Vyapar offers a simple and user-friendly platform for easy business accounting and billing."
  },
  {
    "title": "Efficient Financial Management",
    "content": "It simplifies billing and invoicing processes for efficient financial management."
  },
  {
    "title": "Inventory Management",
    "content": "Vyapar helps businesses manage inventory, track stock levels, and avoid stockouts."
  },
  {
    "title": "GST Compliance",
    "content": "The software is GST-compliant, ensuring businesses meet tax requirements in India."
  },
  {
    "title": "Mobile Accessibility",
    "content": "With a mobile app, users can manage their business finances on the go."
  },
  {
    "title": "Expense Tracking",
    "content": "Expense tracking features help users make informed financial decisions."
  },
  {
    "title": "Customer Management",
    "content": "Vyapar aids in customer management and relationship building."
  },
  {
    "title": "Free Plan Availability",
    "content": "A free plan is available for businesses with limited budgets."
  },
  {
    "title": "Cross-Platform Accessibility",
    "content": "Vyapar is accessible on both Android and iOS platforms for wider usability."
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
            <h3 className="mb-3">USP of Vyapar</h3>
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
