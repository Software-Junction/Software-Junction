import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance Management" },
  { "title": "Exit Management & Separation Management" },
  { "title": "Project Management" },
  { "title": "Expense Tracking" },
  { "title": "Statutory Compliances" },
  { "title": "Inventory Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Reimbursement Management" },
  { "title": "Taxation Management" },
  { "title": "Audit Trail" },
  { "title": "Knowledge Management" },
  { "title": "Email Integration" },
  { "title": "Task Management" },
  { "title": "Shift Management" },
  { "title": "Bonus" },
  { "title": "Loan & Advances Management" },
  { "title": "Document Management" },
  { "title": "Performance Management" },
  { "title": "Expense Management" },
  { "title": "Payroll Management" },
  { "title": "Recruitment Management" },
  { "title": "Mobile Support" },
  { "title": "Survey Management" },
  { "title": "Help Desk" },
  { "title": "Multiuser Login & Role-based Access Control" },
  { "title": "Employee Data Base" },
  { "title": "Variable Workforce" },
  { "title": "Asset Management" }
];

const moreFeatures = [
  { "title": "Travel Management" },
  { "title": "Mobile Time Tracking" },
  { "title": "Collaboration" },
  { "title": "Time Clock" },
  { "title": "Competency Tracking" },
  { "title": "Geo Tagging" },
  { "title": "Internal HR" },
  { "title": "Customizable Templates" },
  { "title": "Evaluation Reports" },
  { "title": "Geo tracking" },
  { "title": "Career Development Planning" },
  { "title": "Time & Expense Tracking" },
  { "title": "Employee Engagement" },
  { "title": "Role Management" },
  { "title": "Real Time Reporting" },
  { "title": "Onboarding" },
  { "title": "Resume Database" },
  { "title": "Benefits Administration" },
  { "title": "Job Requisition" },
  { "title": "Attendance Tracking" },
  { "title": "Employee Rewards Programs" },
  { "title": "Employee Directory" },
  { "title": "Interview Management" },
  { "title": "Digital Offer Letters" },
  { "title": "Data Migration" },
  { "title": "Job Marketplace" },
  { "title": "Multi-Language" },
  { "title": "Time Management" },
  { "title": "Leave Management" },
  { "title": "Biometric Attendance Management" },
  { "title": "Payroll Integration" },
  { "title": "Request Hierarchy" },
  { "title": "Policy Management" },
  { "title": "Performance Appraisal" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Interaction Tracking" },
  { "title": "Custom Review Forms" },
  { "title": "Competency Scale" },
  { "title": "Data Visualization" },
  { "title": "Automated Shift Scheduling" },
  { "title": "Workforce Management" },
  { "title": "Pay Slip" },
  { "title": "Absence Management" },
  { "title": "Employee Profile" },
  { "title": "Employee Awards" },
  { "title": "Survey Builder" },
  { "title": "Process/Workflow Automation" },
  { "title": "Employee Alignment" },
  { "title": "Batch Processing" },
  { "title": "Real-time Scheduling" },
  { "title": "Self Service Portal" },
  { "title": "Employee Handbook" },
  { "title": "Succession Planning" },
  { "title": "Attendance Tracking" },
  { "title": "Internal Meetings" },
  { "title": "Scorecards" },
  { "title": "Alerts/Notifications" },
  { "title": "Data Security" },
  { "title": "Project Tracking" },
  { "title": "Employee Management" },
  { "title": "Collaboration Tools" },
  { "title": "Chatbot" },
  { "title": "MIS Reports" },
  { "title": "Centralized Monitoring" },
  { "title": "Workflow Management" },
  { "title": "Mobile App" },
  { "title": "Training Management" },
  { "title": "Multi-User Collaboration" },
  { "title": "Career Development" },
  { "title": "Job Description Management" },
  { "title": "Applicant Tracking" },
  { "title": "Incentive Management" },
  { "title": "Goal Setting" },
  { "title": "Job Scoring" },
  { "title": "Work Hour Tracking" },
  { "title": "Billing Rate Management" },
  { "title": "Time Tracking" },
  { "title": "Employee Scheduling" },
  { "title": "Assessments" },
  { "title": "Group Management" },
  { "title": "Data Integration" },
  { "title": "Job Board Posting" },
  { "title": "Customizable Questions" },
  { "title": "Biometric Recognition" },
  { "title": "Access Controls/Permissions" },
  { "title": "Employee Field Customization" },
  { "title": "Discussion Boards" },
  { "title": "Succession Management" },
  { "title": "Request Hierarchy" },
  { "title": "Badge Management" },
  { "title": "Data Analysis" },
  { "title": "Feedback Management" },
  { "title": "Performance Control" },
  { "title": "Role Management" },
  { "title": "Time Off Management" },
  { "title": "Templates" },
  { "title": "Social Recognition" },
  { "title": "Letter Generation" },
  { "title": "On-going Performance Tracking" },
  { "title": "Salary Calculation" },
  { "title": "Expense Reporting" },
  { "title": "Multi-Company" },
  { "title": "Workflow Administration" },
  { "title": "Project Planning" },
  { "title": "Employee Guides" },
  { "title": "Attendance Tracking" },
  { "title": "Surveys & Feedback" },
  { "title": "Collaboration Platform" },
  { "title": "Accounting Integration" },
  { "title": "Goal Management" },
  { "title": "Resume Search" },
  { "title": "Centralized Records" },
  { "title": "Workstation Tracking" },
  { "title": "Activity Tracking" },
  { "title": "Data Management" },
  { "title": "Custom Rating Scales" },
  { "title": "Mobile Friendly" },
  { "title": "Employee Engagement" },
  { "title": "Employee Guides" },
  { "title": "Skills Tracking" },
  { "title": "Resume Posting" },
  { "title": "Payroll Management" },
  { "title": "Manager Self Service" },
  { "title": "Time & Attendance Management" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Multi-Tiered Commissions" },
  { "title": "Employee Awards" },
  { "title": "Data Import / Export" },
  { "title": "Appraisal Management" },
  { "title": "Interactive Elements" },
  { "title": "Incentive Programs" },
  { "title": "Data Source Integrations" },
  { "title": "Customizable Reporting" },
  { "title": "Real-time Reporting" },
  { "title": "Document Creation & Storage" },
  { "title": "Batch Processing" },
  { "title": "Training Companies" },
  { "title": "Appointment Scheduling" },
  { "title": "Performance Metrics" },
  { "title": "Salary Planning" },
  { "title": "Employee Resignation" },
  { "title": "Group Summary Report" },
  { "title": "Self-onboarding" },
  { "title": "Ad Hoc Query" },
  { "title": "Attendance Tracking" },
  { "title": "Succession Management" },
  { "title": "Data Quality Control" },
  { "title": "Training & Qualifications" },
  { "title": "Custom Review Forms" },
  { "title": "Sick Leave Tracking" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Real-time Scheduling" },
  { "title": "Collaboration" },
  { "title": "Internal Meetings" },
  { "title": "Skills & Competencies" },
  { "title": "Private Dashboards" },
  { "title": "Manager-to-Peer Recognition" },
  { "title": "Panel Interviews" },
  { "title": "Customizable Questions" },
  { "title": "HR Metrics Library" },
  { "title": "Time Off Requests" },
  { "title": "Employee Engagement" },
  { "title": "Employee Awards" },
  { "title": "Request Hierarchy" },
  { "title": "Badge Management" },
  { "title": "Data Analysis" },
  { "title": "Feedback Management" },
  { "title": "Performance Control" },
  { "title": "Role Management" },
  { "title": "Time Off Management" },
  { "title": "Templates" },
  { "title": "Social Recognition" },
  { "title": "Letter Generation" },
  { "title": "On-going Performance Tracking" },
  { "title": "Salary Calculation" },
  { "title": "Expense Reporting" },
  { "title": "Multi-Company" },
  { "title": "Workflow Administration" },
  { "title": "Project Planning" },
  { "title": "Employee Guides" },
  { "title": "Attendance Tracking" },
  { "title": "Surveys & Feedback" },
  { "title": "Collaboration Platform" },
  { "title": "Accounting Integration" },
  { "title": "Goal Management" },
  { "title": "Resume Search" },
  { "title": "Centralized Records" },
  { "title": "Workstation Tracking" },
  { "title": "Activity Tracking" },
  { "title": "Data Management" },
  { "title": "Custom Rating Scales" },
  { "title": "Mobile Friendly" },
  { "title": "Employee Engagement" },
  { "title": "Employee Guides" },
  { "title": "Skills Tracking" },
  { "title": "Resume Posting" },
  { "title": "Payroll Management" },
  { "title": "Manager Self Service" },
  { "title": "Time & Attendance Management" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Multi-Tiered Commissions" },
  { "title": "Employee Awards" },
  { "title": "Data Import / Export" },
  { "title": "Appraisal Management" },
  { "title": "Interactive Elements" },
  { "title": "Incentive Programs" },
  { "title": "Data Source Integrations" },
  { "title": "Customizable Reporting" },
  { "title": "Real-time Reporting" },
  { "title": "Document Creation & Storage" },
  { "title": "Batch Processing" },
  { "title": "Training Companies" },
  { "title": "Appointment Scheduling" },
  { "title": "Performance Metrics" },
  { "title": "Salary Planning" },
  { "title": "Employee Resignation" },
  { "title": "Group Summary Report" },
  { "title": "Self-onboarding" },
  { "title": "Ad Hoc Query" },
  { "title": "Attendance Tracking" },
  { "title": "Succession Management" },
  { "title": "Data Quality Control" },
  { "title": "Training & Qualifications" },
  { "title": "Custom Review Forms" },
  { "title": "Sick Leave Tracking" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Real-time Scheduling" },
  { "title": "Collaboration" },
  { "title": "Internal Meetings" },
  { "title": "Skills & Competencies" },
  { "title": "Private Dashboards" },
  { "title": "Manager-to-Peer Recognition" },
  { "title": "Panel Interviews" },
  { "title": "Customizable Questions" },
  { "title": "HR Metrics Library" },
  { "title": "Time Off Requests" }
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
