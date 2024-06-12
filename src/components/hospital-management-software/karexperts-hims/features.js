import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Patient Registration" },
  { "title": "Day Care Management System" },
  { "title": "Customer Management" },
  { "title": "Financial Management" },
  { "title": "Appointment Management" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Work order management" },
  { "title": "Electronic medical records" },
  { "title": "Document Management" },
  { "title": "Accident & Emergency Care" },
  { "title": "Training Management" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Membership Management" },
  { "title": "Event Management" },
  { "title": "Inventory Management" },
  { "title": "Performance Management" },
  { "title": "Practice Management" },
  { "title": "Case Management" },
  { "title": "Marketing Automation" },
  { "title": "Expense Tracking" },
  { "title": "Client Management & Credit Control" },
  { "title": "Referral Management" },
  { "title": "Procedure Management" },
  { "title": "Inventory control" }
];

const moreFeatures = [
  { "title": "Patient Location Tracking" },
  { "title": "Lab Information System" },
  { "title": "Patient Billing" },
  { "title": "Billing System" },
  { "title": "Collaboration" },
  { "title": "Touch Screen" },
  { "title": "System Administration Functions" },
  { "title": "Forms Management" },
  { "title": "Accounting Management" },
  { "title": "Audit Management" },
  { "title": "Patient Records Management" },
  { "title": "Real Time Reporting" },
  { "title": "Incident Management" },
  { "title": "Multi-Location" },
  { "title": "Patient Scheduling" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Version Control" },
  { "title": "Physician Scheduling" },
  { "title": "Revenue Management" },
  { "title": "PACS Support" },
  { "title": "Patient Portal" },
  { "title": "Patient Monitoring" },
  { "title": "Opticals" },
  { "title": "Self Service Portal" },
  { "title": "Hospital Support Function System" },
  { "title": "Bed Management" },
  { "title": "Compliance Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Alerts/Notifications" },
  { "title": "Purchase" },
  { "title": "Claims Management" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Multi-Physician" },
  { "title": "Billing & Invoicing" },
  { "title": "Insurance Eligibility Verification" },
  { "title": "Custom Rating Scales" },
  { "title": "Budget Management" },
  { "title": "Marketing Control System" },
  { "title": "Historical Reporting" },
  { "title": "Scheduling" },
  { "title": "Charting" },
  { "title": "E-Prescribing" },
  { "title": "Code & Charge Entry" },
  { "title": "Campaign Management" },
  { "title": "Activity Tracking" },
  { "title": "Facility Scheduling" },
  { "title": "HIPAA Compliant" },
  { "title": "Workflow Management" },
  { "title": "Physician Management" },
  { "title": "Calendar Management" },
  { "title": "Pharmacy with Inventory" },
  { "title": "System Administration Functions" },
  { "title": "Remittance Advice" },
  { "title": "Patient Eligibility Checks" },
  { "title": "Accounting Integration" },
  { "title": "Payment Processing" },
  { "title": "Patient Flow Management" },
  { "title": "Patient Scheduling" },
  { "title": "Pharmacy Information System (Drugs" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Compliance Management" },
  { "title": "Diagnostic Management" },
  { "title": "Policy Management" },
  { "title": "Dashboard" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Multi-Office" },
  { "title": "Member Portal" },
  { "title": "Backup Log" },
  { "title": "Quotes/Estimates" },
  { "title": "Patient Intake" },
  { "title": "Onsite Printing" },
  { "title": "Internal Controls Management" },
  { "title": "Committee Management" },
  { "title": "Co-Pay & Deductible Tracking" },
  { "title": "Medical History Record" },
  { "title": "Compliance Tracking" },
  { "title": "Audience Targeting" },
  { "title": "Drag & Drop" },
  { "title": "Paper-Based Claims" },
  { "title": "Digital Signature" },
  { "title": "Operational Risk Management" },
  { "title": "Remote Access" },
  { "title": "Backup Scheduling" },
  { "title": "Competency Management" },
  { "title": "Invoice history" },
  { "title": "Skills Assessments" },
  { "title": "Patient Transfer" },
  { "title": "Claim Resolution Tracking" },
  { "title": "Usage Reporting" },
  { "title": "Adjustor Management" },
  { "title": "Reputational Risk Management" },
  { "title": "Patient Discharge" },
  { "title": "Payor Management" },
  { "title": "Activity Reservations" },
  { "title": "Electronic Claims" },
  { "title": "Risk Assessment" },
  { "title": "Wireless Internet Access" },
  { "title": "Patient Management" },
  { "title": "Audit Trails" },
  { "title": "Appointment Scheduling" },
  { "title": "Best Practices Library" },
  { "title": "Virtual Keyboard" },
  { "title": "Automated Review & Approval" },
  { "title": "Predictive Analytics" },
  { "title": "Progress Tracking" },
  { "title": "Goal Setting" },
  { "title": "Chat / Messaging" },
  { "title": "Recurring Appointments" },
  { "title": "Business Process Control" },
  { "title": "Encryption" },
  { "title": "Time / Task Reporting" },
  { "title": "Mobile Access" },
  { "title": "Vendor Qualification Tracking" },
  { "title": "Member Communities" },
  { "title": "Geriatric Care" },
  { "title": "Continuous Backup" },
  { "title": "Self Management" },
  { "title": "On-going Performance Tracking" },
  { "title": "Secure Data Storage" },
  { "title": "Transaction History" },
  { "title": "Policy Training" },
  { "title": "Eligibility Verification" },
  { "title": "On Call Scheduling" },
  { "title": "Case List Management" },
  { "title": "Medical History Records" },
  { "title": "Vendor Performance Rating" },
  { "title": "Web Access / Restoration" },
  { "title": "Read & Acknowledge" },
  { "title": "For Home Care Providers" },
  { "title": "Patient Communications" },
  { "title": "Supplier Master Data" },
  { "title": "Incremental Backup" },
  { "title": "Certification Tracking" },
  { "title": "Care Planning" },
  { "title": "Assessment Notes" },
  { "title": "For Nursing Homes" },
  { "title": "Medical Billing" },
  { "title": "Vendor Maintained Profiles" },
  { "title": "In-Patient Management" },
  { "title": "Usage Tracking" },
  { "title": "Emergency Department" },
  { "title": "License Verification" },
  { "title": "Expiration Date Management" },
  { "title": "MDS Review" },
  { "title": "Electronic Health Record" },
  { "title": "Clinical Care" }
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
