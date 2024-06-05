import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../wolken-servicedesk/wolken-servicedesk.module.scss";

const uspData = [
  {
    title: "Omnichannel Support",
    content:
      "Wolken ServiceDesk offers omnichannel support, allowing customers to reach out via multiple touchpoints such as WhatsApp, Facebook, Twitter, Email, and more, ensuring accessibility and convenience.",
  },
  {
    title: "Efficient Ticket Management",
    content:
      "The platform features auto-categorization and auto-assignment of tickets, ensuring rapid response, accurate routing, and resolution based on customer needs and complexity.",
  },
  {
    title: "Enterprise Integrations",
    content:
      "Pre-built integrations with enterprise applications ensure seamless workflow and interoperability, streamlining operations and enhancing efficiency.",
  },
  {
    title: "Mobile App Accessibility",
    content:
      "With a dedicated mobile app, Wolken ServiceDesk ensures accessibility and convenience for customers on the go, enhancing user experience and satisfaction.",
  },
  {
    title: "Seamless Integration with Other Wolken Solutions",
    content:
      "Alongside customer service, Wolken offers solutions for HR case management and IT service management, providing a comprehensive suite of tools to meet diverse organizational needs.",
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
            <h3 className="mb-3">USP of Wolken ServiceDesk</h3>
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
