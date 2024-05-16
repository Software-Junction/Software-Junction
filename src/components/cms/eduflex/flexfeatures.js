import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";


const featuresData = [
  { title: "Library Management " },{ title: "Cafeteria Management" },{ title: "Financial Management " },
  { title: "Student Info Management" },{ title: "Classroom Management " },{ title: "Fee Management " },
  { title: "Accounting" },{ title: "Academics " },{ title: "Event Calendar" },
  { title: "Examination Management" },{ title: "Reception & Front Office" },{ title: "Attendance management" },
  { title: "Student Information / Records " },{ title: "Faculty Management" },{ title: "Fundraising Management" },
  { title: "Hostel Management" },{ title: "Inventory Management" },{ title: "Accounting" },
  { title: "Enrollment Management" },{ title: "Admission " },{ title: "SMS " },
  { title: "School District" },{ title: "HR & Payroll " },{ title: "Time Table " },
  { title: "Clinic Management" },{ title: "Attendance Tracking " },{ title: "Independent / Private " },
  { title: "Student Portal " },{ title: "Assessment Management" },{ title: "Mobile Support " },
  { title: "Registration Management " },{ title: "Bookstore Management " },{ title: "Higher Education " },{ title: "Behavior Management " }
];

const Flexfeatures = ({ styles }) => {
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
        
          {isShowMore && (
            <>
              
            </>
          )}
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

export default Flexfeatures;
