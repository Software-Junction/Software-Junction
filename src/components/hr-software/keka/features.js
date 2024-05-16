import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Expense Management" },
    { "title": "Bonus" },
    { "title": "Asset Management" },
    { "title": "Project Management" },
    { "title": "Exit Management & Seperation Management" },
    { "title": "Taxation Management" },
    { "title": "Time & Attendance Management" },
    { "title": "Expense Tracking" },
    { "title": "Mobile Support" },
    { "title": "Email Integration" },
    { "title": "Payroll Management" },
    { "title": "Reimbursement Management" },
    { "title": "Shift Management" },
    { "title": "Employee Self Service Management" },
    { "title": "Statutory Compliances" },
    { "title": "Task Management" },
    { "title": "Knowledge Management" },
    { "title": "Performance Management" },
    { "title": "Loan & Advances Management" },
    { "title": "Attendance management" },
    { "title": "Recruitment Management" },
    { "title": "Document Management" },
    { "title": "Multiuser Login & Role-based access control" },
    { "title": "HR & Payroll" },
    { "title": "Employee Data Base" },
    { "title": "Employee Handbook" },
    { "title": "Timesheets" },
    { "title": "Time Tracking" }
];

const moreFeatures = [
  { "title": "Employee Lifecycle Management" },
  { "title": "Excel Import" },
  { "title": "Payroll Integration" },
  { "title": "Onboarding" },
  { "title": "Job Board Posting" },
  { "title": "Salary Adjustment" },
  { "title": "Resume Parsing" },
  { "title": "Interview Scheduling" },
  { "title": "Variable Workforce" },
  { "title": "Ad Hoc Reports" },
  { "title": "Billing & Invoicing" },
  { "title": "Custom Rating Scales" },
  { "title": "Performance Metrics" },
  { "title": "Absence Management" },
  { "title": "Employee Management" },
  { "title": "Key Performance Indicators" },
  { "title": "Shift Swapping" },
  { "title": "Job Management" },
  { "title": "Candidate Tracking" },
  { "title": "Applicant Tracking" },
  { "title": "Job Requisition" },
  { "title": "Automatic Time Capture" },
  { "title": "Feedback Management" },
  { "title": "Sick Leave Tracking" },
  { "title": "Time Clock" },
  { "title": "Goal Management" },
  { "title": "Performance Appraisal" },
  { "title": "Recruiting Management" },
  { "title": "Training Management" },
  { "title": "Resume Database" },
  { "title": "Expense Reporting" },
  { "title": "Data Security" },
  { "title": "Biometric Attendance Management" },
  { "title": "Leave Management" },
  { "title": "Workflow Management" },
  { "title": "Internal HR" },
  { "title": "Appointment Scheduling" },
  { "title": "Compliance Management" },
  { "title": "Real Time Reporting" },
  { "title": "Mobile Access" },
  { "title": "Employee Directory" },
  { "title": "Reporting/Analytics" },
  { "title": "Employee Portal" },
  { "title": "Job Description Management" },
  { "title": "Time & Attendance" },
  { "title": "Benefits Management" },
  { "title": "Goal Setting" },
  { "title": "Employee Scheduling" },
  { "title": "Attendance Tracking" },
  { "title": "Mobile Time Tracking" },
  { "title": "Pay Slip" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Shift Swapping" },
  { "title": "Employee Database" },
  { "title": "Employee Reward Programs" },
  { "title": "Resume Posting" },
  { "title": "Performance Control" },
  { "title": "Integration with Biometric" },
  { "title": "Data Import / Export" },
  { "title": "Employee Profile" },
  { "title": "Grievance Management" },
  { "title": "Job Posting" },
  { "title": "Employee Rewards Programs" },
  { "title": "Individualized Assessments" },
  { "title": "Biometric Recognition" },
  { "title": "Recruiting Management" },
  { "title": "Job Comparison" },
  { "title": "Goal Setting" },
  { "title": "Invoices" },
  { "title": "HR Metrics Library" },
  { "title": "Time Off Management" },
  { "title": "Compensation Assessment" },
  { "title": "Aggregate Reports" },
  { "title": "Employee Handbook" },
  { "title": "On-Boarding" },
  { "title": "Applications Management" },
  { "title": "Role Management" },
  { "title": "Overtime Tracking" },
  { "title": "Job Description Creation" },
  { "title": "Candidate Management" },
  { "title": "Peer-to-Peer Recognition" },
  { "title": "Resource Management" },
  { "title": "Performance Metrics" },
  { "title": "Attendance Tracking" },
  { "title": "Dashboard" },
  { "title": "Mobile Time Tracking" },
  { "title": "Timesheet Management" },
  { "title": "Back Office Assistance" },
  { "title": "Resume Search" },
  { "title": "Data Security" },
  { "title": "Absence Management" },
  { "title": "MIS Reports" },
  { "title": "Employee Management" },
  { "title": "Job Management" },
  { "title": "Training Management" },
  { "title": "Resume Database" },
  { "title": "Resume Search" },
  { "title": "Biometric Attendance Management" },
  { "title": "Attendance Tracking" },
  { "title": "Reporting" },
  { "title": "On-Boarding" },
  { "title": "Integration with Biometric" },
  { "title": "Events & Reminders" },
  { "title": "Excel Import" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Grievance Management" },
  { "title": "Salary Information & History" },
  { "title": "Appraisal Management" },
  { "title": "Back Office Assistance" },
  { "title": "Talent Management" },
  { "title": "Overtime Management" },
  { "title": "Job Management" },
  { "title": "Rewards Management" },
  { "title": "Attendance Tracking" },
  { "title": "Custom Rating Scales" },
  { "title": "Review Cycle Tracking" },
  { "title": "Self-Appraisals" },
  { "title": "Benefits Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Expense Reporting" },
  { "title": "Vacation / Leave Tracking" },
  { "title": "Benchmarking" },
  { "title": "Mobile Access" },
  { "title": "Fixed Asset Management" },
  { "title": "Member Directory" },
  { "title": "Appointment Scheduling" },
  { "title": "Automatic Time Capture" },
  { "title": "Billable & Non-Billable Hours" },
  { "title": "Offline Time Tracking" },
  { "title": "Overtime Calculation" },
  { "title": "Mobile Time Tracking" },
  { "title": "Data Import / Export" },
  { "title": "Competency Management" },
  { "title": "Job Description Management" },
  { "title": "Compensation Assessment" },
  { "title": "Compensation Calculation" },
  { "title": "Compensation Plan Modeling" },
  { "title": "Compensation Statements" },
  { "title": "Employee Reward Programs" },
  { "title": "Salary Planning" },
  { "title": "Equipment Tracking" },
  { "title": "Employee Database" },
  { "title": "Time Off Management" },
  { "title": "Reporting/Analytics" },
  { "title": "Employee Directory" },
  { "title": "Shift Swapping" },
  { "title": "Goals" },
  { "title": "Peer-to-Peer Recognition" },
  { "title": "Variable Workforce" },
  { "title": "Time Clock" },
  { "title": "Time & Attendance" },
  { "title": "Vacation/Leave Tracking" },
  { "title": "Job Requisition" },
  { "title": "Resume Parsing" },
  { "title": "Goal Setting" },
  { "title": "Job Board Posting" },
  { "title": "Job Description Creation" },
  { "title": "Application Management" },
  { "title": "Employer Accounts" },
  { "title": "Resume Posting" },
  { "title": "Job Posting" },
  { "title": "Employee Handbook" },
  { "title": "Individualized Assessments" },
  { "title": "Candidate Tracking" },
  { "title": "Interview Scheduling" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Hourly Employee Tracking" },
  { "title": "Punch card" },
  { "title": "Salaried Employee Tracking" },
  { "title": "Sick Leave Tracking" },
  { "title": "HR Metrics Library" },
  { "title": "KPIs" },
  { "title": "Biometric Recognition" },
  { "title": "Aggregate Reports" },
  { "title": "Employee Portal" },
  { "title": "Billable Hours Tracking" },
  { "title": "Health Risk Assessment" },
  { "title": "Leave Policy Management" },
  { "title": "Job Comparison" }
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
