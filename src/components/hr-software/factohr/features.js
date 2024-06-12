import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Loan & Advances Management" },
  { "title": "Expense Tracking" },
  { "title": "Attendance Management" },
  { "title": "Pay Slip" },
  { "title": "Time & Attendance Management" },
  { "title": "Project Management" },
  { "title": "Exit Management & Separation Management" },
  { "title": "Performance Management" },
  { "title": "Training Management" },
  { "title": "Task Management" },
  { "title": "HR & Payroll" },
  { "title": "Asset Management" },
  { "title": "Statutory Compliances" },
  { "title": "Recruitment Management" },
  { "title": "Employee Data Base" },
  { "title": "Multiuser Login & Role-based Access Control" },
  { "title": "Bonus" },
  { "title": "Reimbursement Management" },
  { "title": "Expense Management" },
  { "title": "Mobile App" },
  { "title": "Payroll Management" },
  { "title": "Shift Management" },
  { "title": "Travel Management" },
  { "title": "Time Tracking" },
  { "title": "Talent Management" },
  { "title": "Arrears Calculation" },
  { "title": "Feedback Management" },
  { "title": "Employee Self Service Management" }
];

const moreFeatures = [
  { "title": "Workflow Management" },
  { "title": "Multi-State" },
  { "title": "Multi-Location" },
  { "title": "Onboarding" },
  { "title": "Excel Import" },
  { "title": "Applicant Tracking" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Reporting" },
  { "title": "Field Attendance" },
  { "title": "Geo Tagging" },
  { "title": "Employee Engagement" },
  { "title": "Geo Fencing" },
  { "title": "Job Requisition" },
  { "title": "Rewards Management" },
  { "title": "Time Management" },
  { "title": "Absence Management" },
  { "title": "Batch Processing" },
  { "title": "Goal Management" },
  { "title": "Expense Claims" },
  { "title": "Employee Directory" },
  { "title": "Project Tracking" },
  { "title": "Travel Planning" },
  { "title": "Timesheets" },
  { "title": "Employee Database" },
  { "title": "Goal Cascading" },
  { "title": "Attendance Tracking" },
  { "title": "Graphs & Charts" },
  { "title": "Employee Profile" },
  { "title": "MIS Reports" },
  { "title": "Payroll Integration" },
  { "title": "Review Cycle Tracking" },
  { "title": "Chatbot" },
  { "title": "Scheduling" },
  { "title": "Integration with Biometric" },
  { "title": "Normalization" },
  { "title": "Appraisal Management" },
  { "title": "Employee Management" },
  { "title": "Facial Recognition Attendance" },
  { "title": "Expense Management" },
  { "title": "Multi-Currency" },
  { "title": "360 Degree Feedback" },
  { "title": "Times & Expense Tracking" },
  { "title": "Batch Processing" },
  { "title": "Exit Management" },
  { "title": "Shift Planner" },
  { "title": "Approval Workflow" },
  { "title": "Workforce Management" },
  { "title": "Analytical Reports" },
  { "title": "Single Sign On" },
  { "title": "Employee Engagement" },
  { "title": "Workflow Configuration" },
  { "title": "Surveys" },
  { "title": "Goal Setting" },
  { "title": "Built-in ATS" },
  { "title": "Candidate Tracking" },
  { "title": "KPIs" },
  { "title": "Time & Attendance" },
  { "title": "Organizational Charting" },
  { "title": "Attendance Tracking" },
  { "title": "Employee Self-Onboarding" },
  { "title": "Multi Level Approval Workflows" }
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
