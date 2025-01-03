import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Budgeting" },
  { "title": "Asset Management" },
  { "title": "Expense Tracking" },
  { "title": "Expense Management" },
  { "title": "Case Management" },
  { "title": "Event Management" },
  { "title": "Payment Handling" },
  { "title": "Financial Management" },
  { "title": "Multi Location" },
  { "title": "Audit Trail" },
  { "title": "Invoice" },
  { "title": "CRM" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Email Integration" },
  { "title": "Payment Gateway Integration" },
  { "title": "Mobile Support" },
  { "title": "Manufacturing" },
  { "title": "Inventory Management" },
  { "title": "Academics" },
  { "title": "Accounting" },
  { "title": "Barcode Integration" },
  { "title": "Outstanding" },
  { "title": "Online Banking Integration" },
  { "title": "Customer Management" },
];

const moreFeatures = [
  { "title": "Job Costing" },
  { "title": "Multi Currency" },
  { "title": "Quotes/Estimates" },
  { "title": "Financial Planning" },
  { "title": "Billing & Invoicing" },
  { "title": "Taxation Management" },
  { "title": "Project Management" },
  { "title": "Accounting Integration" },
  { "title": "Inventory Management" },
  { "title": "Multi-Location" },
  { "title": "Invoice" },
  { "title": "Time & Attendance Management" },
  { "title": "Mobile App" },
  { "title": "Asset Management" },
  { "title": "Online Banking Integration" },
  { "title": "Audit Trail" },
  { "title": "Payment Processing" },
  { "title": "CRM" },
  { "title": "Stock Management" },
  { "title": "Vendor Management" },
  { "title": "Budgeting" },
  { "title": "Email Integration" },
  { "title": "Business Process Control" },
  { "title": "Expense Management" },
  { "title": "Business intelligence (BI)" },
  { "title": "Training Management" },
  { "title": "Supply Chain Management" },
  { "title": "Data Backup and Restore" },
  { "title": "Transaction management" },
  { "title": "Billing Management" },
  { "title": "Lead Management" },
  { "title": "Sales Management" },
  { "title": "Point of Sale (POS)" },
  { "title": "Multi-Currency" },
  { "title": "Forecasting" },
  { "title": "Accounts payable" },
  { "title": "Accounts Receivable" },
  { "title": "Bank Reconciliation" },
  { "title": "Business Rules Management" },
  { "title": "Commission management" },
  { "title": "Fixed assets" },
  { "title": "Fund accounting" },
  { "title": "General Ledger" },
  { "title": "Demand Planning" },
  { "title": "Shipping Management" },
  { "title": "Warehouse Management" },
  { "title": "Analytics & Reporting" },
  { "title": "Data Management" },
  { "title": "Workflow Management" },
  { "title": "Access control" },
  { "title": "Time Tracking" },
  { "title": "Tax Management" },
  { "title": "Ad hoc Analysis" },
  { "title": "Consolidation / Roll-Up" },
  { "title": "Dashboard" },
  { "title": "Key Performance Indicators" },
  { "title": "Activity Tracking" },
  { "title": "Lead Capture" },
  { "title": "Campaign Management" },
  { "title": "Order Management" },
  { "title": "Purchase Orders" },
  { "title": "Back Order Management" },
  { "title": "Returns Management" },
  { "title": "Sales Tax Management" },
  { "title": "Historical Reporting" },
  { "title": "Procurement Management" },
  { "title": "Logistics" },
  { "title": "Revenue Management" },
  { "title": "Invoice Management" },
  { "title": "Resource Allocation" },
  { "title": "Capacity Management" },
  { "title": "Alerts/Notifications" },
  { "title": "Customizable Dashboard" },
  { "title": "Event Logs" },
  { "title": "Client Portal" },
  { "title": "Records Management" },
  { "title": "Quote Management" },
  { "title": "Requisition Management" },
  { "title": "Partner Management" },
  { "title": "Project Tracking" },
  { "title": "Time Tracking by Project" },
  { "title": "Capacity Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Payment Processing" },
  { "title": "Tax Management" },
  { "title": "Barcoding / RFID" },
  { "title": "Ad hoc Analysis" },
  { "title": "Ad Hoc Reports" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Consolidation / Roll-Up" },
  { "title": "Dashboard" },
  { "title": "Key Performance Indicators" },
  { "title": "Qualitative Analysis" },
  { "title": "Quantitative Analysis" },
  { "title": "Strategic Planning" },
  { "title": "Activity Tracking" },
  { "title": "Lead Capture" },
  { "title": "Lead Distribution" },
  { "title": "Lead Scoring" },
  { "title": "Campaign Management" },
  { "title": "Lead Nurturing" },
  { "title": "Lead Segmentation" },
  { "title": "Source Tracking" },
  { "title": "Order Management" },
  { "title": "Purchase Orders" },
  { "title": "Software Inventory" },
  { "title": "Back Order Management" },
  { "title": "Returns Management" },
  { "title": "Sales Tax Management" },
  { "title": "Special Order Management" },
  { "title": "Historical Reporting" },
  { "title": "Demand Planning" },
  { "title": "Sales & Operations Planning" },
  { "title": "Supply Chain Collaboration" },
  { "title": "Supply Chain Planning" },
  { "title": "Procurement Management" },
  { "title": "Logistics" },
  { "title": "Forecasting and Planning" },
  { "title": "Return Management" },
  { "title": "Billing Management" },
  { "title": "Analytics" },
  { "title": "Scheduling" },
  { "title": "Approval Process Control" },
  { "title": "Version Control" },
  { "title": "Process Management" },
  { "title": "MIS Reports" },
  { "title": "Claims Management" },
  { "title": "Client Portal" },
  { "title": "Records Management" },
  { "title": "Role-Based Permissions" },
  { "title": "Quote Management" },
  { "title": "Purchasing" },
  { "title": "Requisition Management" },
  { "title": "Partner Management" },
  { "title": "Multi-Office" },
  { "title": "Project Tracking" },
  { "title": "Resource Allocation" },
  { "title": "Time Tracking by Project" },
  { "title": "Capacity Management" },
  { "title": "Time & Expense Tracking" },
  { "title": "Alerts/Notifications" },
  { "title": "Customizable Dashboard" },
  { "title": "Event Logs" },
  { "title": "Revenue Management" },
  { "title": "Invoice Management" },
  { "title": "Spend Control" },
  { "title": "Recurring Billing" },
  { "title": "Contact Database" },
  { "title": "Multi-Campaign" },
  { "title": "Customizable Templates" },
  { "title": "Data Management" },
  { "title": "Invoice Processing" },
  { "title": "Spend Management" },
  { "title": "Quotes / Estimates" },
  { "title": "Service History" },
  { "title": "Purchase Management" },
  { "title": "Financial Accounting" },
  { "title": "Warranty Management" },
  { "title": "Supply Chain Management" },
  { "title": "Sales Management" },
  { "title": "Bookkeeping" },
  { "title": "Import & Export Data" },
  { "title": "Data Import & Export" },
  { "title": "Profit / Loss Statement" },
  { "title": "Cost Tracking" },
  { "title": "Search / Filter" },
  { "title": "Kitting" },
  { "title": "Transaction management" },
  { "title": "Client Management" },
  { "title": "Proposal Management" },
  { "title": "eCommerce Management" },
  { "title": "Marketing Management" },
  { "title": "Workflows Management" },
  { "title": "Excel Import" },
  { "title": "Freight Shipping" },
  { "title": "Mailing list management" },
  { "title": "Multi-Branch Connectivity" },
  { "title": "Configuration Management" },
  { "title": "Item Management" },
  { "title": "Depreciation Management" },
  { "title": "Distribution Management" },
  { "title": "Enterprise Asset Management" },
  { "title": "Bid Management" },
  { "title": "Change Orders" },
  { "title": "Response Management" },
  { "title": "Social Media Monitoring" },
  { "title": "Customer Account Profiles" },
  { "title": "Returns Tracking" },
  { "title": "Multi-Channel Communication" },
  { "title": "Multi-Store Management" },
  { "title": "Reorder Management" },
  { "title": "Ad hoc Query" },
  { "title": "Data Analysis" },
  { "title": "Data Visualization" },
  { "title": "Profitability Analysis" },
  { "title": "Template Management" },
  { "title": "Mobile Access" },
  { "title": "Project Accounting" },
  { "title": "Trust Accounting" },
  { "title": "Collections" },
  { "title": "Fixed Asset Management" },
  { "title": "Cataloging / Categorization" },
  { "title": "Filtered Search" },
  { "title": "Costing" },
  { "title": "Built-In Accounting" },
  { "title": "Donation Management" },
  { "title": "Volunteer Management" },
  { "title": "Multi-Screen Support" },
  { "title": "Remote Access" },
  { "title": "eCommerce" },
  { "title": "Cross Docking" },
  { "title": "Logistics Management" },
  { "title": "Production Scheduling" },
  { "title": "Sales Trend Analysis" },
  { "title": "Multiple Billing Rates" },
  { "title": "Approval Workflow" },
  { "title": "3rd Party Integrations" },
  { "title": "Access control" },
  { "title": "Client database" },
  { "title": "Reporting & statistics" },
  { "title": "Due date tracking" },
  { "title": "Training management" },
  { "title": "Customizable invoices" },
  { "title": "Online payments" },
  { "title": "Project billing" },
  { "title": "Online invoicing" },
  { "title": "Hourly billing" },
  { "title": "Email Marketing" },
  { "title": "Billing Rate Management" },
  { "title": "Data Synchronization" },
  { "title": "Partial Payments" },
  { "title": "Search" },
  { "title": "SKU / UPC codes" },
  { "title": "Electronic Data Interchange" },
  { "title": "Allocation" },
  { "title": "Real time data" },
  { "title": "Dashboard Creation" },
  { "title": "Drag & Drop" },
  { "title": "Financial Reports" },
  { "title": "Marketing Reports" },
  { "title": "Drill Down" },
  { "title": "Sales History" },
  { "title": "What If Scenarios" },
  { "title": "Data Collection" },
  { "title": "Social Sharing" },
  { "title": "Automated Scheduling" },
  { "title": "Donation Tracking" },
  { "title": "Grant Management" },
  { "title": "Donor Management" },
  { "title": "Purchasing & Receiving" },
  { "title": "Dues Management" },
  { "title": "Nonprofits" },
  { "title": "Duplicate Payment Alert" },
  { "title": "General Ledger Entry" },
  { "title": "Salary Planning" },
  { "title": "Customer Portal" },
  { "title": "Dunning Management" },
  { "title": "Client Statements" },
  { "title": "Trend Analysis" },
  { "title": "ACH Payment Processing" },
  { "title": "Overpayment Processing" },
  { "title": "Online Payment Processing" },
  { "title": "Reporting/Analytics" },
  { "title": "Retail Inventory Management" },
  { "title": "Warehouse Inventory Management" },
  { "title": "Billing Portal" },
  { "title": "Real-time Scheduling" },
  { "title": "Resource Scheduling" },
  { "title": "GST Ready" },
  { "title": "Cost-to-Completion Tracking" },
  { "title": "Content Management" },
  { "title": "Loyalty Program" },
  { "title": "Tax Calculator" },
  { "title": "Demand Forecasting" },
  { "title": "Utilization Management" },
  { "title": "Payment Tracking" },
  { "title": "Segmentation" },
  { "title": "Payment Management" },
  { "title": "Serial Number Tracking" },
  { "title": "Access Controls/Permissions" },
  { "title": "Market Analysis" },
  { "title": "Real Time Synchronization" },
  { "title": "Backup Log" },
  { "title": "Auto Update" },
  { "title": "Finance & Accounting Management System" },
  { "title": "Audit Trail Logs" },
  { "title": "Multi Smart Device (Desktop/ Laptop/Notepad/Mobile)" },
  { "title": "Multi Browser Compatible" },
  { "title": "Multi Lingual" },
  { "title": "Email/SMS Integration" },
  { "title": "Web And Mobile Notification" },
  { "title": "Drill Down Reports" },
  { "title": "Multi Level Bill Of Material" },
  { "title": "Chart of Accounts" },
  { "title": "Stock Taking" },
  { "title": "Inventory Valuation" },
  { "title": "IT Asset Management" },
  { "title": "Sales Reports" },
  { "title": "Purchase Order Management" },
  { "title": "ERP" },
  { "title": "MES" },
  { "title": "MRP" }
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
