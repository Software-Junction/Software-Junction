import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Asset Management" },
{ "title": "Financial Management" },
{ "title": "Time Tracking" },
{ "title": "Task Management" },
{ "title": "Job Costing" },
{ "title": "Production Management" },
{ "title": "Inventory Management" },
{ "title": "Customer Management" },
{ "title": "Audit Trail" },
{ "title": "Vendor Management" },
{ "title": "Document Management" },
{ "title": "Attendance management" },
{ "title": "Quotation & Estimates" },
{ "title": "Budgeting" },
{ "title": "Transport / Fleet management" },
{ "title": "Supplier and Purchase Order Management" },
{ "title": "Expense Tracking" },
{ "title": "Sales Quotes" },
{ "title": "CRM" },
{ "title": "Project Management" },
{ "title": "Quality Management" },
{ "title": "Financial Accounting" },
{ "title": "Payroll Management" },
{ "title": "Customer Management" }
];

const moreFeatures = [
  { "title": "Billing & Invoicing" },
  { "title": "Electronic Data Interchange" },
  { "title": "Sales & Operations Planning" },
  { "title": "Territory Management" },
  { "title": "Graphical Workflow Editor" },
  { "title": "Credit Management" },
  { "title": "Access Controls/Permissions" },
  { "title": "Payment Processing" },
  { "title": "Multi Browser Compatible" },
  { "title": "Order Fulfillment" },
  { "title": "Shipping Management" },
  { "title": "Quotation & Estimates" },
  { "title": "Balance Sheet" },
  { "title": "Vendor Management" },
  { "title": "Attendance Tracking" },
  { "title": "Consolidation / Roll-Up" },
  { "title": "Financial Reports" },
  { "title": "POS invoicing" },
  { "title": "Time & Expense Tracking" },
  { "title": "Invoice Processing" },
  { "title": "Document Storage" },
  { "title": "Forecasting" },
  { "title": "Asset Management" },
  { "title": "Inventory Management" },
  { "title": "Customizable Dashboard" },
  { "title": "Dashboard" },
  { "title": "Quotes / Estimates" },
  { "title": "Project Management" },
  { "title": "Audit Trail Logs" },
  { "title": "Sales Management" },
  { "title": "Accounting Management" },
  { "title": "Purchase Management" },
  { "title": "Production Management" },
  { "title": "Financial Management" },
  { "title": "Asset Management" },
  { "title": "Bills of Material" },
  { "title": "Shipping Management" },
  { "title": "Accounting Management" },
  { "title": "Invoice Management" },
  { "title": "Mobile Access" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Task Management" },
  { "title": "Budget Management" },
  { "title": "Sales Quotes" },
  { "title": "Customer Management" },
  { "title": "Supply Chain Management" },
  { "title": "Expense Tracking" },
  { "title": "Employee Management" },
  { "title": "Point of Sale (POS)" },
  { "title": "Warehouse Management" },
  { "title": "Integration capabilities" },
  { "title": "Sales and Distribution" },
  { "title": "Employee Data Base" },
  { "title": "Sales Forecasting" },
  { "title": "Approval Process Control" },
  { "title": "Version Control" },
  { "title": "Contract Management" },
  { "title": "Alerts Notifications" },
  { "title": "Quote Management" },
  { "title": "Reservations Management" },
  { "title": "Purchasing" },
  { "title": "Product Management" },
  { "title": "Reseller Management" },
  { "title": "Resource Allocation" },
  { "title": "Capacity Management" },
  { "title": "Time & Expense Tracking" },
  { "title": "Alerts/Notifications" },
  { "title": "Customizable Dashboard" },
  { "title": "Graphical Workflow Editor" },
  { "title": "Invoice Management" },
  { "title": "Receipt Management" },
  { "title": "Analytical Reports" },
  { "title": "Invoice Processing" },
  { "title": "Accounting Management" },
  { "title": "Quotes / Estimates" },
  { "title": "Purchase Management" },
  { "title": "Financial Accounting" },
  { "title": "Supply Chain Management" },
  { "title": "Sales Management" },
  { "title": "Bookkeeping" },
  { "title": "Import & Export Data" },
  { "title": "Cost Tracking" },
  { "title": "Kitting" },
  { "title": "Marketing Management" },
  { "title": "Excel Import" },
  { "title": "Business Rules Management" },
  { "title": "Process Mapping" },
  { "title": "Configuration Management" },
  { "title": "Product data management" },
  { "title": "Change Management" },
  { "title": "Item Management" },
  { "title": "Business Process Automation" },
  { "title": "Discount Management" },
  { "title": "Distribution Management" },
  { "title": "Enterprise Asset Management" },
  { "title": "Change Orders" },
  { "title": "Commercial" },
  { "title": "Contractors" },
  { "title": "Incident Reporting" },
  { "title": "Subcontractor Management" },
  { "title": "Attendance Tracking" },
  { "title": "Maintenance Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Reorder Management" },
  { "title": "Traceability" },
  { "title": "Data Visualization" },
  { "title": "Template Management" },
  { "title": "Mobile Access" },
  { "title": "Project Accounting" },
  { "title": "Fixed Asset Management" },
  { "title": "Government" },
  { "title": "Cataloging / Categorization" },
  { "title": "Materials Management" },
  { "title": "Costing" },
  { "title": "Recipe Management" },
  { "title": "Templates" },
  { "title": "eCommerce" },
  { "title": "Logistics Management" },
  { "title": "Production Scheduling" },
  { "title": "Quality Control" },
  { "title": "Customer Service Analytics" },
  { "title": "Appointment Scheduling" },
  { "title": "3rd Party Integrations" },
  { "title": "Training management" },
  { "title": "Partial Payments" },
  { "title": "SKU / UPC codes" },
  { "title": "Electronic Data Interchange" },
  { "title": "Allocation" },
  { "title": "Real time data" },
  { "title": "Data Source Connectors" },
  { "title": "Drag & Drop" },
  { "title": "Financial Reports" },
  { "title": "Marketing Reports" },
  { "title": "Drill Down" },
  { "title": "Payroll" },
  { "title": "Labor Cost Calculator" },
  { "title": "Sales History" },
  { "title": "Automated Scheduling" },
  { "title": "Group Scheduling" },
  { "title": "Duplicate Payment Alert" },
  { "title": "General Ledger Entry" },
  { "title": "Check Printing" },
  { "title": "Customer Portal" },
  { "title": "Client Statements" },
  { "title": "Overpayment Processing" },
  { "title": "Online Payment Processing" },
  { "title": "3PL Management" },
  { "title": "Reporting/Analytics" },
  { "title": "Real-time Scheduling" },
  { "title": "Resource Scheduling" },
  { "title": "GST Ready" },
  { "title": "Cost-to-Completion Tracking" },
  { "title": "Demand Forecasting" },
  { "title": "Shift Swapping" },
  { "title": "Serial Number Tracking" },
  { "title": "Access Controls/Permissions" },
  { "title": "Export Documentation" },
  { "title": "Mobile Based Bin Management" },
  { "title": "Consolidation Plug-in" },
  { "title": "Rate Management" },
  { "title": "Pattern Grading" },
  { "title": "Finance & Accounting Management System" },
  { "title": "Administration Management System" },
  { "title": "Subcontracting Management" },
  { "title": "Jobwork/Insourcing Management System" },
  { "title": "Human Resources Management System" },
  { "title": "Business Policy Management System" },
  { "title": "Compatible With Multi Operating System (Except MAC)" },
  { "title": "Masters And Opening Balance Uploading" },
  { "title": "Audit Trail Logs" },
  { "title": "Multi Smart Device (Desktop/ Laptop/Notepad/Mobile)" },
  { "title": "Notifications for Approvals And Confirmation" },
  { "title": "Broadcast Notification Messages" },
  { "title": "Intuitive User Interface" },
  { "title": "Multi Lingual" },
  { "title": "Email/SMS Integration" },
  { "title": "Centralized Data" },
  { "title": "Web And Mobile Notification" },
  { "title": "Drill Down Reports" },
  { "title": "Material Requirement Planning" },
  { "title": "Multi Level Bill Of Material" },
  { "title": "Chart of Accounts" },
  { "title": "Stock Taking" },
  { "title": "ABC Classification" },
  { "title": "Inventory Valuation" },
  { "title": "Sales Reports" },
  { "title": "Purchase Order Management" },
  { "title": "HR Management" },
  { "title": "Import / Export Management" },
  { "title": "ERP" },
  { "title": "MES" }
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
                  <span style={{ color: "#FC5185 " }}>
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
                  <span style={{ color: "#FC5185 " }}>
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
