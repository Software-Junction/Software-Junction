import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Payment Gateway Integration" },
  { "title": "Mobile Support" },
  { "title": "Examination Management" },
  { "title": "Fee Management" },
  { "title": "Document Management" },
  { "title": "Registration Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Vehicle Tracking" },
  { "title": "Admission" },
  { "title": "Collaboration" },
  { "title": "User Customisation" },
  { "title": "Library Management" },
  { "title": "Financial Management" },
  { "title": "Transport / Fleet management" },
  { "title": "Activities" },
  { "title": "Attendance management" },
  { "title": "Faculty Management" },
  { "title": "Staff Management" },
  { "title": "Bookstore Management" },
  { "title": "Higher Education" },
  { "title": "Assessment Management" },
  { "title": "Role-Based Permissions" },
  { "title": "SMS Integration" },
  { "title": "Event Management" },
  { "title": "Inventory Management" },
  { "title": "Email Integration" },
  { "title": "SMS" },
  { "title": "Time Table" },
  { "title": "Enrollment Management" },
  { "title": "K-12" },
  { "title": "School Management" },
  { "title": "Mobile App" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Polls / Voting" },
  { "title": "Fee Collection" },
  { "title": "Reception & Front Office" },
  { "title": "Student Info Management" },
  { "title": "Student Evaluation Report" },
  { "title": "Role-Based Permissions" },
  { "title": "Polls / Voting" },
  { "title": "Classroom Management" },
  { "title": "User Customisation" },
  { "title": "Collaboration" },
  { "title": "Staff Management" },
  { "title": "Bookstore Management" },
  { "title": "User Customisation" },
  { "title": "SMS" },
  { "title": "Higher Education" },
];
const moreFeatures = [
 
  { "title": "Library Management" },
  { "title": "Classroom Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Email Integration" },
  { "title": "Events Calendar" },
  { "title": "Fee Management" },
  { "title": "Mobile App" },
  { "title": "Student Info Management" },
  { "title": "Time Table" },
  { "title": "Transport / Fleet management" },
  { "title": "Online payments" },
  { "title": "Class Management" },
  { "title": "Online Registration" },
  { "title": "Student Management" },
  { "title": "Admission CRM" },
  { "title": "Class Scheduling" },
  { "title": "Report Cards" },
  { "title": "Barcoding/RFID" },
  { "title": "Parent Portal" },
  { "title": "Customized Report Cards" },
  { "title": "Voting Management" },
  { "title": "Communication Management" },
  { "title": "Online Calendar" },
  { "title": "Parent/Student Portal" },
  { "title": "Text Messaging" },
  { "title": "GPS tracking" },
  { "title": "For Classroom" },
  { "title": "Grade Calculations" },
  { "title": "Student Information / Records" },
  { "title": "Discussion Boards" },
  { "title": "Alumni Management" },
  { "title": "Online Assessment" },
  { "title": "Photo Gallery" },
  { "title": "Teacher App" },
  { "title": "Application Management" },
  { "title": "Room Scheduling" },
  { "title": "Tests/Assessments" },
  { "title": "Online Applications" },
  { "title": "School Bus Attendance" },
  { "title": "Academic/Education" },
  { "title": "Refund Automation" },
  { "title": "Certification Management" },
  { "title": "For Private Schools" },
  { "title": "Parent App" },
  { "title": "Gradebook" },
  { "title": "School branded App" },
  { "title": "Application Management" },
  { "title": "Colleges / Universities" },
  { "title": "Room Scheduling" },
  { "title": "Online Calendar" },
  { "title": "Photo Gallery" },
  { "title": "Refund Automation" },
  { "title": "Interactive Learning" }
];

const Fedfeatures = ({ styles }) => {
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
            <div className={styles["fed-feature-btn"]}>
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

export default Fedfeatures;
