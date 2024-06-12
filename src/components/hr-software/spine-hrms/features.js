import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance Tracking" },
  { "title": "Bonus" },
  { "title": "Email Integration" },
  { "title": "Employee Self Service Management" },
  { "title": "Time & Attendance Management" },
  { "title": "HR & Payroll" },
  { "title": "Mobile Support" },
  { "title": "Shift Management" },
  { "title": "Project Management" },
  { "title": "Expense Management" },
  { "title": "Statutory Compliances" },
  { "title": "Task Management" },
  { "title": "Taxation Management" },
  { "title": "Asset Management" },
  { "title": "Reimbursement Management" },
  { "title": "Loan & Advances Management" },
  { "title": "Document Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Help Desk" },
  { "title": "Discussion Forum" },
  { "title": "Knowledge Management" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Payroll Management" },
  { "title": "Recruitment Management" },
  { "title": "Excel Import" },
  { "title": "Arrears Calculation" },
  { "title": "Applicant tracking" },
  { "title": "Multiuser Login & Role-based access control" }
];

const moreFeatures = [
  { "title": "Salary Adjustment" },
  { "title": "TDS Calculation" },
  { "title": "Project Planning" },
  { "title": "Attendance Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Resource Booking" },
  { "title": "Mobile App" },
  { "title": "Request Hierarchy" },
  { "title": "Grievance Management" },
  { "title": "Attendance Tracking" },
  { "title": "Multi Company" },
  { "title": "Workflow Management" },
  { "title": "Inventory Management" },
  { "title": "Document Management" },
  { "title": "Financial Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Employee Field Customization" },
  { "title": "On-Boarding" },
  { "title": "Leave Management" },
  { "title": "Performance Appraisal" },
  { "title": "Data Security" },
  { "title": "Dashboard" },
  { "title": "Training Management" },
  { "title": "Attendance Tracking by Project" },
  { "title": "Payroll Management" },
  { "title": "Inventory Tracking" },
  { "title": "Timesheets" },
  { "title": "Employee Data Base" },
  { "title": "Asset Management" },
  { "title": "Online Resignation" },
  { "title": "Chatbot" },
  { "title": "Benefits Management" },
  { "title": "Appraisal Management" },
  { "title": "Bank Reconciliation" },
  { "title": "Taxation Management" },
  { "title": "Email Integration" },
  { "title": "Recurring Invoice" },
  { "title": "Security" },
  { "title": "Self Service Portal" },
  { "title": "Expense Management" },
  { "title": "Workflow Administration" },
  { "title": "Performance Management" },
  { "title": "Geo Tracking" },
  { "title": "Document Printing" },
  { "title": "Pay Slip" },
  { "title": "Bonus" },
  { "title": "Loan & Advances Management" },
  { "title": "Exit Management & Separation Management" },
  { "title": "Help Desk" },
  { "title": "HR & Payroll" },
  { "title": "Discussion Forum" },
  { "title": "Knowledge Management" },
  { "title": "Geo Tagging" },
  { "title": "Shift Management" },
  { "title": "Task Management" },
  { "title": "Statutory Compliances" },
  { "title": "Taxation Management" },
  { "title": "Attendance Tracking" }
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
