import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Hotel Operations Management",
    "content": "Hot Inn ERP provides an all-inclusive system that covers various aspects of hotel operations, including front office management, reservations, billing, housekeeping, and payments. This comprehensive approach simplifies the end-to-end processes, making it a one-stop solution for hotel management needs."
  },
  {
    "title": "Enhanced Booking Experience",
    "content": "Hot Inn ERP is designed to increase bookings in both short- and long-term scenarios. By incorporating advanced technology, the software facilitates a seamless online booking journey for guests, from the initial reservation to the end of their stay. This not only improves the booking process but also contributes to a positive overall guest experience."
  },
  {
    "title": "Tailored for the Global Economic Climate",
    "content": "Hot Inn ERP is positioned as an essential tool for effective hotel management in the global economic climate. The software is equipped with features that cater to the dynamic nature of the hospitality industry, ensuring adaptability and relevance in diverse market conditions."
  },
  {
    "title": "Tailored for the Indian Hospitality Industry",
    "content": "Hot Inn ERP is specifically designed for the unique needs of the Indian hospitality industry. Understanding the local market dynamics and requirements, the software offers features tailored to the nuances of hotel management in India."
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
            <h3 className="mb-3">USP of MMI HOT inn - Hotel Software</h3>
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
