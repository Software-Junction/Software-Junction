import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Balance Sheet" },
  { "title": "POS invoicing" },
  { "title": "Accounting Integration" },
  { "title": "Inventory Tracking" },
  { "title": "Online Banking Integration" },
  { "title": "Employee Management" },
  { "title": "Cash Management" },
  { "title": "Quotation & Estimates" },
  { "title": "Accounts Receivable" },
  { "title": "Multi Location" },
  { "title": "Payment Gateway Integration" },
  { "title": "CRM" },
  { "title": "Bank Reconciliation" },
  { "title": "Bills of Material" },
  { "title": "Expense Tracking" },
  { "title": "Billing & Invoicing" },
  { "title": "Banking Integration" },
  { "title": "Event Management" },
  { "title": "Bill of materials (BoM)" },
  { "title": "Inventory control" },
  { "title": "Accounts payable" },
  { "title": "Manage Customers and Suppliers" },
  { "title": "Multi Currency" },
  { "title": "Self Service Portal" }
];

const moreFeatures = [
  { "title": "Project Accounting" },
  { "title": "POS invoicing" },
  { "title": "Alerts/Notifications" },
  { "title": "Access Controls/Permissions" },
  { "title": "Invoice Processing" },
  { "title": "Job Management" },
  { "title": "Maintenance Scheduling" },
  { "title": "Budget Tracking/Job Costing" },
  { "title": "Manufacturing Inventory Management" },
  { "title": "Ticket/Issue Tracking" },
  { "title": "Consolidation / Roll-Up" },
  { "title": "Due date tracking" },
  { "title": "Financial Reporting" },
  { "title": "Bookkeeping" },
  { "title": "Dues Management" },
  { "title": "Built-In Accounting" },
  { "title": "Invoice Management" },
  { "title": "Email/SMS Integration" },
  { "title": "Purchase Order Management" },
  { "title": "Lead Scoring" },
  { "title": "Credit Management" },
  { "title": "Drill Down" },
  { "title": "Client Portal" },
  { "title": "Checks & Controls" },
  { "title": "POS Transactions" },
  { "title": "Project Accounting" },
  { "title": "Employee Database" },
  { "title": "Accounting Management" },
  { "title": "Multi Location" },
  { "title": "Analytics & Reporting" },
  { "title": "Customer Portal" },
  { "title": "Self Service Portal" },
  { "title": "Multi Lingual" },
  { "title": "Built-in LMS" },
  { "title": "Bills of Lading" },
  { "title": "Multi-Department / Project" },
  { "title": "Audit Trail Logs" },
  { "title": "Inventory Valuation" },
  { "title": "Expense Tracking" },
  { "title": "Lead Capture" },
  { "title": "Financial Accounting" },
  { "title": "In-Patient Management" },
  { "title": "Billing Portal" },
  { "title": "Profit/Loss Statement" },
  { "title": "Event Management" },
  { "title": "Credit Management" },
  { "title": "Client Statements" },
  { "title": "Billing Portal" },
  { "title": "Accounting Integration" },
  { "title": "Built-In Accounting" },
  { "title": "Sourcing Management" },
  { "title": "Claims Management" },
  { "title": "Inventory control" },
  { "title": "Built-in LMS" },
  { "title": "Online Banking Integration" },
  { "title": "Supplier Web Portal" },
  { "title": "ERP" },
  { "title": "Change Management" },
  { "title": "Payment Gateway Integration" },
  { "title": "POS invoicing" },
  { "title": "Client Statements" },
  { "title": "Drill Down Reports" },
  { "title": "Chart of Accounts" },
  { "title": "Supplier Master Data" },
  { "title": "Billing Management" },
  { "title": "Built-in LMS" },
  { "title": "Accounting Management" },
  { "title": "POS Transactions" },
  { "title": "Purchase Orders" },
  { "title": "Finance & Accounting Management System" },
  { "title": "Checks & Controls" },
  { "title": "Lead Capture" },
  { "title": "3rd Party Integrations" },
  { "title": "Alerts/Notifications" },
  { "title": "Client Portal" },
  { "title": "Inventory Tracking" },
  { "title": "Expense Tracking" },
  { "title": "Compliance Reporting" },
  { "title": "Built-in LMS" },
  { "title": "Invoice Processing" },
  { "title": "Allocation" },
  { "title": "Online Banking Integration" },
  { "title": "Job Requisition" },
  { "title": "Invoice Management" },
  { "title": "Financial Reporting" },
  { "title": "Item Management" },
  { "title": "Client Portal" },
  { "title": "Mobile Access" },
  { "title": "Order Entry" },
  { "title": "Order Management" },
  { "title": "Sourcing Management" },
  { "title": "Purchase Orders" },
  { "title": "Built-in LMS" },
  { "title": "Lead Capture" },
  { "title": "Budget Tracking/Job Costing" },
  { "title": "Consolidation / Roll-Up" }
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
