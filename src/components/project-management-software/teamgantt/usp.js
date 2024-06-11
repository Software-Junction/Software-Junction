import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../teamgantt/teamgantt.module.scss";

const uspData = [
  {
    title: "Intuitive Plan-First Approach",
    content:
      "USP: TeamGantt distinguishes itself by prioritizing a plan-first approach, placing project planning at the forefront of its work management platform. TeamGantt eliminates the need for extensive training, offering a clean and simple interface for effortless project Gantt chart creation.",
  },
  {
    title: "Centralized Collaboration Hub",
    content:
      "USP: Breaking down silos, TeamGantt serves as a centralized hub for project files and communication, ensuring all team members have access to the latest documents, chats, and updates. Access tasks from any location and update progress seamlessly using the online Gantt chart software or mobile app, fostering real-time collaboration and alignment.",
  },
  {
    title: "Seamless Integration and Export Options",
    content:
      "USP: TeamGantt seamlessly integrates with popular apps like Trello, Slack, and Dropbox, offering flexibility in project management. Users can export projects in CSV or PDF formats, enabling easy sharing and presentation of project updates.",
  },
  {
    title: "Universal Applicability Across Industries",
    content:
      "USP: TeamGantt caters to a wide range of industries, making it a versatile solution for various businesses and teams. Positioned as a universal tool, TeamGantt enhances project planning and communication for any business, from digital agencies and event planning to construction companies and HR teams.",
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
            <h3 className="mb-3">USP of TeamGantt</h3>
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
