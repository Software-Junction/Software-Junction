import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../appy-pie/appy-pie.module.scss";

const uspData = [
  {
    title: "Affordability",
    content:
      "Appy Pie offers a no-code development platform that costs at least  <span style=\"color:#f95738 ;\"><strong> 1/10th </strong></span>of the industry standards, making it highly accessible to businesses and individuals with varying budgets.",
  },
  {
    title: "Speed and Efficiency",
    content:
      "The platform enables users to bring their products to market ten times faster than competitors, eliminating the traditionally long waiting times associated with software development. This speed is crucial for businesses looking to stay agile and competitive.",
  },
  {
    title: "AI-Powered Design Tools",
    content:
      "The inclusion of AI-powered design features, such as the AI Text to Image Generator, AI Text to Logo Generator, and more, sets Appy Pie apart. It enhances the design process, making it faster, smarter, and more efficient, even for users without design skills.",
  },
  {
    title: "Multilingual Support",
    content:
      "Appy Pie supports a wide array of languages, breaking language barriers and catering to a global audience. Users can create apps and websites in their preferred language, fostering inclusivity.",
  },
  {
    title: "Comprehensive Workflow Automation",
    content:
      "The platform goes beyond app development, offering a no-code workflow automation platform. Users can create efficient integrations and automate workflows without delving into complex coding, enhancing overall business operations.",
  },
  {
    title: "Business Process Automation Suite",
    content:
      "Appy Pie's suite includes Helpdesk, Live Chat, and Chatbot Builder, providing a comprehensive solution for managing customer queries, providing live support, and improving customer satisfaction. This integrated approach sets it apart in the market.",
  },
  {
    title: "Continuous Learning and Improvement",
    content:
      "Appy Pie's platform leverages AI and Machine Learning for real-time error detection, customized feature development, and adaptive learning. The platform continuously refines its algorithms, ensuring an evolving and user-centric development experience.",
  },
  {
    title: "Future-Proof Technology",
    content:
      "Positioned as the future of applications, Appy Pie's No-Code Platform embraces the evolving landscape of technology. It aligns with the shift towards no-code and low-code solutions, ensuring users stay ahead of the curve.",
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
            <h3 className="mb-3">USP of Appy Pie</h3>
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
