import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../todoist/todoist.module.scss";

const uspData = [
  {
    title: "Natural Language Recognition",
    content:
      "Todoist stands out with its one-of-a-kind natural language recognition feature. Users can quickly input tasks in plain language, and the app instantly transforms them into organized to-do list items.",
  },
  {
    title: "Long-Term Trust and Reliability",
    content:
      'Todoist emphasizes its long-term commitment, having been developed for <span style="color:#f95738 ;"><strong>16 years and 334 days</strong></span>. Users are assured that the app will not compromise its integrity by selling out to the highest bidder, instilling trust and reliability.',
  },
  {
    title: "Global User Base and Recognition",
    content:
      'Todoist boasts an impressive user base, with <span style="color:#f95738 ;"><strong>30+</strong></span> million app downloads, <span style="color:#f95738 ;"><strong>2 billion</strong></span> tasks completed, and users across <span style="color:#f95738 ;"><strong>160+</strong></span> countries. The app has received positive reviews, including being named the best to-do list app by the New York Times’ Wirecutter.',
  },
  {
    title: "Proven Track Record",
    content:
      'The app\'s credibility is highlighted by the fact that it has over <span style="color:#f95738 ;"><strong>1 million</strong></span> Pro users. This suggests that a substantial number of users find value in the premium features offered by Todoist.',
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
            <h3 className="mb-3">USP of Todoist</h3>
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
