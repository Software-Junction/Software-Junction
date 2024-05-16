import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Job Costing" },
  { title: "CRM" },
  { title: "Document Management" },
  { title: "Expense Tracking" },
  { title: "Training Management" },
  { title: "Project Management" },
  { title: "Reminders" },
  { title: "Task Management" },
  { title: "Audit Trail" },
  { title: "Accounts Payable" },
  { title: "Contractor Management" },
  { title: "Vendor Management" },
  { title: "Contact Management" },
  { title: "Time Tracking" },
  { title: "Accounts Receivable" },
  { title: "Customer DataBase" },
  { title: "Estimating" },
  { title: "Lead Management" },
  { title: "Work Order Management" },
  { title: "Multi-Location" },
  { title: "Electronic Signature" },
  { title: "Timesheet Management" },
  { title: "Compliance Management" },
  { title: "Employee Scheduling" },
];

const moreFeatures = [
  { title: "Recurring Appointments" },
  { title: "Corrective / Preventive Actions" },
  { title: "Environmental Risk Assessment" },
  { title: "Industrial Safety Management" },
  { title: "Injury Reporting" },
  { title: "Occupational Health Management" },
  { title: "OSHA Recordkeeping" },
  { title: "Safety Risk Assessment" },
  { title: "Equipment Tracking" },
  { title: "Photos In Reports" },
  { title: "Report Templates" },
  { title: "Employee Database" },
  { title: "Customizable Dashboard" },
  { title: "Forms Management" },
  { title: "Invoice Management" },
  { title: "Contact Database" },
  { title: "Customizable Templates" },
  { title: "Accounting Management" },
  { title: "Labor Rates" },
  { title: "Quotes / Estimates" },
  { title: "Service History" },
  { title: "Cost Tracking" },
  { title: "Job Scheduling" },
  { title: "Daily Log Software" },
  { title: "Bid Requests" },
  { title: "Proposal Management" },
  { title: "Job Management" },
  { title: "Change Management" },
  { title: "Data Capture" },
  { title: "Construction Breakdowns" },
  { title: "Bid Management" },
  { title: "Change Orders" },
  { title: "Incident Reporting" },
  { title: "Gantt Charts" },
  { title: "Percent-Complete Tracking" },
  { title: "Billing & Invoicing" },
  { title: "Commercial Properties" },
  { title: "Residential Properties" },
  { title: "Budgeting & Forecasting" },
  { title: "Dashboard" },
  { title: "Activity Tracking" },
  { title: "Contract Management" },
  { title: "Lead Capture" },
  { title: "Lead Nurturing" },
  { title: "Scheduling" },
  { title: "Lead Scoring" },
  { title: "Client Portal" },
  { title: "Incident Management" },
  { title: "To-Do List" },
  { title: "Calendar Management" },
  { title: "Issue Tracking" },
  { title: "Template Management" },
  { title: "Quote Management" },
  { title: "Dispatch Management" },
  { title: "Maintenance Scheduling" },
  { title: "Vehicle Information" },
  { title: "Project Tracking" },
  { title: "Inspection Management" },
  { title: "Subcontractor Management" },
  { title: "Time Management" },
  { title: "Mobile Access" },
  { title: "Alerts/Notifications" },
  { title: "Permit Management" },
  { title: "License Issuance" },
  { title: "Appointment Scheduling" },
  { title: "Document Creation" },
  { title: "OSHA Compliance" },
  { title: "Notes Management" },
  { title: "Automatic Time Capture" },
  { title: "Overtime Calculation" },
  { title: "Completion Tracking" },
  { title: "Third party integrations" },
  { title: "Customizable invoices" },
  { title: "GPS tracking" },
  { title: "Billing Rate Management" },
  { title: "Data Import / Export" },
  { title: "Drag & Drop" },
  { title: "Client Tracking" },
  { title: "Automated Scheduling" },
  { title: "Group Scheduling" },
  { title: "Quality Control Checklist" },
  { title: "Maintenance History" },
  { title: "Bidder Management" },
  { title: "Electrical Estimating" },
  { title: "HVAC Estimating" },
  { title: "Plumbing Estimating" },
  { title: "Electronic Plans" },
  { title: "Project Scheduling" },
  { title: "People Tracking" },
  { title: "Building Product Database" },
  { title: "Checklists & Inspections" },
  { title: "Photo Capture" },
  { title: "Photo Management" },
  { title: "For General Contractor" },
  { title: "Quotes / Proposals" },
  { title: "Cost Database" },
  { title: "Reporting/Analytics" },
  { title: "Real-time Scheduling" },
  { title: "Location Tracking" },
  { title: "Access Controls/Permissions" },
  { title: "Purchase Order Management" },
  { title: "Residential" },
  { title: "RFI & Submittals" },
  { title: "Time Clock" },
  { title: "Time & Attendance" },
  { title: "Punch card" },
  { title: "Sick Leave Tracking" },
  { title: "Commenting / Notes" },
  { title: "Color Coding" },
  { title: "Permit Tracking" },
  { title: "Contractor Database" },
  { title: "Insurance Tracking" },
  { title: "Billable Hours Tracking" },
  { title: "Staff Calendar" },
  { title: "Include Photos In Reports" },
  { title: "Report Export" },
  { title: "Compliance Tracking" },
  { title: "Pre-built Templates" },
  { title: "Check-in / Check-out" },
  { title: "VIN Lookup" },
  { title: "Kanban Board" },
  { title: "Hourly Employee Tracking" },
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

          {isShowMore && (
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
          )}
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
