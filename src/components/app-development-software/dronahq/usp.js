import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../dronahq/dronahq.module.scss";

const uspData = [
  {
    title: "Low-Code Platform",
    content:
      "DronaHQ is positioned as a low-code platform, allowing both engineering and business operations teams to build custom apps and internal tools faster than traditional coding methods.",
  },
  {
    title: "Drag-and-Drop Interface",
    content:
      "The platform offers an intuitive drag-and-drop builder for creating pixel-perfect interfaces without the need for extensive coding. This feature is emphasized as a time-saving solution for designing frontend elements.",
  },
  {
    title: "Connectivity to Various Data Sources",
    content:
      "DronaHQ allows users to connect seamlessly to databases, APIs, and third-party apps. It also provides built-in database sheets, enabling users to query and bind data sources on demand.",
  },
  {
    title: "Extensive Library of UI Controls",
    content:
      'The platform boasts a library of over <span style="color:#FC5185 ;"><strong>150</strong></span> in-built UI controls, such as Tablegrid, Card list, Charts, Dashboards, and Form controls. These controls are designed to be responsive and native across different devices.',
  },
  {
    title: "Action Configuration",
    content:
      "DronaHQ facilitates the configuration of frontend logic with actions. Users can create interactions and experiences by dragging and dropping action blocks, including validations, database queries, API calls, PDF generation, and more.",
  },
  {
    title: "Developer-Friendly",
    content:
      "The platform is built for developers and is highly extensible. It allows developers to write JavaScript anywhere in DronaHQ, import JS libraries, and build custom UI controls using a combination of no-code and pro-code tools.",
  },
  {
    title: "Publishing Flexibility",
    content:
      "DronaHQ offers a hassle-free publishing process, allowing users to publish apps across mobile and web platforms, share public links, or embed codes. The platform automatically manages versions and provides access control settings.",
  },
  {
    title: "Enterprise-Ready Security Features",
    content:
      "DronaHQ is designed to meet complex compliance requirements. It supports OAuth and SAML Single Sign-On (SSO) for seamless user login experiences. The platform also offers multiple layers of permissions and audit logs to ensure secure app deployment.",
  },
  {
    title: "Deployment Options",
    content:
      "Users have the flexibility to self-host DronaHQ on-premises in their own Virtual Private Cloud (VPC), ensuring a secure connection to sensitive data sources without exposing them publicly.",
  },
  {
    title: "Git Integration",
    content:
      "Developers can sync work-in-progress or deploy-ready apps to a Git repository, enabling smooth transitions between different environments.",
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
            <h3 className="mb-3">USP of DronaHQ</h3>
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
