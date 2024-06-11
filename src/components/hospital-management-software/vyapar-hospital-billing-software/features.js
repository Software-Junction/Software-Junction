import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Inventory Management" },
  { "title": "Accounts payable" },
  { "title": "Stock Management" },
  { "title": "Invoice" },
  { "title": "Recurring invoice" },
  { "title": "General Ledger" },
  { "title": "Vendor Management" },
  { "title": "Purchase Order" },
  { "title": "Order Tracking" },
  { "title": "Barcode Scanning" },
  { "title": "Balance Sheet" },
  { "title": "Customer Management" },
  { "title": "Accounts Receivable" },
  { "title": "Billing System" },
  { "title": "Mobile App" },
  { "title": "Data Security" },
  { "title": "Budgeting" },
  { "title": "Accounting" },
  { "title": "Cash Management" },
  { "title": "Mobile Support" },
  { "title": "Purchase" },
  { "title": "Taxation Management" },
  { "title": "Reminders" },
  { "title": "Manufacturing" }
];

const moreFeatures = [
    { "title": "Inventory Management & Consumption Tracking" },
    { "title": "Billing & Invoicing" },
    { "title": "Sales Orders" },
    { "title": "Online Accounting" },
    { "title": "Quotes / Estimates" },
    { "title": "Service Tax" },
    { "title": "Purchase Orders" },
    { "title": "Data Import & Export" },
    { "title": "Due date tracking" },
    { "title": "Customer Account Profiles" },
    { "title": "Sales Order" },
    { "title": "Purchasing" },
    { "title": "Profit & Loss Statement" },
    { "title": "Multi-Branch" },
    { "title": "Customer Journey Mapping" },
    { "title": "Transaction Review" },
    { "title": "Real Time Reporting" },
    { "title": "Online Billing" },
    { "title": "Returns Management" },
    { "title": "Purchase Order Management" },
    { "title": "E-Way Bill Generation" },
    { "title": "Data Backup Scheduling" },
    { "title": "MRP" },
    { "title": "Income Statements" },
    { "title": "Billing Management" },
    { "title": "Online invoicing" },
    { "title": "Sales Management" },
    { "title": "Sales History" },
    { "title": "Transaction management" },
    { "title": "Multi-Company" },
    { "title": "Payment Management" },
    { "title": "Item Management" },
    { "title": "Retail Inventory Management" },
    { "title": "Fixed Asset Management" },
    { "title": "Themes" },
    { "title": "Online Store" },
    { "title": "Customizable Billing" },
    { "title": "Print Or Email Invoices" },
    { "title": "Currency Management" },
    { "title": "Customer tracking" },
    { "title": "VAT / CST / GST Reports" },
    { "title": "GST" },
    { "title": "Real Time Synchronization" },
    { "title": "Native App" },
    { "title": "Remote Order Entry" },
    { "title": "Barcoding" },
    { "title": "Transaction History" },
    { "title": "Wholesaler Management" },
    { "title": "Multi-Office" },
    { "title": "Report Export" },
    { "title": "Customizable Catalogs" },
    { "title": "Revenue Management" },
    { "title": "Custom Account Statements" },
    { "title": "Billing Management" },
    { "title": "Barcodes/Labels" },
    { "title": "GST Tax Invoice" },
    { "title": "Remote Order Entry" },
    { "title": "Purchase Management" },
    { "title": "Account Management" },
    { "title": "Data Synchronization" },
    { "title": "GST Ready" },
    { "title": "Barcode Generation" },
    { "title": "Real Time Synchronization" },
    { "title": "Online Registration" },
    { "title": "Credit Notes" },
    { "title": "Customizable invoices" },
    { "title": "Custom Fields" },
    { "title": "Client Management" },
    { "title": "Profit/Loss Statement" },
    { "title": "Customer Management" },
    { "title": "GST Compatible" },
    { "title": "Remote Order Entry" },
    { "title": "Data Analysis Tools" },
    { "title": "Barcodes/Labels" },
    { "title": "Check-in / Check-out" },
    { "title": "Mobile Sync" },
    { "title": "Referral Management" },
    { "title": "Audit Trails" },
    { "title": "Balance Sheet" },
    { "title": "Mobile App" },
    { "title": "Change Management" },
    { "title": "Sales Orders" },
    { "title": "KPI Module" },
    { "title": "Patient Registration" },
    { "title": "Lab Information System" },
    { "title": "Procedure Management" },
    { "title": "Radiology & Imaging Information System" },
    { "title": "PACS Support" }
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
