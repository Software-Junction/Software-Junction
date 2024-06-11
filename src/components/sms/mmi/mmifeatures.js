import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Student Information / Records" },
  { "title": "Attendance management" },
  { "title": "Kiosk System" },
  { "title": "Transport / Fleet management" },
  { "title": "Financial Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "User Customisation" },
  { "title": "Inventory Management" },
  { "title": "Time Table" },
  { "title": "Mobile Support" },
  { "title": "Fee Management" },
  { "title": "Reception & Front Office" },
  { "title": "SMS" },
  { "title": "HR & Payroll" },
  { "title": "Courses and Batches Management" },
  { "title": "Examination Management" },
  { "title": "Admission" },
  { "title": "Registration Management" },
  { "title": "School Management" },
  { "title": "Email Integration" },
  { "title": "Academics" },
  { "title": "Student Info Management" },
  { "title": "Accounting" }
];


const Mmifeatures = ({ styles }) => {
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
            <div className={styles["mmi-feature-btn"]}>
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

export default Mmifeatures;
