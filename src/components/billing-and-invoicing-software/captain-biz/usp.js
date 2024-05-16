import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Trusted and Recommended",
    content:
      'Trusted by <span style="color:#FC5185 ;"><strong>46,000+</strong></span> SMBs across India and recommended by GST-Network.',
  },
  {
    title: "Flexible Pricing Plans",
    content:
      'Bronze to Diamond plans with <span style=\"color:#FC5185 ;\"><strong> 3 months </strong></span> <span style=\"color:#FC5185 ;\"><strong>10 years duration</strong></span>, offering a <span style="color:#FC5185 ;"><strong>14-day</strong></span> free trial.',
  },
  {
    title: "Social Media Presence",
    content:
      "Links to Facebook, LinkedIn, and YouTube for additional engagement.",
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
            <h3 className="mb-3">USP of CaptianBiz</h3>
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
