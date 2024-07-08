import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
  { "title": "Event Management" },
  { "title": "Inventory Management" },
  { "title": "Academics" },
  { "title": "Courses and Batches Management" },
  { "title": "Fee Management" },
  { "title": "Reception & Front Office" },
  { "title": "Library Management" },
  { "title": "Time Table" },
  { "title": "Examination Management" },
  { "title": "Registration Management" },
  { "title": "Attendance management" },
  { "title": "Transport / Fleet management" },
  { "title": "Financial Management" },
  { "title": "Hostel Management" },
  { "title": "Event Calendar" },
  { "title": "HR & Payroll" },
  { "title": "Mobile App" },
  { "title": "SMS" },
  { "title": "Payment Gateway Integration" },
  { "title": "Admission" },
  { "title": "Activities" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Payroll Management" },
  { "title": "Database backup/restore (Management)" }
];
const moreFeatures = [
  { "title": "Communication Management" },
  { "title": "Parent App" },
  { "title": "Fee Collection" },
  { "title": "Bookstore Management" },
  { "title": "Data Management" },
  { "title": "Colleges / Universities" },
  { "title": "Academic/Education" },
  { "title": "Grade Calculations" },
  { "title": "Teacher Dashboard" },
  { "title": "Staff Management" },
  { "title": "School Libraries" },
  { "title": "Certification Management" },
  { "title": "GPS tracking" },
  { "title": "Admissions Management" },
  { "title": "Class Management" },
  { "title": "Attendance Tracking" },
  { "title": "K-12" },
  { "title": "Student Management" },
  { "title": "Fixed Asset Management" },
  { "title": "Parent Portal" },
  { "title": "School branded App" },
  { "title": "Teacher App" },
  { "title": "Calendar Management" },
  { "title": "Student Portal" },
  { "title": "Employee Management" },
  { "title": "Individual Reports" },
  { "title": "SMS Integration" },
  { "title": "Student Information / Records" },
  { "title": "School Management" },
  { "title": "Photo Gallery" },
  { "title": "Report Cards" },
  { "title": "Barcoding/RFID" },
  { "title": "Data Management" },
  { "title": "Fee Collection" },
  { "title": "Colleges / Universities" },
  { "title": "GPS tracking" },
  { "title": "School Libraries" },
  { "title": "Teacher Dashboard" },
  { "title": "Classroom Management" },
  { "title": "Individual Reports" },
  { "title": "Student Portal" },
  { "title": "Parent App" },
  { "title": "Communication Management" },
  { "title": "Class Management" },
  { "title": "Certification Management" },
  { "title": "Bookstore Management" },
  { "title": "Gradebook" },
  { "title": "Attendance Tracking" },
  { "title": "Fixed Asset Management" },
  { "title": "Employee Management" },
];

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#f95738 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {feature.title}
                </h5>
              </div>
            </Col>
          ))}

          {isShowMore && 
          <>
          {moreFeatures.map((featureM, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#f95738 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {featureM.title}
                </h5>
              </div>
            </Col>
          ))}
          </>
          }
          <Col lg={12}>
            <div className={styles["cha-feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
