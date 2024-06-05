import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../tyasuite/tya.module.scss";

const uspData = [
  {
    "title": "Streamlined Procurement to Pay Process",
    "content": "The software simplifies the procurement to pay process by centralizing all steps, making it easier to manage and execute."
  },
  {
    "title": "Enhanced Compliance Management",
    "content": "The cloud-based solution offers oversight and visibility into compliance activities, helping businesses ensure adherence to regulations and standards."
  },
  {
    "title": "Renovation for the Digital Era",
    "content": "The software helps businesses renovate and adapt to the digital era, suggesting it offers modern and innovative solutions to meet contemporary business needs."
  },
  {
    "title": "Global Leader Endorsement",
    "content": "The software is positioned as a choice for global leaders to stay ahead of competitors, implying its effectiveness and reliability in driving business success."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of TYASuite</h3>
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
