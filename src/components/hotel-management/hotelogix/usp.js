import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Centralized Dashboard for Multiple Properties",
    "content": "Hotelogix enables the management of multiple properties through a single dashboard, streamlining operations and providing a comprehensive overview of all hotel activities."
  },
  {
    "title": "Increased Revenue and Profitability",
    "content": "Customer testimonials highlight significant benefits, including a <span style=\"color:#FC5185 ;\"><strong>20%</strong></span> increase in revenues, a <span style=\"color:#FC5185 ;\"><strong>45%</strong></span> boost in online bookings, and increased profitability for hotels using Hotelogix."
  },
  {
    "title": "Efficient Operations and Time Savings",
    "content": "The software claims to result in a <span style=\"color:#FC5185 ;\"><strong>60%</strong></span> savings in staff time, thanks to features such as a simple mobile PMS, a smart channel manager for real-time updates, and grid-based dashboards for efficient front desk operations."
  },
  {
    "title": "Comprehensive Functionality",
    "content": "Hotelogix covers a wide range of hotel management functions, including reservations, daily operations optimization, payment handling, housekeeping management, and more. The system provides over <span style=\"color:#FC5185 ;\"><strong>100</strong></span> operations reports to aid in intelligent decision-making."
  },
  {
    "title": "Global Presence",
    "content": "Hotelogix is trusted by hoteliers in over <span style=\"color:#FC5185 ;\"><strong>100</strong></span> countries, indicating its global acceptance and reliability in diverse hospitality environments."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Hotelogix</h3>
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
