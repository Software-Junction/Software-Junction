import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Recruitment Management" },
  { "title": "Task Management" },
  { "title": "Asset Management" },
  { "title": "Email Integration" },
  { "title": "Loan & Advances Management" },
  { "title": "Training Management" },
  { "title": "Expense Management" },
  { "title": "Employee Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Help Desk" },
  { "title": "Performance Management" },
  { "title": "Workflow Administration" },
  { "title": "Time & Attendance Management" },
  { "title": "Document Management" },
  { "title": "Payroll Management" },
  { "title": "Statutory Compliances" },
  { "title": "Travel Management" },
  { "title": "Reimbursement Management" },
  { "title": "Employee Data Base" },
  { "title": "Leave Management" },
];

const moreFeatures = [
  { "title": "MIS Reports" },
  { "title": "Appraisal Management" },
  { "title": "Shift Management" },
  { "title": "Employee Self Service Management" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Salary Information & History" },
  { "title": "Workflow Management" },
  { "title": "Application Security" },
  { "title": "Onboarding" },
  { "title": "TDS Calculation" },
  { "title": "Workforce Management" }
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
