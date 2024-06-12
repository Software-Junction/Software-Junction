import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Referral Management" },
  { "title": "In-patient Management System" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Lab Information System" },
  { "title": "Expense Management" },
  { "title": "Practice Management" },
  { "title": "Customer Management" },
  { "title": "Inventory Management" },
  { "title": "Day Care Management System" },
  { "title": "Appointment Management" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Patient Registration" },
  { "title": "Electronic medical records" },
  { "title": "Inventory control" },
  { "title": "Document Management" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Asset Management" },
  { "title": "Diagnostic Management" },
  { "title": "Purchase" },
  { "title": "Case Management" },
  { "title": "HIPAA Compliant" },
 
];

const moreFeatures = [
  { "title": "Mobile Access" },
  { "title": "E-Prescribing" },
  { "title": "Patient Intake" },
  { "title": "Patient Records" },
  { "title": "Billing & Invoicing" },
  { "title": "Medical History Record" },
  { "title": "Multi-Physician" },
  { "title": "Charting" },
  { "title": "Activity Tracking" },
  { "title": "Patient Scheduling" },
  { "title": "Patient Communications" },
  { "title": "Patient Transfer" },
  { "title": "Disease Management" },
  { "title": "Vitals Tracking" },
  { "title": "Admissions Management" },
  { "title": "Dashboard" },
  { "title": "Patient Record Management" },
  { "title": "Medical History Records" },
  { "title": "Geriatric Care" },
  { "title": "EMR/EHR" },
  { "title": "Patient Billing" },
  { "title": "Caregiver Management" },
  { "title": "Out-Patient Management" },
  { "title": "Analytical Reports" },
  { "title": "Automated Review & Approval" },
  { "title": "Patient Discharge" },
  { "title": "Care Plan Management" },
  { "title": "Scheduling" },
  { "title": "EMR / EHR" },
  { "title": "HIPAA Compliance" },
  { "title": "Patient Management" },
  { "title": "Prescription Management" },
  { "title": "Manage Lab Tests" },
  { "title": "Patient Records Management" },
  { "title": "Patient Record Management" },
  { "title": "Discharge Management" },
  { "title": "Digital Signature" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Manage Consultations" },
  { "title": "Patient Portal" },
  { "title": "Approval Process Control" },
  { "title": "Assessment Notes" },
  { "title": "Electronic Health Record" },
  { "title": "Appointment Scheduling" },
  { "title": "Multi-Location" },
  { "title": "Multi-Office" },
  { "title": "Medication Database" },
  { "title": "In-Patient Management" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Alerts/Notifications" },
  { "title": "Bed Management" },
  { "title": "Clinical Care" },
  { "title": "Email Management" },
  { "title": "Medication Tracking" },
  { "title": "Messaging" },
  { "title": "Case List Management" },
  { "title": "Medical Billing" },
  { "title": "Physician Management" },
  { "title": "Audience Targeting" },
  { "title": "Care Planning" },
  { "title": "Care Plan Management" },
  { "title": "Manage Imaging and Diagnostics" },
  { "title": "Prescription Management" },
  { "title": "E/M Coding" },
  { "title": "Calendar Management" },
  { "title": "Revenue Management" },
  { "title": "No-Show Tracking" },
  { "title": "Approval Workflow" },
  { "title": "Assessment Management" },
  { "title": "Due date tracking" },
  { "title": "Digital Signature" },
  { "title": "Vitals Tracking" },
  { "title": "Manage Imaging and Diagnostics" },
  { "title": "Patient Record Management" },
  { "title": "Manage Consultations" },
  { "title": "Physician Portal" },
  { "title": "No-Show Tracking" },
  { "title": "For Nursing Homes" },
  { "title": "For Home Care Providers" },
  { "title": "Disease Management" }
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
