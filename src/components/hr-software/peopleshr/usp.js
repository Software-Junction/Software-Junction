import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../peopleshr/peop.module.scss";

const uspData = [
  {
    "title": "Data-Driven Decision Making",
    "content": "The software provides powerful analytics tools, including Predictive Analytics, Interactive Analytics, and Enterprise dashboards. This allows users to make informed decisions based on real-time insights derived from HR data."
  },
  {
    "title": "HR Ecosystem with Plug-ins",
    "content": "PeoplesHR goes beyond being just an HR software; it provides a Human Capital Solution that enables organizations to create a complete employee experience. The platform offers plug-ins to build a customized HR ecosystem tailored to the unique needs of each organization."
  },
  {
    "title": "Global Trust and Presence",
    "content": "With over a million users across <span style=\"color:#FC5185 ;\"><strong>40+ countries</strong></span> and endorsements from reputable companies like Meghna Bank Ltd, LOLC Holdings PLC, and Zaluvida Corporate SDN BHD, PeoplesHR is a trusted HR partner on a global scale."
  },
  {
    "title": "Client Testimonials and Long-Term Relationships",
    "content": "The positive testimonials from clients such as Meghna Bank Ltd, LOLC Holdings PLC, and Zaluvida Corporate SDN BHD highlight the satisfaction and long-term partnerships forged with PeoplesHR. The software's support system is particularly praised for its responsiveness and continuous assistance."
  },
  {
    "title": "Mobile Accessibility",
    "content": "PeoplesHR offers the convenience of an HR mobile app, allowing users to experience the benefits of HCM on the go. The app is available in over <span style=\"color:#FC5185 ;\"><strong>15 languages,</strong></span> enhancing accessibility for a diverse user base."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of PeoplesHR</h3>
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
