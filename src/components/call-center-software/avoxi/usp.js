import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Global Voice Coverage",
    content:
      "AVOXI provides coverage in over <span style=\"color:#FC5185 ;\"><strong>150 countries</strong></span>, offering various number types and local caller ID to increase answer rates.",
  },
  {
    title: "Cloud Voice Network",
    content:
      "AVOXI ensures premium call quality by directly connecting to vetted local carriers and maintaining a high global network uptime.",
  },
  {
    title: "Intelligent SaaS Platform",
    content:
      "Their platform includes automation tools and analytics for better visibility and insights into phone number performance.",
  },
  {
    title: "Contact Center Tech Integration",
    content:
      "AVOXI integrates seamlessly with over<span style=\"color:#FC5185 ;\"><strong> 40 CCaaS</strong></span>, UCaaS, and CPaaS solutions, allowing businesses to merge voice data with CRM and service apps.",
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
            <h3 className="mb-3">USP of AVOXI</h3>
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
