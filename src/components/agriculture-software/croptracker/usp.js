import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../croptracker/croptracker.module.scss";

const uspData = [
  {
    title: "Harvest Quality Vision Technology",
    content:
      "Croptracker employs cutting-edge computer vision technology, Harvest Quality Vision, to objectively and accurately assess the size and quality of produce. This technology is a distinctive feature that sets Croptracker apart.",
  },
  {
    title: "Tailored Features Based on User Input",
    content:
      "The software has been developed in collaboration with growers, packers, cooperatives, and associations <span style=\"color:#f95738 ;\"><strong>since 2006</strong></span>. The emphasis is on prioritizing features that users value the most, ensuring that the software meets the specific needs of the agriculture industry.",
  },
  {
    title: "Enhanced Productivity and Connectivity",
    content:
      "Croptracker offers benefits such as enhanced productivity, a more connected workforce, and improved traceability. The cloud-based records are accessible from anywhere, allowing for greater flexibility and efficiency in farm management.",
  },
  {
    title: "Real-Time Work Crew Communications",
    content:
      "Croptracker facilitates real-time communication and activity tracking for work crews. A connected team is promoted, allowing for monitoring, task assignment, and communication with employees on the field.",
  },
  {
    title: "Analytics and Reports",
    content:
      "With the capability to generate over<span style=\"color:#f95738 ;\"><strong> 50 reports</strong></span>, Croptracker simplifies tracking a farm's progress and expedites the auditing process. This allows users to focus more on the farm and less on paperwork.",
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
            <h3 className="mb-3">USP of Croptracker</h3>
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
