import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Payment Handling" },
  { "title": "Invoice" },
  { "title": "Email Integration" },
  { "title": "Warehouse Management" },
  { "title": "Customer Support" },
  { "title": "Customer Management" },
  { "title": "Inventory Management" },
  { "title": "Data Security" },
  { "title": "Mobile App" },
  { "title": "Expense Tracking" },
  { "title": "Recurring Invoice" },
  { "title": "Product Database" },
  { "title": "Expense Management" },
  { "title": "Multiuser Login & Role-based Access Control" },
  { "title": "Fast Search" },
  { "title": "Home Delivery & Due Bill" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Bank Reconciliation" },
  { "title": "Business Intelligence (BI)" },
  { "title": "Quotation & Estimates" },
  { "title": "Sales Tracking" },
  { "title": "Payment Gateway Integration" },
  { "title": "Accounts Payable" },
  { "title": "Patient Information Management" },
  { "title": "CRM & Sales Dashboards" },
  { "title": "Invoicing" },
  { "title": "Inventory Control" },
  { "title": "Vendor Management" },
  { "title": "CRM" },
  { "title": "Customer Database" },
  { "title": "Order Tracking" },
  { "title": "Stock Management" },
];

const moreFeatures = [
  { "title": "Patient Registration" },
  { "title": "Purchase" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Billing System" },
  { "title": "Barcode Scanning" },
  { "title": "Invoices" },
  { "title": "User Management" },
  { "title": "Multiple Language" },
  { "title": "Loyalty Management" },
  { "title": "Point of Sale (POS)" },
  { "title": "Online Booking" },
  { "title": "Balance Sheet" },
  { "title": "Profit & Loss Statement" },
  { "title": "Income Statements" },
  { "title": "Accounting Integration" },
  { "title": "Inventory Optimization" },
  { "title": "Inventory Tracking" },
  { "title": "Multi-Location" },
  { "title": "Order Processing" },
  { "title": "POS Integration" },
  { "title": "Real Time Comparisons" },
  { "title": "Real Time Reporting" },
  { "title": "Shipping Labels" },
  { "title": "Billing & Invoicing" },
  { "title": "Payment Processing" },
  { "title": "Tax Management" },
  { "title": "Barcoding / RFID" },
  { "title": "Dashboard" },
  { "title": "Patient Portal" },
  { "title": "Order Management" },
  { "title": "Purchase Orders" },
  { "title": "Recurring Orders" },
  { "title": "Patient Record Management" },
  { "title": "Procurement Management" },
  { "title": "Billing Management" },
  { "title": "Analytics" },
  { "title": "MIS Reports" },
  { "title": "Activity Dashboard" },
  { "title": "Automatic Reminders" },
  { "title": "Electronic Payments" },
  { "title": "Role-Based Permissions" },
  { "title": "Purchasing" },
  { "title": "EMR / EHR" },
  { "title": "Patient Billing" },
  { "title": "Patient Records" },
  { "title": "Alerts/Notifications" },
  { "title": "Customizable Dashboard" },
  { "title": "Invoice Management" },
  { "title": "Recurring Billing" },
  { "title": "ACH Check Transactions" },
  { "title": "Debit Card Support" },
  { "title": "POS Transactions" },
  { "title": "Invoice Processing" },
  { "title": "Sourcing Management" },
  { "title": "Spend Management" },
  { "title": "Quotes / Estimates" },
  { "title": "Taxation Reports" },
  { "title": "Sales Management" },
  { "title": "Bill & Deposit Reminder" },
  { "title": "Search / Filter" },
  { "title": "Barcode Generation" },
  { "title": "Batch Verification" },
  { "title": "Transaction management" },
  { "title": "Automatic Blocking of Expired Items" },
  { "title": "eCommerce Management" },
  { "title": "Marketing Management" },
  { "title": "Shipment Tracking" },
  { "title": "Product Catalog" },
  { "title": "Item Management" },
  { "title": "Loyalty Card System" },
  { "title": "Billing Estimates" },
  { "title": "Patient Payment History" },
  { "title": "Statements & Collections" },
  { "title": "Prescription Management" },
  { "title": "Expiry and Near Expiry" },
  { "title": "Loyalty Program Support" },
  { "title": "Multi-Store Management" },
  { "title": "Reorder Management" },
  { "title": "Ad hoc Query" },
  { "title": "Data Analysis" },
  { "title": "Data Visualization" },
  { "title": "Predictive Analytics" },
  { "title": "For Sales" },
  { "title": "Materials Management" },
  { "title": "ATM Management" },
  { "title": "Retail Banking" },
  { "title": "Customer Purchase History" },
  { "title": "Remote Access" },
  { "title": "Customer Accounts" },
  { "title": "eCommerce" },
  { "title": "Logistics Management" },
  { "title": "Delivery Tracking" },
  { "title": "Online Ordering" },
  { "title": "Sales Trend Analysis" },
  { "title": "Adjustor Management" },
  { "title": "Reporting" },
  { "title": "Invoice history" },
  { "title": "Online payments" },
  { "title": "Online invoicing" },
  { "title": "Allocation" },
  { "title": "Sales History" },
  { "title": "Self-Learning" },
  { "title": "Prescription Processing" },
  { "title": "GST" },
  { "title": "Online Payment Processing" },
  { "title": "Employee Database" },
  { "title": "Reporting/Analytics" },
  { "title": "Retail Inventory Management" },
  { "title": "Billing Portal" },
  { "title": "Mobile Payments" },
  { "title": "Monitoring" },
  { "title": "Patient Appointments" },
  { "title": "Billing & Payment Management" },
  { "title": "Patient History Management" },
  { "title": "Patient Medication" },
  { "title": "Pharmacy Management" },
  { "title": "Loyalty Program" },
  { "title": "Payment Tracking" },
  { "title": "For Healthcare" },
  { "title": "Price List Management" },
  { "title": "Pricing Analytics" },
  { "title": "Rate Management" },
  { "title": "Real Time Synchronization" },
  { "title": "User Access Permissions" },
  { "title": "MRP" },
  { "title": "Quotes/Estimates" },
  { "title": "Barcoding" },
  { "title": "Picking & Routing" },
  { "title": "Real Time Tracking" },
  { "title": "Retail POS" },
  { "title": "Multi-Language" },
  { "title": "Customer Statements" },
  { "title": "Patient Database" },
  { "title": "Medical History Records" },
  { "title": "Analytics/ROI Tracking" },
  { "title": "Ticket/Issue Tracking" },
  { "title": "Barcode / Ticket Scanning" },
  { "title": "Price / Margin Management" },
  { "title": "Wholesaler Management" },
  { "title": "Single Store" },
  { "title": "Taxation & Assessment" },
  { "title": "Supplier Master Data" },
  { "title": "Transaction History" },
  { "title": "Multi-Branch" },
  { "title": "Online Banking" },
  { "title": "Bill Payment" },
  { "title": "QR Codes" },
  { "title": "Supply Management" },
  { "title": "Customizable Billing" },
  { "title": "Real Time Order Entry" },
  { "title": "Marketplace Integration" },
  { "title": "Product Comparison" },
  { "title": "Electronic Receipts" },
  { "title": "Medical Billing" },
  { "title": "Move In / Move Out" },
  { "title": "Recurring Invoicing" },
  { "title": "Analytical Reporting" },
  { "title": "Custom Account Statements" },
  { "title": "Barcodes/Labels" },
  { "title": "Personal Health Record" },
  { "title": "Health Record Access" },
  { "title": "Prescription Renewals" },
  { "title": "Medication History" },
  { "title": "Pill Database" },
  { "title": "Import/Export & Print" },
  { "title": "Online Invoice Payment" }
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
