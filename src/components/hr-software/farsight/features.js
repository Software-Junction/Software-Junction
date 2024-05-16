import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Exit Management & Separation Management" },
  { "title": "Loan & Advances Management" },
  { "title": "Travel Management" },
  { "title": "Attendance management" },
  { "title": "Bonus" },
  { "title": "Payroll Management" },
  { "title": "Training Management" },
  { "title": "Employee Data Base" },
  { "title": "Email Integration" },
  { "title": "Statutory Compliances" },
  { "title": "Project Management" },
  { "title": "Expense Management" },
  { "title": "Recruitment Management" },
  { "title": "Taxation Management" },
  { "title": "Asset Management" },
  { "title": "Audit Trail" },
  { "title": "Employee Self Service Management" },
  { "title": "Document Management" },
  { "title": "Performance Management" },
  { "title": "Knowledge Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Reimbursement Management" },
  { "title": "Help Desk" },
  { "title": "Time & Attendance Management" }
];

const moreFeatures = [
  { "title": "Attendance Reporting" },
  { "title": "Project Planning" },
  { "title": "Onboarding" },
  { "title": "Salary Adjustment" },
  { "title": "Salary Information & History" },
  { "title": "Leave Management" },
  { "title": "Employee Management" },
  { "title": "Business Process Automation" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Data Security" },
  { "title": "Internal HR" },
  { "title": "Absence Management" },
  { "title": "Geo Fencing" },
  { "title": "Geo tracking" },
  { "title": "Geo tracking" },
  { "title": "Employee Scheduling" },
  { "title": "Timesheets" },
  { "title": "Benefits Management" },
  { "title": "Employee Profile" },
  { "title": "Succession Planning" },
  { "title": "Excel Import" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Commission & Payroll Management" },
  { "title": "Employee Alignment" },
  { "title": "Salary Adjustment" },
  { "title": "Appraisal Management" },
  { "title": "TDS Calculation" },
  { "title": "Employee Awards" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Attendance Reporting" },
  { "title": "Leave Policy Management" },
  { "title": "Attendance Reporting" },
  { "title": "MIS Reports" },
  { "title": "Employee Portal" },
  { "title": "Letter generation" },
  { "title": "Project Planning" },
  { "title": "Mobile App" },
  { "title": "Employee Directory" },
  { "title": "Alerts/Notifications" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Collaboration Tools" },
  { "title": "Employee Database" },
  { "title": "Employee Profile" },
  { "title": "Data Import / Export" },
  { "title": "Employee Handbook" },
  { "title": "Internal HR" },
  { "title": "Data Security" },
  { "title": "On-Boarding" },
  { "title": "Job Description Creation" },
  { "title": "Talent Management" },
  { "title": "Excel Import" },
  { "title": "On-Boarding" },
  { "title": "Employee Lifecycle Management" },
  { "title": "MIS Reports" },
  { "title": "Succession Planning" },
  { "title": "Vacation / Leave Tracking" },
  { "title": "KPIs" },
  { "title": "Business Process Automation" },
  { "title": "Approval Workflow" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Attendance Reporting" },
  { "title": "Employee Directory" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Leave Management" },
  { "title": "Geofencing Time And Attendance" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Attendance Reporting" }
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
