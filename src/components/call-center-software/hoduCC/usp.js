import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Predictive and Progressive Dialers",
    content:
      "With predictive and progressive dialing capabilities, the software maximizes agent productivity by automatically dialing multiple numbers and connecting agents with live leads efficiently.",
  },
  {
    title: "Call Recording and Logging",
    content:
      "It facilitates the recording and logging of calls for quality assurance, compliance, and training purposes, ensuring that every interaction is documented and analyzed for improvement.",
  },
  {
    title: "Auto-Dialer with Call Scripting",
    content:
      "The auto-dialer feature combined with customizable call scripting enhances agent efficiency and consistency by automating outbound dialing and guiding agents through scripted conversations with leads and customers.",
  },
  {
    title: "Dashboard with Analytics",
    content:
      "The intuitive dashboard provides actionable insights and analytics, allowing managers to track key performance metrics, monitor agent activity, and gain a deeper understanding of customer behavior.",
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
            <h3 className="mb-3">USP of HoduCC</h3>
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
