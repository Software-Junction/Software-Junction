import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Exit Management & Separation Management" },
  { "title": "Training Management" },
  { "title": "Statutory Compliances" },
  { "title": "Performance Management" },
  { "title": "Asset Management" },
  { "title": "Mobile Support" },
  { "title": "Task Management" },
  { "title": "Email Integration" },
  { "title": "Bonus" },
  { "title": "Travel Management" },
  { "title": "Expense Management" },
  { "title": "Recruitment Management" },
  { "title": "Project Management" },
  { "title": "Payroll Management" },
  { "title": "Knowledge Management" },
  { "title": "Loan & Advances Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Workflow Administration" },
  { "title": "Employee Self Service Management" },
  { "title": "Taxation Management" },
  { "title": "Document Management" },
  { "title": "Help Desk" },
  { "title": "Reimbursement Management" },
  { "title": "Shift Management" }
];

const moreFeatures = [
  { "title": "Leave Management" },
  { "title": "Pay Slip" },
  { "title": "Workflow Management" },
  { "title": "Biometric Attendance Management" },
  { "title": "MIS Reports" },
  { "title": "Salary Adjustment" },
  { "title": "Applicant Tracking" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Events & Reminders" },
  { "title": "Employee field customization" },
  { "title": "Resource cost estimation" },
  { "title": "Data Security" },
  { "title": "Application Security" },
  { "title": "Self Service Portal" },
  { "title": "Excel Import" },
  { "title": "Salary Information & History" },
  { "title": "Succession Planning" },
  { "title": "Compensation Management" },
  { "title": "Reporting" },
  { "title": "Performance Appraisal" },
  { "title": "On-Boarding" },
  { "title": "Grievance Management" },
  { "title": "Resource cost estimation" },
  { "title": "Geo tracking" },
  { "title": "Mobile App" },
  { "title": "Integration with Biometric" },
  { "title": "Employee Lifecycle Management" },
  { "title": "360 Degree Feedback" },
  { "title": "Benefits Management" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Expense Reporting" },
  { "title": "Online resignation" },
  { "title": "Request hierarchy" },
  { "title": "TDS Calculation" },
  { "title": "Letter generation" },
  { "title": "Self-onboarding" },
  { "title": "HR Drive" },
  { "title": "Data Security" },
  { "title": "Dashboard" },
  { "title": "Multi Company" },
  { "title": "Formula Defined Salary Calculation" },
  { "title": "Arrears Calculation" },
  { "title": "People Management" },
  { "title": "Expense Reporting" },
  { "title": "Vacation / Leave Tracking" },
  { "title": "Workforce Management" },
  { "title": "Analytical Reports" }
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
                  <span style={{ color: "#f95738 " }}>
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
