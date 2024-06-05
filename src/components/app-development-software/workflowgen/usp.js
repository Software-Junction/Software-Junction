import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../workflowgen/workflowgen.module.scss";

const uspData = [
  {
    title: "Low-Code Simplicity without Compromises",
    content:
      "WorkflowGen enables the simplicity of low-code environments without imposing the compromises often associated with such platforms. Users can create fluid, integrated, and adaptive workflows with ease, maximizing efficiency.",
  },
  {
    title: "Trusted by Global Corporations",
    content:
      'WorkflowGen has earned the trust of hundreds of corporations worldwide, including industry giants like <span style="color:#FC5185 ;"><strong>3M</strong></span>, ABB, Abbott, KPMG, OTIS,Safran, Sony, and Toshiba. This endorsement highlights its reliability and suitability for diverse business needs.',
  },
  {
    title: "Highly Integrated Processes with Innovative Technologies",
    content:
      "WorkflowGen leverages innovative technologies such as GraphQL API, webhooks, and Node.js integrations. This enables highly integrated processes for mobile apps, web applications, and microservices, offering extensive customization and data manipulation possibilities.",
  },
  {
    title: "Cloud-Optimized for Seamless Integration",
    content:
      "WorkflowGen seamlessly connects processes to cloud-based ecosystems with optimized support for Microsoft Graph, Google APIs, and Azure. This ensures compatibility with <span style=\"color:#FC5185 ;\"><strong>Office 365</strong></span>, G Suite, and other collaboration tools, aligning with modern cloud-based workflows.",
  },
  {
    title: "Enhance Digital Business with Battle-Tested Automation",
    content:
      "WorkflowGen empowers organizations to enhance their software or application offerings with a battle-tested, high-performance process automation component. The platform's low-code and highly configurable workflow engine and form designer contribute to increased team efficiency.",
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
            <h3 className="mb-3">USP of WorkflowGen</h3>
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
