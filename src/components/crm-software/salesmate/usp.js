import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../salesmate/mate.module.scss";

const uspData = [
  {
    "title": "Productivity Tools with AI",
    "content": "Sandy AI co-pilot for sales reps, assisting in tasks like scheduling, drafting emails, and note-taking."
  },
  {
    "title": "All-in-One Solution",
    "content": "Consolidates tools with built-in features like web forms, meeting schedulers, built-in calling, and more."
  },
  {
    "title": "Secure and Compliant",
    "content": "Enterprise-grade security, compliance with SOC2, ISO, GDPR, and CCPA standards."
  },
  {
    "title": "Award-Winning Support",
    "content": "Top-rated live chat, email, phone, and one-on-one video support for user assistance."
  },
  {
    "title": "Wide Range of Integrations",
    "content": "Out-of-the-box integrations with popular apps, ensuring seamless workflow integration."
  },
  {
    "title": "Accessible Anywhere",
    "content": "Can be used on mobile, tablet, or inside Gmail, enabling work from anywhere."
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
            <h3 className="mb-3">USP of Salesmate</h3>
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
