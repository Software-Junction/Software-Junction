import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Cash Management" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Mobile App" },
  { "title": "Purchase" },
  { "title": "Vendor Management" },
  { "title": "Budgeting" },
  { "title": "Stock Management" },
  { "title": "Data Security" },
  { "title": "Invoice" },
  { "title": "Recurring invoice" },
  { "title": "Taxation Management" },
  { "title": "Customer Management" },
  { "title": "Accounts Receivable" },
  { "title": "Barcode Scanning" },
  { "title": "Manufacturing" },
  { "title": "Accounts payable" },
  { "title": "Purchase Order" },
  { "title": "Reminders" },
  { "title": "Order Tracking" },
  { "title": "Billing System" },
  { "title": "General Ledger" },
  { "title": "Accounting" },
  { "title": "Inventory Management" },
  { "title": "Mobile Support" }
];

const moreFeatures = [
  { "title": "Transaction management" },
    { "title": "Income Statements" },
    { "title": "Online Store" },
    { "title": "Purchase Orders" },
    { "title": "Data Import & Export" },
    { "title": "Sales Orders" },
    { "title": "Multi-Company" },
    { "title": "Online Accounting" },
    { "title": "Real Time Reporting" },
    { "title": "Sales Management" },
    { "title": "Financial Accounting" },
    { "title": "Billing & Invoicing" },
    { "title": "Purchase Management" },
    { "title": "Customer tracking" },
    { "title": "Balance Sheet" },
    { "title": "GST Tax Invoice" },
    { "title": "Barcode Generation" },
    { "title": "GST Ready" },
    { "title": "Multi-Branch" },
    { "title": "Payment Management" },
    { "title": "Return Management" },
    { "title": "Transaction History" },
    { "title": "Profit/Loss Statement" },
    { "title": "Customizable invoices" },
    { "title": "Fixed Asset Management" },
    { "title": "QR Codes" },
    { "title": "E-Way Bill Generation" },
    { "title": "Custom Fields" },
    { "title": "Online Invoicing" },
    { "title": "GST" },
    { "title": "Service Tax" },
    { "title": "Billing Management" },
    { "title": "Account Management" },
    { "title": "Purchase Order Management" },
    { "title": "Data Synchronization" },
    { "title": "Print Or Email Invoices" },
    { "title": "Bills of Material" },
    { "title": "GST Compatible" },
    { "title": "Wholesaler Management" },
    { "title": "Customizable Catalogs" },
    { "title": "Multi-Office" },
    { "title": "Customer Account Profiles" },
    { "title": "Native App" },
    { "title": "Sales Order" },
    { "title": "Themes" },
    { "title": "Profit & Loss Statement" },
    { "title": "Real Time Synchronization" },
    { "title": "Due date tracking" },
    { "title": "Credit Notes" },
    { "title": "MRP" },
    { "title": "Accounting Management" },
    { "title": "Custom Account Statements" },
    { "title": "Remote Order Entry" },
    { "title": "Barcodes/Labels" },
    { "title": "Retail Inventory Management" },
    { "title": "GST" },
    { "title": "For Retail" },
    { "title": "Customizable Billing" },
    { "title": "Data Backup Scheduling" },
    { "title": "Transaction Review" },
    { "title": "Barcoding" },
    { "title": "Mobile Sync" },
    { "title": "Customer Journey Mapping" },
    { "title": "Report Export" }
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
