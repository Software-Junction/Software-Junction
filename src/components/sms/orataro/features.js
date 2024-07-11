import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance management" },
  { "title": "Library Management" },
  { "title": "Courses and Batches Management" },
  { "title": "Registration Management" },
  { "title": "HR & Payroll" },
  { "title": "Reception & Front Office" },
  { "title": "SMS" },
  { "title": "Event Calendar" },
  { "title": "Event Management" },
  { "title": "Examination Management" },
  { "title": "Mobile Support" },
  { "title": "Financial Management" },
  { "title": "Help Desk" },
  { "title": "Payment Gateway Integration" },
  { "title": "Inventory Management" },
  { "title": "Hostel Management" },
  { "title": "Admission" },
  { "title": "Academics" },
  { "title": "Time Table" },
  { "title": "Accounting" }
];
const moreFeatures = [
  { "title": "Facility Management" },
  { "title": "Curriculum Management" },
  { "title": "Special Education" },
  { "title": "Housing Management" },
  { "title": "Student Portal" },
  { "title": "Parent Portal" },
  { "title": "GPS tracking" },
  { "title": "Teacher App" },
  { "title": "Admissions Management" },
  { "title": "Assessment Management" },
  { "title": "Data Management" },
  { "title": "Higher Education" },
  { "title": "Scheduling" },
  { "title": "Bookstore Management" },
  { "title": "Classroom Management" },
  { "title": "Behavior Management" },
  { "title": "User Customisation" },
  { "title": "SMS Integration" },
  { "title": "Customized Report Cards" },
  { "title": "Parent App" },
  { "title": "Transport / Fleet management" },
  { "title": "Admission CRM" },
  { "title": "Attendance Tracking" },
  { "title": "Staff Management" },
  { "title": "Cafeteria Management" },
  { "title": "Student Information / Records" },
  { "title": "School Management" },
  { "title": "Enrollment Management" },
  { "title": "Faculty Management" },
  { "title": "School Bus Attendance" }
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

  const combinedFeatures = [...featuresData, ...moreFeatures];
  const filteredFeatures = combinedFeatures.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayFeatures = searchQuery
    ? filteredFeatures
    : isShowMore
    ? combinedFeatures
    : featuresData;

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

          {displayFeatures.length > 0 ? (
          displayFeatures.map((feature, index) => (
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
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

          {/* {isShowMore && 
          <>
          {filteredMoreFeatures.map((featureM, index) => (
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
          ))}
          </>
          } */}
          {!searchQuery && (
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
           )}
        </Row>
      </Container>
    </>
  );
};

export default Features;
