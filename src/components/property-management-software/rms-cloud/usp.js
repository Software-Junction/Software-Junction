import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../rms-cloud/rms-cloud.module.scss";

const uspData = [
  {
    title: "Global Trust",
    content:
      'Trusted by over <span style="color:#FC5185;"><strong>7,000</strong></span> properties in <span style="color:#FC5185;"><strong>70</strong></span> countries with a user base of <span style="color:#FC5185;"><strong>184,000</strong></span> global users. Over <span style="color:#FC5185;"><strong>40 years</strong></span> of industry expertise, making RMS a market leader.',
  },
  {
    title: "Scalability and Flexibility",
    content:
      'Built as an enterprise-enabled solution, RMS is scalable for large hospitality groups. Centralized database for multiple properties, group-level functionality, and <span style="color:#FC5185;"><strong>550+</strong></span> integration partners for a customized tech stack.',
  },
  {
    title: "Innovative Technology",
    content:
      "RMS Cloud introduces innovative solutions such as smart-room tablets, mobile apps, and RMS Pay to enhance guest interactions and streamline payment processes.",
  },
  {
    title: "Global Reach",
    content:
      "Available in multiple verticals including hotels/resorts, serviced apartments, motels/lodges, holiday parks/campgrounds, and more.",
  },
  {
    title: "Enterprise Features",
    content:
      'RMS offers group-level functionality, customizable dashboards, <span style="color:#FC5185;"><strong>360-degree</strong></span> reporting, and a range of enterprise features designed for businesses with multiple properties.',
  },
  {
    title: "Innovative Payment Solutions",
    content:
      "Introduction of RMSPAY for seamless and efficient payment processing.",
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
            <h3 className="mb-3">USP of RMS Cloud</h3>
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
