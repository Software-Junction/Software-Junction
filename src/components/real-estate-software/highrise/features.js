import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Scheduling" },
  { "title": "Task Management" },
  { "title": "Mobile App" },
  { "title": "Contract Management" },
  { "title": "Risk Management" },
  { "title": "Inventory control" },
  { "title": "Quality Management" },
  { "title": "Customer Management" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Document Management" },
  { "title": "Financial Management" },
  { "title": "Payroll Management" },
  { "title": "Inventory Management" },
  { "title": "Expense Management" },
  { "title": "Sales Forecasting" },
  { "title": "Billing & Invoicing" },
  { "title": "Project Management" },
  { "title": "Supplier Management" },
  { "title": "Data Security" },
  { "title": "Lead Management" },
  { "title": "Workflow Management" },
  { "title": "Property Management" },
  { "title": "Gantt Charts" },
  { "title": "Equipment Management" },
];

const moreFeatures = [
  { "title": "Resource Management" },
  { "title": "Employee Management" },
  { "title": "Inventory Tracking" },
  { "title": "Cash Management" },
  { "title": "Timesheet Management" },
  { "title": "Bills of Material" },
  { "title": "Estimating" },
  { "title": "Customer Management" },
  { "title": "Project Planning" },
  { "title": "Audit Management" },
  { "title": "Order Management" },
  { "title": "Property Management" },
  { "title": "Budget Management" },
  { "title": "HR & Payroll" },
  { "title": "CRM" },
  { "title": "Inventory Management" },
  { "title": "Mobile App" },
  { "title": "Lead Management" },
  { "title": "Contractor Management" },
  { "title": "Purchase Management" },
  { "title": "Hourly Employee Tracking" },
  { "title": "Sales Reports" },
  { "title": "Data Protection" },
  { "title": "Lease Management" },
  { "title": "Real Time Tracking" },
  { "title": "Web And Mobile Notification" },
  { "title": "Bid Management" },
  { "title": "Quality Control" },
  { "title": "Cost Tracking" },
  { "title": "Customizable Templates" },
  { "title": "Costing" },
  { "title": "Customizable Reporting" },
  { "title": "Online Payment Processing" },
  { "title": "Financial Reporting" },
  { "title": "Labor Cost Calculator" },
  { "title": "Member Portal" },
  { "title": "Data Backup and Restore" },
  { "title": "HR Management" },
  { "title": "Historical Database" },
  { "title": "Rate Management" },
  { "title": "Construction Breakdowns" },
  { "title": "RFP Management" },
  { "title": "Service Management" },
  { "title": "Real time data" },
  { "title": "Email/SMS Integration" },
  { "title": "Customer Portal" },
  { "title": "Project Tracking" },
  { "title": "Account Management" },
  { "title": "Brokerage Management" },
  { "title": "Purchase Order Management" },
  { "title": "Sales Management" },
  { "title": "Material Management" },
  { "title": "Cost-to-Completion Tracking" },
  { "title": "Data Migration" },
  { "title": "Reporting" },
  { "title": "GST Ready" },
  { "title": "Material Requirement Planning" },
  { "title": "Equipment Tracking" },
  { "title": "Workflow Management" },
  { "title": "Cash Flow Analysis" },
  { "title": "Human Resources Management System" },
  { "title": "Import & Export Data" },
  { "title": "Hourly Employee Tracking" }
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
