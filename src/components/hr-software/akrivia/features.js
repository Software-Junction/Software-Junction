import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Expense Tracking" },
  { "title": "Time Tracking" },
  { "title": "Asset Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Taxation Management" },
  { "title": "Expense Management" },
  { "title": "Recruitment Management" },
  { "title": "Training Management" },
  { "title": "Audit Trail" },
  { "title": "Employee Self Service Management" },
  { "title": "Attendance management" },
  { "title": "Performance Management" },
  { "title": "Help Desk" },
  { "title": "Shift Management" },
  { "title": "Statutory Compliances" },
  { "title": "Reimbursement Management" },
  { "title": "Task Management" },
  { "title": "Time & Attendance Management" },
  { "title": "API Integration" },
  { "title": "Document Management" },
  { "title": "Payroll Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Survey Management" },
  { "title": "HR & Payroll" },
  { "title": "Background Screening" },
  { "title": "Customizable Reporting" },
  { "title": "Employee Profile" },
  { "title": "Formula Defined Salary Calculation" }
];

const moreFeatures = [
  { "title": "Applicant tracking" },
  { "title": "Salary Information & History" },
  { "title": "360 Degree Feedback" },
  { "title": "Onboarding" },
  { "title": "Timesheet Management" },
  { "title": "Alerts Notifications" },
  { "title": "Appraisal Management" },
  { "title": "Performance Appraisal" },
  { "title": "Attendance Tracking" },
  { "title": "Balance Sheet" },
  { "title": "Goal Management" },
  { "title": "Employee Management" },
  { "title": "Expense Claims" },
  { "title": "Overtime Tracking" },
  { "title": "Social Recognition" },
  { "title": "Benefits Management" },
  { "title": "Arrears Calculation" },
  { "title": "Data Security" },
  { "title": "Resume Database" },
  { "title": "Self Service Portal" },
  { "title": "Absence Management" },
  { "title": "Payroll Integration" },
  { "title": "Access Controls" },
  { "title": "Compensation Management" },
  { "title": "Surveys & Feedback" },
  { "title": "Analytics" },
  { "title": "Balanced Scorecards" },
  { "title": "Multilingual Support" },
  { "title": "MIS Reports" },
  { "title": "Time & Expense Tracking" },
  { "title": "Expense Claims" },
  { "title": "On-Boarding" },
  { "title": "Integration with Biometric" },
  { "title": "Excel Import" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Talent Management" },
  { "title": "Rewards Management" },
  { "title": "Gamification" },
  { "title": "Sentiment Analysis" },
  { "title": "Cascading Goals" },
  { "title": "Custom Rating Scales" },
  { "title": "Peer Appraisals" },
  { "title": "Self-Appraisals" },
  { "title": "Weighted Performance Measures" },
  { "title": "Maintenance Management" },
  { "title": "Predictive Analytics" },
  { "title": "Chatbot" },
  { "title": "Certification Management" },
  { "title": "Role Management" },
  { "title": "Succession Planning" },
  { "title": "Mobile Access" },
  { "title": "Room Scheduling" },
  { "title": "Employee Directory" },
  { "title": "Time Off Management" },
  { "title": "Compensation Calculation" },
  { "title": "Expense Reporting" },
  { "title": "Reporting/Analytics" },
  { "title": "Employee Database" },
  { "title": "Competency Management" },
  { "title": "Feedback Collection" },
  { "title": "Overtime Calculation" },
  { "title": "Community Management" },
  { "title": "Whitelisting / Blacklisting" },
  { "title": "AICC / SCORM Compliant" },
  { "title": "Organizational Charting" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Time Management" },
  { "title": "Job Description Management" },
  { "title": "Bonus Management" },
  { "title": "Compensation Statements" },
  { "title": "Automated Shift Scheduling" },
  { "title": "Self-Paced Courses" },
  { "title": "Goals" },
  { "title": "Instructor-Led Courses" },
  { "title": "Rewards Catalog" },
  { "title": "Rewards Points" },
  { "title": "Ticketing" },
{ "title": "Learning Plans" },
{ "title": "Leave Policy Management" },
{ "title": "Market Data Access" },
{ "title": "Time & Attendance" },
{ "title": "Roles Management" },
{ "title": "E-forms" },
{ "title": "Learner Portal" },
{ "title": "Job Posting" },
{ "title": "Single Sign On" },
{ "title": "SCORM Compliance" },
{ "title": "Audit Trails" },
{ "title": "Margin Management" },
{ "title": "Resume Parsing" },
{ "title": "Succession Management" },
{ "title": "Built in LMS" },
{ "title": "Candidate Tracking" },
{ "title": "Cataloging/Categorization" },
{ "title": "Multi-Company" },
{ "title": "Multi-Country" },
{ "title": "KPIs" },
{ "title": "On-going Performance Tracking" },
{ "title": "Billable Hours Tracking" },
{ "title": "Leave & Absence Reporting" },
{ "title": "Custom Report Exports" },
{ "title": "Vacation/Leave Tracking" },
{ "title": "Employee Handbook" },
{ "title": "Goal Setting" },
{ "title": "Job Board Posting" },
{ "title": "RetentionPolicy Management" },
{ "title": "RFP Creation" },
{ "title": "SLA Management" },
{ "title": "Travel Booking" },
{ "title": "Multiple Pay Schedules" },
{ "title": "Learning Paths" }
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
