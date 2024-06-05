import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Inventory Management" },
  { "title": "Patient Information Management" },
  { "title": "Diagnostic Management" },
  { "title": "Data Security" },
  { "title": "Referral Management" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Inventory control" },
  { "title": "Fast Search" },
  { "title": "Accident & Emergency Care" },
  { "title": "Practice Management" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Appointment Management" },
  { "title": "Patient Registration" },
  { "title": "Lab Information System" },
  { "title": "CRM & Sales Dashboards" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Procedure Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Vendor Management" },
  { "title": "Case Management" },
  { "title": "Electronic medical records" },
  { "title": "Purchase" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "CRM & Sales Dashboards" },
  { "title": "Patient Billing" },
  { "title": "Document Indexing" },
];

const moreFeatures = [
  { "title": "Insurance Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Medical History Record" },
  { "title": "Billing System" },
  { "title": "Patient Monitoring" },
  { "title": "EMR / EHR" },
  { "title": "Appointment Management" },
  { "title": "Patient Intake" },
  { "title": "Admissions Management" },
  { "title": "Patient Records Management" },
  { "title": "Patient Record Management" },
  { "title": "Real Time Reporting" },
  { "title": "Charts" },
  { "title": "Online Refills" },
  { "title": "Vitals Tracking" },
  { "title": "Medication Database" },
  { "title": "Patient Scheduling" },
  { "title": "Archiving & Retention" },
  { "title": "Quality Control" },
  { "title": "Patient Eligibility Checks" },
  { "title": "Scheduling" },
  { "title": "Patient History Management" },
  { "title": "Prescription Management" },
  { "title": "Prescription Processing" },
  { "title": "Data Security & Accuracy" },
  { "title": "Patient Appointments" },
  { "title": "Digital Signature" },
  { "title": "Patient Discharge" },
  { "title": "Mobile Access" },
  { "title": "Activity Dashboard" },
  { "title": "Appointment Scheduling" },
  { "title": "Patient Communications" },
  { "title": "Reporting & statistics" },
  { "title": "Patient Management" },
  { "title": "Chat / Messaging" },
  { "title": "Remote Access" },
  { "title": "Patient Payment History" },
  { "title": "Records Management" },
  { "title": "Multi-Location" },
  { "title": "Billing Management" },
  { "title": "HIPAA Compliant" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Pharmacy Management" },
  { "title": "Online Booking" },
  { "title": "Assessments" },
  { "title": "Prescription Renewals" },
  { "title": "Charting" },
  { "title": "Employee Management" },
  { "title": "Data Import / Export" },
  { "title": "Strategic Planning" },
  { "title": "Activity Tracking" },
  { "title": "Modules" },
  { "title": "Care Plan Management" },
  { "title": "Incident Reporting" },
  { "title": "SMS Messaging" },
  { "title": "E/P Coding" },
  { "title": "No-Show Tracking" },
  { "title": "Patient Queue Management" },
  { "title": "Care Planning" },
  { "title": "Clinical Charting" },
  { "title": "Procedure-Based Billing" },
  { "title": "Patient Diagnosis" },
  { "title": "Patient Information Management" },
  { "title": "E/M Coding" },
  { "title": "Online Reporting" },
  { "title": "Appointment Reminders" },
  { "title": "Patient History Management" },
  { "title": "Emergency Department" },
  { "title": "Progress Reports" },
  { "title": "Certification Tracking" },
  { "title": "Secure Data Storage" },
  { "title": "Transaction History" },
  { "title": "Expiration Date Management" },
  { "title": "Remote Document Access" },
  { "title": "Data Entry" },
  { "title": "Patient Database" },
  { "title": "Chat/Messaging" },
  { "title": "Care Plan Management" },
  { "title": "Care Planning" },
  { "title": "Case List Management" },
  { "title": "Medical History Records" },
  { "title": "Clinical Care" },
  { "title": "For Home Care Providers" },
  { "title": "Medication Tracking" },
  { "title": "Physician Portal" },
  { "title": "Health Record Access" },
  { "title": "Lab Results" },
  { "title": "Prescription Renewals" },
  { "title": "Clinical Alerts" },
  { "title": "Drug Reference Database" },
  { "title": "Prescription Cancellation" },
  { "title": "Refill Management" },
  { "title": "Patient Queue Management" },
  { "title": "Clinical Charting" },
  { "title": "Inpatient/Residential" }
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
