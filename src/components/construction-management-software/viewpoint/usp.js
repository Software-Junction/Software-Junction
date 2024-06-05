import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../procore/procore.module.scss";

const uspData = [
  {
    title: "Connected Construction Solutions",
    content:
      "Trimble Viewpoint offers connected construction project management solutions that help in delivering projects on-time and on-budget. The software facilitates seamless communication and collaboration across project management tools and mobile field solutions.",
  },
  {
    title: "Comprehensive Document and Drawing Management",
    content:
      "The platform provides an award-winning document and drawing management solution, enabling centralized control over project documents, drawings, photos, and workflows. This helps in creating one version of the truth and streamlining information and approvals across project teams.",
  },
  {
    title: "Proven Success and Long-term Partnership",
    content:
      'With more than <span style="color:#FC5185 ;"><strong>8,000</strong></span> clients globally, half of whom have been with Trimble Viewpoint for a decade or longer, the software establishes itself as a stable and long-term partner. Success stories from various construction projects demonstrate the software\'s reliability and effectiveness.',
  },
  {
    title: "Tailored for Contractors",
    content:
      "The eBook emphasizes how Viewpoint For Projects (VFP) is specifically designed for contractors, highlighting the advantages of a connected system that efficiently manages, organizes, and shares documents, drawings, and data collaboratively.",
  },
  {
    title: "Field Productivity Enhancement",
    content:
      "The Viewpoint Field View solution is highlighted as a tool that ensures teams spend more time on-site and less time on administrative work. This leads to increased productivity, time savings, cost reduction, and risk mitigation.",
  },
  {
    title: "Industry Recognition",
    content:
      "The collaboration with Sypro Contract Manager to promote compliance on construction contracts and the use of Field View at Hinkley Point C, one of Europe's largest construction projects, showcase industry recognition and adoption of Trimble Viewpoint solutions.",
  },
  {
    title: "Return on Investment (ROI)",
    content:
      'Success stories, such as Pacegrade Ltd achieving a <span style="color:#FC5185 ;"><strong>10x</strong></span> ROI by using Field View, highlight the tangible benefits and cost savings that clients can experience with Trimble Viewpoint software.',
  },
  {
    title: "Global Reach",
    content:
      "Trimble Viewpoint operates globally, with a significant user base in the UK, and its solutions are part of Trimble Connected Construction, contributing to the digital transformation of the entire architecture, engineering, and construction (AEC) industry.",
  },
  {
    title: "Innovative Approach and Empowerment",
    content:
      "Trimble's broader strategy focuses on driving the digital transformation of construction by developing innovative technology, software, and services that empower teams across the construction lifecycle, improving coordination, collaboration, productivity, quality, and transparency.",
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
            <h3 className="mb-3">USP of Viewpoint</h3>
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
