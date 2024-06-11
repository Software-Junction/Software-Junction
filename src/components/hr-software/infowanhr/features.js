import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Training Management" },
  { "title": "Multi Company" },
  { "title": "Pay Slip" },
  { "title": "Arrears Calculation" },
  { "title": "Bonus" },
  { "title": "Document Management" },
  { "title": "Employee Data Base" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Expense Management" },
  { "title": "Leave Management" },
  { "title": "Payroll Management" },
  { "title": "Statutory Compliances" },
  { "title": "Taxation Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Mobile Support" },
  { "title": "Time & Attendance Management" },
  { "title": "Performance Management" },
  { "title": "Recruitment Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "HR & Payroll" },
  { "title": "Compatibility with Swap Card" },
  { "title": "Formula Defined Salary Calculation" },
  { "title": "Attendance management" },
  { "title": "Reimbursement Management" }
];

const moreFeatures = [
  { "title": "Salary Adjustment" },
{ "title": "Grievance Management" },
{ "title": "Integration with Biometric" },
{ "title": "Workflow Management" },
{ "title": "Talent Management" },
{ "title": "Excel Import" },
{ "title": "Performance Appraisal" },
{ "title": "MIS Reports" },
{ "title": "On-Boarding" },
{ "title": "Back Office Assistance" },
{ "title": "PF/ESIS Calculation" },
{ "title": "Events & Reminders" },
{ "title": "Resume Database" },
{ "title": "Salary Information & History" },
{ "title": "Data Security" },
{ "title": "Appraisal Management" }
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

          {displayFeatures.map((feature, index) => (
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
