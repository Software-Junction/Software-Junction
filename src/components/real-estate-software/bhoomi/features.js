import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Customer Management" },
  { title: "Sales Tracking" },
  { title: "Contact Manager" },
  { title: "Sales Quotes" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Document Management" },
  { title: "Expense Management" },
  { title: "Appointment Management" },
  { title: "Cloud Computing" },
  { title: "Marketing Analytics" },
  { title: "Attendance management" },
  { title: "Performance Management" },
  { title: "HR & Payroll" },
  { title: "Quotation & Estimates" },
  { title: "Capture Leads from Twitter/Facebooks" },
  { title: "Case Management" },
  { title: "Email Integration" },
  { title: "Contact Management" },
  { title: "Marketing Automation" },
  { title: "Sales Forecasting" },
  { title: "Property Management" },
  { title: "Lease and Maintenance Management" },
  { title: "Quality Management" },
  { title: "Mobile App" },
];

const moreFeatures = [
  { title: "Lead Management" },
  { title: "CRM & Sales Reports" },
  { title: "Reminders" },
  { title: "Training Management" },
  { title: "CRM Analytics" },
  { title: "Mass Email" },
  { title: "Reimbursement Management" },
  { title: "Time & Attendance Management" },
  { title: "Call Recording" },
  { title: "Developer API" },
  { title: "CRM & Sales Dashboards" },
  { title: "Accounting" },
  { title: "Email Templates" },
  { title: "Customer Support" },
  { title: "Feedback Management" },
  { title: "Lead Distribution" },
  { title: "Bank Reconciliation" },
  { title: "Call Scripting" },
  { title: "Call Monitoring" },
  { title: "Data Management" },
  { title: "Customizable Branding" },
  { title: "Feedback Collection" },
  { title: "Late Fee Calculation" },
  { title: "Campaign Management" },
  { title: "Discount Management" },
  { title: "Client Portal" },
  { title: "Sales Management" },
  { title: "Commercial Properties" },
  { title: "Lead Nurturing" },
  { title: "Lead Scoring" },
  { title: "Call Center Management" },
  { title: "Attendance Tracking" },
  { title: "Lead Capture" },
  { title: "Inbound Reporting" },
  { title: "Accounting Management" },
  { title: "Alerts Notifications" },
  { title: "Business intelligence (BI)" },
  { title: "Document Storage" },
  { title: "Document Indexing" },
  { title: "Document Assembly" },
  { title: "Field Sales Management" },
  { title: "Online Payment" },
  { title: "Billing & Invoicing" },
  { title: "Lead Segmentation" },
  { title: "Role-Based Permissions" },
  { title: "Call Management" },
  { title: "Customer Segmentation" },
  { title: "Call Sharing" },
  { title: "Multi-Campaign" },
  { title: "Approval Process Control" },
  { title: "Scheduling" },
  { title: "Contact Database" },
  { title: "Data Backup and Restore" },
  { title: "Business Process Automation" },
  { title: "Customizable Dashboard" },
  { title: "Data Analysis" },
  { title: "Social Media Integration" },
  { title: "Lead Management" },
  { title: "Accounts Receivable" },
  { title: "Customer Engagement" },
  { title: "Campaign Segmentation" },
  { title: "Document Management" },
  { title: "Customizable Reporting" },
  { title: "Pipeline Management" },
  { title: "Call Logging" },
  { title: "Call Center Management" },
  { title: "Billing & Invoicing" },
  { title: "Commercial Properties" },
  { title: "Landlord Database" },
  { title: "Late Fee Calculation" },
  { title: "Owner Portal" },
  { title: "Payment Processing" },
  { title: "Residential Properties" },
  { title: "Website Management" },
  { title: "Feedback Management" },
  { title: "Dashboard" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Inbound Reporting" },
  { title: "IVR / Voice Recognition" },
  { title: "Alerts Notifications" },
  { title: "MIS Reports" },
  { title: "Calendar Management" },
  { title: "Client Portal" },
  { title: "Role-Based Permissions" },
  { title: "Quote Management" },
  { title: "Routing" },
  { title: "Call Sharing" },
  { title: "Alerts/Notifications" },
  { title: "Customizable Dashboard" },
  { title: "Forms Management" },
  { title: "Customizable Reporting" },
  { title: "Booking Notes" },
  { title: "Receipt Management" },
  { title: "Contact Database" },
  { title: "Multi-Campaign" },
  { title: "Campaign Analysis" },
  { title: "Customizable Templates" },
  { title: "eFilling" },
  { title: "Rules-Based Workflow" },
  { title: "Data Management" },
  { title: "Accounting Management" },
  { title: "Financial Accounting" },
  { title: "Sales Management" },
  { title: "Bookkeeping" },
  { title: "Import & Export Data" },
  { title: "Data Backup and Restore" },
  { title: "Daily Log Software" },
  { title: "Excel Import" },
  { title: "Business Rules Management" },
  { title: "Data Mapping" },
  { title: "Interaction Tracking" },
  { title: "Landing Pages" },
  { title: "Auto Escalation" },
  { title: "Data Capture" },
  { title: "Customization" },
  { title: "Business Process Automation" },
  { title: "Campaign Segmentation" },
  { title: "Attendee Management" },
  { title: "Letter generation" },
  { title: "Discount Management" },
  { title: "Member Portal" },
  { title: "Client / Property Matching" },
  { title: "Customer Segmentation" },
  { title: "Commercial" },
  { title: "Access Monitoring" },
  { title: "Push Notifications" },
  { title: "Attendance Tracking" },
  { title: "Customer Review Platform" },
  { title: "Pricing Management" },
  { title: "Feedback Collection" },
  { title: "Sales Pipeline Tracking" },
  { title: "Sales Dashboards & Reports" },
  { title: "Data Analysis" },
  { title: "Scorecarding" },
  { title: "Call Reporting" },
  { title: "Complaint Monitoring" },
  { title: "Customer Engagement" },
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
