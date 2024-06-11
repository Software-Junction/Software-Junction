import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Billing & Revenue Cycle Management"},
  {"title": "Accident & Emergency Care"},
  {"title": "Asset Management"},
  {"title": "Practice Management"},
  {"title": "Database backup/restore (Management)"},
  {"title": "Mobile App"},
  {"title": "Appointment Management"},
  {"title": "Patient Information Management"},
  {"title": "Electronic medical records"},
  {"title": "Barcode Integration"},
  {"title": "Modality (Diagnostic) Schedule & Appointments"},
  {"title": "Referral Management"},
  {"title": "Inventory Management"},
  {"title": "Lab Information System"},
  {"title": "Work order management"},
  {"title": "Security"},
  {"title": "Radiology & Imaging Information System"},
  {"title": "Case Management"},
  {"title": "Marketing Automation"},
  {"title": "Doctor Consultation & Electronic Medical Record"},
  {"title": "Lead Management"},
  {"title": "Day Care Management System"},
  {"title": "Patient Registration"},
  {"title": "Blood Bank Management System"}
];

const moreFeatures = [
  {"title": "Alerts/Notifications"},
  {"title": "PACS Support"},
    {"title": "Patient Eligibility Checks"},
    {"title": "Patient Record Management"},
    {"title": "Discharge Management"},
    {"title": "Patient Payment History"},
    {"title": "Physician Scheduling"},
    {"title": "Charting"},
    {"title": "HIPAA Compliance"},
    {"title": "Multi-Location"},
    {"title": "Audit Management"},
    {"title": "Insurance Management"},
    {"title": "Real Time Reporting"},
    {"title": "Bed Management"},
    {"title": "Activity Tracking"},
    {"title": "Assessments"},
    {"title": "Billing & Invoicing"},
    {"title": "Patient Records Management"},
    {"title": "Workflow Management"},
    {"title": "Prescription Management"},
    {"title": "Chemist Orders"},
    {"title": "Patient Monitoring"},
    {"title": "Meaningful Use Certified"},
    {"title": "E/M Coding"},
    {"title": "Online Reporting"},
    {"title": "E-Prescribing"},
    {"title": "Patient Portal"},
    {"title": "Analytics"},
    {"title": "Historical Reporting"},
    {"title": "Admissions Management"},
    {"title": "Patient Flow Management"},
    {"title": "Scheduling"},
    {"title": "Physician Management"},
    {"title": "Records Management"},
    {"title": "Activity Tracking"},
    {"title": "Patient Location Tracking"},
    {"title": "HIPAA Compliant"},
    {"title": "Patient Billing"},
    {"title": "Meaningful Use Certified"},
    {"title": "Audit Management"},
    {"title": "Patient Monitoring"},
    {"title": "Calendar Management"},
    {"title": "Client Management"},
    {"title": "Billing System"},
    {"title": "Physician Scheduling"},
    {"title": "Patient Billing"},
    {"title": "Inventory Management & Consumption Tracking"},
    {"title": "Waiting Time Tracking"},
    {"title": "Discharge Management"},
    {"title": "Insurance Management"},
    {"title": "Multi-Physician"},
    {"title": "Assessments"},
    {"title": "Chemist Orders"},
    {"title": "Scheduling"},
    {"title": "Chemist Orders"},
    {"title": "Patient Records Management"},
    {"title": "Discharge Management"},
    {"title": "Audit Management"},
    {"title": "Workflow Management"},
    {"title": "Physician Management"},
    {"title": "Online Reporting"},
    {"title": "HIPAA Compliance"},
    {"title": "Prescription Management"},
    { "title": "Secure Data Storage" },
  { "title": "Patient Communications" },
  { "title": "Lab Instrument Interface" },
  { "title": "Risk Assessment" },
  { "title": "Appointment Confirmations" },
  { "title": "Patient Discharge" },
  { "title": "Appointment Scheduling" },
  { "title": "Vitals Tracking" },
  { "title": "Progress Notes" },
  { "title": "Patient Intake" },
  { "title": "Lab Results" },
  { "title": "Clinical Care" },
  { "title": "Care Plan Management" },
  { "title": "EMR Interface" },
  { "title": "Care Plans" },
  { "title": "OT and Surgery Management" },
  { "title": "Messaging" },
  { "title": "Remote Access" },
  { "title": "CSSD Kits Management" },
  { "title": "Backup Log" },
  { "title": "Claim Resolution Tracking" },
  { "title": "Patient Management" },
  { "title": "Disease Management" },
  { "title": "EHR-Agnostic" },
  { "title": "Multi-Location Printing" },
  { "title": "Case Notes" },
  { "title": "Activity Reservations" },
  { "title": "Audit Trails" },
  { "title": "Medical History Records" },
  { "title": "Appointment Scheduling" },
  { "title": "Co-Pay & Deductible Tracking" },
  { "title": "Emergency Department" },
  { "title": "Lab Tests" },
  { "title": "Physician Test Panels" },
  { "title": "Backup Scheduling" },
  { "title": "Treatment Plans" },
  { "title": "Email Marketing" },
  { "title": "Patient Transfer" },
  { "title": "Manage Consultations" },
  { "title": "Time / Task Reporting" },
  { "title": "Care Planning" },
  { "title": "Digital Reports" },
  { "title": "Patient Education" },
  { "title": "Sample Tracking" },
  { "title": "Appointment Confirmations" },
  { "title": "Personal Health Record" },
  { "title": "Encryption" },
  { "title": "Geriatric Care" },
  { "title": "Medical Billing" },
  { "title": "SOAP Notes" },
  { "title": "Health Record Access" },
  { "title": "In-Patient Management" },
  { "title": "Manage Imaging and Diagnostics" },
  { "title": "Lab Instrument Interface" },
  { "title": "CRM and CME Management" },
  { "title": "Intake Forms" }
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
