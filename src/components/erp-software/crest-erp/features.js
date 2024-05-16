import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Sales and Distribution" },
{ "title": "Quotation & Estimates" },
{ "title": "Financial Management" },
{ "title": "CRM" },
{ "title": "Accounts Receivable" },
{ "title": "Project Management" },
{ "title": "Bank Reconciliation" },
{ "title": "Inventory Management" },
{ "title": "Credit card processing interface" },
{ "title": "Time Tracking" },
{ "title": "Manufacturing" },
{ "title": "Warehouse Management" },
{ "title": "CMMS/EAM" },
{ "title": "Supplier and Purchase Order Management" },
{ "title": "Document Management" },
{ "title": "Integration capabilities" },
{ "title": "Sales Quotes" },
{ "title": "Accounts payable" },
{ "title": "Budgeting" },
{ "title": "Bill of materials (BoM)" },
{ "title": "Multicurrency payment processing" },
{ "title": "Dispatching" },
{ "title": "Business intelligence (BI)" },
{ "title": "Accounts payable" }
];

const moreFeatures = [
  { "title": "Inventory Tracking" },
{ "title": "Bookkeeping" },
{ "title": "Invoice Processing" },
{ "title": "Point of Sale (POS)" },
{ "title": "Employee Management" },
{ "title": "Purchase Order" },
{ "title": "Export Documentation" },
{ "title": "Financial Accounting" },
{ "title": "Multi Level Bill Of Material" },
{ "title": "Electronic data interchange (EDI) connectors" },
{ "title": "Timesheet Management" },
{ "title": "GST Ready" },
{ "title": "Sales Management" },
{ "title": "Dashboard" },
{ "title": "Training management" },
{ "title": "Centralized Data" },
{ "title": "Reporting/Analytics" },
{ "title": "Multi Browser Compatible" },
{ "title": "Balance Sheet" },
{ "title": "Financial Accounting" },
{ "title": "Subcontracting Management" },
{ "title": "General Ledger" },
{ "title": "Credit Management" },
{ "title": "Payments" },
{ "title": "Supply Chain Management" },
{ "title": "Reporting" },
{ "title": "Multi-carrier shipping integration" },
{ "title": "Multi Smart Device (Desktop/ Laptop/Notepad/Mobile)" },
{ "title": "Drill Down Reports" },
{ "title": "Real time data" },
{ "title": "Sales Management" },
{ "title": "Invoice Processing" },
{ "title": "Accounting Management" },
{ "title": "Enterprise Asset Management" },
{ "title": "Work order management" },
{ "title": "Discount Management" },
{ "title": "Procurement Management" },
{ "title": "Purchase Management" },
{ "title": "Profit & Loss Statement" },
{ "title": "Export Documentation" },
{ "title": "Import & Export Data" },
{ "title": "Multi Level Bill Of Material" },
{ "title": "Email/SMS Integration" },
{ "title": "Human Resources Management System" },
{ "title": "Notifications for Approvals And Confirmation" },
{ "title": "Inventory Valuation" },
{ "title": "Balance Sheet" },
{ "title": "Chart of Accounts" },
{ "title": "Multi-carrier shipping integration" },
{ "title": "Financial & Accounting Management System" },
{ "title": "Bookkeeping" },
{ "title": "Inventory control" },
{ "title": "Third Party Integrations" },
{ "title": "Real time data" },
{ "title": "Payment Processing" },
{ "title": "Point of Sale (POS)" },
{ "title": "Drill Down Reports" },
{ "title": "Enterprise Asset Management" }
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
