import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Shift Management" },
  { "title": "Document Management" },
  { "title": "Attendance management" },
  { "title": "Statutory Compliances" },
  { "title": "Training Management" },
  { "title": "Performance Management" },
  { "title": "Recruitment Management" },
  { "title": "Taxation Management" },
  { "title": "Loan & Advances Management" },
  { "title": "Reimbursement Management" },
  { "title": "Workflow Administration" },
  { "title": "Payroll Management" },
  { "title": "Travel Management" },
  { "title": "Asset Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Expense Management" },
  { "title": "Email Integration" },
  { "title": "Employee Self Service Management" },
  { "title": "Project Management" },
  { "title": "Help Desk" },
  { "title": "Time & Attendance Management" },
  { "title": "Mobile Support" },
  { "title": "Bonus" },
  { "title": "Exit Management & Seperation Management" }
];

const moreFeatures = [
  { "title": "Attendance Tracking" },
  { "title": "Salary Adjustment" },
  { "title": "Mobile App" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Leave Management" },
  { "title": "Dashboard" },
  { "title": "Data Security" },
  { "title": "Real Time Reporting" },
  { "title": "Benefits Management" },
  { "title": "Expense Reporting" },
  { "title": "Geolocation" },
  { "title": "Timesheet Management" },
  { "title": "Goal Management" },
  { "title": "Employee Tracking" },
  { "title": "Workforce Management" },
  { "title": "Performance Appraisal" },
  { "title": "Alerts & Reminders" },
  { "title": "MIS Reports" },
  { "title": "Integration with Biometric" },
  { "title": "Chat / Messaging" },
  { "title": "Workflow Management" },
  { "title": "Request Desk" },
  { "title": "Goal Setting" },
  { "title": "Employee Directory" },
  { "title": "Full & Final Settlements" },
  { "title": "Employee Portal" },
  { "title": "KPIs" },
  { "title": "Online Performance Reviews" },
  { "title": "IP Restriction on Attendance" },
  { "title": "Expense Management" },
  { "title": "Request hierarchy" },
  { "title": "Rewards Management" },
  { "title": "Geotagging" },
  { "title": "Overtime Tracking" },
  { "title": "Geo Tracking" },
  { "title": "Formula Defined Salary Calculation" },
  { "title": "Timesheet Management by Project" },
  { "title": "On-Boarding" },
  { "title": "Self Service Portal" },
  { "title": "Compliance Management" },
  { "title": "360 Degree Feedback" },
  { "title": "Employee Handbook" },
  { "title": "Automated Review & Approval" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Grievance Management" },
  { "title": "Letter Generation" },
  { "title": "Offer Management" },
  { "title": "Self-Onboarding" },
  { "title": "Employee Field Customization" },
  { "title": "Online Resignation" },
  { "title": "Role Management" },
  { "title": "Sick Leave Tracking" },
  { "title": "Biometric Recognition" },
  { "title": "Employee Reward Programs" },
  { "title": "Real-time Scheduling" },
  { "title": "Employee Reward Programs" },
  { "title": "Awards Management" },
  { "title": "Attendance Tracking" }
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
