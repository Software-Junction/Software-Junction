import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Academics" },
  { title: "Fee Management" },
  { title: "Financial Management" },
  { title: "Library Management" },
  { title: "Payment Gateway Integration" },
  { title: "Student Info Management" },
  { title: "Mobile App" },
  { title: "Employee Management" },
  { title: "SMS Integration" },
  { title: "Admissions Management" },
  { title: "Scheduling" },
  { title: "Faculty Management" },
  { title: "Staff Management" },
  { title: "School Management" },
  { title: "Assessment Management" },
  { title: "Attendance Tracking" },
  { title: "Behavior Management" },
  { title: "Bookstore Management" },
  { title: "Cafeteria Management" },
  { title: "Classroom Management" },
  { title: "Curriculum Management" },
  { title: "Enrollment Management" },
  { title: "Housing Management" },
  { title: "Parent Portal" },
  { title: "Student Information / Records" },
  { title: "Student Portal" },
  { title: "Student Management" },
  { title: "School Bus Attendance" },
  { title: "Dorms" },
];

const Vidyafeatures = ({ styles }) => {
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
                  <span style={{ color: "#f95738 " }}>
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

export default Vidyafeatures;
