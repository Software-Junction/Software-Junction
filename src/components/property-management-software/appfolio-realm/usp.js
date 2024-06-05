import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../appfolio-realm/appfolio-realm.module.scss";

const uspData = [
  {
    title: "Centralized Data",
    content:
      "AppFolio provides a single platform where all real estate management data is centralized, offering endless possibilities for transforming team workflows through automation and AI.",
  },
  {
    title: "Maximized Productivity",
    content:
      "Automation and AI tools are employed to maximize productivity, allowing teams to focus more on critical tasks.",
  },
  {
    title: "Unrivaled Experience",
    content:
      "Intuitive Design: The platform offers an intuitive and easy-to-use design that seamlessly translates across devices, ensuring effortless interactions for teams, residents, and investors anytime, anywhere.",
  },
  {
    title: "Seamless Integrations",
    content:
      "AppFolio Stack™ Marketplace: Users can build a customized tech stack that aligns with their business operations by integrating best-in-class services from the AppFolio Stack™ Marketplace directly into the platform.",
  },
  {
    title: "Unmatched ROI",
    content:
      "Goal-Oriented Coaching: Expert coaching based on users' goals is provided to ensure they take full advantage of the platform's capabilities, with a focus on achieving unmatched return on investment.",
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
            <h3 className="mb-3">USP of AppFolio Realm</h3>
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
