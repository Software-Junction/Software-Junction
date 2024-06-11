import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Procedure Management" },
    { "title": "Inventory Management" },
    { "title": "Pay Slip" },
    { "title": "Case Management" },
    { "title": "Patient Registration" },
    { "title": "Client Management & Credit Control" },
    { "title": "Inventory control" },
    { "title": "Expense Management" },
    { "title": "Asset Management" },
    { "title": "Appointment Management" },
    { "title": "Billing & Revenue Cycle Management" },
    { "title": "Patient Information Management" },
    { "title": "Referral Management" },
    { "title": "Performance Management" },
    { "title": "Practice Management" },
    { "title": "CRM" },
    { "title": "Modality (Diagnostic) Schedule & Appointments" },
    { "title": "Accident & Emergency Care" },
    { "title": "Document Management" },
    { "title": "Day Care Management System" },
    { "title": "Electronic medical records" },
    { "title": "Payroll Management" },
    { "title": "Barcode Integration" },
    { "title": "Customer DataBase" }
];

const moreFeatures = [
  { "title": "Budget Management" },
    { "title": "HIPAA Compliance" },
    { "title": "Pharmacy Information System (Drugs, Opticals)" },
    { "title": "Online Booking" },
    { "title": "Billing & Invoicing" },
    { "title": "Discharge Management" },
    { "title": "Hospital Support Function System" },
    { "title": "Patient Monitoring" },
    { "title": "Scheduling" },
    { "title": "Assessments" },
    { "title": "Patient Record Management" },
    { "title": "Real Time Reporting" },
    { "title": "Bed Management" },
    { "title": "Charting" },
    { "title": "System Administration Functions" },
    { "title": "Audit Management" },
    { "title": "Patient Portal" },
    { "title": "E-Prescribing" },
    { "title": "Document Indexing" },
    { "title": "Insurance Management" },
    { "title": "Claims Management" },
    { "title": "Admissions Management" },
    { "title": "Billing System" },
    { "title": "Waiting Time Tracking" },
    { "title": "Lab Information System" },
    { "title": "Multi-Location" },
    { "title": "Electronic Signature" },
    { "title": "HIPAA Compliant" },
    { "title": "Analytics" },
    { "title": "Patient Location Tracking" },
    { "title": "Pharmacy with Inventory" },
    { "title": "Staff Payroll System" },
    { "title": "Diagnostic Management" },
    { "title": "Multi-Location" },
    { "title": "Patient Monitoring" },
    { "title": "PACS Support" },
    { "title": "Purchase" },
    { "title": "Medical Equipment Maintenance" },
    { "title": "Charting" },
    { "title": "E/M Coding" },
    { "title": "Doctor Consultation & Electronic Medical Record" },
    { "title": "Inventory Management & Consumption Tracking" }
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
