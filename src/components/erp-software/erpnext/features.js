import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Integration capabilities" },
  { "title": "Sales and Distribution" },
  { "title": "Bank Reconciliation" },
  { "title": "Time Tracking" },
  { "title": "Quality Management" },
  { "title": "Territory Management" },
  { "title": "Budgeting" },
  { "title": "Document Management" },
  { "title": "Inventory Management" },
  { "title": "HR & Payroll" },
  { "title": "Barcode Scanning" },
  { "title": "Sales Quotes" },
  { "title": "Project Management" },
  { "title": "Accounting" },
  { "title": "Customer Management" },
  { "title": "Employee Management" },
  { "title": "Manufacturing" },
  { "title": "Job Costing" },
  { "title": "Audit Trail" },
  { "title": "Invoicing" },
  { "title": "Financial Management" },
  { "title": "Sales Quotes" },
  { "title": "Transport / Fleet management" },
  { "title": "Bill of materials (BoM)" }
];

const moreFeatures = [
  { "title": "Asset Tracking" },
  { "title": "Distribution Management" },
  { "title": "Job Management" },
  { "title": "Inventory control" },
  { "title": "Issue Management" },
  { "title": "Mobile Access" },
  { "title": "Multi-Currency" },
  { "title": "Sales Management" },
  { "title": "Alerts/Notifications" },
  { "title": "Jobwork/Insourcing Management System" },
  { "title": "Customizable Templates" },
  { "title": "Customizable Dashboard" },
  { "title": "Campaign Management" },
  { "title": "Multi-Location" },
  { "title": "Material Management" },
  { "title": "Accounting Management" },
  { "title": "Multi Level Bill Of Material" },
  { "title": "Inventory Valuation" },
  { "title": "Profitability Analysis" },
  { "title": "Item Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Purchase Management" },
  { "title": "Timesheet Management" },
  { "title": "Serial Number Tracking" },
  { "title": "Multi Lingual" },
  { "title": "Sales Reports" },
  { "title": "Payroll" },
  { "title": "GST Ready" },
  { "title": "Multi-Company" },
  { "title": "Capacity Planning" },
  { "title": "Budget Tracking/Job Costing" },
  { "title": "Calendar/Reminder System" },
  { "title": "Fleet Management" },
  { "title": "Asset Planning" },
  { "title": "To-Do List View" },
  { "title": "Built-in LMS" },
  { "title": "Milestone Tracking" }
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
