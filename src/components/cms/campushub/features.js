import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Library Management " },{ title: "Transport / Fleet management" },{ title: "Inventory Management " },
  { title: "Mobile Support" },{ title: "Email Integration " },{ title: "Fee Management " },
  { title: "Accounting" },{ title: "Academics " },{ title: "Document Management" },
  { title: "Examination Management" },{ title: "Reception & Front Office" },{ title: "Attendance management" },
  { title: "Registration Management " },{ title: "Hostel Management" },{ title: "Event Management" },
  { title: "Admission " },{ title: "SMS " },{ title: "Mass Email" },
  { title: "HR & Payroll " },{ title: "Time Table " },{ title: "Activities " },
  { title: "Database backup/restore (Management) " },{ title: "Financial Management " },{ title: "Student Info Management " },
  { title: "Reception & Front Office " },{ title: "User Customisation " },{ title: "Courses and Batches Management " },
];

const moreFeatures = [
  { title: "Mass Email " },{ title: "Payment Gateway Integration" },{ title: "Document Management" },
  { title: "Mass Email" },{ title: "Time & Attendance Management" },{ title: "SMS Integration " },
  { title: "Mobile App" },{ title: "Laboratory Management " },{ title: "Data Management" },
  { title: "Mass Texting" },{ title: "Lecture Management" },{ title: "Enrollment Management" },
  { title: "Alumni Management " },{ title: "Cafeteria Management" },{ title: "Application Management" },
  { title: "Behavior Management " },{ title: "Dashboard " },{ title: "Attendee Management " },
  { title: "College Management " },{ title: "Clinic Management " },{ title: "Parent App " },
  { title: "HRM " },{ title: "Parent Portal " },{ title: "Online payments " },
  { title: "Curriculum Management" },{ title: "Special Education " },{ title: "Purchase Management" },
  { title: "Accounts payable " },{ title: "Accounting Integration " },{ title: "Online Results Declaration " },
  { title: "Calendar Management " },{ title: "Student Evaluation Report " },{ title: "Course Management " },
  { title: "Faculty Management " },{ title: "Classroom Management " },{ title: "Reporting & Statistics " },
  { title: "Online Registration " },{ title: "Applicant Portal " },{ title: "Activity Registration " },
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
          {moreFeatures.map((mfeature, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#f95738 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {mfeature.title}
                </h5>
              </div>
            </Col>
          ))}
          </>
          }
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
