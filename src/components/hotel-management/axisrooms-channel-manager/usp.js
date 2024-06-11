import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../axisrooms-channel-manager/axis.module.scss";

const uspData = [
  {
    "title": "Proven Industry Experience",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>12 years</strong></span> in the industry, AxisRooms boasts a wealth of experience, having served over <span style=\"color:#f95738 ;\"><strong>5000</strong></span> hotels in <span style=\"color:#f95738 ;\"><strong>61</strong></span> countries. This extensive experience can be a reassuring factor for potential clients."
  },
  {
    "title": "Comprehensive Integration and Partnerships",
    "content": "AxisRooms has forged partnerships with <span style=\"color:#f95738 ;\"><strong>100+</strong></span> Property Management System (PMS) partners and integrated with <span style=\"color:#f95738 ;\"><strong>12+</strong></span> third-party services, ensuring seamless connectivity and compatibility."
  },
  {
    "title": "Customer Confidence and Retention",
    "content": "The mention of <span style=\"color:#f95738 ;\"><strong>12+</strong></span> customer retention highlights the satisfaction and trust of existing customers in AxisRooms' services, indicating a commitment to long-term relationships."
  },
  {
    "title": "Global Presence",
    "content": "Operating in <span style=\"color:#f95738 ;\"><strong>61+</strong></span> countries, AxisRooms has a global presence, indicating its ability to cater to diverse markets and meet the needs of hotels on an international scale."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of AxisRooms Channel Manager</h3>
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
