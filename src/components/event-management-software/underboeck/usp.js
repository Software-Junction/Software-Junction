import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Industry-Specific Solutions",
    "content": "Momentus understands and caters to the unique needs of various market spaces, such as convention centers, higher education institutions, corporate environments, stadiums and arenas, and arts and culture organizations. This specialization allows for tailored solutions that meet the specific requirements of each industry."
  },
  {
    "title": "Innovation and Forward-Thinking Strategies",
    "content": "Momentus emphasizes innovation and provides tools to accelerate an organization's forward-thinking strategies. By offering everything needed for success in one powerful platform, Momentus positions itself as a facilitator of innovation within the venue and event management space."
  },
  {
    "title": "Actionable Insights",
    "content": "The software automatically synthesizes data, turning it into quality analytics and actionable insights. This feature empowers teams to have a clear view of past, present, and future events, facilitating data-driven decision-making."
  },
  {
    "title": "Global Presence and Track Record",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>60,000</strong></span> users across <span style=\"color:#FC5185 ;\"><strong>57</strong></span> countries and processing over $<span style=\"color:#FC5185 ;\"><strong>10 billion</strong></span> in revenue annually, Momentus has a global presence and a track record of successful implementations. This can instill confidence in potential users regarding the reliability and effectiveness of the platform."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Underboeck</h3>
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
