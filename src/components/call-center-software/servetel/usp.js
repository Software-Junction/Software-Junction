import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Reliability and Uptime",
    "content": "Servetel guarantees <span style=\"color:#FC5185 ;\"><strong>99.99%</strong></span> uptime with <span style=\"color:#FC5185 ;\"><strong>N+1</strong></span> redundant infrastructure, ensuring stable and efficient communication between businesses and their customers."
  },
  {
    "title": "Customer Support",
    "content": "Servetel provides end-to-end customer service, offering assistance from research to post-purchase. Users can access live assistance from product experts via email, chat, and call, enhancing the overall customer experience."
  },
  {
    "title": "Client Testimonials",
    "content": "Servetel showcases positive testimonials from satisfied clients such as Cipla, OLA, Vivaan Solar, SAP, and Feather Sleep, highlighting the effectiveness and reliability of their services."
  }
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
            <h3 className="mb-3">USP of Servetel</h3>
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
