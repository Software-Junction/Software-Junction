import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Student Assessment Reports" },
  { title: "Biometric Attendance Management" },
  { title: "Admission Receipt Generation" },
  { title: "Time & Attendance Management" },
  { title: "Admissions Management" },
  { title: "Faculty Management" },
  { title: "Online Results Declaration" },
  { title: "E-library Members Management" },
  { title: "Transport / Fleet management" },
  { title: "Accounting Integration" },
  { title: "Fee Management" },
  { title: "Lecture Management" },
  { title: "Laboratory Management" },
  { title: "Examination Management" },
  { title: "Staff Management" },
  { title: "HR & Payroll" },
];

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFeatures = featuresData.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search Features..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="mb-4"
                />
              </Form.Group>
            </Form>
          </Col>

          {filteredFeatures.length > 0 ? (
            filteredFeatures.map((feature, index) => (
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
            ))
          ) : (
            <Col lg={12}>
              <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
            </Col>
          )}

          {isShowMore && (
            <>
              {/* Render additional features here if needed */}
            </>
          )}

          {/* Show More/Less Button */}
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
