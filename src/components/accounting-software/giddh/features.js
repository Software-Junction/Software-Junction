import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
  { "title": "Budgeting" },
  { "title": "Invoice" },
  { "title": "Payment Handling" },
  { "title": "Inventory Management" },
  { "title": "Banking Integration" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Expense Management" },
  { "title": "Asset Management" },
  { "title": "Online Banking Integration" },
  { "title": "Financial Management" },
  { "title": "Email Integration" },
  { "title": "Payment Gateway Integration" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Multi Currency" },
  { "title": "Manufacturing" },
  { "title": "Online document storage (back-up)" },
  { "title": "Outstanding" },
  { "title": "Accounting" },
  { "title": "Investment" },
  { "title": "Asset Management" },
  { "title": "General Ledger" },
  { "title": "Territory Management" },
  { "title": "Multi Location" }
];

const moreFeatures = [
  { "title": "Document Templates" },
  { "title": "Fund Management" },
  { "title": "Online Invoice Payment" },
  { "title": "Sales Management" },
  { "title": "Multi-Company" },
  { "title": "Approval Workflow" },
  { "title": "Multi-Currency" },
  { "title": "Online payments" },
  { "title": "Accounting Integration" },
  { "title": "Quotation & Estimates" },
  { "title": "Product Database" },
  { "title": "Tax Management" },
  { "title": "Sales Analyse Report" },
  { "title": "Invoice Management" },
  { "title": "Inventory Tracking" },
  { "title": "Warehouse Management" },
  { "title": "Government" },
  { "title": "Fixed Asset Management" },
  { "title": "Multi-Location" },
  { "title": "Profit/Loss Statement" },
  { "title": "Accounts payable" },
  { "title": "Revenue Management" },
  { "title": "Financial Reports" },
  { "title": "Mobile App" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Fast Search" },
  { "title": "Billing & Invoicing" },
  { "title": "Multi-Office" },
  { "title": "Multi-Store Management" },
  { "title": "Asset Planning" },
  { "title": "Collections" },
  { "title": "Taxation Management" },
  { "title": "Financial Management" },
  { "title": "Barcode Integration" },
  { "title": "Document Management" },
  { "title": "Audit Management" },
  { "title": "Purchase Orders" },
  { "title": "Purchase Management" },
  { "title": "Inventory Management" },
  { "title": "Dashboard" },
  { "title": "Email Integration" },
  { "title": "Tax Liability Register" },
  { "title": "Payment Handling" },
  { "title": "Bank Reconciliation" },
  { "title": "Invoice" },
  { "title": "Charting" },
  { "title": "Warehouse Management" },
  { "title": "Online Accounting" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Cost Tracking" },
  { "title": "Ecommerce Integration" },
  { "title": "Multi Layer Security" },
  { "title": "Donation Management" },
  { "title": "Due date tracking" },
  { "title": "Document Printing" },
  { "title": "Barcode Scanning" },
  { "title": "Financial Accounting" },
  { "title": "GST Ready" },
  { "title": "Sales Tracking" },
  { "title": "Access Controls/Permissions" },
  { "title": "Online document storage (back-up)" },
  { "title": "MIS Reports" },
  { "title": "Online Booking" },
  { "title": "Multi Currency Support" },
  { "title": "Multi-Channel Communication" },
  { "title": "Scheme Management" },
  { "title": "Subscription Billing" },
  { "title": "Purchasing" },
  { "title": "Tax" },
  { "title": "Account Tracking" },
  { "title": "Recurring Billing" },
  { "title": "Billing Management" },
  { "title": "Multi-Branch Connectivity" },
  { "title": "Inventory Optimization" },
  { "title": "Financial Reporting" },
  { "title": "Asset Budgeting" },
  { "title": "Sales Order" },
  { "title": "Profitability Analysis" },
  { "title": "Point of Sale (POS)" },
  { "title": "Payments" },
  { "title": "Multi-Department/Project" },
  { "title": "Transaction History" },
  { "title": "Profit / Loss Statement" },
  { "title": "VAT" },
  { "title": "Invoices" },
  { "title": "E-Way Bill Generation" },
  { "title": "Point of Sale (POS)" },
  { "title": "Financial Management" },
  { "title": "Sales Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Membership Management" },
  { "title": "Balance Sheet" },
  { "title": "Warehouse Management" },
  { "title": "Security" },
  { "title": "Notifications via SMS and Email" },
  { "title": "Multi-Channel Management" },
  { "title": "Job Work" },
  { "title": "Order Fulfillment" },
  { "title": "Trading Excise Registers" },
  { "title": "Production Management" },
  { "title": "Stock Take and Monitoring" },
  { "title": "Sales Forecasting" },
  { "title": "Document Sharing" },
  { "title": "Online GST Portal" },
  { "title": "Compliance Management" },
  { "title": "Task Management" },
  { "title": "Sales Orders" },
  { "title": "Key Performance Indicators" },
  { "title": "Bookkeeping" },
  { "title": "Cost-to-Completion Tracking" },
  { "title": "Change Orders" },
  { "title": "Access Controls" },
  { "title": "Online Banking Integration" },
  { "title": "Trading Excise Registers" },
  { "title": "Asset Planning" },
  { "title": "Multi-Company" },
  { "title": "Multi-Branch" },
  { "title": "Multi-State" },
  { "title": "GST & Taxation" },
  { "title": "Barcoding / RFID" },
  { "title": "Job Work" },
  { "title": "Import/Export & Print" },
  { "title": "Credit Notes" },
  { "title": "Online Invoice Payment" },
  { "title": "Tax" },
  { "title": "GST & Taxation" }
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
