import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../leadforce/lead.module.scss";

const uspData = [
  {
    "title": "99.9% Lead Performance",
    "content": "LeadForce ensures an exceptional lead performance, recovering around <span style=\"color:#FC5185 ;\"><strong>25%</strong></span> of a company's loss in inbound call traffic."
  },
  {
    "title": "Effective CRM Performance",
    "content": "LeadForce is a vital solution for CRM, enhancing communication between companies and customers by <span style=\"color:#FC5185 ;\"><strong>100%.</strong></span>"
  },
  {
    "title": "Global Vision and Location Independence",
    "content": "LeadForce operates globally, thinking big, drawing inspiration from human values, and emphasizing sustainability, all while being location-independent."
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
            <h3 className="mb-3">USP of LeadForce</h3>
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
