import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Patient Information Management"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Client Management & Credit Control"},
  {"title": "Audit Trail"},
  {"title": "Inventory Management"},
  {"title": "Patient Registration"},
  {"title": "Appointment Management"},
  {"title": "Security"},
  {"title": "Database backup/restore (Management)"},
  {"title": "Electronic medical records"},
  {"title": "Expense Management"},
  {"title": "Barcode Integration"},
  {"title": "Financial Management"},
  {"title": "Work order management"},
  {"title": "Fast Search"},
  {"title": "Modality (Diagnostic) Schedule & Appointments"},
  {"title": "Lab Information System"},
  {"title": "Customer Management"},
  {"title": "Inventory control"},
  {"title": "Data Security"},
  {"title": "Referral Management"},
  {"title": "Expense Tracking"},
  {"title": "Multiuser Login & Role-based access control"},
  {"title": "Membership Management"}
];

const moreFeatures = [
  {"title": "Workflow Management"},
  {"title": "Marketing Control System"},
  {"title": "Electronic Signature"},
  {"title": "Billing & Invoicing"},
  {"title": "HIPAA Compliance"},
  {"title": "Real Time Reporting"},
  {"title": "Inventory Management & Consumption Tracking"},
  {"title": "MIS Reports"},
  {"title": "Activity Tracking"},
  {"title": "PACS Support"},
  {"title": "Patient Portal"},
  {"title": "Diagnostic Management"},
  {"title": "Scheduling"},
  {"title": "Campaign Management"},
  {"title": "Patient Record Management"},
  {"title": "HIPAA Compliant"},
  {"title": "Payment Processing"},
  {"title": "Claims Management"},
  {"title": "Purchase"},
  {"title": "Multi-Location"},
  {"title": "System Administration Functions"},
  {"title": "Analytics"},
  {"title": "Dashboard"},
  {"title": "Accounting Integration"},
  {"title": "Compliance Management"},
  {"title": "EMR / EHR"},
  {"title": "Billing System"},
  {"title": "Audit Management"},
  {"title": "Self Service Portal"},
  {"title": "Historical Reporting"},
  {"title": "IVR / Voice Recognition"},
  {"title": "Patient Billing"},
  {"title": "Payment Reminders"},
  {"title": "Appointment Scheduling"},
  {"title": "Alerts/Notifications"},
  {"title": "Messaging"},
  {"title": "Secure Data Storage"},
  {"title": "Digital Signature"},
  {"title": "Audit Trails"},
  {"title": "Data Import / Export"},
  {"title": "Co-Pay & Deductible Tracking"},
  {"title": "Chat / Messaging"},
  {"title": "Usage Tracking"},
  {"title": "Invoice history"},
  {"title": "Mobile Access"},
  {"title": "Patient Management"},
  {"title": "Customer Review Platform"},
  {"title": "Medical Billing"},
  {"title": "Appointment Reminders"},
  {"title": "Data Analysis Auditing"},
  {"title": "Quality Control"},
  {"title": "Traceability"},
  {"title": "Patient Records"},
  {"title": "Lab Results"},
  {"title": "Revenue Management"},
  {"title": "Patient Account Management"},
  {"title": "Appointment Confirmations"},
  {"title": "Lab Instrument Interface"},
  {"title": "EDI"},
  {"title": "Web Access / Restoration"},
  {"title": "Electronic Health Record"},
  {"title": "Patient Communications"},
  {"title": "Electronic Laboratory Notebook"},
  {"title": "Sample Tracking"},
  {"title": "Backup Log"},
  {"title": "Accounting Management"},
  {"title": "Data Compression"},
  {"title": "Client Management"},
  {"title": "Continuous Backup"},
  {"title": "Multi-Location Printing"},
  {"title": "Appointment Scheduling"},
  {"title": "EMR HL7 Bridge"},
  {"title": "EMR Interface"},
  {"title": "Appointment Scheduling"},
  {"title": "Staff Management"},
  {"title": "Medical History Records"},
  {"title": "Patient Billing"},
  {"title": "Supplier Master Data"},
  {"title": "HL7 Support"},
  {"title": "Usage Reporting"},
  {"title": "Patient Billing"},
  {"title": "Touch Screen"},
  {"title": "Clinical Care"},
  {"title": "Diagnostic Reporting"},
  {"title": "Member Portal"},
  {"title": "Gift Card Management"},
  {"title": "Patient Record Management"},
  {"title": "Patient Portal"},
  {"title": "HIPAA Compliance"},
  {"title": "Data Analysis Auditing"},
  {"title": "System Administration Functions"},
  {"title": "Reporting & statistics"},
  {"title": "Appointment Reminders"},
  {"title": "Business Process Control"},
  {"title": "Patient Intake"},
  {"title": "Patient Discharge"},
  {"title": "Inventory Management & Consumption Tracking"},
  {"title": "EMR / EHR"},
  {"title": "Staff Management"},
  {"title": "Billing System"},
  {"title": "Customer Management"},
  {"title": "Appointment Reminders"},
  {"title": "Remote Access"},
  {"title": "Scanning Input"},
  {"title": "Inventory Management"},
  {"title": "Usage Tracking"},
  {"title": "Electronic Signature"},
  {"title": "Patient Scheduling"},
  {"title": "Supply Management"},
  {"title": "Health Record Access"},
  {"title": "Electronic Health Record"},
  {"title": "Data Compression"},
  {"title": "Traceability"}
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
