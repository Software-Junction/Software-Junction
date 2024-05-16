import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Performance Appraisal" },
  { "title": "Pay Slip" },
  { "title": "Background Screening" },
  { "title": "Attendance Tracking" },
  { "title": "Employee Management" },
  { "title": "Approval Process Control" },
  { "title": "Recruitment Management" },
  { "title": "Internal HR" },
  { "title": "Calendar Management" },
  { "title": "Employee Directory" },
  { "title": "Mobile App" },
  { "title": "Help Desk" },
  { "title": "Reporting/Analytics" },
  { "title": "Leave Management" },
  { "title": "Payroll Management" },
  { "title": "Time Off Management" },
  { "title": "Analytics" },
  { "title": "Biometric Attendance Management" },
  { "title": "Reference Checking" },
  { "title": "HR & Payroll" },
  { "title": "Dashboard" },
  { "title": "Performance Management" },
  { "title": "Appraisal Management" },
  { "title": "Time Off Management" },
  { "title": "Employee Profile" },
  { "title": "Rewards Points" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Attendance management" }
];

const moreFeatures = [
  { "title": "KPIs" },
  { "title": "Time Off Requests" },
  { "title": "Productivity Analysis" },
  { "title": "On-going Performance Tracking" },
  { "title": "Employee Portal" },
  { "title": "Employment History" }
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
