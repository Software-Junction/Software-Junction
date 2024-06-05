import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Charting" },
  { "title": "Appointment Management" },
  { "title": "E/M Coding" },
  { "title": "Electronic Signature" },
  { "title": "Meaningful Use Certified" },
  { "title": "Vendor Management" },
  { "title": "Issue Management" },
  { "title": "Patient Registration" },
  { "title": "Time Tracking" },
  { "title": "Payment Processing" },
  { "title": "Document Management" },
  { "title": "Real Time Reporting" },
  { "title": "Practice Management" },
  { "title": "IVR / Voice Recognition" },
  { "title": "Compliance Management" },
  { "title": "Archiving & Retention" },
  { "title": "Referral Management" },
  { "title": "HIPAA Compliant" },
  { "title": "Barcode Scanning" },
  { "title": "Self Service Portal" },
  { "title": "Handwriting Recognition" },
  { "title": "Billing & Invoicing" },
  { "title": "E-Prescribing" },
  { "title": "Accounting Integration" },
  { "title": "Issue Management" },
  { "title": "Physician Scheduling" },
  { "title": "Patient Portal" },
  { "title": "Payment Processing" }
];

const moreFeatures = [
  { "title": "Patient Records Management" },
  { "title": "Patient Intake" },
  { "title": "Insurance Eligibility Verification" },
  { "title": "Insurance Management" },
  { "title": "Transaction management" },
  { "title": "Patient Billing" },
  { "title": "Patient Records" },
  { "title": "Patient Scheduling" },
  { "title": "Physician Management" },
  { "title": "Patient Eligibility Checks" },
  { "title": "Patient Flow Management" },
  { "title": "Patient Location Tracking" },
  { "title": "Patient Monitoring" },
  { "title": "Bed Management" },
  { "title": "Admissions Management" },
  { "title": "Discharge Management" },
  { "title": "Scheduling" },
  { "title": "Historical Reporting" },
  { "title": "Analytical Reports" },
  { "title": "Appointment Management" },
  { "title": "Manage Consultations" },
  { "title": "Vitals Tracking" },
  { "title": "EMR / EHR" },
  { "title": "Physician Scheduling" },
  { "title": "Assessment Management" },
  { "title": "Patient Records Management" },
  { "title": "Prescription Management" },
  { "title": "Approval Process Control" },
  { "title": "Incident Management" },
  { "title": "HIPAA Compliance" },
  { "title": "Forms Management" },
  { "title": "Patient Billing" },
  { "title": "Gift Card Management" },
  { "title": "Analytical Reports" },
  { "title": "Transaction management" },
  { "title": "Client Management" },
  { "title": "Code & Charge Entry" },
  { "title": "Remittance Advice" },
  { "title": "Facility Scheduling" },
  { "title": "Staff Scheduling" },
  { "title": "Out-Patient Management" },
  { "title": "Policy Management" },
  { "title": "Reorder Management" },
  { "title": "Predictive Analytics" },
  { "title": "Progress Tracking" },
  { "title": "Medication Database" },
  { "title": "Patient Intake" },
  { "title": "Appointment Scheduling" },
  { "title": "Patient Management" },
  { "title": "EMR/EHR" },
  { "title": "Appointment Reminders" },
  { "title": "SOAP Notes" },
  { "title": "Patient Communications" },
  { "title": "Patient Education" },
  { "title": "Medical History Records" },
  { "title": "EMR Interface" },
  { "title": "Lab Instrument Interface" },
  { "title": "Reporting & statistics" },
  { "title": "SMS Messaging" },
  { "title": "Electronic Claims" },
  { "title": "Payor Management" },
  { "title": "Appointment Scheduling" },
  { "title": "Mobile Access" },
  { "title": "Time / Task Reporting" },
  { "title": "Appointment Reminders" },
  { "title": "Recurring Appointments" },
  { "title": "Voice Recognition" },
  { "title": "Procedure-Based Billing" },
  { "title": "Sample Tracking" },
  { "title": "Single Provider Practice" },
  { "title": "Treatment Plans" },
  { "title": "On Call Scheduling" },
  { "title": "Supply Management" },
  { "title": "SOAP Notes" },
  { "title": "No-Show Tracking" },
  { "title": "Patient Account Management" },
  { "title": "Patient Education" },
  { "title": "Visit Verification" },
  { "title": "Intake Forms" },
  { "title": "In-Patient Management" },
  { "title": "Payment Plans" },
  { "title": "Progress Notes" },
  { "title": "Personal Health Record" },
  { "title": "EHR Certified" },
  { "title": "Outcome Assessments" },
  { "title": "Recall Tracking" },
  { "title": "Electronic Health Record" },
  { "title": "Geriatric Care" },
  { "title": "Medication Tracking" },
  { "title": "Physician Portal" },
  { "title": "Prescription Renewals" },
  { "title": "Drug Reference Database" },
  { "title": "Electronic Prior Authorization" },
  { "title": "Prescription Cancellation" },
  { "title": "Refill Management" },
  { "title": "Clinical Charting" },
  { "title": "Imaging" },
  { "title": "Vaccine Management" },
  { "title": "Storage Management" },
  { "title": "CSSD Kits Management" },
  { "title": "Electronic Claims" },
  { "title": "Paper-Based Claims" },
  { "title": "Invoice history" },
  { "title": "Online payments" },
  { "title": "Search" },
  { "title": "Drag & Drop" },
  { "title": "Web Services" },
  { "title": "Remote Document Access" },
  { "title": "Retention Management" },
  { "title": "Image Extraction" },
  { "title": "Image Management" },
  { "title": "Data Entry" },
  { "title": "Remote Capture" },
  { "title": "Video Conferencing" },
  { "title": "Document Extraction" },
  { "title": "Initial Assessments" },
  { "title": "In-House Collections" },
  { "title": "Expiration Date Management" },
  { "title": "Usage Tracking" },
  { "title": "SMS Messaging" },
  { "title": "Package Creation" },
  { "title": "Self Management" },
  { "title": "Automated Notices" },
  { "title": "Assessment Notes" },
  { "title": "Candidate Identification" },
  { "title": "Caregiver Management" },
  { "title": "Transcription Reporting" },
  { "title": "Treatment Planning" },
  { "title": "Child Welfare Management" },
  { "title": "For Nursing Homes" },
  { "title": "For Home Care Providers" },
  { "title": "Physician Portal" },
  { "title": "Medication Tracking" },
  { "title": "Prescription Renewals" },
  { "title": "Drug Reference Database" },
  { "title": "Electronic Prior Authorization" },
  { "title": "Prescription Cancellation" },
  { "title": "Refill Management" },
  { "title": "For Telepsychiatry" },
  { "title": "Patient Queue Management" },
  { "title": "Clinical Charting" },
  { "title": "Imaging" },
  { "title": "Inpatient/Residential" },
  { "title": "Custom Bundles" },
  { "title": "Vaccine Management" }
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
