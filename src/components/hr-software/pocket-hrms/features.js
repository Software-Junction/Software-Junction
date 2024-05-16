import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Pay Slip" },
  { "title": "Attendance Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Bonus" },
  { "title": "Loan & Advances Management" },
  { "title": "Document Management" },
  { "title": "Email Integration" },
  { "title": "Employee Self Service Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Expense Management" },
  { "title": "HR & Payroll" },
  { "title": "Mobile Support" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Payroll Management" },
  { "title": "Performance Management" },
  { "title": "Project Management" },
  { "title": "Recruitment Management" },
  { "title": "Shift Management" },
  { "title": "Statutory Compliances" },
  { "title": "Taxation Management" },
  { "title": "Training Management" },
  { "title": "Employee Data Base" },
  { "title": "Mobile App" },
  { "title": "Leave Management" },
  { "title": "Compliance Management" },
  { "title": "Salary Adjustment" },
  { "title": "Performance Appraisal" },
  { "title": "Formula Defined Salary Calculation" }
];

const moreFeatures = [
  { "title": "Integration with Biometric" },
  { "title": "Events & Reminders" },
  { "title": "Timesheets" },
  { "title": "Salary Information & History" },
  { "title": "Data Security" },
  { "title": "Dashboard" },
  { "title": "Arrears Calculation" },
  { "title": "Multi Company" },
  { "title": "Recruiting Management" },
  { "title": "MIS Reports" },
  { "title": "Excel Import" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Appraisal Management" },
  { "title": "Employee field customization" },
  { "title": "Geo tracking" },
  { "title": "Resource cost estimation" },
  { "title": "Vacation / Leave Tracking" },
  { "title": "Time Management" },
  { "title": "Time & Attendance" }
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
