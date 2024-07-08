import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
  { "title": "Examination Management" },
  { "title": "Event Calendar" },
  { "title": "Financial Management" },
  { "title": "Courses and Batches Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Kiosk System" },
  { "title": "HR & Payroll" },
  { "title": "Admission" },
  { "title": "Library Management" },
  { "title": "Fee Management" },
  { "title": "Help Desk" },
  { "title": "Attendance management" },
  { "title": "Reception & Front Office" },
  { "title": "Event Management" },
  { "title": "Inventory Management" },
  { "title": "Activities" },
  { "title": "SMS" },
  { "title": "Email Integration" },
  { "title": "Financial Management" },
  { "title": "Registration Management" },
  { "title": "Hostel Management" },
  { "title": "Academics" },
  { "title": "Payment Gateway Integration" },
];

const moreFeatures = [
  { "title": "Fundraising Management" },
  { "title": "Clinic Management" },
  { "title": "Laboratory Management" },
  { "title": "Customized Report Cards" },
  { "title": "E-library Members Management" },
  { "title": "Student Info Management" },
  { "title": "Online Results Declaration" },
  { "title": "Time Table" },
  { "title": "Bookstore Management" },
  { "title": "Admissions Management" },
  { "title": "GPS tracking" },
  { "title": "Biometric Attendance Management" },
  { "title": "Facility Management" },
  { "title": "Attendance Tracking" },
  { "title": "Cafeteria Management" },
  { "title": "Classroom Management" },
  { "title": "Assessment Management" },
  { "title": "Scheduling" },
  { "title": "Behavior Management" },
  { "title": "Parent App" },
  { "title": "Time & Attendance Management" },
  { "title": "Special Education" },
  { "title": "Parent Portal" },
  { "title": "Data Management" },
  { "title": "Job Category Management" },
  { "title": "Student Management" },
  { "title": "Franchise Management" },
  { "title": "Staff Management" },
  { "title": "Fee Management" },
  { "title": "Finance Management" },
  { "title": "Higher Education" },
  { "title": "Curriculum Management" },
  { "title": "Transport / Fleet management" },
  { "title": "Admission Receipt Generation" },
  { "title": "Multi-Located Branched Integration" },
  { "title": "Bookstore Management" },
  { "title": "Independent / Private" },
  { "title": "Student Portal" },
  { "title": "Assessment Management" },
  { "title": "Library Management" },
  { "title": "Enrollment Management" },
  { "title": "Communication Management" },
  { "title": "Faculty Management" },
  { "title": "Event Management" },
  { "title": "K-12" },
  { "title": "Hostel Management" },
  { "title": "Parent Portal" },
  { "title": "Financial Management" },
  { "title": "Student Assessment Reports" },
  { "title": "Admission CRM" },
  { "title": "School branded App" },
  { "title": "Event Calendar" },
  { "title": "Lecture Management" },
  { "title": "Behavior Management" },
  { "title": "Online Assessment" },
  { "title": "GPS tracking" },
  { "title": "Facility Management" },
  { "title": "User Customisation" },
  { "title": "Student Information / Records" },
  { "title": "Online Payments" },
  { "title": "Cafeteria Management" },
  { "title": "Staff Management" },
  { "title": "SMS Integration" },
  { "title": "Transport / Fleet management" },
  { "title": "Higher Education" },
  { "title": "Scheduling" },
  { "title": "Finance Management" },
  { "title": "Admissions Management" },
  { "title": "Online Results Declaration" },
  { "title": "Classroom Management" },
  { "title": "Admissions Management" }
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
            <div className={styles["feature-btn"]}>
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
