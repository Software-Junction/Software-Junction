import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Asset Management" },
  { "title": "Expense Management" },
  { "title": "Bonus" },
  { "title": "Document Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Training Management" },
  { "title": "Mobile Support" },
  { "title": "Attendance management" },
  { "title": "Shift Management" },
  { "title": "Payroll Management" },
  { "title": "Recruitment Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Statutory Compliances" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Taxation Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "HR & Payroll" },
  { "title": "Help Desk" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Loan & Advances Management" },
  { "title": "Email Integration" },
  { "title": "Performance Management" },
  { "title": "Survey Management" },
  { "title": "Time Tracking" },
  { "title": "Reimbursement Management" },
  { "title": "Attendance Tracking" },
  { "title": "Competency Management" },
  { "title": "Document Management" }
];

const moreFeatures = [
  { "title": "Employee Lifecycle Management" },
  { "title": "Billable & Non-Billable Hours" },
  { "title": "Digital Offer Letters" },
  { "title": "Role Management" },
  { "title": "Asset Management" },
  { "title": "Mobile App" },
  { "title": "Leave Management" },
  { "title": "Time & Expense Tracking" },
  { "title": "Expense Reporting" },
  { "title": "Training & Qualifications" },
  { "title": "Recruiting Management" },
  { "title": "Compensation Assessment" },
  { "title": "Project Planning" },
  { "title": "Employee Portal" },
  { "title": "Performance Appraisal" },
  { "title": "Document Management" },
  { "title": "Employee Scheduling" },
  { "title": "Goal Management" },
  { "title": "Geo tracking" },
  { "title": "Payroll Management" },
  { "title": "Recruitment Management" },
  { "title": "Mobile Support" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Data Security" },
  { "title": "Employee Management" },
  { "title": "Workflow Management" },
  { "title": "MIS Reports" },
  { "title": "Training Management" },
  { "title": "Document Creation & Storage" },
  { "title": "Time & Attendance Management" },
  { "title": "Geo Fencing" },
  { "title": "Employee Directory" },
  { "title": "Excel Import" },
  { "title": "Employee Engagement" },
  { "title": "Onboarding" },
  { "title": "Employee Profile" },
  { "title": "Alerts/Notifications" },
  { "title": "Performance Metrics" },
  { "title": "Analytics" },
  { "title": "Employee Awards" },
  { "title": "Chatbot" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Internal HR" },
  { "title": "Talent Management" },
  { "title": "Integration with Biometric" },
  { "title": "Biometric Attendance Management" },
  { "title": "Employee Data Base" },
  { "title": "Pay Slip" },
  { "title": "Attendance management" },
  { "title": "Bonus" },
  { "title": "Shift Management" },
  { "title": "Taxation Management" },
  { "title": "Survey Management" },
  { "title": "Employee Engagement" },
  { "title": "Multi-Location" },
  { "title": "Real Time Reporting" },
  { "title": "Time Management" },
  { "title": "Role Management" },
  { "title": "Attendance management" },
  { "title": "Performance Appraisal" },
  { "title": "Reporting/Analytics" },
  { "title": "Employee Management" },
  { "title": "Goal Setting" },
  { "title": "Expense Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Employee Directory" },
  { "title": "Employee Awards" },
  { "title": "Workflow Configuration" },
  { "title": "Online Performance Reviews" },
  { "title": "Document Creation & Storage" },
  { "title": "Shift Management" },
  { "title": "Employee Management" },
  { "title": "Employee Scheduling" },
  { "title": "Pay Slip" },
  { "title": "Leave Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Performance Appraisal" },
  { "title": "Rewards Management" },
  { "title": "Employee Engagement" },
  { "title": "Performance Metrics" },
  { "title": "Employee Portal" },
  { "title": "Time & Attendance" },
  { "title": "Asset Management" },
  { "title": "Performance Control" },
  { "title": "Compensation Management" },
  { "title": "Job Description Management" },
  { "title": "Employee Directory" },
  { "title": "Time Off Management" },
  { "title": "Competency Management" },
  { "title": "Full & Final Settlements" },
  { "title": "Time Clock" },
  { "title": "Performance Appraisal" },
  { "title": "Reporting/Analytics" },
  { "title": "Resource Scheduling" },
  { "title": "Leave Policy Management" },
  { "title": "Data Import / Export" },
  { "title": "Training & Qualifications" },
  { "title": "Online Applications" },
  { "title": "Enable Self Service" }
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
                  <span style={{ color: "#FC5185 " }}>
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
                  <span style={{ color: "#FC5185 " }}>
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
