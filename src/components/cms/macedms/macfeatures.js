import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance Tracking" },
  { "title": "Admission" },
  { "title": "Staff Management" },
  { "title": "Class Management" },
  { "title": "GPS tracking" },
  { "title": "Enrollment Management" },
  { "title": "Evaluation Management" },
  { "title": "Data Management" },
  { "title": "Curriculum Management" },
  { "title": "Download in PDF" },
  { "title": "Classroom Management" },
  { "title": "Admissions Management" },
  { "title": "Mobile App" },
  { "title": "Applicant Management" },
  { "title": "LaTeX" },
  { "title": "Employee Management" },
  { "title": "Communication Tools" },
  { "title": "Key Performance Indicators" },
  { "title": "White Label" },
  { "title": "Fee Management" },
  { "title": "Daily Reports" },
  { "title": "Application Management" },
  { "title": "Fee Collection" },
  { "title": "Library Management" },
  { "title": "Student Information / Records" },
  { "title": "Parent Portal" },
  { "title": "Dashboard" },
  { "title": "Multi-User Collaboration" },
  { "title": "Faculty / Staff Management" },
  { "title": "Academics" },
  { "title": "DOCX" },
  { "title": "HR Management" },
  { "title": "Faculty Management" },
  { "title": "KPIs" },
  { "title": "Dedicated Support Manager" },
  { "title": "Exam Planner" },
  { "title": "Student Portal" }
];

const Macfeatures = ({ styles }) => {
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

export default Macfeatures;
