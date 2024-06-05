import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../enthu/enthu.module.scss";

const uspData = [
  {
    title: "Capture Customer Voice",
    content:
      "Enthu.AI gathers customer conversations from various channels such as phone calls, chats, tickets, and video conferences.",
  },
  {
    title: "Generate Insights",
    content:
      "It provides insights for multiple teams by running automated quality management programs, monitoring conversations at scale, and identifying revenue opportunities.",
  },
  {
    title: "Coach Agents",
    content:
      "Enthu.AI evaluates agent performance, provides timely coaching interventions, and aims to transform mediocre agents into top performers.",
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
            <h3 className="mb-3">USP of Enthu</h3>
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
