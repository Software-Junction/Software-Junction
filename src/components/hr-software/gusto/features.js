import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Time Tracking" },
  { "title": "Expense Management" },
  { "title": "Payroll Management" },
  { "title": "Employee Self Service Management" },
  { "title": "HR & Payroll" },
  { "title": "Document Management" },
  { "title": "Attendance management" },
  { "title": "Pay Slip" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Taxation Management" },
  { "title": "Benefits Administration" },
  { "title": "Data Security" },
  { "title": "Salary Adjustment" },
  { "title": "Back Office Assistance" },
  { "title": "Time Off Requests" },
  { "title": "Events & Reminders" },
  { "title": "Self-onboarding" },
  { "title": "Salary Information & History" },
  { "title": "Retirement Plan Management" },
  { "title": "Multiple Pay Schedules" }
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
          {/* {moreFeatures.map((featureM, index) => (
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
          ))} */}
          </>
          }
          {/* <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
