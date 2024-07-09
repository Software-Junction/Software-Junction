import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Courses and Batches Management" },
  { "title": "Library Management" },
  { "title": "Event Management" },
  { "title": "Transport / Fleet management" },
  { "title": "Reception & Front Office" },
  { "title": "Attendance management" },
  { "title": "SMS" },
  { "title": "Hostel Management" },
  { "title": "Help Desk" },
  { "title": "Student Information / Records" },
  { "title": "Time Table" },
  { "title": "Admission" },
  { "title": "Examination Management" },
  { "title": "School Management" },
  { "title": "Email Integration" },
  { "title": "Student Info Management" },
  { "title": "HR & Payroll" },
  { "title": "Inventory Management" },
  { "title": "Activities" },
  { "title": "Fee Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Accounting" },
  { "title": "Classroom Management" },
  { "title": "Bookstore Management" },
  { "title": "Registration Management" },
  { "title": "Academics" }
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
                  <span style={{ color: "#f95738 " }}>
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
                  <span style={{ color: "#f95738 " }}>
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
