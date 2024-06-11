import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../outsystem/outsystem.module.scss";

const uspData = [
  {
    title: "High-Performance Low-Code Platform",
    content:
      "OutSystems is positioned as the <span style=\"color:#f95738 ;\"><strong> #1 Low-Code Platform® </strong></span>, uniting design, code, and deployment for high-performance innovation. The platform is designed to deliver the speed needed for developing innovative applications that can scale to millions of users.",
  },
  {
    title: "Full Stack Development and Cloud-Native Architecture",
    content:
      "OutSystems offers full-stack development capabilities and a cloud-native architecture, allowing for comprehensive and scalable solutions.",
  },
  {
    title: "Accelerated App Development",
    content:
      "The platform enables accelerated app development, making it easy to build consumer and business apps quickly.",
  },
  {
    title: "Dev to Deploy with Confidence",
    content:
      "Teams can deploy and make changes to apps with confidence using a one-click button, ensuring security and freedom from defects.",
  },
  {
    title: "Wide Range of Use Cases and Industries",
    content:
      "OutSystems caters to various use cases such as customer apps and portals, internal business apps, and core systems. It serves industries including Financial Services, Government, Healthcare, Insurance, Education, Manufacturing, Energy and Utilities, Retail, and Wholesale.",
  },
  {
    title: "Global Customer Trust",
    content:
      "OutSystems is trusted by thousands of global customers for executing big, impactful ideas at scale in high-stakes environments. Customers appreciate the platform's ability to deliver four times faster while improving quality.",
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
            <h3 className="mb-3">USP of OutSystems</h3>
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
