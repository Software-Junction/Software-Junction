import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";


const featuresData = [
  { title: "Library Management" },{ title: "Event Management" },{ title: "Financial Management" },
  { title: "Hostel Management" },{ title: "Classroom Management" },{ title: "Fee Management" },
  { title: "Attendance management" },{ title: "Academics" },{ title: "School Management" },
  { title: "Examination Management" },{ title: "Transport / Fleet management" },{ title: "Assessment Management" },
  { title: "Student Information / Records" },{ title: "Faculty Management" },{ title: "Activities" },
  { title: "Facility Management" },{ title: "Scheduling" },{ title: "Accounting" },
  { title: "Enrollment Management" },{ title: "Admission" },{ title: "SMS" },
  { title: "K-12" },{ title: "HR & Payroll" },{ title: "Time Table" },
  { title: "Staff Management" },{ title: "Attendance Tracking" },{ title: "Independent / Private" },
  { title: "Student Portal" },{ title: "Parent Portal" }
];

const Vedfeatures = ({ styles }) => {
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

export default Vedfeatures;
