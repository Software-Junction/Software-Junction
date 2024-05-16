import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Multi-channel Platform",
    content:
      "Knowlarity offers a unified cloud-based solution that integrates various communication channels such as voice, messaging, and video, allowing businesses to engage with customers on their preferred channel.",
  },
  {
    title: "Advanced Call Management",
    content:
      "The virtual number solution comes with advanced features like call forwarding, voicemail, number masking, and real-time data insights, enabling businesses to manage their calls efficiently from anywhere.",
  },
  {
    title: "Partnership Opportunities",
    content:
      "Knowlarity offers partnership opportunities for seamless collaboration, catering to various industry verticals and ensuring smooth delivery of customer experiences.",
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
            <h3 className="mb-3">USP of Knowlarity</h3>
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
