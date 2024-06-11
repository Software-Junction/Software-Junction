import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../solid-performers/solid.module.scss";

const uspData = [
  {
    "title": "Comprehensive Sales Automation",
    "content": "Advanced tools automate lead management, allocation, welcome messages, reminder alerts, and follow-ups, ensuring a seamless and efficient conversion process."
  },
  {
    "title": "Zero Additional Costs",
    "content": "Solid Performers CRM boasts zero setup, training, and AMC costs, offering transparency and affordability in its pricing structure."
  },
  {
    "title": "Sales Pipeline Visualization",
    "content": "Forecast business growth with a graphical sales pipeline builder, enhancing understanding and productivity."
  },
  {
    "title": "Quick and Easy Setup",
    "content": "Start using the CRM in less than 5 minutes, from booking a demo to customization and training, ensuring a swift onboarding process."
  },
  {
    "title": "Global Reach",
    "content": "Positioned as a global solution, Solid Performers CRM serves businesses worldwide, emphasizing its international presence and experience."
  },
  {
    "title": "Data Security and History Preservation",
    "content": "Ensure communication history preservation with Solid Performers CRM, preventing loss of crucial data even if team members leave the organization."
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
            <h3 className="mb-3">USP of Solid Performers CRM</h3>
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
