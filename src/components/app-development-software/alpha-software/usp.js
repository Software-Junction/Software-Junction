import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../alpha-software/alpha-software.module.scss";

const uspData = [
  {
    "title": "Versatile App Development Solutions",
    "content": "Alpha Software provides both a \"No-Code App Builder\" (Alpha TransForm) and a \"Low-Code App Development\" platform (Alpha Anywhere). This versatility caters to both developers and non-developers, allowing for a wide range of users to build smartphone apps for data collection."
  },
  {
    "title": "Free App Templates and Industry Solutions",
    "content": "The platform offers free app templates to kickstart development. Industry-specific solutions are available, accelerating digital transformation for various sectors, including Manufacturing, Construction, Healthcare, Government, and more."
  },
  {
    "title": "Comprehensive Learning Resources",
    "content": "Alpha Software provides extensive learning resources, including training courses, documentation, video libraries, and webinars to support both experienced developers and those new to application development."
  },
  {
    "title": "Powerful Features of Alpha Anywhere",
    "content": "Alpha Anywhere stands out for its flexibility in web and mobile application development and deployment. Features include advanced security, offline capabilities, integration with any system through powerful APIs, and standards-based development for faster learning."
  },
  {
    "title": "Customer Testimonials and Recognition",
    "content": "Positive feedback from customers, such as the endorsement from Tom Ritter, CIO at EIS, adds credibility to the platform's effectiveness."
  },
  {
    "title": "Unique Capabilities",
    "content": "Alpha Software's low-code features optimize productivity for both citizen developers and professional developers. Patented offline app capabilities enable flawless functionality without a network connection. The platform provides full deployment capabilities and allows integration with any system using powerful APIs."
  },
  {
    "title": "Simple Licensing and Scalability",
    "content": "The platform's simple licensing model imposes no limits on the number of users, apps, or complexity, providing flexibility and scalability for various business needs."
  },
  {
    "title": "Focus on SaaS Entrepreneurs",
    "content": "Alpha Anywhere is positioned as an ideal platform for SaaS entrepreneurs, offering tiered hosting plans with no development costs until after the first commercial deployment, reducing risk."
  },
  {
    "title": "Unified Mobile and Web Development",
    "content": "Alpha Software's platform is unique in its unified approach to mobile and web app development, offering both \"no-code\" and \"low-code\" components."
  }
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
            <h3 className="mb-3">USP of Alpha Software</h3>
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
