import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mag+/mag+.module.scss";

const uspData = [
  {
    title: "Seamless Multichannel Publishing",
    content:
      "Simplifies content distribution across various channels with a single click, allowing users to publish effortlessly on branded apps, websites, and social media platforms.",
  },
  {
    title: "Intuitive Interactive Content Creation",
    content:
      "Provides an intuitive drag-and-drop editor for creating and designing unique content in minutes. This feature enables users to enhance brand identity and cater to diverse enterprise requirements with engaging content.",
  },
  {
    title: "Advanced Content Management System",
    content:
      "Offers an advanced content management system that centralizes content creation, editing, and management. This streamlined approach enhances team collaboration and effectiveness, ensuring a cohesive workflow.",
  },
  {
    title: "Productivity Enhancement through Content Repurposing",
    content:
      "Facilitates easy repurposing of existing content (PDFs, HTML, or InDesign) into mobile-friendly and interactive digital outputs. This capability ensures increased productivity by leveraging and adapting the content without significant effort.",
  },
  {
    title: "Tailored Solutions for Various Industries",
    content:
      "Provides flexible digital publishing solutions catering to diverse industries, including marketing, sales enablement, product catalogs, corporate communications, and magazines/journals. This versatility makes it a go-to choice for a wide range of businesses.",
  },
  {
    title: "Trusted by Globally Recognized Brands",
    content:
      "Boasts a clientele that includes globally recognized brands such as Volvo, Harvard Business School, Maxim, United Nations, and others. This trust from industry leaders establishes it as a reliable and proven solution in the digital publishing space.",
  },
  {
    title: "Diverse Platforms Catering to Specific Needs",
    content:
      "Offers different platforms, including Now for responsive and interactive content creation without technical expertise, and Designd for creating highly interactive, multimedia layouts native to touchscreens. This versatility ensures users can choose a platform that aligns with their specific goals.",
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
            <h3 className="mb-3">USP of Mag+</h3>
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
