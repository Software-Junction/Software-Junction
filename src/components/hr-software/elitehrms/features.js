import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Statutory Compliances" },
  { "title": "Time & Attendance Management" },
  { "title": "Mobile Support" },
  { "title": "Attendance management" },
  { "title": "Expense Management" },
  { "title": "Project Management" },
  { "title": "HR & Payroll" },
  { "title": "Mobile App" },
  { "title": "Loan & Advances Management" },
  { "title": "Training Management" },
  { "title": "Shift Management" },
  { "title": "Reimbursement Management" },
  { "title": "Performance Management" },
  { "title": "Workflow Administration" },
  { "title": "Email Integration" },
  { "title": "Document Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Task Management" },
  { "title": "Employee Data Base" },
  { "title": "Recruitment Management" },
  { "title": "Payroll Management" },
  { "title": "Travel Management" },
  { "title": "Bonus" },
  { "title": "Multiuser Login & Role-based access control" }
];

const moreFeatures = [
  { "title": "Data Security" },
  { "title": "Salary Information & History" },
  { "title": "Biometric Attendance Management" },
  { "title": "Salary Adjustment" },
  { "title": "Leave Policy Management" },
  { "title": "Self Service Portal" },
  { "title": "Compatibility with Swap Card" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Appraisal Management" },
  { "title": "Employee Database" },
  { "title": "Overtime Calculation" },
  { "title": "Full & Final Settlements" },
  { "title": "Mobile Access" },
  { "title": "Pay Slip" },
  { "title": "Letter generation" },
  { "title": "Project Planning" },
  { "title": "Onboarding" },
  { "title": "Expense Reporting" },
  { "title": "Workflow Management" },
  { "title": "Performance Appraisal" },
  { "title": "Vacation / Leave Tracking" },
  { "title": "Benefits Management" },
  { "title": "MIS Reports" },
  { "title": "Employee Portal" },
  { "title": "Collaboration Platform" },
  { "title": "Manager Self Service" },
  { "title": "Online Time Tracking" },
  { "title": "Digital Offer Letters" },
  { "title": "Integration with Biometric" },
  { "title": "Excel Import" },
  { "title": "Workforce Management" },
  { "title": "Workflow Configuration" },
  { "title": "Arrears Calculation" },
  { "title": "Leave Management" },
  { "title": "Payroll Integration" },
  { "title": "Events & Reminders" },
  { "title": "On-Boarding" },
  { "title": "Absence Management" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Mobile Friendly" },
  { "title": "Multi Company" },
  { "title": "Formula Defined Salary Calculation" },
  { "title": "Overtime Tracking" }
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
