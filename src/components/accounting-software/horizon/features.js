import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Customer Management" },
  { "title": "Barcode Integration" },
  { "title": "Multi Location" },
  { "title": "Payment Handling" },
  { "title": "Expense Management" },
  { "title": "POS invoicing" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Accounting" },
  { "title": "Mobile App" },
  { "title": "Sales Tracking" },
  { "title": "Invoice Designer" },
  { "title": "Taxation Management" },
  { "title": "Inventory Management" },
  { "title": "Product Database" },
  { "title": "Vat" },
  { "title": "Banking Integration" },
  { "title": "Invoice" },
  { "title": "Accounts payable" },
  { "title": "Multi Company" },
  { "title": "Quotation & Estimates" },
  { "title": "Accounting Management" },
  { "title": "Order Tracking" },
  { "title": "Outstanding" }
];

const moreFeatures = [
    { "title": "Financial Accounting" },
    { "title": "Multi-Location" },
    { "title": "Inventory Management & Consumption Tracking" },
    { "title": "Point of Sale (POS)" },
    { "title": "Order Processing" },
    { "title": "Sales Order Management" },
    { "title": "Inventory control" },
    { "title": "Invoicing" },
    { "title": "Sales Order" },
    { "title": "Barcode Scanning" },
    { "title": "User Management" },
    { "title": "Bank Reconciliation" },
    { "title": "General Ledger" },
    { "title": "Bill of materials (BoM)" },
    { "title": "User Activity Monitoring" },
    { "title": "Receipt Management" },
    { "title": "Access Controls" },
    { "title": "Balance Sheet" },
    { "title": "Profit & Loss Statement" },
    { "title": "Sales Orders" },
    { "title": "Billing & Invoicing" },
    { "title": "Order Management" },
    { "title": "Purchase Orders" },
    { "title": "Purchasing" },
    { "title": "Product Management" },
    { "title": "Multi-Office" },
    { "title": "Barcode Generation" },
    { "title": "Monthly GST Report" },
    { "title": "Multi-Branch Connectivity" },
    { "title": "GST returns" },
    { "title": "Item Management" },
    { "title": "Discount Management" },
    { "title": "Distribution Management" },
    { "title": "Pricing Management" },
    { "title": "Touch Screen" },
    { "title": "Multi-Channel Communication" },
    { "title": "Multi-Store Management" },
    { "title": "Profitability Analysis" },
    { "title": "VAT / CST / GST Reports" },
    { "title": "Invoices & Billing" },
    { "title": "Due date tracking" },
    { "title": "Partial Payments" },
    { "title": "Financial Reports" },
    { "title": "Purchasing & Receiving" },
    { "title": "Dues Management" },
    { "title": "Account Tracking" },
    { "title": "Retail Inventory Management" },
    { "title": "GST Tax Invoice" },
    { "title": "GST Ready" },
    { "title": "Print Or Email Invoices" },
    { "title": "Printing of E-Way Bills" },
    { "title": "E-Way Bill Generation" },
    { "title": "Access Controls/Permissions" },
    { "title": "Price List Management" },
    { "title": "User Access Permissions" },
    { "title": "Discount and Promotion Management" },
    { "title": "User Roles" },
    { "title": "Purchase Order Management" },
    { "title": "MRP" },
    { "title": "Barcoding" },
    { "title": "Multi-Channel Management" },
    { "title": "Multi-Company" },
    { "title": "Profit/Loss Statement" },
    { "title": "Financial Reporting" },
    { "title": "Multi-State" },
    { "title": "Payment Collection in the Field" },
    { "title": "Account Management" },
    { "title": "Retail POS" },
    { "title": "Multi-Facility" },
    { "title": "Order Entry" },
    { "title": "Price / Margin Management" },
    { "title": "Wholesaler Management" },
    { "title": "Transaction History" },
    { "title": "For Retail" },
    { "title": "Customizable Billing" },
    { "title": "Analytical Reporting" },
    { "title": "Margin Management" },
    { "title": "Grocery POS" },
    { "title": "Barcodes/Labels" }
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
