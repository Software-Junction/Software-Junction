import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Patient Registration"},
    {"title": "Day Care Management System"},
    {"title": "Doctor Consultation & Electronic Medical Record"},
    {"title": "Document Management"},
    {"title": "Billing & Revenue Cycle Management"},
    {"title": "Inventory Management & Consumption Tracking"},
    {"title": "Modality (Diagnostic) Schedule & Appointments"},
    {"title": "Asset Management"},
    {"title": "Practice Management"},
    {"title": "Case Management"},
    {"title": "Lab Information System"},
    {"title": "Inventory Management"},
    {"title": "Doctor Schedule & Appointments"},
    {"title": "Customer Management"},
    {"title": "Referral Management"},
    {"title": "Pharmacy with Inventory"},
    {"title": "Pharmacy Information System (Drugs, Opticals)"},
    {"title": "Appointment Management"},
    {"title": "Electronic medical records"},
    {"title": "Expense Management"},
    {"title": "Diagnostic Management"},
    {"title": "In-patient Management System"},
    {"title": "Patient Portal"},
    {"title": "Purchase"}
];

const moreFeatures = [
    {"title": "Scheduling"},
    {"title": "Patient Discharge"},
    {"title": "Patient Billing"},
    {"title": "Patient Transfer"},
    {"title": "Patient Management"},
    {"title": "EMR/EHR"},
    {"title": "Charting"},
    {"title": "Patient Records"},
    {"title": "Bed Management"},
    {"title": "Admissions Management"},
    {"title": "Physician Scheduling"},
    {"title": "Patient Record Management"},
    {"title": "Workflow Management"},
    {"title": "EMR / EHR"},
    {"title": "Email Management"},
    {"title": "Medical Billing"},
    {"title": "Patient Scheduling"},
    {"title": "Billing & Invoicing"},
    {"title": "Digital Signature"},
    {"title": "Appointment Scheduling"},
    {"title": "Patient Intake"},
    {"title": "Alerts/Notifications"},
    {"title": "Multi-Location"},
    {"title": "HIPAA Compliance"},
    {"title": "Approval Workflow"},
    {"title": "Revenue Management"},
    {"title": "Disease Management"},
    {"title": "Manage Lab Tests"},
    {"title": "Medication Tracking"},
    {"title": "Assessment Management"},
    {"title": "Physician Management"},
    {"title": "Messaging"},
    {"title": "Clinical Care"},
    {"title": "For Home Care Providers"},
    {"title": "Case List Management"},
    {"title": "Medical History Records"},
    {"title": "For Nursing Homes"},
    {"title": "Manage Imaging and Diagnostics"},
    {"title": "Vitals Tracking"},
    {"title": "Assessment Notes"},
    {"title": "E/M Coding"},
    {"title": "Patient Communications"},
    {"title": "Automated Review & Approval"},
    {"title": "Medical Equipment Maintenance"},
    {"title": "E-Prescribing"},
    {"title": "Activity Tracking"},
    {"title": "Physician Portal"},
    {"title": "Multi-Physician"},
    {"title": "No-Show Tracking"},
    {"title": "In-Patient Management"},
    {"title": "Geriatric Care"},
    {"title": "Care Plan Management"},
    {"title": "Caregiver Management"}
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
