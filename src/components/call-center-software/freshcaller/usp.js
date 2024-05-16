import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Intuitive and Scalable",
    content:
      "Freshcaller allows businesses to set up their contact center quickly and efficiently. It offers advanced inbound routing and supports global operations with options to bring your own carrier or purchase numbers from over<span style=\"color:#FC5185 ;\"><strong> 90 countries </strong></span>.",
  },
  {
    title: "Effortless Performance",
    content:
      "Freshcaller provides insights into customer interactions through call recordings, post-call transcripts, and live dashboards. This helps in monitoring agent performance and ensuring customer satisfaction.",
  },
  {
    title: "Omnichannel Service",
    content:
      "Freshcaller seamlessly integrates with Freshdesk, allowing users to make calls within the helpdesk platform and convert calls to tickets with a single click. This facilitates continuity in customer conversations across multiple channels.",
  },
  {
    title: "Better Together with Freshdesk and Freshworks Neo",
    content:
      "Freshcaller is part of the Freshworks ecosystem, enabling businesses to deliver exceptional customer experiences. Integration with Freshdesk and Freshworks Neo platform enhances support capabilities, offering unified messaging API, easy integrations, and customizable analytics.",
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
            <h3 className="mb-3">USP of Freshcaller</h3>
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
