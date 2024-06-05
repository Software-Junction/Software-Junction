import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Bonus" },
  { "title": "Data Security" },
  { "title": "Employee Data Base" },
  { "title": "Document Management" },
  { "title": "Taxation Management" },
  { "title": "Leave Management" },
  { "title": "Employee Management" },
  { "title": "Mobile App" },
  { "title": "Employee Self Service Management" },
  { "title": "Onboarding" },
  { "title": "Reimbursement Management" },
  { "title": "Payroll Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Formula Defined Salary Calculation" },
  { "title": "Multi Company" },
  { "title": "Statutory Compliances" },
  { "title": "Salary Adjustment" },
  { "title": "Overtime Tracking" },
  { "title": "Expense Management" },
  { "title": "HR & Payroll" },
  { "title": "Loan & Advances Management" },
  { "title": "Arrears Calculation" },
  { "title": "Geo tracking" },
  { "title": "Attendance management" }
];

const moreFeatures = [
  { "title": "Employee Profile" },
  { "title": "Multi-Location" },
  { "title": "Salary Information & History" },
  { "title": "MIS Reports" },
  { "title": "Letter generation" },
  { "title": "Biometric Attendance Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Geo Fencing" },
  { "title": "Ad Hoc Reports" },
  { "title": "Enable Self Service" },
  { "title": "Full & Final Settlements" },
  { "title": "Expense Claims" },
  { "title": "Expense Reporting" },
  { "title": "Employee Directory" },
  { "title": "Leave Policy Management" },
  { "title": "Leave & Absence Reporting" },
  { "title": "Self-onboarding" },
  { "title": "PF/ESIS Calculation" },
  { "title": "Overtime Calculation" },
  { "title": "Multi-State" }
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
                  <span style={{ color: "#FC5185 " }}>
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
                  <span style={{ color: "#FC5185 " }}>
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
