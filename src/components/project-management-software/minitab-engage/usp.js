import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../minitab-engage/minitab-engage.module.scss";

const uspData = [
  {
    title: "Idea Generation and Culture of Innovation",
    content:
      "Minitab Engage encourages organizations to build a culture of innovation by inviting ideas from all members of the organization. The platform provides a fully customizable idea form, making it easy for employees to submit their ideas at any time and from anywhere.",
  },
  {
    title: "Idea Evaluation and Alignment with Initiatives",
    content:
      "The idea forms within Minitab Engage prompt submitters to evaluate their ideas based on criteria important to the organization. Criteria may include alignment with critical business initiatives, helping organizations prioritize ideas that contribute to strategic goals. The platform automatically calculates weighted benefit, effort, and risk ratings, providing a comprehensive assessment for decision-making.",
  },
  {
    title: "Real-Time Tracking and Measurement of ROI",
    content:
      "Minitab Engage stands out by offering real-time tracking of key performance metrics, allowing organizations to measure the Return on Investment (ROI) of their improvement initiatives. This emphasis on real-time measurement provides insight into the effectiveness of ongoing projects, enabling quick adjustments if needed.",
  },
  {
    title: "Support for Various Improvement Methodologies",
    content:
      "Minitab Engage caters to organizations using different improvement methodologies such as Lean, Six Sigma, or customized blends. The platform provides a comprehensive set of customizable Lean tools, facilitating the elimination of waste and the addition of value to processes. Customizable Roadmaps™ guide project teams through various methodologies, ensuring efficient project execution, including Kaizen Events and Just Do It projects.",
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
            <h3 className="mb-3">USP of Minitab Engage</h3>
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
