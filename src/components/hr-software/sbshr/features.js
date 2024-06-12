import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Exit Management & Separation Management" },
  { "title": "Recruitment Management" },
  { "title": "Document Management" },
  { "title": "Employee Data Base" },
  { "title": "Bonus" },
  { "title": "Time & Attendance Management" },
  { "title": "Reimbursement Management" },
  { "title": "Performance Management" },
  { "title": "Leave Management" },
  { "title": "Shift Management" },
  { "title": "Taxation Management" },
  { "title": "Asset Management" },
  { "title": "Attendance management" },
  { "title": "Salary Adjustment" },
  { "title": "Formula Defined Salary Calculation" },
  { "title": "HR & Payroll" },
  { "title": "Pay Slip" },
  { "title": "Mobile Support" },
  { "title": "Expense Management" },
  { "title": "Statutory Compliances" },
  { "title": "Loan & Advances Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Payroll Management" }
];

const moreFeatures = [
  { "title": "Time Off Requests" },
  { "title": "Salary Information & History" },
  { "title": "Compliance Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Leave Policy Management" },
  { "title": "Talent Management" },
  { "title": "Excel Import" },
  { "title": "Integration with Biometric" },
  { "title": "Data Imports/Exports" },
  { "title": "Workflow Management" },
  { "title": "MIS Reports" },
  { "title": "Attendance Reporting" },
  { "title": "On-Boarding" },
  { "title": "Reporting/Analytics" },
  { "title": "Multi-Country" },
  { "title": "Events & Reminders" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Self Service Portal" },
  { "title": "Performance Appraisal" },
  { "title": "Vacation/Leave Tracking" },
  { "title": "Employee Tracking" },
  { "title": "Tax Management" },
  { "title": "Appraisal Management" },
  { "title": "Multi-State" },
  { "title": "Multiple Pay Schedules" }
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
