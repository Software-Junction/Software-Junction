import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Document Management" },
  { title: "Email Integration" },
  { title: "Expense Management" },
  { title: "Expense Tracking" },
  { title: "Accounting" },
  { title: "Banking Integration" },
  { title: "Budgeting" },
  { title: "Online Document Storage (Back-up)" },
  { title: "Payment Gateway Integration" },
  { title: "Product Database" },
  { title: "Taxation Management" },
  { title: "Project Management" },
  { title: "Supplier and Purchase Order Management" },
  { title: "Quotation & Estimates" },
  { title: "Recurring Invoice" },
  { title: "Database Backup/Restore (Management)" },
  { title: "Multiuser Login & Role-based Access Control" },
  { title: "Financial Management" },
  { title: "Inventory Management" },
  { title: "Security" },
  { title: "Invoice" },
  { title: "Multi Currency" },
  { title: "Mobile Support" },
  { title: "Online Banking Integration" },
];

const moreFeatures = [
  { title: "Customizable Invoices" },
  { title: "Project Billing" },
  { title: "Online Invoicing" },
  { title: "Document Management" },
  { title: "Expense Tracking" },
  { title: "Client Portal" },
  { title: "Recurring Billing" },
  { title: "Partial Payments" },
  { title: "Collection Management" },
  { title: "Nonprofits" },
  { title: "Delayed Billing" },
  { title: "Dunning Management" },
  { title: "Multi-Period Recurring Billing" },
  { title: "Subscription Billing" },
  { title: "Client Statements" },
  { title: "Retainer Billing" },
  { title: "Online Payment Processing" },
  { title: "GST Tax Invoice" },
  { title: "Time Tracking" },
  { title: "Vendor Management" },
  { title: "Invoicing" },
  { title: "Purchase Order" },
  { title: "Receiving" },
  { title: "Online Payment" },
  { title: "Billing System" },
  { title: "Cashflow" },
  { title: "Payments" },
  { title: "Multi-Layer Security" },
  { title: "Manage Customers and Suppliers" },
  { title: "Cash Management" },
  { title: "Ecommerce Integration" },
  { title: "Timesheet Management" },
  { title: "Balance Sheet" },
  { title: "Profit & Loss Statement" },
  { title: "Income Statements" },
  { title: "Accounting Integration" },
  { title: "Custom Fields" },
  { title: "Accounts Payable" },
  { title: "Accounts Receivable" },
  { title: "Bank Reconciliation" },
  { title: "Employee Database" },
  { title: "Mobile App" },
  { title: "VAT" },
  { title: "Fast Search" },
  { title: "Data Security" },
  { title: "Supplier Management" },
  { title: "Billing & Invoicing" },
  { title: "Payment Processing" },
  { title: "Tax Management" },
  { title: "Budgeting & Forecasting" },
  { title: "Dashboard" },
  { title: "Purchase Orders" },
  { title: "Analytics" },
  { title: "Invoice Designer" },
  { title: "Multi Currency Support" },
  { title: "Receipt Management" },
  { title: "Invoice Processing" },
  { title: "Reporting" },
  { title: "Purchase Management" },
  { title: "Discount & Schemes" },
  { title: "Financial Accounting" },
  { title: "Sales Management" },
  { title: "Bookkeeping" },
  { title: "Reconcile Statements" },
  { title: "Import & Export Data" },
  { title: "Cost Tracking" },
  { title: "Kitting" },
  { title: "MIS Reports" },
  { title: "Purchasing" },
  { title: "Timesheets" },
  { title: "Business Intelligence (BI)" },
  { title: "Inventory Control" },
  { title: "Inventory Tracking" },
  { title: "Real Time Reporting" },
  { title: "Reorder Management" },
  { title: "VAT / CST / GST Reports" },
  { title: "Project Accounting" },
  { title: "Collections" },
  { title: "Mobile Access" },
  { title: "GST Ready" },
  { title: "Data Backup and Restore" },
  { title: "Data Security & Accuracy" },
  { title: "Excel Import" },
  { title: "GST Compliance" },
  { title: "e-Payment" },
  { title: "Online GST Portal" },
  { title: "GST Audit Report" },
  { title: "GST Returns" },
  { title: "Responsive Support" },
  { title: "Online Accounting" },
  { title: "Discount Management" },
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
