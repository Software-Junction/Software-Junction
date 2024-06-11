import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Lesson Plan Management" },
  { "title": "Transport / Fleet management" },
  { "title": "Attendance management" },
  { "title": "Fee Management" },
  { "title": "Admissions Management" },
  { "title": "Student Info Management" },
  { "title": "K-12" },
  { "title": "Customized Report Cards" },
  { "title": "Library Management" },
  { "title": "School branded App" },
  { "title": "Student Portal" },
  { "title": "Report Cards" },
  { "title": "For Classroom" },
  { "title": "Biometric Attendance Management" },
  { "title": "Parent Portal" },
  { "title": "Parent Communication" },
  { "title": "Student Information / Records" },
  { "title": "Teacher Dashboard" },
  { "title": "Time & Attendance Management" },
  { "title": "Time Table/schedule" },
  { "title": "Lesson Planning" },
  { "title": "Fee Collection" },
  { "title": "School Management" },
  { "title": "Teacher App" },
  { "title": "School Libraries" },
  { "title": "Payment Gateway Integration" },
  { "title": "Exam Planner" },
  { "title": "Parent App" },
  { "title": "Faculty Management" },
  { "title": "Courses and Batches Management" },
  { "title": "Attendance Tracking" },
  { "title": "School Management" },
  { "title": "For Private Schools" },
  { "title": "Attendance Tracking" },
  { "title": "Student Management" },
  { "title": "Fee Management" },
  { "title": "Classroom Management" },
  { "title": "Customized Report Cards" }
];

const Teachfeatures = ({ styles }) => {
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

export default Teachfeatures;
