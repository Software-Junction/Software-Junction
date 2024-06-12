import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Customer Management" },
  { "title": "Audit Trail" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Expense Tracking" },
  { "title": "Electronic medical records" },
  { "title": "Appointment Management" },
  { "title": "Financial Management" },
  { "title": "Security" },
  { "title": "Patient Information Management" },
  { "title": "Expense Management" },
  { "title": "Client Management & Credit Control" },
  { "title": "Referral Management" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Patient Registration" },
  { "title": "Work order management" },
  { "title": "Fast Search" },
  { "title": "Barcode Integration" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Inventory control" },
  { "title": "Accounting" },
  { "title": "Membership Management" },
  { "title": "Inventory Management" },
  { "title": "Data Security" }
];

const moreFeatures = [
  { "title": "HIPAA Compliance" },
  { "title": "Billing Management" },
  { "title": "Patient Portal" },
  { "title": "Client Management" },
  { "title": "Self Service Portal" },
  { "title": "Compliance Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Activity Tracking" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Real Time Reporting" },
  { "title": "Payment Processing" },
  { "title": "System Administration Functions" },
  { "title": "Patient Records" },
  { "title": "Patient Billing" },
  { "title": "Dashboard" },
  { "title": "Claims Management" },
  { "title": "Manage Imaging and Diagnostics" },
  { "title": "Marketing Control System" },
  { "title": "Analytical Reports" },
  { "title": "Workflow Management" },
  { "title": "Billing System" },
  { "title": "Campaign Management" },
  { "title": "IVR / Voice Recognition" },
  { "title": "Lab Information System" },
  { "title": "Electronic Signature" },
  { "title": "PACS Support" },
  { "title": "EMR / EHR" },
  { "title": "Revenue Management" },
  { "title": "Accounting Management" },
  { "title": "Multi-Location" },
  { "title": "Patient Record Management" },
  { "title": "Touch Screen" },
  { "title": "HIPAA Compliant" },
  { "title": "Patient Records Management" },
  { "title": "Accounting Integration" },
  { "title": "Analytics" },
  { "title": "Mobile Access" },
  { "title": "Purchase" },
  { "title": "Audit Management" },
  { "title": "Manage Lab Tests" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Staff Management" },
  { "title": "Scheduling" },
  { "title": "Customer Review Platform" },
  { "title": "Diagnostic Management" },
  { "title": "Historical Reporting" },
  { "title": "Member Portal" },
  { "title": "Alerts/Notifications" },
  { "title": "Traceability" },
  { "title": "MIS Reports" },
  { "title": "Gift Card Management" },
  { "title": "Usage Tracking" },
  { "title": "Digital Signature" },
  { "title": "Quality Control" },
  { "title": "Appointment Scheduling" },
  { "title": "Co-Pay & Deductible Tracking" },
  { "title": "Reporting & statistics" },
  { "title": "Invoice history" },
  { "title": "Samples Tracking" },
  { "title": "Patient Management" },
  { "title": "Remote Access" },
  { "title": "Data Import / Export" },
  { "title": "Audience Targeting" },
  { "title": "Data Analysis Auditing" },
  { "title": "Lab Instrument Interface" },
  { "title": "EMR Interface" },
  { "title": "Appointment Reminders" },
  { "title": "Social Sharing" },
  { "title": "Encryption" },
  { "title": "Backup Log" },
  { "title": "Business Process Control" },
  { "title": "Multi-Location Printing" },
  { "title": "Sample Tracking" },
  { "title": "Compliance Tracking" },
  { "title": "Audit Trails" },
  { "title": "Messaging" },
  { "title": "Image Management" },
  { "title": "Automated Review & Approval" },
  { "title": "Medical History Records" },
  { "title": "Patient Communications" },
  { "title": "Continuous Backup" },
  { "title": "Web Access / Restoration" },
  { "title": "Chat / Messaging" },
  { "title": "Transaction History" },
  { "title": "Supplier Master Data" },
  { "title": "Secure Data Storage" },
  { "title": "Bill Payment" },
  { "title": "Email Reminders" },
  { "title": "Supply Management" },
  { "title": "SMS Messaging" },
  { "title": "Patient Account Management" },
  { "title": "Package Creation" },
  { "title": "Medical Billing" },
  { "title": "Scanning Input" },
  { "title": "Diagnostic Reporting" },
  { "title": "PACS Integration" },
  { "title": "EMR HL7 Bridge" },
  { "title": "HL7 Support" },
  { "title": "Data Compression" },
  { "title": "Personal Health Record" },
  { "title": "Electronic Laboratory Notebook" },
  { "title": "Electronic Health Record" },
  { "title": "Clinical Care" },
  { "title": "Appointment Confirmations" },
  { "title": "Health Record Access" },
  { "title": "Lab Results" },
  { "title": "Secure Messaging" }
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

  const filteredFeatures = featuresData.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
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
        ):(
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
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
          ))} */}
          </>
          }
          {/* <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
