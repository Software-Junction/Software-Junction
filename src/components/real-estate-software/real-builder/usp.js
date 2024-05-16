import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Stability, Safety, and Security",
    content:
      "Real Builder construction software is emphasized for its stability, safety, and security. This focus on reliability ensures that real estate developers, builders, brokers, and agents can trust the software for their critical project management needs.",
  },
  {
    title: "Highly Customizable",
    content:
      "The software offers highly customizable features, providing flexibility to adapt to the unique requirements of real estate operations. This adaptability makes Real Builder an ideal solution for diverse construction projects.",
  },
  {
    title: "25 Years of Experience",
    content:
      "Real Builder comes with the backing of <span style=\"color:#FC5185 ;\"><strong>25 years</strong></span> of experience, indicating a wealth of industry knowledge and a proven track record in delivering successful projects.",
  },
  {
    title: "Successful Project Track Record",
    content:
      "The software proudly highlights the successful completion of numerous projects, showcasing its effectiveness and reliability in real-world construction scenarios.",
  },
  {
    title: "Diverse Modules for Comprehensive Project Management",
    content:
      "The software encompasses various modules covering real estate ERP, sales/billing, procurement, machine maintenance, construction, financial accounting, payroll, and inventory. This comprehensive suite allows users to manage every aspect of their projects from a centralized platform.",
  },
  {
    title: "Global Presence",
    content:
      "The company emphasizes its global presence, stating that it specializes in providing flexible business-oriented solutions to customers worldwide.",
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
            <h3 className="mb-3">USP of Real Builder by Dataman</h3>
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
