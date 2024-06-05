import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile App" },
  { "title": "Bookkeeping" },
  { "title": "Fee Management" },
  { "title": "Parent App" },
  { "title": "Admissions Management" },
  { "title": "Parent Portal" },
  { "title": "Fee Collection" },
  { "title": "Attendance management" },
  { "title": "Student Portal" },
  { "title": "Reception & Front Office" },
  { "title": "Student Management" },
  { "title": "Financial Management" },
  { "title": "Mobile Support" },
  { "title": "Staff Management" },
  { "title": "Enrollment Management" },
  { "title": "Facility Management" },
  { "title": "Higher Education" },
  { "title": "Classroom Management" },
  { "title": "Scheduling" },
  { "title": "Teacher App" },
  { "title": "School branded App" },
  { "title": "Student Info Management" },
  { "title": "Balance Sheet" },
  { "title": "Leave Management" },
  { "title": "SMS" },
  { "title": "Online Results Declaration" },
  { "title": "Student Assessment Reports" },
  { "title": "Independent / Private" },
  { "title": "Transport / Fleet management" },
  { "title": "Registration Management" },
  { "title": "SMS Integration" },
  { "title": "Absence Management" },
  { "title": "Class Management" },
  { "title": "Attendance Tracking" },
  { "title": "Academic/Education" },
  { "title": "School Management" },
  { "title": "Academics" },
  { "title": "Teacher App" },
  { "title": "School Bus Attendance" },
  { "title": "Payments" },
  { "title": "Student Information / Records" },
  { "title": "Schools" },
  { "title": "For Private Schools" }
];

const Digifeatures = ({ styles }) => {
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

          {isShowMore && <></>}
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

export default Digifeatures;
