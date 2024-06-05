import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../infowanhr/info.module.scss";

const uspData = [
  {
    "title": "Time and Cost Efficiency",
    "content": "<strong>\"Save <span style=\"color:#FC5185 ;\"><strong>30 minutes</strong></span> per employee per day\":</strong> InfowanHR promises time efficiency by streamlining HR processes, suggesting that users can complete their HR tasks faster.<br/><strong>\"Get over <span style=\"color:#FC5185 ;\"><strong>10 times</strong></span> ROI\":</strong> This implies that the investment in InfowanHR yields significant returns by saving time, reducing costs, and improving overall efficiency."
  },
  {
    "title": "Fast Growth and Wide User Base",
    "content": "<strong>\"India's fastest growing HRMS Software\":</strong> Indicates that the software is gaining popularity rapidly in the Indian market.<br/><span style=\"color:#FC5185 ;\"><strong>\"15000+ Happy Clients\" and \"2700000+ Satisfied Users\":</strong></span> These figures reflect a large and satisfied user base, implying that many organizations trust and rely on InfowanHR."
  },
  {
    "title": "Global Presence",
    "content": "<span style=\"color:#FC5185 ;\"><strong>\"4+ Countries\":</strong></span> Suggests that InfowanHR is adaptable to the regulatory and operational requirements of various countries, making it suitable for international businesses."
  },
  {
    "title": "Credibility and Reliability",
    "content": "<strong>\"Infowan Technologies Pvt Ltd\":</strong> Indicates that InfowanHR is a product of a recognized and presumably reputable company.<br/><span style=\"color:#FC5185 ;\"><strong>\"15000+ Happy Clients\" and \"2700000+ Satisfied Users\":</strong></span> These numbers suggest a high level of satisfaction among existing clients, adding to the credibility of the software."
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
            <h3 className="mb-3">USP of InfowanHR</h3>
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
