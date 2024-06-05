import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../engagebay/eng.module.scss'

const uspData = [
  {
    "title": "All-in-One Solution",
    "content": "EngageBay consolidates Marketing, Sales, and Support functions into a single, comprehensive platform."
  },
  {
    "title": "Affordability",
    "content": "Positioned as the world's most affordable unified software, EngageBay eliminates the need for multiple costly solutions."
  },
  {
    "title": "Automation",
    "content": "The platform emphasizes automation across marketing, email sequences, ticket management, and deal tracking for increased efficiency."
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
            <h3 className="mb-3">USP of EngageBay</h3>
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
