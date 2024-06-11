import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Expense Tracking" },
  { "title": "Audit Trail" },
  { "title": "Contractor Management" },
  { "title": "Financial Management" },
  { "title": "Commercial Properties" },
  { "title": "Document Management" },
  { "title": "Customer Management" },
  { "title": "Barcode Scanning" },
  { "title": "Employee Management" },
  { "title": "Appointment Management" },
  { "title": "Bills of Material" },
  { "title": "Cash Management" },
  { "title": "Lead Management" },
  { "title": "Accounts Receivable" },
  { "title": "Collaboration" },
  { "title": "Contact Management" },
  { "title": "Tax Management" },
  { "title": "Tenant Database" },
  { "title": "Budget Management" },
  { "title": "Tenant Portal" },
  { "title": "Case Management" },
  { "title": "Expense Management" },
  { "title": "Data Security" },
  { "title": "Portfolio Management" },
];

const moreFeatures = [
  { "title": "Billing & Invoicing" },
  { "title": "Estimating" },
  { "title": "Employee Scheduling" },
  { "title": "CRM" },
  { "title": "Payment Processing" },
  { "title": "Document Indexing" },
  { "title": "Customer DataBase" },
  { "title": "Commission management" },
  { "title": "Landlord Database" },
  { "title": "Accounts payable" },
  { "title": "Residential Properties" },
  { "title": "Electronic Signature" },
  { "title": "Collaboration" },
  { "title": "Appointment Management" },
  { "title": "Lead Management" },
  { "title": "Tax Management" },
  { "title": "Tenant Database" },
  { "title": "Budget Management" },
  { "title": "Tenant Portal" },
  { "title": "Ad hoc Analysis" },
  {"title":"Data Analysis"},
  {"title":"Critical Date Alerts"},
  {"title":"Contract Lifecycle Management"},
  {"title":"Audit Management"},
  {"title":"Appointment Scheduling"},
  {"title":"Activity Tracking"},
  {"title":"Data Integration"},
  {"title":"Customizable Dashboard"},
  {"title":"Document Creation"},
  {"title":"Asset Lifecycle Management"},
  {"title":"Change Management"},
  {"title":"Data Backup and Restore"},
  {"title":"Customer Segmentation"},
  {"title":"Data Protection"},
  {"title":"Dashboard"},
  {"title":"Asset Budgeting"},
  {"title":"Cost-to-Completion Tracking"},
  {"title":"Bid Requests"},
  {"title":"Cost Tracking"},
  {"title":"Cost Database"},
  {"title":"Commercial Leases"},
  {"title":"Client Tracking"},
  {"title":"Client database"},
  {"title":"Customizable Templates"},
  {"title":"Business Process Control"},
  {"title":"Collections Management"},
  {"title":"Corrective / Preventive Actions"},
  {"title":"Contractor Database"},
  {"title":"Client Portal"},
  {"title":"Data Capture"},
  {"title":"Disposal Tracking"},
  {"title":"Customer Statements"},
  {"title":"Data Visualization"},
  {"title":"Approval Process Control"},
  {"title":"Data Cleansing"},
  {"title":"Data Entry"},
  {"title":"Data Verification"},
  {"title":"Dues Management"},
  {"title":"Daily Log Software"},
  {"title":"Email Marketing"},
  {"title":"Asset Tracking"},
  {"title":"Cost / Use Reporting"},
  {"title":"Completion Tracking"},
  {"title":"Deployment Management"},
  {"title":"Biometric Recognition"},
  {"title":"Document Templates"},
  {"title":"Data Import / Export"},
  {"title":"Data Migration"},
  {"title":"Alerts Notifications"},
  {"title":"Business Rules Management"},
  {"title":"Auto Escalation"},
  {"title":"Business Process Automation"},
  {"title":"Data warehousing"},
  {"title":"Data storage management"},
  {"title":"Customizable invoices"},
  {"title":"Drag & Drop"},
  {"title":"Drill Down"},
  {"title":"Automated Scheduling"},
  {"title":"Commenting / Notes"},
  {"title":"Brand Management"},
  {"title":"Check-in / Check-out"},
  {"title":"Checklists & Inspections"},
  {"title":"Billing Rate Management"},
  {"title":"Data Cleansing"},
  {"title":"Application Portfolio Management"},
  {"title":"Application Management"},
  {"title":"Cash Flow Analysis"},
  {"title":"Analytics/ROI Tracking"},
  {"title":"Contract Management"},
  {"title":"Sales and Distribution"},
  {"title":"Insurance Management"},
  {"title":"Lease Management"},
  {"title":"Campaign Management"},
  {"title":"Facility Scheduling"},
  {"title":"Facility Management"},
  {"title":"Employee Lifecycle Management"},
  {"title":"Data Entry Verification"},
  {"title":"Bid Management"},
  {"title":"Cost Database"},
  {"title":"Fee Maintenance"},
  {"title":"Brand Management"},
  {"title":"Checklists & Inspections"},
  {"title":"Business Process Control"}
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
                  <span style={{ color: "#f95738 " }}>
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
                  <span style={{ color: "#f95738 " }}>
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
