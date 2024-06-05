import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ameyo/ameyo.module.scss";

const uspData = [
  {
    title: "Video Chat Integration",
    content:
      "Their solutions include video contact center capabilities, enabling humanized interactions and enhanced customer engagement.",
  },
  {
    title: "WhatsApp Business API",
    content:
      "Integration with WhatsApp Business API allows for accelerated sales and efficient customer support through the popular messaging platform.",
  },
  {
    title: "Real-Time Communication Integration",
    content:
      "Their communication platform allows businesses to integrate real-time communications without the need for owning or building a separate system.",
  },
  {
    title: "Truecaller Verified ID Integration",
    content:
      "Integration with Truecaller for Business helps increase call pick-up rates, improving overall customer communication effectiveness.",
  },
  {
    title: "Industry Recognition",
    content:
      "Ameyo has received several awards and recognitions, including mentions in Gartner Magic Quadrant, Frost & Sullivan Asia Pacific CCI Leadership Award, and Deloitte Technology Fast<span style=\"color:#FC5185 ;\"><strong> 500</strong></span> Asia Pacific.",
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
            <h3 className="mb-3">USP of Ameyo</h3>
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
