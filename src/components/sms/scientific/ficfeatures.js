import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
  { "title": "Attendance management" },
  { "title": "Event Management" },
  { "title": "Examination Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Activities" },
  { "title": "Reception & Front Office" },
  { "title": "Inventory Management" },
  { "title": "Help Desk" },
  { "title": "Admission" },
  { "title": "Courses and Batches Management" },
  { "title": "Email Integration" },
  { "title": "Kiosk System" },
  { "title": "Fee Management" },
  { "title": "Event Calendar" },
  { "title": "Financial Management" },
  { "title": "Hostel Management" },
  { "title": "Academics" },
  { "title": "Library Management" },
  { "title": "HR & Payroll" },
  { "title": "Accounting" },
  { "title": "Registration Management" },
  { "title": "Scheduling" },
  { "title": "Enrollment Management" },
];
const moreFeatures = [
  { "title": "Higher Education" },
  { "title": "Transport / Fleet management" },
  { "title": "Independent / Private" },
  { "title": "User Customisation" },
  { "title": "Bookstore Management" },
  { "title": "Classroom Management" },
  { "title": "Time Table" },
  { "title": "Student Portal" },
  { "title": "Assessment Management" },
  { "title": "SMS" },
  { "title": "Clinic Management" },
  { "title": "School Management" },
  { "title": "Special Education" },
  { "title": "Behavior Management" },
  { "title": "Parent Portal" },
  { "title": "Facility Management" },
  { "title": "Staff Management" },
  { "title": "Curriculum Management" },
  { "title": "Housing Management" },
  { "title": "Fundraising Management" },
  { "title": "Faculty Management" },
  { "title": "Student Info Management" },
  { "title": "Attendance Tracking" },
  { "title": "Cafeteria Management" },
  { "title": "Special Education" },
  { "title": "Special Education" }
];

const Ficfeatures = ({ styles }) => {
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
            <div className={styles["fic-feature-btn"]}>
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

export default Ficfeatures;
