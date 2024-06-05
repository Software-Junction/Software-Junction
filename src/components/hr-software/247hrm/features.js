import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
  { "title": "Recruitment Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Loan & Advances Management" },
  { "title": "Training Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Bonus" },
  { "title": "Payroll Management" },
  { "title": "Document Management" },
  { "title": "Email Integration" },
  { "title": "Shift Management" },
  { "title": "Attendance management" },
  { "title": "Help Desk" },
  { "title": "Expense Management" },
  { "title": "HR & Payroll" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Statutory Compliances" },
  { "title": "Time Tracking" },
  { "title": "Knowledge Management" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Performance Management" },
  { "title": "Asset Management" },
  { "title": "Taxation Management" },
  { "title": "Reimbursement Management" }
];

const moreFeatures = [
  { "title": "Pay Slip" },
  { "title": "Multi Company" },
  { "title": "Employee Scheduling" },
  { "title": "Candidate Management" },
  { "title": "Employee Awards" },
  { "title": "Leave Management" },
  { "title": "Ad Hoc Reports" },
  { "title": "Employee Directory" },
  { "title": "Request Hierarchy" },
  { "title": "Shift Swapping" },
  { "title": "Activity Monitoring" },
  { "title": "Employee Engagement" },
  { "title": "Salary Adjustment" },
  { "title": "Payroll Taxes" },
  { "title": "Expense Reporting" },
  { "title": "Performance Appraisal" },
  { "title": "Grievance Management" },
  { "title": "Benefits Management" },
  { "title": "Attendance Tracking" },
  { "title": "Process/Workflow Automation" },
  { "title": "Talent Management" },
  { "title": "Accounting Integration" },
  { "title": "Mobile App" },
  { "title": "Employee Data Base" },
  { "title": "Biometric Attendance Management" },
  { "title": "Data Imports/Exports" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Leave Policy Management" },
  { "title": "Goal Management" },
  { "title": "Employee Field Customization" },
  { "title": "Salary Information & History" },
  { "title": "MIS Reports" },
  { "title": "Employment Screening" },
  { "title": "Geo Fencing" },
  { "title": "Application Security" },
  { "title": "Integration with Biometric" },
  { "title": "Goal Setting" },
  { "title": "Performance Control" },
  { "title": "Shift Swapping" },
  { "title": "Income Tax & Deductions" },
  { "title": "Data Security" },
  { "title": "Employee Profile" },
  { "title": "Employee Portal" },
  { "title": "Appraisal Management" },
  { "title": "Employee Reward Programs" },
  { "title": "Key Performance Indicators" },
  { "title": "Succession Planning" },
  { "title": "Ad hoc Query" },
  { "title": "Account Management" },
  { "title": "Candidate Tracking" },
  { "title": "Alerts/Notifications" },
  { "title": "Employer Accounts" },
  { "title": "Compliance Management" },
  { "title": "Workflow Administration" },
  { "title": "Resume Database" },
  { "title": "Onboarding" },
  { "title": "Forms" },
  { "title": "Digital Offer Letters" },
  { "title": "Manager Self Service" },
  { "title": "Employee Management" },
  { "title": "Claims Management" },
  { "title": "Career Development Planning" },
  { "title": "Private Dashboards" },
  { "title": "Applicant Tracking" },
  { "title": "Archiving & Retention" },
  { "title": "Analytics & Advance MIS Reports" },
  { "title": "Full & Final Settlements" },
  { "title": "Geo Tracking" },
  { "title": "Biometric Attendance Management" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Offer Management" },
  { "title": "Arrears Calculation" },
  { "title": "Performance Appraisal" },
  { "title": "Aptitude Testing" },
  { "title": "Letter Generation" },
  { "title": "Workforce Management" },
  { "title": "Employee Directory" },
  { "title": "Assessments" },
  { "title": "Activity Tracking" },
  { "title": "TDS Calculation" },
  { "title": "Eligibility Management" },
  { "title": "Employee Alignment" },
  { "title": "On-Boarding" },
  { "title": "Integration with Biometric" },
  { "title": "Events & Reminders" },
  { "title": "Excel Import" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Ad Hoc Analysis" },
  { "title": "Employee Handbook" },
  { "title": "Progress Tracking" },
  { "title": "Employee Lifecycle Management" },
  { "title": "File Sharing" },
  { "title": "Competency Tracking" },
  { "title": "Accounting Integration" },
  { "title": "Geo Tagging" },
  { "title": "Workflow Management" },
  { "title": "Attendance Tracking" },
  { "title": "Candidate Management" },
  { "title": "Employee Directory" },
  { "title": "Full & Final Settlements" },
  { "title": "Geo Fencing" },
  { "title": "Analytics & Advance MIS Reports" },
  { "title": "Employee Engagement" },
  { "title": "Digital Offer Letters" },
  { "title": "Employment History" },
  { "title": "Manager Self Service" },
  { "title": "Roster Management" },
  { "title": "Mobile Friendly" },
  { "title": "Income Tax & Deductions" },
  { "title": "Reports" },
  { "title": "Payslips" },
  { "title": "Forms" },
  { "title": "Record Keeping" },
  { "title": "Creating Pay Slips" },
  { "title": "Payroll Taxes" },
  { "title": "Multi Country" },
  { "title": "Multi State" },
  { "title": "Shift Swapping" },
  { "title": "Process/Workflow Automation" },
  { "title": "Goals" },
  { "title": "Productivity Analysis" },
  { "title": "Performance Control" },
  { "title": "Account Management" },
  { "title": "Goal Setting" },
  { "title": "Application Management" },
  { "title": "Employer Accounts" },
  { "title": "Employee Handbook" },
  { "title": "Aptitude Testing" },
  { "title": "Candidate Comparison" },
  { "title": "Candidate Tracking" },
  { "title": "Sick Leave Tracking" },
  { "title": "Activity/News Feed" },
  { "title": "Skills & Competencies" },
  { "title": "Key Performance Indicators" },
  { "title": "Private Dashboards" },
  { "title": "Aggregate Reports" },
  { "title": "Employee Portal" },
  { "title": "Employment Screening" },
  { "title": "Leave Policy Management" },
  { "title": "Access Request Management" },
  { "title": "Single Sign On" }
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
                  <span style={{ color: "#FC5185 " }}>
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
                  <span style={{ color: "#FC5185 " }}>
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
