import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Inventory Management" },
  { "title": "Case Management" },
  { "title": "Patient Registration" },
  { "title": "Appointment Management" },
  { "title": "Electronic medical records" },
  { "title": "Document Management" },
  { "title": "Expense Management" },
  { "title": "Practice Management" },
  { "title": "Asset Management" },
  { "title": "Payroll Management" },
  { "title": "Referral Management" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Pay Slip" },
  { "title": "Barcode Integration" },
  { "title": "Inventory control" },
  { "title": "Patient Information Management" },
  { "title": "Performance Management" },
  { "title": "Accident & Emergency Care" },
  { "title": "Client Management & Credit Control" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Procedure Management" },
  { "title": "Day Care Management System" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Customer DataBase" }
];

const moreFeatures = [
  { "title": "Scheduling" },
  { "title": "CRM" },
  { "title": "Multi-Office" },
  { "title": "Patient Location Tracking" },
  { "title": "Patient Billing" },
  { "title": "Patient Records" },
  { "title": "Patient Monitoring" },
  { "title": "Accounting Management" },
  { "title": "Patient Scheduling" },
  { "title": "Audit Management" },
  { "title": "Alerts/Notifications" },
  { "title": "PACS Support" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Historical Reporting" },
  { "title": "Hospital Support Function System" },
  { "title": "Billing & Invoicing" },
  { "title": "Patient Portal" },
  { "title": "Lab Information System" },
  { "title": "EMR / EHR" },
  { "title": "Multi-Location" },
  { "title": "Revenue Management" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Staff Payroll System" },
  { "title": "Admissions Management" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "E-Prescribing" },
  { "title": "E/M Coding" },
  { "title": "Blood Bank Management System" },
  { "title": "System Security & Software Management" },
  { "title": "HIPAA Compliant" },
  { "title": "Purchase" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Bed Management" },
  { "title": "Discharge Management" },
  { "title": "Patient Record Management" },
  { "title": "Analytics" },
  { "title": "Claims Management" },
  { "title": "Accounting Integration" },
  { "title": "Insurance Management" },
  { "title": "Calendar Management" },
  { "title": "Assessments" },
  { "title": "Real Time Reporting" },
  { "title": "Document Indexing" },
  { "title": "Electronic Signature" },
  { "title": "Batch Verification" },
  { "title": "Data Security & Accuracy" },
  { "title": "Customizable Dashboard" },
  { "title": "HIPAA Compliance" },
  { "title": "Appointment Management" },
  { "title": "Online Booking" },
  { "title": "Charting" },
  { "title": "HRM" },
  { "title": "Analytical Reports" },
  { "title": "Billing System" }
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
