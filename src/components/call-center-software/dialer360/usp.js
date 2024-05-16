import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Fastest Dialing",
    content:
      "Dialer360 offers the fastest dialing solutions, recognizing the importance of every second for agents, ensuring affordable costs, and maximizing lead conversion efficiency.",
  },
  {
    title: "100% Data Protection",
    content:
      "Ensures secure data handling with encrypted servers, preventing misuse by third parties and granting exclusive access to authorized administrators.",
  },
  {
    title: "99.99% Uptime",
    content:
      "Guarantees uninterrupted service availability, crucial for maintaining seamless communication and enhancing customer contact efficiency.",
  },
  {
    title: "Higher Contact Rate",
    content:
      "By utilizing Dialer360's dialer, businesses can dynamically increase contact rates up to <span style=\"color:#FC5185 ;\"><strong>5X</strong></span>, enabling more productive conversations and driving better results.",
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
            <h3 className="mb-3">USP of Dialer360</h3>
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
