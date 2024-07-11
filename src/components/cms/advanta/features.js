import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "User Customisation" },
  { title: "Email Integration" },
  { title: "Reception & Front Office" },
  { title: "Attendance Management" },
  { title: "Admission" },
  { title: "Accounting" },
  { title: "Inventory Management" },
  { title: "Library Management" },
  { title: "Transport / Fleet management" },
  { title: "Courses and Batches Management" },
  { title: "Fee Management" },
  { title: "Event Management" },
  { title: "Academics" },
  { title: "Examination Management" },
  { title: "Activities" },
  { title: "HR & Payroll" },
  { title: "Mobile Support" },
  { title: "Hostel Management" },
  { title: "Database backup/restore (Management)" },
  { title: "SMS" },
  { title: "Time Table" },
  { title: "Registration Management" },
  { title: "Student Info Management" }
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
                <h5>
                  <span style={{ color: "#f95738 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {feature.title}
                </h5>
              </div>
            </Col>
          ))}
          {isShowMore && (
            <>
              {/* Additional features can be added here if needed */}
            </>
          )}
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
