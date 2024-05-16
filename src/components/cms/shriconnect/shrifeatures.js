import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";


const featuresData = [
  { title: "Library Management" },{ title: "Attendance management" },{ title: "Faculty Managementt" },
  { title: "Hostel Management" },{ title: "Event Management" },{ title: "Fee Management" },
  { title: "Admissions" },{ title: "Accounting" },{ title: "School Management" },
  { title: "Enrollment Management" },{ title: "Transport / Fleet management" },{ title: "Assessment Management" },
  { title: "Student Info Management" },{ title: "Examination Management" },{ title: "Staff Management" },
  { title: "Facility Management" },{ title: "Special Education" },{ title: "Help Desk" },
  { title: "Attendance Tracking" },{ title: "Independent / Private" },{ title: "HR & Payroll" },
  { title: "Time Table" },{ title: "Parent Portal" },{ title: "Mobile Support" },
  { title: "SMS" },{ title: "Scheduling" },{ title: "K-12" },{ title: "Higher Education" },
];

const Shrifeatures = ({ styles }) => {
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
        
          {isShowMore && (
            <>
              
            </>
          )}
          {/* <Col lg={12}>
            <div className={styles["ast-feature-btn"]}>
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

export default Shrifeatures;
