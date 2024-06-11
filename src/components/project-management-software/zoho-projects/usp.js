import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../zoho-projects/zoho-projects.module.scss";

const uspData = [
  {
    title: "Feature-Rich Functionality",
    content:
      "The platform is praised for its rich feature set, including Gantt charts, timesheets, task automation, and seamless integration with other Zoho apps and third-party applications.",
  },
  {
    title: "Seamless Integration",
    content:
      "Zoho Projects provides the advantage of integrating with various Zoho apps and third-party applications such as Zoho CRM, Zendesk, Slack, GitHub, JIRA, Zapier, Dropbox, <span style=\"color:#f95738 ;\"><strong> Office 365</strong></span>, and more, offering a holistic ecosystem for users.",
  },
  {
    title: "Customer Testimonials and Recognition",
    content:
      "The platform showcases positive feedback from users, including testimonials from companies like HDFC, Dell, Airbus, Tata Chemicals, Vodafone, Sodexo, and TurningWest. It has also received accolades from reputable sources like PCMag.",
  },
  {
    title: "Security and Reliability",
    content:
      "Zoho Projects emphasizes its commitment to security with <span style=\"color:#f95738 ;\"><strong> ISO 27001</strong></span> enterprise-grade standards, providing users with a reliable and secure environment for their project management needs.",
  },
  {
    title: "Free and Affordable Options",
    content:
      "Zoho Projects offers a free version with essential features, making it accessible to users looking for a quality project management platform without compromising functionality. The platform also provides free trials for its paid editions.",
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
            <h3 className="mb-3">USP of Zoho Projects</h3>
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
