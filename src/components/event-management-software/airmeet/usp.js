import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../airmeet/air.module.scss";

const uspData = [
  {
    "title": "Analytics and Insights",
    "content": "Airmeet's analytics capabilities allow users to create, influence, and convert their sales pipeline. The mention of \"Aha moment\" with analytics suggests that the platform provides valuable insights for event organizers."
  },
  {
    "title": "High Engagement and Collaboration",
    "content": "The platform facilitates deep engagement and collaboration for both internal teams and external audiences. It is particularly highlighted for talent leaders, culture champions, marketers, and go-to-market (GTM) teams."
  },
  {
    "title": "Immersive Experience",
    "content": "Airmeet is praised for creating immersive experiences, driving meaningful meetings, and fostering sponsor engagement, ultimately contributing to the success of events."
  },
  {
    "title": "Trusted by Organizations",
    "content": "The platform boasts being trusted by over <span style=\"color:#FC5185 ;\"><strong>4000</strong></span> organizations, including well-known names like Capgemini and Kaiser Permanente."
  },
  {
    "title": "Success in Different Industries",
    "content": "The platform's success is highlighted across various industries, including IT & SaaS, education, VCs & accelerators, and communities."
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
            <h3 className="mb-3">USP of Airmeet</h3>
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
