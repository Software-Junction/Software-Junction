import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "User-Friendly Interface",
    "content": "Boasting an intuitive design, HDSchool ensures simplicity in complex tasks. From fee management to homework assignments, the software caters to administrators, teachers, and staff of varying technical expertise, providing an accessible and efficient user experience."
  },
  {
    "title": "Flexible Fee Management",
    "content": "Recognizing the intricate nature of fee structures, HDSchool allows administrators to define various fee types, set penalty rules, and accept payments in multiple forms - be it cash, credit card, NEFT, or cheque."
  },
  {
    "title": "Efficient Homework Management",
    "content": "HDSchool streamlines homework processes by facilitating easy creation, assignment, and status tracking. Notifications regarding homework assignments are sent to parents via SMS/Email, with the option to attach external documents for enhanced communication."
  },
  {
    "title": "Dynamic Time Table Generation",
    "content": "Offering flexibility in timetable management, HDSchool enables the generation of timetables with adjustments based on staff/teacher availability. It adheres to school rules for breaks, ensuring a dynamic and efficient scheduling system."
  },
  {
    "title": "Comprehensive Attendance Tracking",
    "content": "HDSchool provides two modes of attendance management - day-wise and class-wise. Administrators can add attendance subject-wise or on a daily basis, and detailed attendance reports can be generated for analysis."
  },
  {
    "title": "Integrated Library Management",
    "content": "Simplifying library tasks, HDSchool allows easy cataloging of books and tracks records of issued, reissued, and overdue books. It also manages the quantity of each library item and maintains a database of library members."
  },
  {
    "title": "Accurate Payroll Processing",
    "content": "HDSchool's payroll module facilitates the creation of different salary structures for teaching and non-teaching staff. It automates leave management and ensures precise calculations of net and gross salaries."
  },
  {
    "title": "Robust Reporting System",
    "content": "With a range of reports, including daily fee collection, student pending fees, mark sheets/certificates, and attendance reports, HDSchool empowers administrators with insights for informed decision-making in their daily activities."
  },
  {
    "title": "Online Parent Portal",
    "content": "Enhancing communication, HDSchool provides an easily accessible online portal for parents. This feature fosters engagement by allowing parents to stay informed about their child's academic progress and other school-related activities."
  }
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Hdusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of HD School</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["hds-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Hdusp;
