import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../intellij-idea/intellij-idea.module.scss";

const uspData = [
  {
    title: "Advanced Coding Assistance",
    content:
      "Write high-quality code faster with intelligent coding assistance features. Seamless education on community best practices, new language features, and more.",
  },
  {
    title: "Deep Code Understanding",
    content:
      "IntelliJ IDEA has extensive knowledge about your code, offering fast navigation and intelligent suggestions in every context.",
  },
  {
    title: "Collaborative and Remote Development",
    content:
      "Real-time collaboration with teams. Create shared sessions for code review, debugging, etc. Move projects to remote machines for enhanced productivity on any laptop.",
  },
  {
    title: "Ultimate Experience",
    content:
      "Ultimate version includes tools for Web development, Profiling, Spring, Jakarta EE, Database tools, Cloud, and Deployment, Remote Development, and an AI Assistant.",
  },
  {
    title: "AI Assistant",
    content:
      "Context-aware AI chat for programming queries. AI helps in generating clear and helpful commit messages. Provides error explanations, solution suggestions, and assists in implementing algorithms.",
  },
  {
    title: "Latest Features (2024.1)",
    content:
      'General Availability of JetBrains AI Assistant with enhanced code generation and context-aware AI chat. Full support for <span style="color:#FC5185 ;"><strong>Java 21</strong></span> features. Run to Cursor inlay option in the debugger. Out-of-the-box Kubernetes development experience in Ultimate edition.',
  },
  {
    title: "Trusted by Leading Companies",
    content:
      "Companies worldwide, including Expedia, Visa, BMW, Samsung, Twitter, and Volkswagen, trust IntelliJ IDEA for their development needs.",
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
            <h3 className="mb-3">USP of IntelliJ IDEA </h3>
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
