import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Absence Management" },
  { title: "Scheduling" },
  { title: "Fee Collection" },
  { title: "Dashboard" },
  { title: "Vehicle Tracking" },
  { title: "Staff Management" },
  { title: "Purchase Management" },
  { title: "Generate Reports" },
  { title: "School Management" },
  { title: "Student Evaluation Report" },
  { title: "Biometric Attendance Management" },
  { title: "Role-Based Permissions" },
  { title: "Customizable Forms" },
  { title: "White Label" },
  { title: "Expense Manager" },
  { title: "Parent Communication" },
];

const moreFeatures = [
  { title: "Admin Controls" },
  { title: "School Libraries" },
  { title: "Academic/Education" },
  { title: "For Private Schools" },
  { title: "Support Audio/Images/Video" },
  { title: "Report Cards" },
  { title: "Parent/Student Portal" },
  { title: "Lesson Plan Management" },
  { title: "Applicant Management" },
  { title: "Tests/Assessments" },
  { title: "Photo Gallery" },
  { title: "Faculty / Staff Management" },
  { title: "Scorecards" },
  { title: "Parent App" },
  { title: "Student Information / Records" },
  { title: "Student Portal" },
  { title: "GPS tracking" },
  { title: "Higher Education" },
  { title: "Online payments" },
  { title: "Attendance Tracking" },
  { title: "Data Management" },
  { title: "Reporting & Statistics" },
  { title: "Student Management" },
  { title: "Financial Management" },
  { title: "Event Management" },
  { title: "Examination Management" },
  { title: "Fee Management" },
  { title: "Database backup/restore (Management)" },
  { title: "Academics" },
  { title: "Admission" },
  { title: "Attendance management" },
  { title: "Time Table" },
  { title: "Time Tracking" },
  { title: "Reception & Front Office" },
  { title: "Time & Attendance Management" },
  { title: "Mobile App" },
  { title: "Payroll Management" },
  { title: "Inventory Management" },
  { title: "Library Management" },
  { title: "Payment Gateway Integration" },
  { title: "HR & Payroll" },
  { title: "Leave Management" },
  { title: "SMS Integration" },
  { title: "Payroll Integration" },
  { title: "Multi-Location" },
  { title: "Admissions Management" },
  { title: "Punctuation Check" },
  { title: "DOCX" },
  { title: "LaTeX" },
  { title: "Customized Report Cards" },
  { title: "Download in PDF" },
  { title: "School branded App" },
  { title: "Centralized Monitoring" },
  { title: "Reporting/Analytics" },
  { title: "Self Assessment" },
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
              <Col lg={3} key={index} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  <h5>
                    <span style={{ color: "#f95738" }}>
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
