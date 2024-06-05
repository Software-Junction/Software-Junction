import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Procedure Management" },
  { "title": "Pay Slip" },
  { "title": "Day Care Management System" },
  { "title": "Client Management & Credit Control" },
  { "title": "Appointment Management" },
  { "title": "Referral Management" },
  { "title": "Patient Information Management" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Asset Management" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Electronic medical records" },
  { "title": "Inventory Management" },
  { "title": "Patient Registration" },
  { "title": "Blood Bank Management System" },
  { "title": "CRM" },
  { "title": "Inventory control" },
  { "title": "Document Management" },
  { "title": "Practice Management" },
  { "title": "Payroll Management" },
  { "title": "Customer DataBase" },
  { "title": "Performance Management" },
  { "title": "Lab Information System" },
  { "title": "Accident & Emergency Care" },
  { "title": "Barcode Integration" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Expense Management" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Patient Billing" },
];

const moreFeatures = [
  { "title": "Patient Records" },
  { "title": "Patient Scheduling" },
  { "title": "Physician Scheduling" },
  { "title": "Alerts/Notifications" },
  { "title": "Customizable Dashboard" },
  { "title": "Revenue Management" },
  { "title": "Analytical Reports" },
  { "title": "Accounting Management" },
  { "title": "HRM" },
  { "title": "Batch Verification" },
  { "title": "Data Security & Accuracy" },
  { "title": "Automatic Blocking of Expired Items" },
  { "title": "Member Portal" },
  { "title": "Patient Eligibility Checks" },
  { "title": "Patient Payment History" },
  { "title": "Assessment Management" },
  { "title": "Out-Patient Management" },
  { "title": "Patient Records Management" },
  { "title": "Physician Management" },
  { "title": "Policy Management" },
  { "title": "Prescription Management" },
  { "title": "Communication Management" },
  { "title": "Manage Consultations" },
  { "title": "Manage Lab Tests" },
  { "title": "Manage Imaging and Diagnostics" },
  { "title": "Vitals Tracking" },
  { "title": "Action Plan Management" },
  { "title": "Disease Management" },
  { "title": "Progress Tracking" },
  { "title": "Employee Tracking" },
  { "title": "Medication Database" },
  { "title": "Patient Intake" },
  { "title": "Mobile Access" },
  { "title": "OT and Surgery Management" },
  { "title": "CSSD Kits Management" },
  { "title": "Chat / Messaging" },
  { "title": "Digital Signature" },
  { "title": "Onsite Printing" },
  { "title": "Appointment Scheduling" },
  { "title": "Competitor Analysis" },
  { "title": "Co-Pay & Deductible Tracking" },
  { "title": "Electronic Claims" },
  { "title": "Paper-Based Claims" },
  { "title": "Payor Management" },
  { "title": "Policy Administration" },
  { "title": "Drag & Drop" },
  { "title": "Audience Targeting" },
  { "title": "Patient Management" },
  { "title": "Compounding" },
  { "title": "Patient Transfer" },
  { "title": "Patient Discharge" },
  { "title": "Appointment Reminders" },
  { "title": "Recurring Appointments" },
  { "title": "Data Analysis Auditing" },
  { "title": "Lab Instrument Interface" },
  { "title": "Patient Diagnosis" },
  { "title": "Claim Tracking" },
  { "title": "Backup Log" },
  { "title": "Backup Scheduling" },
  { "title": "Audit Trails" },
  { "title": "Program Management" },
  { "title": "Messaging" },
  { "title": "Automated Review & Approval" },
  { "title": "Best Practices Library" },
  { "title": "Policy Creation Wizard" },
  { "title": "Policy Training" },
  { "title": "Case Notes" },
  { "title": "Expiration Management" },
  { "title": "Data Entry" },
  { "title": "Care Plan Management" },
  { "title": "Case List Management" },
  { "title": "Medical History Records" },
  { "title": "EMR/EHR" },
  { "title": "Certification Tracking" },
  { "title": "Continuous Backup" },
  { "title": "Bill Payment" },
  { "title": "Dynamic Pricing" },
  { "title": "No-Show Tracking" },
  { "title": "Patient Account Management" },
  { "title": "Package Creation" },
  { "title": "Payment Reminders" },
  { "title": "Visit Verification" },
  { "title": "Intake Forms" },
  { "title": "In-Patient Management" },
  { "title": "Medical Billing" },
  { "title": "Automated Notices" },
  { "title": "Assessment Notes" },
  { "title": "EDI" },
  { "title": "Progress Notes" },
  { "title": "HL7 Support" },
  { "title": "Electronic Laboratory Notebook" },
  { "title": "Personal Health Record" },
  { "title": "Recall Tracking" },
  { "title": "Electronic Health Record" },
  { "title": "Medication Tracking" },
  { "title": "Physician Portal" },
  { "title": "Appointment Confirmations" },
  { "title": "Care Plans" },
  { "title": "Care Summaries" },
  { "title": "Health Record Access" },
  { "title": "Lab Results" },
  { "title": "Prescription Renewals" },
  { "title": "Prescription Cancellation" },
  { "title": "Bereavement Management" },
  { "title": "Clinical Charting" },
  { "title": "Code Processing" },
  { "title": "Pill Database" }
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
