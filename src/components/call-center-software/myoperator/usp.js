import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "No-Code, Zero-Deployment Platform",
    content:
      "MyOperator's platform requires no coding skills and can be set up instantly, making it easy for businesses to implement without IT hassle.",
  },
  {
    title: "Empower Your Mobile Workforce",
    content:
      "MyOperator equips mobile teams with essential communication tools, enabling seamless connectivity and productivity from anywhere.",
  },
  {
    title: "Powerful Reporting",
    content:
      "Gain valuable insights from real-time analytics and customizable reports, allowing businesses to track performance and make informed decisions.",
  },
  {
    title: "30-Second Call Set-Up",
    content:
      "MyOperator boasts a quick and easy setup process, allowing businesses to start using its communication tools within seconds, minimizing downtime.",
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
            <h3 className="mb-3">USP of MyOperator</h3>
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
