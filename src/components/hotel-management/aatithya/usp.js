import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../aatithya/aat.module.scss";

const uspData = [
  {
    "title": "Booking Engine",
    "content": "AATITHYA includes a Booking Engine that helps hotels increase their bookings directly through their websites, providing a user-friendly and seamless experience for potential guests."
  },
  {
    "title": "Restaurant POS Management",
    "content": "The Restaurant POS feature enables efficient management of restaurant billing, food and beverage services, takeaways, and home deliveries. The touch screen Point of Sale system enhances functionality on standard PCs."
  },
  {
    "title": "Front Office Management",
    "content": "The front office operations are handled seamlessly, allowing staff to perform tasks quickly and encouraging effective communication with guests."
  },
  {
    "title": "Back Office Management",
    "content": "The Back Office module covers functions such as materials management, food and beverage costing, and back-office accounting. It incorporates a Universal System of Hotel Accounting Policy with advanced reports."
  },
  {
    "title": "Banquet Management System",
    "content": "A featured-packed Banquet Management System is provided, ideal for food catering businesses in hotels, banquet halls, marriage lawns, and event booking for both indoor and outdoor catering."
  },
  {
    "title": "Club Management Software",
    "content": "AATITHYA Club Management Software oversees the overall operations of clubs, including spa management, billing, member management, facilities billing, payroll, check-in, and POS."
  },
  {
    "title": "Night Audit Software",
    "content": "A <span style=\"color:#FC5185 ;\"><strong>360-degree</strong></span> view of every transaction, including night audit trails, enhances data security for hotel operations."
  },
  {
    "title": "Procurement & Purchase Management",
    "content": "A unique Purchase Management Software Module is designed for hotels, covering aspects such as recipe costing, hotel inventory, and cost control."
  },
  {
    "title": "Housekeeping Management",
    "content": "The housekeeping module includes features like room status tracking, auto-posting remarks for the housekeeping department, staff management, and work order maintenance."
  },
  {
    "title": "Payroll Management",
    "content": "A payroll module allows tracking and management of staff/employee time attendance, schedules, leaves, and other activities."
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
            <h3 className="mb-3">USP of Aatithya</h3>
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
