import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Expense Tracking"},
  {"title": "Travel Management"},
  {"title": "Bonus"},
  {"title": "Payroll Management"},
  {"title": "Time Tracking"},
  {"title": "Recruitment Management"},
  {"title": "Workflow Administration"},
  {"title": "Exit Management & Seperation Management"},
  {"title": "Employee Data Base"},
  {"title": "Statutory Compliances"},
  {"title": "Document Management"},
  {"title": "Taxation Management"},
  {"title": "Training Management"},
  {"title": "Expense Management"},
  {"title": "HR & Payroll"},
  {"title": "Performance Management"},
  {"title": "Loan & Advances Management"},
  {"title": "Email Integration"},
  {"title": "Employee Self Service Management"},
  {"title": "Shift Management"},
  {"title": "Multiuser Login & Role-based access control"},
  {"title": "Time & Attendance Management"},
  {"title": "Attendance management"},
  {"title": "Workflow Administration"}
];

const moreFeatures = [
  {"title": "Applicant tracking"},
    {"title": "Employee Engagement"},
    {"title": "Goal Setting / Tracking"},
    {"title": "Offer management"},
    {"title": "Pay Slip"},
    {"title": "Absence Management"},
    {"title": "Employee Profile"},
    {"title": "Leave Management"},
    {"title": "Custom Review Forms"},
    {"title": "Timesheets"},
    {"title": "Timesheet Management"},
    {"title": "Salary Adjustment"},
    {"title": "Centralized Monitoring"},
    {"title": "Mobile App"},
    {"title": "MIS Reports"},
    {"title": "Integration with Biometric"},
    {"title": "Expense Reporting"},
    {"title": "Multi Company"},
    {"title": "Balanced Scorecards"},
    {"title": "Customizable Reporting"},
    {"title": "Mobile Friendly"},
    {"title": "Back Office Assistance"},
    {"title": "Employee Management"},
    {"title": "TDS Calculation"},
    {"title": "Digital Offer Letters"},
    {"title": "Project Time Tracking"},
    {"title": "Biometric Attendance Management"},
    {"title": "Onboarding"},
    {"title": "Data Security"},
    {"title": "Excel Import"},
    {"title": "Performance Appraisal"},
    {"title": "Salary Information & History"},
    {"title": "Vacation / Leave Tracking"},
    {"title": "Goal Management"},
    {"title": "Employee Database"},
    {"title": "Appraisal Management"},
    {"title": "Events & Reminders"},
    {"title": "Payroll Integration"},
    {"title": "Grievance Management"},
    {"title": "Overtime Tracking"},
    {"title": "Formula Defined Salary Calculation"},
    {"title": "Employee field customization"},
    {"title": "Talent Management"},
    {"title": "Normalization"},
    {"title": "IP Restriction on Attendance"},
    {"title": "Resume Database"},
    {"title": "Manager Self Service"}
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

          {displayFeatures.map((feature, index) => (
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
