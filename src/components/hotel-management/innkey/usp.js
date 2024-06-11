import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../innkey/inn.module.scss";

const uspData = [
  {
    "title": "Integrated and Centralized Solution",
    "content": "InnKeyPMS offers a comprehensive suite of solutions covering all aspects of hotel management, including Central Reservation, Front Desk Management, Point of Sale, Banquet Management, Material Management, Housekeeping, and more."
  },
  {
    "title": "Global Connectivity and Distribution",
    "content": "The system emphasizes the importance of effective distribution for a profitable hospitality business. The Central Reservation system provides a unified view of reservations across all properties, facilitating efficient management and coordination."
  },
  {
    "title": "Third-Party Interfaces",
    "content": "The system acknowledges the critical role of interfaces in the hotel industry. These interfaces seamlessly integrate with third-party systems, ensuring smooth communication between different technologies used in hotels."
  },
  {
    "title": "Artificial Intelligence in Revenue Management",
    "content": "InnKeyPMS goes beyond traditional revenue management tactics by incorporating true artificial price intelligence. This implies a more sophisticated and automated approach to pricing strategies, potentially leading to optimized revenue for the hotel."
  },
  {
    "title": "Scalability and Easy Implementation",
    "content": "The system is scalable, accommodating the needs of hotels with varying sizes and complexities. Easy implementation of Standard Operating Procedures (SOP) ensures smooth and efficient operations."
  },
  {
    "title": "Security and Control",
    "content": "The system emphasizes the importance of data security, offering secured access to sensitive information. Better control on operations is highlighted as a benefit, providing confidence to hotel management in handling critical data."
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
            <h3 className="mb-3">USP of InnKey</h3>
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
