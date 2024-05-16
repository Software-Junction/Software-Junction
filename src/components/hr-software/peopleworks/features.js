import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Exit Management & Seperation Management"},
  {"title": "Bonus"},
  {"title": "Performance Management"},
  {"title": "Project Management"},
  {"title": "Reimbursement Management"},
  {"title": "Mobile Support"},
  {"title": "Time Tracking"},
  {"title": "Recruitment Management"},
  {"title": "Taxation Management"},
  {"title": "Document Management"},
  {"title": "Knowledge Management"},
  {"title": "Help Desk"},
  {"title": "Task Management"},
  {"title": "Shift Management"},
  {"title": "HR & Payroll"},
  {"title": "Time & Attendance Management"},
  {"title": "Email Integration"},
  {"title": "Training Management"},
  {"title": "Statutory Compliances"},
  {"title": "Loan & Advances Management"},
  {"title": "Expense Management"},
  {"title": "Payroll Management"},
  {"title": "Expense Tracking"},
  {"title": "Employee Self Service Management"},
  {"title": "Attendance management"},
  {"title": "Statutory Compliances"},
  {"title": "Employee Data Base"},
  {"title": "Multiuser Login & Role-based access control"}
];

const moreFeatures = [
  {"title": "Mobile Friendly"},
  {"title": "Self-onboarding"},
  {"title": "Role Management"},
  {"title": "Incident Reporting"},
  {"title": "HR Drive"},
  {"title": "Talent Management"},
  {"title": "Project Tracking"},
  {"title": "Mobile App"},
  {"title": "Compensation Management"},
  {"title": "Employee Engagement"},
  {"title": "Rewards Management"},
  {"title": "Background Screening"},
  {"title": "Leave Management"},
  {"title": "Geo Tagging"},
  {"title": "Employee Lifecycle Management"},
  {"title": "Benefits Management"},
  {"title": "Multi Company"},
  {"title": "Career Development Planning"},
  {"title": "Rewards Program"},
  {"title": "Role Management"},
  {"title": "Travel Management"},
  {"title": "Performance Appraisal"},
  {"title": "Interview Management"},
  {"title": "Pay Slip"},
  {"title": "Salary Adjustment"},
  {"title": "Invoice Management"},
  {"title": "Geo tracking"},
  {"title": "Goal Setting / Tracking"},
  {"title": "Time & Attendance"},
  {"title": "Employee Portal"},
  {"title": "Expense Reporting"},
  {"title": "Workflow Management"},
  {"title": "Payroll Integration"},
  {"title": "Job Description Creation"},
  {"title": "Shift Management"},
  {"title": "Employee Management"},
  {"title": "Project Planning"},
  {"title": "Appraisal Management"},
  {"title": "Real Time Reporting"},
  {"title": "Document Management"},
  {"title": "Onboarding"},
  {"title": "Employee Directory"},
  {"title": "Absence Management"},
  {"title": "Applicant tracking"},
  {"title": "Statutory Compliances"},
  {"title": "Email Integration"},
  {"title": "Attendance management"},
  {"title": "Time Tracking"},
  {"title": "Bonus Management"},
  {"title": "Benefits Administration"},
  {"title": "Training & Qualifications"},
  {"title": "Multi-Location"},
  {"title": "Background Vendor Login"},
  {"title": "Goal Management"},
  {"title": "Key Performance Indicators"},
  {"title": "Employee Profile"},
  {"title": "Mobile Access"},
  {"title": "Expense Tracking"},
  {"title": "Request Desk"},
  {"title": "Multiuser Login & Role-based access control"},
  {"title": "Incident Management"},
  {"title": "Performance Metrics"},
  {"title": "Time Off Management"},
  {"title": "Biometric Attendance Management"},
  {"title": "Employee Scheduling"},
  {"title": "Workforce Management"},
  {"title": "Job Board Posting"},
  {"title": "Resume Posting"},
  {"title": "Job Posting"},
  {"title": "Job Requisition"},
  {"title": "Interview Scheduling"},
  {"title": "Leave & Absence Reporting"},
  {"title": "Salaried Employee Tracking"},
  {"title": "KPIs"},
  {"title": "Employment Screening"},
  {"title": "Training & Qualifications"},
  {"title": "Enable Self Service"},
  {"title": "Revision History"},
  {"title": "Digital Offer Letters"},
  {"title": "Manager Self Service"},
  {"title": "Roster Management"},
  {"title": "Process/Workflow Automation"},
  {"title": "Rewards Points"},
  {"title": "Time & Attendance"},
  {"title": "Multi-Department / Project"},
  {"title": "Incentive Programs"},
  {"title": "Automatic Time Capture"},
  {"title": "Billable & Non-Billable Hours"},
  {"title": "Overtime Calculation"},
  {"title": "Mobile Time Tracking"},
  {"title": "Email notifications"},
  {"title": "Organizational Charting"},
  {"title": "Salary Planning"},
  {"title": "Automated Shift Scheduling"},
  {"title": "Employee Database"},
  {"title": "Reporting/Analytics"},
  {"title": "Full & Final Settlements"},
  {"title": "Geo Fencing"},
  {"title": "IP Restriction on Attendance"},
  {"title": "Normalization"},
  {"title": "Multi Stakeholder Feedback"},
  {"title": "Performance Journals"},
  {"title": "Analytics & Advance MIS Reports"}
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
