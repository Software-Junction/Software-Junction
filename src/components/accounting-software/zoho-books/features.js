import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Time Tracking" },
  { "title": "Invoice" },
  { "title": "Customer Management" },
  { "title": "Online document storage (back-up)" },
  { "title": "Inventory Management" },
  { "title": "Recurring invoice" },
  { "title": "Email Integration" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Mobile Support" },
  { "title": "Banking Integration" },
  { "title": "Taxation Management" },
  { "title": "Payment Gateway Integration" },
  { "title": "Product Database" },
  { "title": "Expense Management" },
  { "title": "Online Banking Integration" },
  { "title": "Security" },
  { "title": "Project Management" },
  { "title": "Quotation & Estimates" },
  { "title": "Multi Currency" },
  { "title": "Accounting" },
  { "title": "Barcode Integration" },
  { "title": "Outstanding" },
  { "title": "Multi Location" },
  { "title": "Payroll Management" },
  { "title": "Vendor Management" },
  { "title": "Multi Company" },
  { "title": "Fast Search" },
];

const moreFeatures = [
  { "title": "GST Ready" },
  { "title": "SMS Integration" },
  { "title": "Invoice Designer" },
  { "title": "Data Backup and Restore" },
  { "title": "Data Security & Accuracy" },
  { "title": "Online Accounting" },
  { "title": "Accounts Receivable" },
  { "title": "GST Compliance" },
  { "title": "Multi Currency Support" },
  { "title": "Sales Management" },
  { "title": "Online invoicing" },
  { "title": "Multi-Currency" },
  { "title": "Accounts payable" },
  { "title": "General Ledger" },
  { "title": "Tax Management" },
  { "title": "Payment Processing" },
  { "title": "Monthly GST Report" },
  { "title": "Sales Tracking" },
  { "title": "Purchase Management" },
  { "title": "Project Accounting" },
  { "title": "VAT / CST / GST Reports" },
  { "title": "Accounting Management" },
  { "title": "Refund Management" },
  { "title": "Graphs & Charts" },
  { "title": "GST returns" },
  { "title": "Customizable invoices" },
  { "title": "Dashboard" },
  { "title": "Bank Reconciliation" },
  { "title": "Purchasing" },
  { "title": "Online GST Portal" },
  { "title": "TDS / TCS" },
  { "title": "Multi-currency" },
  { "title": "Project billing" },
  { "title": "Invoicing & Payments" },
  { "title": "Payment Gateway Integration" },
  { "title": "Discount & Schemes" },
  { "title": "e-Payment" },
  { "title": "Print Or Email Invoices" },
  { "title": "GST Tax Invoice" },
  { "title": "Financial Accounting" },
  { "title": "Analytics" },
  { "title": "GST audit report" },
  { "title": "Mobile App" }
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
