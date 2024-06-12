import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Recruitment Management" },
  { "title": "Employee Data Base" },
  { "title": "Attendance Management" },
  { "title": "Expense Tracking" },
  { "title": "Task Management" },
  { "title": "Event Management" },
  { "title": "Exit Management & Separation Management" },
  { "title": "Time Tracking" },
  { "title": "Asset Management" },
  { "title": "Document Management" },
  { "title": "Training Management" },
  { "title": "Mobile App" },
  { "title": "Bonus" },
  { "title": "Payroll Management" },
  { "title": "Performance Management" },
  { "title": "Shift Management" },
  { "title": "Help Desk" },
  { "title": "Expense Management" },
  { "title": "Travel Management" },
  { "title": "Task Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Pay Slip" },
  { "title": "Reimbursement Management" },
  { "title": "Employee Management" },
  { "title": "Payroll Integration" },
  { "title": "Interview Management" },
  { "title": "HR & Payroll" }
];

const moreFeatures = [
  { "title": "Geo Fencing" },
  { "title": "Offer Management" },
  { "title": "Salary Adjustment" },
  { "title": "Time Off Management" },
  { "title": "Grievance Management" },
  { "title": "Mobile Access" },
  { "title": "Performance Appraisal" },
  { "title": "Job Management" },
  { "title": "Onboarding" },
  { "title": "Salary Information & History" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Talent Management" },
  { "title": "Geo Tracking" },
  { "title": "Forms Management" },
  { "title": "Self-Appraisals" },
  { "title": "Mobile Time Tracking" },
  { "title": "Analytics & Advance MIS Reports" },
  { "title": "Hourly Employee Tracking" },
  { "title": "IP Restriction on Attendance" },
  { "title": "Access Controls/Permissions" },
  { "title": "Resume Database" },
  { "title": "Employee Profile" },
  { "title": "Overtime Tracking" },
  { "title": "Tax Management" },
  { "title": "Digital Offer Letters" },
  { "title": "Manager Self Service" },
  { "title": "Forms" },
  { "title": "Geo Tagging" },
  { "title": "Budget Tracking/Job Costing" },
  { "title": "Job Requisition" },
  { "title": "Hourly Employee Tracking" },
  { "title": "On-going Performance Tracking" },
  { "title": "Leave Policy Management" },
  { "title": "Resume Parsing" },
  { "title": "Mobile Friendly" },
  { "title": "Income Tax & Deductions" },
  { "title": "Interview Scheduling" },
  { "title": "Biometric Recognition" },
  { "title": "Employee Portal" },
  { "title": "Payroll Taxes" },
  { "title": "Employee Database" },
  { "title": "Shift Swapping" },
  { "title": "Forms" },
  { "title": "Asset Management" },
  { "title": "Timesheets" },
  { "title": "Compliance Management" },
  { "title": "Workflow Management" },
  { "title": "Normalization" },
  { "title": "Online Punch Card" },
  { "title": "Online Testing" },
  { "title": "Full & Final Settlements" },
  { "title": "Timesheet Management" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Bonus Management" },
  { "title": "Application Management" },
  { "title": "Key Performance Indicators" },
  { "title": "Recruitment Management" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Shift Management" },
  { "title": "Training Management" },
  { "title": "Self-onboarding" },
  { "title": "Attendance Management" },
  { "title": "Self-Learning" },
  { "title": "Reporting/Analytics" },
  { "title": "Document Management" },
  { "title": "Payslips" },
  { "title": "License Tracking" },
  { "title": "Employee Management" },
  { "title": "Leave Management" },
  { "title": "Exit Management & Separation Management" },
  { "title": "Event Management" },
  { "title": "Job Board Posting" },
  { "title": "Offer Management" },
  { "title": "Employee Directory" },
  { "title": "MIS Reports" },
  { "title": "Task Management" }
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
