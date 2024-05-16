import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Efficient Risk Mitigation",
    content:
      'ProProfs enables users to generate smart reports and advanced analytics, helping identify potential bottlenecks and enhance risk mitigation strategies.',
  },
  {
    title: "Customization for Industry Needs",
    content:
      "Tailored for various industries such as Information Technology, Marketing, Creative & Design, ProProfs allows users to customize the platform to meet industry-specific project management needs.",
  },
  {
    title: "Deadline Management and Progress Tracking",
    content:
      "Users can set deadlines, track progress, and prioritize projects effortlessly. The platform's mobile app allows for real-time updates and easy project tracking on the go.",
  },
  {
    title: "Time Tracking, Clients & Invoices",
    content:
      "ProProfs assists in managing billable and non-billable hours, simplifying client billing with automated invoicing. Users can customize invoices to add a personalized touch.",
  },
  {
    title: "Delightful Reports & Analytics",
    content:
      "The tool offers powerful analytics and generates presentation-ready reports, providing a transparent overview of project status, tasks, timelines, and financial summaries.",
  },
  {
    title: "Single Glance Project Overview",
    content:
      "ProProfs presents a single dashboard where users can view all projects at a glance, including their status, progress, time spent, and any team queries.",
  },
  {
    title: "Task Assignment and Team Management",
    content:
      "Users can efficiently assign tasks, manage workflow, and collaborate seamlessly, ensuring projects are delivered faster.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">
              USP of ProProfs Project Management Software
            </h3>
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
