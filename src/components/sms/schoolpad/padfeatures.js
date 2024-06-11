import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Courses and Batches Management" },
  { "title": "Library Management" },
  { "title": "Admission" },
  { "title": "Mobile Support" },
  { "title": "Time Table" },
  { "title": "Event Management" },
  { "title": "SMS" },
  { "title": "Reception & Front Office" },
  { "title": "Examination Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Attendance management" },
  { "title": "User Customisation" },
  { "title": "Inventory Management" },
  { "title": "Activities" },
  { "title": "Transport / Fleet management" },
  { "title": "Academics" },
  { "title": "Email Integration" },
  { "title": "Fee Management" },
  { "title": "Help Desk" },
  { "title": "Registration Management" }
];


const Padfeatures = ({ styles }) => {
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
            <div className={styles["pad-feature-btn"]}>
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

export default Padfeatures;
