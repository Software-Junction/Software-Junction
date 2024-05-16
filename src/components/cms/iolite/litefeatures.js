import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Library Management " },{ title: "Transport / Fleet management" },{ title: "Inventory Management " },
  { title: "Mobile Support" },{ title: "Email Integration " },{ title: "Fee Management " },
  { title: "Accounting" },{ title: "Academics " },{ title: "Class Management" },
  { title: "Examination Management" },{ title: "Reception & Front Office" },{ title: "Attendance management" },
  { title: "Registration Management " },{ title: "Hostel Management" },{ title: "Event Management" },
  { title: "Applicant Management" },{ title: "Admission " },{ title: "SMS " },
  { title: "HR & Payroll " },{ title: "Time Table " },{ title: "Activities " },
  { title: "Database backup/restore (Management) " },{ title: "Help Desk " },{ title: "Student Info Management " },
  { title: "Academic/Education " },{ title: "User Customisation " },{ title: "Courses and Batches Management " },
];

const Litefeatures = ({ styles }) => {
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

          {isShowMore && <></>}
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

export default Litefeatures;
