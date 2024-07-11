import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "School Management" },
  { title: "Financial Management" },
  { title: "Admissions Management" },
  { title: "Library Management" },
  { title: "Purchase Management" },
  { title: "Academics" },
  { title: "Hostel Management" },
  { title: "Student Info Management" },
  { title: "Transport / Fleet management" },
  { title: "Student Evaluation Report" },
  { title: "Fee Management" },
  { title: "HRM" },
  { title: "College Management" },
  { title: "Assets" }
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
              {/* Additional features can be added here */}
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
