import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
  { "title": "Event Calendar" },
  { "title": "Inventory Management" },
  { "title": "CRM" },
  { "title": "Time & Attendance Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Transport / Fleet management" },
  { "title": "Examination Management" },
  { "title": "Courses and Batches Management" },
  { "title": "Reception & Front Office" },
  { "title": "Payroll Management" },
  { "title": "Activities" },
  { "title": "User Customisation" },
  { "title": "Library Management" },
  { "title": "Financial Management" },
  { "title": "Admission" },
  { "title": "Attendance management" },
  { "title": "Mobile App" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Help Desk" },
  { "title": "Kiosk System" },
  { "title": "Payment Gateway Integration" },
  { "title": "Fee Management" },
  { "title": "Email Integration" },
  { "title": "Event Management" },
  { "title": "Hostel Management" },
  { "title": "SMS" },
  { "title": "Academics" },
  { "title": "Financial Management" },
  { "title": "Registration Management" },
  { "title": "Fee Management" },
  { "title": "Time Table" },
  { "title": "Messaging System" },
  { "title": "Mobile App" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Alumni Management" },
];
const moreFeatures = [
  { "title": "Student Information / Records" },
  { "title": "Franchise Management" },
  { "title": "Question Randomizing" },
  { "title": "Student Portal" },
  { "title": "Biometric Attendance Management" },
  { "title": "Certification Management" },
  { "title": "Assessments" },
  { "title": "Learner Portal" },
  { "title": "Fee Collection" },
  { "title": "Admission" },
  { "title": "Class Management" },
  { "title": "Communication Management" },
  { "title": "K-12" },
  { "title": "Time Table" },
  { "title": "Wireless Internet Access" },
  { "title": "Parent Portal" },
  { "title": "Applications Management" },
  { "title": "GPS tracking" },
  { "title": "Ticket / Order Fulfillment" },
  { "title": "Mobile Access" },
  { "title": "Financial Management" },
  { "title": "Data Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Forms Management" },
  { "title": "Class Scheduling" },
  { "title": "Activity Registration" },
  { "title": "Clinic Management" },
  { "title": "SMS" },
  { "title": "Examination Management" },
  { "title": "Bookstore Management" },
  { "title": "Curriculum Management" },
  { "title": "Fees" },
  { "title": "School Management" },
  { "title": "Balance Sheet" },
  { "title": "Results Reporting" },
  { "title": "User Customisation" },
  { "title": "Data Import / Export" },
  { "title": "Progress Tracking" },
  { "title": "Online Applications" },
  { "title": "Parent/Student Portal" },
  { "title": "Lead Capture" },
  { "title": "Assessment Management" },
  { "title": "Cash Management" },
  { "title": "Barcoding/RFID" },
  { "title": "Customized Report Cards" },
  { "title": "Behavior Management" },
  { "title": "Forms Management" },
  { "title": "Library Management" },
  { "title": "Evaluation Management" },
  { "title": "Cafeteria Management" },
  { "title": "Certification" },
  { "title": "Approval Process Management" },
  { "title": "Built in LMS" },
  { "title": "Results Reporting" },
  { "title": "Profit / Loss Statement" },
  { "title": "Class Wise Time Table" },
  { "title": "Dashboard" },
  { "title": "Resource Management" },
  { "title": "Question Bank" },
  { "title": "Online Registration" },
  { "title": "Question Randomizing" },
  { "title": "Balance Sheet" },
  { "title": "Income Statements" },
  { "title": "Touch Screen" },
  { "title": "Calendar Management" },
  { "title": "Complaint Monitoring" },
  { "title": "Event Management" },
  { "title": "Classroom Management" },
  { "title": "Forms Management" },
  { "title": "User Management" },
  { "title": "Barcoding/RFID" },
  { "title": "Class Summary" },
  { "title": "Assessment Management" },
  { "title": "Parent App" },
  { "title": "Teacher App" },
  { "title": "School branded App" },
  { "title": "School Bus Attendance" },
  { "title": "Customized Report Cards" },
  { "title": "Parents' Survey" },
  { "title": "Admission CRM" },
  { "title": "Online Assessment" },
  { "title": "Class Scheduling" },
  { "title": "QR Codes" },
  { "title": "Time Table/schedule" },
  { "title": "Live Class Enablement" },
  { "title": "Admin Controls" },
  { "title": "Dedicated Support Manager" },
  { "title": "Accounting Integration" },
  { "title": "Photo Gallery" },
  { "title": "Learning Plans" },
  { "title": "Classroom Management" },
  { "title": "Classroom Management" },
  { "title": "Lesson Planning" },
  { "title": "Teacher Dashboard" },
  { "title": "For Private Schools" },
  { "title": "Parent / Child Records" },
  { "title": "Lesson Plan Management" },
  { "title": "View Student Monitors" },
  { "title": "Applicant Management" },
  { "title": "Ticket / Order Fulfillment" },
  { "title": "QR Codes" },
  { "title": "Time Table/schedule" },
  { "title": "Live Class Enablement" },
  { "title": "Admin Controls" },
  { "title": "Dedicated Support Manager" }
];

const Features = ({ styles }) => {
    const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const combinedFeatures = [...featuresData, ...moreFeatures];
  const filteredFeatures = combinedFeatures.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayFeatures = searchQuery
    ? filteredFeatures
    : isShowMore
    ? combinedFeatures
    : featuresData;

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
            <Form>
              <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search Features..."
              value={searchQuery}
              onChange={handleSearch}
              className="mb-4"
            />
            </Form.Group>
            </Form>
          </Col>

          {displayFeatures.length > 0 ? (
          displayFeatures.map((feature, index) => (
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
          ))
        ) : (
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

          {/* {isShowMore && 
          <>
          {filteredMoreFeatures.map((featureM, index) => (
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
          } */}
          {!searchQuery && (
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
           )}
        </Row>
      </Container>
    </>
  );
};

export default Features;
