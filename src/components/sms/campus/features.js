import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Library Management" },
  { "title": "Mobile Support" },
  { "title": "Event Calendar" },
  { "title": "Kiosk System" },
  { "title": "Examination Management" },
  { "title": "Registration Management" },
  { "title": "Activities" },
  { "title": "Travel Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Fee Management" },
  { "title": "CRM integration" },
  { "title": "Reception & Front Office" },
  { "title": "Payroll Management" },
  { "title": "HR & Payroll" },
  { "title": "Document Management" },
  { "title": "Event Management" },
  { "title": "Financial Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Attendance management" },
  { "title": "User Customisation" },
  { "title": "Admission" },
  { "title": "Mass Email" },
  { "title": "SMS" },
  { "title": "CRM" },
  { "title": "Email Integration" },
  { "title": "Help Desk" },
  { "title": "Courses and Batches Management" },
  { "title": "Inventory Management" },
  { "title": "User Customisation" },
  { "title": "Classroom Management" },
  { "title": "Class Management" },
  { "title": "Class Scheduling" },
];
const moreFeatures = [
  { "title": "Vehicle Tracking" },
  { "title": "Surveys & Feedback" },
  { "title": "Student Info Management" },
  { "title": "Hostel Management" },
  { "title": "Financial Management" },
  { "title": "Academics" },
  { "title": "Time Table" },
  { "title": "Payment Gateway Integration" },
  { "title": "Fee Management" },
  { "title": "Mobile Support" },
  { "title": "SMS" },
  { "title": "Student Info Management" },
  { "title": "Attendance management" },
  { "title": "Courses and Batches Management" },
  { "title": "Travel Management" },
  { "title": "Goal Setting / Tracking" },
  { "title": "Applicant tracking" },
  { "title": "Board Meetings" },
  { "title": "Program Management" },
  { "title": "Mobile Support" },
  { "title": "GPS tracking" },
  { "title": "GPS tracking" },
  { "title": "Event Calendar" },
  { "title": "Group Registration" },
  { "title": "Bookstore Management" },
  { "title": "E-library Members Management" },
  { "title": "Strategic Planning" },
  { "title": "Student Info Management" },
  { "title": "Certification Management" },
  { "title": "SMS Integration" },
  { "title": "Role-Based Permissions" },
  { "title": "Communication Tools" },
  { "title": "Online Assessment" },
  { "title": "Real-time Chat" },
  { "title": "Event Management" },
  { "title": "Clinic Management" },
  { "title": "Document Management" },
  { "title": "Admissions Management" },
  { "title": "Alumni Management" },
  { "title": "Parent Portal" },
  { "title": "Parent/Student Portal" },
  { "title": "Franchise Management" },
  { "title": "Collaboration" },
  { "title": "Fee Collection" },
  { "title": "Biometric Attendance Management" },
  { "title": "Online Calendar" },
  { "title": "Reporting/Analytics" },
  { "title": "Expense Manager" },
  { "title": "Admissions Management" },
  { "title": "Employee Scheduling" },
  { "title": "Ad Hoc Reports" },
  { "title": "Scorecarding" },
  { "title": "Content Management" },
  { "title": "Student Information / Records" },
  { "title": "Instructor Management" },
  { "title": "Admission Receipt Generation" },
  { "title": "Higher Education" },
  { "title": "Facility Scheduling" },
  { "title": "Scheduling" },
  { "title": "Student Management" },
  { "title": "Commenting / Notes" },
  { "title": "Parent Communication" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Billing & Invoicing" },
  { "title": "Certificate Tracking" },
  { "title": "Facility Management" },
  { "title": "Online Applications" },
  { "title": "Certification Tracking" },
  { "title": "Customisable Sections" },
  { "title": "Discussion Boards" },
  { "title": "Student Manage" },
  { "title": "Group Scheduling" },
  { "title": "Faculty / Staff Management" },
  { "title": "Academics" },
  { "title": "Application Management" },
  { "title": "Key Performance Indicators" },
  { "title": "Quiz Management" },
  { "title": "Admission CRM" },
  { "title": "Badge Management" },
  { "title": "Corporate/Business" },
  { "title": "Finance Management" },
  { "title": "GPS tracking" },
  { "title": "Parent / Child Records" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Student Group Management" },
  { "title": "Online payments" },
  { "title": "Electronic Signature" },
  { "title": "Student Portal" },
  { "title": "Check-in / Check-out" },
  { "title": "Classroom Management" },
  { "title": "Teacher Dashboard" },
  { "title": "Learner Portal" },
  { "title": "Self Check-in/Check-out" },
  { "title": "SMS Integration" },
  { "title": "Customizable Forms" },
  { "title": "Class Summary"}
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
