import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile App" },
  { "title": "Bonus" },
  { "title": "Attendance management" },
  { "title": "Mobile Support" },
  { "title": "Employee Data Base" },
  { "title": "Audit Trail" },
  { "title": "Email Integration" },
  { "title": "Statutory Compliances" },
  { "title": "Expense Management" },
  { "title": "Time Tracking" },
  { "title": "Recruitment Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Performance Management" },
  { "title": "Shift Management" },
  { "title": "Task Management" },
  { "title": "Payroll Management" },
  { "title": "Document Management" },
  { "title": "Reimbursement Management" },
  { "title": "Expense Tracking" },
  { "title": "Time & Attendance Management" },
  { "title": "Employee Self Service Management" },
  { "title": "HR & Payroll" },
  { "title": "Loan & Advances Management" },
  { "title": "Asset Management" },
  {"title": "PF/ESIS Calculation"},
  {"title": "Job Requisition"},
  {"title": "Automated Shift Scheduling"},
  { "title": "Multiuser Login & Role-based access control" }
];

const moreFeatures = [
  {"title": "Time & Expense Tracking"},
  {"title": "Asset Tracking"},
  {"title": "Employee Time Clock"},
  {"title": "Data Security"},
  {"title": "Timesheet Management"},
  {"title": "Job Management"},
  {"title": "Daily Reports"},
  {"title": "Employee Handbook"},
  {"title": "Salary Information & History"},
  {"title": "Asset Management"},
  {"title": "Multi-Department / Project"},
  {"title": "Candidate Tracking"},
  {"title": "Onboarding"},
  {"title": "Goal Management"},
  {"title": "Offer management"},
  {"title": "Digital Offer Letters"},
  {"title": "Employee Database"},
  {"title": "Alerts & Reminders"},
  {"title": "Employee Lifecycle Management"},
  {"title": "Data Integration"},
  {"title": "Time Off Management"},
  {"title": "Timesheets"},
  {"title": "Employee Scheduling"},
  {"title": "Compliance Management"},
  {"title": "Interview Scheduling"},
  {"title": "Job Posting"},
  {"title": "Time & Attendance"},
  {"title": "Employee Engagement"},
  {"title": "Candidate Management"},
  {"title": "Expense Management"},
  {"title": "Geo Fencing"},
  {"title": "Employee Management"},
  {"title": "Employee Performance Analytics"},
  {"title": "Appraisal Management"},
  {"title": "Self Service Portal"},
  {"title": "Attendance Tracking"},
  {"title": "Interview Management"},
  {"title": "Employee Guides"},
  {"title": "Multi User"},
  {"title": "Geo Tagging"},
  {"title": "Internal HR"},
  {"title": "Timesheet Management"},
  {"title": "Performance Management"},
  {"title": "Geo tracking"},
  {"title": "Bonus Management"},
  {"title": "Leave Management"},
  {"title": "Data Import / Export"},
  {"title": "Reporting"},
  {"title": "Employee Profile"},
  {"title": "Workforce Management"},
  {"title": "Leave Policy Management"},
  {"title": "Interview Scheduling"},
  {"title": "Attendance management"},
  {"title": "Workflow Management"},
  {"title": "Letter generation"},
  {"title": "Employee Portal"},
  {"title": "Pay Slip"},
  {"title": "MIS Reports"},
  {"title": "Salary Adjustment"},
  {"title": "Expense Reporting"},
  {"title": "Employee Self-Service Portal"},
  {"title": "Employee Performance Analytics"},
  {"title": "Resume Parsing"},
  {"title": "Work Hour Tracking"},
  {"title": "Automated Review & Approval"},
  {"title": "Job Description Management"},
  {"title": "Applicant tracking"},
  {"title": "Mobile Access"},
  {"title": "Shift Management"},
  {"title": "Payroll Integration"},
  {"title": "Timesheets"},
  {"title": "Goal Management"},
  {"title": "Excel Import"},
  {"title": "Payroll Management"},
  {"title": "Audit Trail"},
  {"title": "Single Sign On"},
  {"title": "Training and development"},
  {"title": "Overtime Management"},
  {"title": "Self-onboarding"},
  {"title": "Offer management"},
  {"title": "Multi-Location"},
  {"title": "Automated Shift Scheduling"},
  {"title": "Deduction Management"},
  {"title": "Full & Final Settlements"},
  {"title": "Alerts Notifications"},
  {"title": "Biometric Attendance Management"},
  {"title": "Analytical Reports"},
  {"title": "Employee Lifecycle Management"},
  {"title": "Time Tracking"},
  {"title": "Employee Management"},
  {"title": "Work Hour Tracking"},
  {"title": "Self-Appraisals"},
  {"title": "Employee Self-Service Portal"},
  {"title": "Employee Engagement"},
  {"title": "Vacation / Leave Tracking"},
  {"title": "Multi-Location"},
  {"title": "Digital Offer Letters"},
  {"title": "Employment History"},
  {"title": "Manager Self Service"},
  {"title": "Roster Management"},
  {"title": "Goals"},
  {"title": "Time Clock"},
  {"title": "Time & Attendance"},
  {"title": "Job Requisition"},
  {"title": "Resume Parsing"},
  {"title": "Built-in ATS"},
  {"title": "Employee Handbook"},
  {"title": "Candidate Tracking"},
  {"title": "Interview Scheduling"},
  {"title": "Leave & Absence Reporting"},
  {"title": "Sick Leave Tracking"},
  {"title": "Automated Review & Approval"},
  {"title": "Work Hour Tracking"},
  {"title": "KPIs"},
  {"title": "Employee Portal"},
  {"title": "Leave Policy Management"},
  {"title": "Single Sign On"},
  {"title": "Time Off Requests"},
  {"title": "Enable Self Service"},
  {"title": "Employee Performance Analytics"},
  {"title": "Geofencing Time And Attendance"},
  {"title": "Training and development"},
  {"title": "Time and attendance management"},
  {"title": "Time and attendance tracking"},
  {"title": "Employee Self-Service Portal"}
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
