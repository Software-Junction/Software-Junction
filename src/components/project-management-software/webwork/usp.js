import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../webwork/webwork.module.scss";

const uspData = [
  {
    title: "Efficient Time Tracking",
    content:
      "Automatic time tracking on various devices and browsers. Billable hours tracking for accurate payments. Flexible manual time entry option for convenience.",
  },
  {
    title: "Integrated Project and Task Management",
    content:
      "Manage projects and tasks seamlessly in one platform. Task organization with file attachments and priority determination.",
  },
  {
    title: "User-Friendly Interface and Collaboration",
    content:
      "Collaborative team chat for communication and file sharing. Dashboard displaying tasks, activity, and time tracking features for efficient management.",
  },
  {
    title: "Customizable and Detailed Reporting",
    content:
      "Customize and generate detailed reports for analytics. Analyze activity levels based on keyboard strokes, mouse clicks, and time spent on platforms.",
  },
  {
    title: "Award-Winning and Trusted Software",
    content:
      'Positive reviews from <span style="color:#FC5185 ;"><strong>140K+</strong></span> happy users. Recognized for excellence and user satisfaction.',
  },
  {
    title: "Data Security and GDPR Compliance",
    content:
      "GDPR-compliant for data privacy and security. Screenshots are end-to-end encrypted and stored on <span style=\"color:#FC5185 ;\"><strong> Amazon S3 cloud</strong></span>.",
  },
  {
    title: "Exceptional Customer Support",
    content:
      '<span style="color:#FC5185 ;"><strong>24/7</strong></span> customer support with a <span style="color:#FC5185 ;"><strong>1.5-hour</strong></span> average response time. Remarkable <span style="color:#FC5185 ;"><strong>99%</strong></span> customer happiness rating.',
  },
  {
    title: "Proven Time and Cost Savings",
    content:
      'Teams using WebWork save an average of <span style="color:#FC5185 ;"><strong>41:30</strong></span> hours per month. Increased productivity by <span style="color:#FC5185 ;"><strong>25%</strong></span> on average after <span style="color:#FC5185 ;"><strong>3</strong></span> months of use. Potential to increase revenue by an average of <span style="color:#FC5185 ;"><strong>$799.6</strong></span> per month.',
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
            <h3 className="mb-3">USP of WebWork Tracker</h3>
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
