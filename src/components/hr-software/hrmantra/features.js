import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Shift Management" },
  { "title": "Inventory Management" },
  { "title": "Event Calendar" },
  { "title": "Employee Self Service Management" },
  { "title": "Asset Management" },
  { "title": "Attendance Management" },
  { "title": "Reminders" },
  { "title": "Document Management" },
  { "title": "Recruitment Management" },
  { "title": "Performance Management" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Audit Trail" },
  { "title": "Help Desk" },
  { "title": "Email Integration" },
  { "title": "Expense Tracking" },
  { "title": "Mobile Support" },
  { "title": "Project Management" },
  { "title": "Expense Management" },
  { "title": "HR & Payroll" },
  { "title": "Statutory Compliances" },
  { "title": "Event Management" },
  { "title": "Bonus" },
  { "title": "Loan & Advances Management" },
  { "title": "Knowledge Management" },
  { "title": "Reimbursement Management" },
  { "title": "Document Management" },
  { "title": "Payroll Management" },
  { "title": "Exit Management & Separation Management" },
  { "title": "Travel Management" },
  { "title": "Expense Reporting" },
  { "title": "Mobile App" },
  { "title": "Multiuser Login & Role-based Access Control" }
];

const moreFeatures = [
  { "title": "Data Security" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Geo Tracking" },
  { "title": "Email Management" },
  { "title": "Employee Database" },
  { "title": "Salary Adjustment" },
  { "title": "Workflow Administration" },
  { "title": "Geo Fencing" },
  { "title": "Employee Awards" },
  { "title": "Time & Expense Tracking" },
  { "title": "Appraisal Management" },
  { "title": "Data Analysis" },
  { "title": "Bulk Resume Parsing" },
  { "title": "Compensation Management" },
  { "title": "Asset Tracking" },
  { "title": "Online resignation" },
  { "title": "Attendance Tracking" },
  { "title": "Leave Management" },
  { "title": "Employee Engagement" },
  { "title": "Employee Directory" },
  { "title": "Performance Appraisal" },
  { "title": "Pay Slip" },
  { "title": "TDS Calculation" },
  { "title": "Employee field customization" },
  { "title": "Applicant Tracking" },
  { "title": "Task Management" },
  { "title": "Document Management" },
  { "title": "Succession Planning" },
  { "title": "Chatbot" },
  { "title": "Salary Information & History" },
  { "title": "Project Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Time Tracking" },
  { "title": "Workflow Configuration" },
  { "title": "Approval Process Control" },
  { "title": "Multi-Country" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Goal Setting / Tracking" },
  { "title": "Mobile Access" },
  { "title": "Employee Engagement" },
  { "title": "HR Drive" },
  { "title": "Survey Builder" },
  { "title": "Time & Attendance Management" },
  { "title": "Chat" },
  { "title": "Job Management" },
  { "title": "Reporting" },
  { "title": "Email Integration" },
  { "title": "Data Import / Export" },
  { "title": "Employee Portal" },
  { "title": "Asset Management" },
  { "title": "Performance Metrics" },
  { "title": "Access Controls/Permissions" },
  { "title": "Shift Management" },
  { "title": "Audit Management" },
  { "title": "Knowledge Management" },
  { "title": "Bulk Reference Request" },
  { "title": "Bulk Resume Parsing" },
  { "title": "Employee Self Service Management" },
  { "title": "Geo Tagging" },
  { "title": "Interview Management" },
  { "title": "Competency Management" },
  { "title": "Task Management" },
  { "title": "Compliance Management" },
  { "title": "Mobile Time Tracking" },
  { "title": "Document Control" },
  { "title": "Goal Cascading" },
  { "title": "Online Calendar" },
  { "title": "Biometric Attendance Management" },
  { "title": "Real-time Chat" },
  { "title": "Access Request Management" },
  { "title": "Online Applications" },
  { "title": "Individualized Assessments" },
  { "title": "Expense Tracking" },
  { "title": "Employee Directory" },
  { "title": "Payroll Management" },
  { "title": "Time per Project Reporting" },
  { "title": "Geo tracking" },
  { "title": "Online Time Tracking" },
  { "title": "Competency Scale" },
  { "title": "Single Sign On" },
  { "title": "Multi-Language" },
  { "title": "Surveys" },
  { "title": "Content Moderation" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Attendance Management" },
  { "title": "Analytics" },
  { "title": "Employee Engagement" },
  { "title": "Appointment Scheduling" },
  { "title": "Access Controls/Permissions" },
  { "title": "Chat" },
  { "title": "Expense Management" },
  { "title": "Employee Self Service Management" },
  { "title": "HR & Payroll" },
  { "title": "Mobile Support" },
  { "title": "Pay Slip" },
  { "title": "Training Management" }
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
