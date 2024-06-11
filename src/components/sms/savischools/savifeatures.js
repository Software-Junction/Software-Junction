import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance management" },
  { "title": "Library Management" },
  { "title": "Activities" },
  { "title": "Examination Management" },
  { "title": "Curriculum Management" },
  { "title": "Fee Management" },
  { "title": "Admission" },
  { "title": "Invoices" },
  { "title": "Transport / Fleet management" },
  { "title": "Barcoding / RFID" },
  { "title": "Scheduling" },
  { "title": "School Management" },
  { "title": "Mobile Support" },
  { "title": "Student Information / Records" },
  { "title": "Time Table" },
  { "title": "Staff Management" },
  { "title": "Courses and Batches Management" },
  { "title": "Email Integration" },
  { "title": "Parent Portal" },
  { "title": "Student Portal" },
  { "title": "K-12" },
  { "title": "Attendance Tracking" },
  { "title": "SMS" },
  { "title": "Accounting" },
  { "title": "Classroom Management" }
];


const Savifeatures = ({ styles }) => {
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
            <div className={styles["sav-feature-btn"]}>
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

export default Savifeatures;
