import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../kooba/kob.module.scss";

const uspData = [
  {
    "title": "Multi-Location Management",
    "content": "Ideal for institutions with multiple branches, KOOBA™ allows centralized or decentralized control of library acquisitions. This feature is especially beneficial for public libraries spread across different regions, offering a unified solution for efficient management."
  },
  {
    "title": "Time-Efficient Data Entry",
    "content": "The software simplifies data entry processes by allowing manual entry of members and books or bulk uploading through Excel. This feature speeds up the implementation of the library software, saving time and effort during the transition."
  },
  {
    "title": "Notifications and Alerts",
    "content": "KOOBA™ facilitates automated notifications through emails and SMS, keeping library members informed about due dates. This proactive communication helps in reducing overdue books and ensures a smoother library operation."
  },
  {
    "title": "Barcode Enabled Operations",
    "content": "The implementation of barcode generation and RFID ensures seamless book issuance and return processes. The system supports member card scanning and book barcode scanning, automating tasks and reducing the likelihood of errors in tracking books."
  },
  {
    "title": "Real-Time and Mobile Operation",
    "content": "KOOBA™ provides real-time information accessible anytime, anywhere through the internet. Librarians can issue and return books using their mobile devices, providing flexibility and allowing them to manage library operations on the go."
  },
  {
    "title": "Security Measures",
    "content": "Security is a priority, and KOOBA™ ensures that information is access-based and password-protected. This feature instills confidence in users, assuring them that their library data is secure and protected from unauthorized access."
  },
  {
    "title": "Robust Reporting and Analytics",
    "content": "KOOBA™ offers a variety of reports, dashboards, graphs, and charts to aid decision-making. These analytical tools provide insights into various aspects of library management, including circulation, member engagement, and inventory status."
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
            <h3 className="mb-3">USP of KOOB Library</h3>
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
