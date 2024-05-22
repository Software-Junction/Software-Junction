import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Expense Management" },
  { "title": "Electronic medical records" },
  { "title": "Patient Registration" },
  { "title": "Patient Information Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Reliable and Secure" },
  { "title": "Document Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Referral Management" },
  { "title": "Financial Management" },
  { "title": "Security" },
  { "title": "Case Management" },
  { "title": "Data Security" },
  { "title": "Appointment Management" },
  { "title": "Expense Tracking" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Business Management System" },
  { "title": "Fast Search" },
  { "title": "Customer Management" },
  { "title": "Barcode Integration" },
  { "title": "Membership Management" },
  { "title": "Accounting" },
  { "title": "Inventory control" },
  { "title": "Inventory Management" }
];

const moreFeatures = [
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Client Management & Credit Control" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Accident & Emergency Care" },
  { "title": "Procedure Management" },
  { "title": "Day Care Management System" },
  { "title": "In-patient Management System" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Blood Bank Management System" },
  { "title": "Lab Information System" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "PACS Support" },
  { "title": "Purchase" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Hospital Support Function System" },
  { "title": "System Administration Functions" },
  { "title": "Diagnostic Management" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Marketing Control System" },
  { "title": "System Security & Software Management" },
  { "title": "Billing System" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Accounting Integration" },
  { "title": "Real Time Reporting" },
  { "title": "Budget Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Dashboard" },
  { "title": "E-Prescribing" },
  { "title": "Patient Portal" },
  { "title": "Bed Management" },
  { "title": "Historical Reporting" },
  { "title": "Patient Flow Management" },
  { "title": "Patient Location Tracking" },
  { "title": "Patient Monitoring" },
  { "title": "Billing Management" },
  { "title": "Analytics" },
  { "title": "Audit Management" },
  { "title": "MIS Reports" },
  { "title": "Claims Management" },
  { "title": "Purchasing" },
  { "title": "EMR / EHR" },
  { "title": "Insurance Eligibility Verification" },
  { "title": "Patient Billing" },
  { "title": "Alerts/Notifications" },
  { "title": "Revenue Management" },
  { "title": "Accounting Management" },
  { "title": "Member Portal" },
  { "title": "Patient Eligibility Checks" },
  { "title": "Out-Patient Management" },
  { "title": "Patient Records Management" },
  { "title": "Physician Management" },
  { "title": "Policy Management" },
  { "title": "Experiments" },
  { "title": "Patient Intake" },
  { "title": "Mobile Access" },
  { "title": "Fixed Asset Management" },
  { "title": "Chat / Messaging" },
  { "title": "Digital Signature" },
  { "title": "Appointment Scheduling" },
  { "title": "Co-Pay & Deductible Tracking" },
  { "title": "Electronic Claims" },
  { "title": "Email Marketing" },
  { "title": "Patient Transfer" },
  { "title": "Patient Discharge" },
  { "title": "Data Analysis Auditing" },
  { "title": "EMR Interface" },
  { "title": "Lab Instrument Interface" },
  { "title": "Multi-Location Printing" },
  { "title": "Physician Test Panels" },
  { "title": "Procedure-Based Billing" },
  { "title": "Sample Tracking" },
  { "title": "Backup Scheduling" },
  { "title": "Cloud Backup" },
  { "title": "Remote Server Options" },
  { "title": "Audit Trails" },
  { "title": "Automated Review & Approval" },
  { "title": "Expiration Management" },
  { "title": "Patient Communications" },
  { "title": "Emergency Department" },
  { "title": "Certification Tracking" },
  { "title": "Transaction History" },
  { "title": "In-Patient Management" },
  { "title": "Medical Billing" }
];


const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
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

          {isShowMore && 
          <>
          {moreFeatures.map((featureM, index) => (
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
          }
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
