import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Budgeting" },
    { "title": "Database backup/restore (Management)" },
    { "title": "Email Integration" },
    { "title": "Audit Trail" },
    { "title": "Banking Integration" },
    { "title": "Invoice" },
    { "title": "Expense Management" },
    { "title": "Multi Location" },
    { "title": "Inventory Management" },
    { "title": "Asset Management" },
    { "title": "Mobile Support" },
    { "title": "Customer Management" },
    { "title": "Financial Management" },
    { "title": "Expense Tracking" },
    { "title": "HR & Payroll" },
    { "title": "Manufacturing" },
    { "title": "Barcode Integration" },
    { "title": "Job Costing" },
    { "title": "Document Management" },
    { "title": "Multi Currency" },
    { "title": "Investment" },
    { "title": "Sales Order" },
    { "title": "Quotation & Estimates" },
    { "title": "Accounting" }
];

const moreFeatures = [
    { "title": "Sales Tracking" },
    { "title": "Inventory control" },
    { "title": "Point of Sale (POS)" },
    { "title": "Purchase Order" },
    { "title": "Warehouse Management" },
    { "title": "Supplier and Purchase Order Management" },
    { "title": "Invoice Designer" },
    { "title": "POS invoicing" },
    { "title": "Sales Forecasting" },
    { "title": "Security" },
    { "title": "Vendor Management" },
    { "title": "Recurring invoice" },
    { "title": "Multiuser Login & Role-based access control" },
    { "title": "Online Banking Integration" },
    { "title": "Online document storage (back-up)" },
    { "title": "Outstanding" },
    { "title": "Payment Gateway Integration" },
    { "title": "Payment Handling" },
    { "title": "Payroll Management" },
    { "title": "Product Database" },
    { "title": "Production Management" },
    { "title": "Taxation Management" },
    { "title": "Time Tracking" },
    { "title": "Multi Currency Support" },
    { "title": "Vat" },
    { "title": "Fast Search" },
    { "title": "Multi Company" },
    { "title": "Data Security" },
    { "title": "Accounts payable" },
    { "title": "Accounts Receivable" },
    { "title": "Bank Reconciliation" },
    { "title": "Business intelligence (BI)" },
    { "title": "Fixed assets" },
    { "title": "Fund accounting" },
    { "title": "General Ledger" },
    { "title": "Invoicing" },
    { "title": "Order entry (OE)" },
    { "title": "Receiving" },
    { "title": "Notification via SMS and Email" },
    { "title": "Billing System" },
    { "title": "Cashflow" },
    { "title": "Payments" },
    { "title": "Multi Layer Security" },
    { "title": "Manage Customers and Suppliers" },
    { "title": "Barcode Scanning" },
    { "title": "Invoices" },
    { "title": "Cash Management" },
    { "title": "Ecommerce Integration" },
    { "title": "Channel Management" },
    { "title": "Applications Management" },
    { "title": "SMS Integration" },
    { "title": "Compliance Management" },
    { "title": "Balance Sheet" },
    { "title": "Profit & Loss Statement" },
    { "title": "Accounting Integration" },
    { "title": "Bills of Material" },
    { "title": "Custom Fields" },
    { "title": "Forecasting" },
    { "title": "Inventory Optimization" },
    { "title": "Inventory Tracking" },
    { "title": "Multi-Location" },
    { "title": "Order Fulfillment" },
    { "title": "Order Processing" },
    { "title": "POS Integration" },
    { "title": "Real Time Reporting" },
    { "title": "Sales Orders" },
    { "title": "Shipping Management" },
    { "title": "Supplier Management" },
    { "title": "Transfer Management" },
    { "title": "Billing & Invoicing" },
    { "title": "Tax Management" },
    { "title": "Barcoding / RFID" },
    { "title": "Budgeting & Forecasting" },
    { "title": "Purchase Orders" },
    { "title": "Analytics" },
    { "title": "Permission Management" },
    { "title": "Audit Management" },
    { "title": "MIS Reports" },
    { "title": "Purchasing" },
    { "title": "Revenue Management" },
    { "title": "Spend Management" },
    { "title": "Accounting Management" },
    { "title": "Reporting" },
    { "title": "Purchase Management" },
    { "title": "Discount & Schemes" },
    { "title": "Document Printing" },
    { "title": "Financial Accounting" },
    { "title": "Sales Management" },
    { "title": "Bookkeeping" },
    { "title": "Track Account" },
    { "title": "Bill & Deposit Reminder" },
    { "title": "Reconcile Statements" },
    { "title": "Import & Export Data" },
    { "title": "Data Import & Export" },
    { "title": "Profit / Loss Statement" },
    { "title": "Cost Tracking" },
    { "title": "Search / Filter" },
    { "title": "Kitting" },
    { "title": "Data Backup and Restore" },
    { "title": "Data Security & Accuracy" },
    { "title": "GST Compliance" },
    { "title": "e-Payment" },
    { "title": "Tax Liability Register" },
    { "title": "ITC Match/Mismatch Report generation" },
    { "title": "Customer tracking" },
    { "title": "Mailing list management" },
    { "title": "Monthly GST Report" },
    { "title": "Stock Take and Monitoring" },
    { "title": "Sales Person Monitoring" },
    { "title": "Event/Appointment Management" },
    { "title": "Sales Analyse Report" },
    { "title": "Multi-Branch Connectivity" },
    { "title": "GST audit report" },
    { "title": "GST returns" },
    { "title": "Collaborate" },
    { "title": "Responsive Support" },
    { "title": "Custom Pricing Models" },
    { "title": "Reorder Management" },
    { "title": "Serialized Inventory Tracking" },
    { "title": "Traceability" },
    { "title": "Scheme Management" },
    { "title": "Material Workflow" },
    { "title": "VAT / CST / GST Reports" },
    { "title": "Service Tax" },
    { "title": "TDS / TCS" },
    { "title": "Checks & Controls" },
    { "title": "Trading Excise Registers" },
    { "title": "Project Accounting" },
    { "title": "Collections" },
    { "title": "Fixed Asset Management" }];


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
