import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../simplify-analytics/sim.module.scss";

const uspData = [
  {
    "title": "Privacy-First Approach",
    "content": "SimplifyAnalytics prioritizes user privacy by adhering to global privacy standards like GDPR, CCPA, and PECR. It ensures compliance without compromising on the quality of insights."
  },
  {
    "title": "Interactive Heatmaps",
    "content": "Visualize user engagement with intuitive heatmaps. Understand what attracts attention and optimize site layout for enhanced user experience."
  },
  {
    "title": "Goal Conversion Tracking",
    "content": "Set and track specific goals to measure website performance. Monitor key actions such as form submissions and downloads to evaluate success."
  },
  {
    "title": "Detailed Session Replays",
    "content": "Replay user sessions to see the site through visitors' eyes. Identify usability issues and optimize the journey for better engagement and conversion."
  },
  {
    "title": "Contribution to Carbon Removal",
    "content": "SimplifyAnalytics contributes <span style=\"color:#FC5185 ;\"><strong>1%</strong></span> of its revenue to carbon removal, supporting frontier carbon removal technologies to counteract climate change."
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
            <h3 className="mb-3">USP of SimplifyAnalytics</h3>
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
