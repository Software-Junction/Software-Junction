import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../figjam/figjam.module.scss";

const uspData = [
  {
    title: "Real-Time Collaboration",
    content:
      "FigJam enables teams to collaborate in real time, fostering a dynamic and interactive environment for brainstorming and idea exploration.",
  },
  {
    title: "Extensive Templates",
    content:
      'With over <span style="color:#FC5185 ;"><strong>300</strong></span> ready-made templates, FigJam provides a wide range of starting points for different use cases, facilitating quick project kickoffs, flow charts, meetings, and more.',
  },
  {
    title: "AI-Powered Features",
    content:
      "The inclusion of AI features allows users to generate custom templates and visuals effortlessly. Automation capabilities, such as sorting stickies into themes or summarizing team output, enhance efficiency.",
  },
  {
    title: "Integration with Figma",
    content:
      "The seamless integration with Figma allows for a smooth transition from early thinking in FigJam to final revisions in Figma, ensuring continuity in the design and development process.",
  },
  {
    title: "Integration with Project Management Tools",
    content:
      "FigJam integrates seamlessly with popular project management tools like Asana, Jira, and Github, ensuring that ideas generated can smoothly transition into actionable tasks.",
  },
  {
    title: "AI-Powered Ideation with Jambot",
    content:
      "The inclusion of Jambot for brainstorming ideas and generating icebreakers or design concepts adds an innovative and AI-driven element to the creative process.",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
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
            <h3 className="mb-3">USP of FigJam</h3>
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
