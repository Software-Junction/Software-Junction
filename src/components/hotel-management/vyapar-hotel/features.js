import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Mobile Support" },
    { "title": "Accounts Receivable" },
    { "title": "Invoice" },
    { "title": "Taxation Management" },
    { "title": "Inventory Management" },
    { "title": "Vendor Management" },
    { "title": "Mobile App" },
    { "title": "Balance Sheet" },
    { "title": "Recurring invoice" },
    { "title": "Stock Management" },
    { "title": "Accounting" },
    { "title": "Order Tracking" },
    { "title": "Purchase" },
    { "title": "General Ledger" },
    { "title": "Accounts payable" },
    { "title": "Data Security" },
    { "title": "Barcode Scanning" },
    { "title": "Customer Management" },
    { "title": "Reminders" },
    { "title": "Cash Management" },
    { "title": "Budgeting" },
    { "title": "Purchase Order" },
    { "title": "Billing System" },
    { "title": "Inventory Management & Consumption Tracking" }
];

const moreFeatures = [
  { "title": "Sales Order" },
  { "title": "Manufacturing" },
    { "title": "Sales Management" },
    { "title": "Billing Management" },
    { "title": "Purchase Orders" },
    { "title": "Account Management" },
    { "title": "Billing & Invoicing" },
    { "title": "Transaction management" },
    { "title": "Bills of Material" },
    { "title": "Income Statements" },
    { "title": "Sales Orders" },
    { "title": "Profit & Loss Statement" },
    { "title": "Quotes / Estimates" },
    { "title": "Revenue Management" },
    { "title": "Returns Management" },
    { "title": "Purchase Management" },
    { "title": "Accounting Management" },
    { "title": "Custom Fields" },
    { "title": "Multi-Office" },
    { "title": "Real Time Reporting" },
    { "title": "Customizable Billing" },
    { "title": "Sales History" },
    { "title": "Data Import & Export" },
    { "title": "Customer tracking" },
    { "title": "Service Tax" },
    { "title": "E-Way Bill Generation" },
    { "title": "Online Accounting" },
    { "title": "GST Tax Invoice" },
    { "title": "VAT / CST / GST Reports" },
    { "title": "Fixed Asset Management" },
    { "title": "Online Store" },
    { "title": "GST Ready" },
    { "title": "Item Management" },
    { "title": "Payment Management" },
    { "title": "Multi-Company" },
    { "title": "Profit/Loss Statement" },
    { "title": "Online Billing" },
    { "title": "Barcode Generation" },
    { "title": "Transaction Review" },
    { "title": "Data Backup Scheduling" },
    { "title": "Custom Account Statements" },
    { "title": "Due date tracking" },
    { "title": "Customizable invoices" },
    { "title": "Financial Accounting" },
    { "title": "GST Compatible" },
    { "title": "Online invoicing" },
    { "title": "Real Time Synchronization" },
    { "title": "Purchase Order Management" },
    { "title": "MRP" },
    { "title": "Barcoding" },
    { "title": "Report Export" },
    { "title": "Multi-Branch" },
    { "title": "Currency Management" },
    { "title": "Customer Journey Mapping" },
    { "title": "Themes" },
    { "title": "Wholesaler Management" },
    { "title": "Transaction History" },
    { "title": "Multi-Company" },
    { "title": "Profit/Loss Statement" },
    { "title": "Currency Management" },
    { "title": "Account Management" },
    { "title": "Customer Journey Mapping" },
    { "title": "Themes" },
    { "title": "Wholesaler Management" },
    { "title": "Transaction History" },
    { "title": "Multi-Branch" },
    { "title": "QR Codes" },
    { "title": "For Retail" },
    { "title": "Customizable Catalogs" },
    { "title": "Remote Order Entry" },
    { "title": "Custom Account Statements" },
    { "title": "Data Backup Scheduling" },
    { "title": "Transaction Review" },
    { "title": "Barcodes/Labels" },
    { "title": "Mobile Sync" },
    { "title": "Credit Notes" },
    { "title": "Native App" }
];


const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
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

          {isShowMore && 
          <>
          {moreFeatures.map((featureM, index) => (
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
          }
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
